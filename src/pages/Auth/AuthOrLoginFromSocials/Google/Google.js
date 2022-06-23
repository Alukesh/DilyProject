import React from 'react';
import {auth, db, provider} from "../../../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {AiFillGoogleCircle} from 'react-icons/ai'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {findUser} from "../../../../redux/reducers/user";
import {addDoc, collection} from "@firebase/firestore";


const Google = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userCollectionRef = collection(db,'users');

    const createOrLoginUser = () =>{
        signInWithPopup(auth, provider)
            .then(async (result) => {

                const user = result.user;

                user.orders = [];
                user.gitl = [];
                // user.fa
                user.cart = [];
                user.favourites = [];
                user.phone = '';
                console.log(user);
                await addDoc(userCollectionRef, {email: user.email, orders: [], phone: '', cart: [], favourites: [], gitl: [], login: user.displayName, id: user.uid});
                await dispatch(findUser( {user} ));
                await localStorage.setItem('user', JSON.stringify(user));
                await navigate('/')
            }).catch((error) => {
            console.log(error)
        });
    };


    return (
        <p className='auth__icon' onClick={createOrLoginUser}><AiFillGoogleCircle/> </p>
    );
};

export default Google;