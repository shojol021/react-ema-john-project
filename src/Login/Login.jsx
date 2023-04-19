import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/Auth/AuthProvider';

const Login = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { loginUser } = useContext(AuthContext)

    const handleLogin = (event) => {
        setError('')
        setSuccess('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(userDetails => {
                console.log(userDetails)
                setSuccess("Logged in successfully")
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className='w-25 mx-auto border px-4 py-4 mt-5' >
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p><small>New to Ema-John? Signup<Link to='/signup' className='btn btn-link'>here</Link></small></p>
                    <p><small>Or<Link to='/recovery' className='btn btn-link text-decoration-none'>forgot password?</Link></small></p>
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

export default Login;