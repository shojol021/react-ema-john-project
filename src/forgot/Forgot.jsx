import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../assets/Auth/AuthProvider';

const Forgot = () => {

    const { resetPassword } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRecovery = e => {
        e.preventDefault()

        const email = e.target.email.value;
    }

    return (
        <div className='w-25 mx-auto border px-4 py-4 mt-5'>
            <h3>Recover your account</h3>
            <Form onSubmit={handleRecovery}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>
                <p className='text-success'>{success}</p>
                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Forgot;