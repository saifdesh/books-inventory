import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Registration.css';

const Registration = () => {
    return (
        <div className='form-container'>
            <div >
                <h4 className='form-title'>Registration please ..</h4>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control className='input-group' type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control className='input-group' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Confirm Password</Form.Label> */}
                        <Form.Control className='input-group' type="password" placeholder="Confirm Password" required />
                    </Form.Group>


                    <Button className='form-submit' variant="primary" type="Signup">
                        Registration
                    </Button>
                </Form>
                Already Have an account?  <Link className='form-link' to='/login'>Plz Login</Link>





            </div>



        </div>
    );
};

export default Registration;