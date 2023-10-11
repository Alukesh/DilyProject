import React from 'react';
import {auth, db, providerGithub} from "../../../../firebase/firebase";
import { signInWithPopup, } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {findUser} from "../../../../redux/reducers/user";
import {addDoc, collection} from "@firebase/firestore";
import {FaGithub} from 'react-icons/fa'


const Github = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userCollectionRef = collection(db,'users');

    const createOrLoginUserGithub = () =>{
        signInWithPopup(auth, providerGithub)
            .then(async (result) => {

                const user = result.user;

                user.orders = [];
                user.gitl = [];
                user.cart = [];
                user.favourites = [];
                user.phone = '';
                console.log(user);
                await addDoc(userCollectionRef, {email: user.email, orders: [], phone: '', cart: [], favourites: [], gitl: [], login: user.displayName, id: user.uid});
                await dispatch(findUser( {user} ));
                await localStorage.setItem('user', JSON.stringify({...user}));
                await navigate('/')
            }).catch((error) => {
            console.log(error)
        });
    };



    return (
        <p className='auth__icon' onClick={createOrLoginUserGithub}><FaGithub/></p>
    );
};

export default Github;