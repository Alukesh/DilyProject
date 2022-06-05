import React from 'react';
import {auth, provider} from "../../../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {AiFillGoogleCircle} from 'react-icons/ai'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {findUser} from "../../../../redux/reducers/user";


const Google = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const createOrLoginUser = () =>{
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                dispatch(findUser( {user} ));
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/')
            }).catch((error) => {
            console.log(error)
        });
    };


    return (
        <p className='auth__icon' onClick={createOrLoginUser}><AiFillGoogleCircle/> </p>
    );
};

export default Google;