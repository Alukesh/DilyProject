import React from 'react';
import {auth, db, providerGithub} from "../../../../firebase/firebase";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
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
                .then((result) => {
                    const user = result.user;
                    dispatch(findUser( {user} ));
                    localStorage.setItem('user', JSON.stringify({...user}));
                    navigate('/')
                }).catch((error) => {
                console.log(error)
            });
    };


    return (
        <p className='auth__icon' onClick={createOrLoginUserGithub}><FaGithub/></p>
    );
};

export default Github;