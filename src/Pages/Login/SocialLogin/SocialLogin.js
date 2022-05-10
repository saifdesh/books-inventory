import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../../../src/google.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className="bg-primary w-50 "></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '2px' }} className="bg-primary w-50"></div>
            </div>
            <div>
                <Button className='w-80 ml-5px'>
                    <img src={logo} />

                    Googile SignIn</Button>
            </div>

        </div>
    );
};

export default SocialLogin;