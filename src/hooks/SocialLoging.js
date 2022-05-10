

import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../../../src/google.png';
import { useSignInWithGoogle, auth } from 'react-firebase-hooks';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigator('/inventory');
    }




    return (

        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className="bg-primary w-50 "></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '2px' }} className="bg-primary w-50"></div>
            </div>
            <div>
                <Button onClick={() => signInWithGoogle()} className='w-80 ml-5px'>
                    <img src={logo} />

                    Googile SignIn</Button>
            </div>

        </div>
    );
};

export default SocialLogin;