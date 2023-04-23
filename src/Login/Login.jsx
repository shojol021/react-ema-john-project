import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../assets/Auth/AuthProvider';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const Login = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false)
    const { loginUser, setUser, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location?.state?.from?.pathname || '/'

    let passwordType;
    show? passwordType = 'text': passwordType = 'password';

    const handleLogin = (event) => {
        setError('')
        setSuccess('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(userDetails => {
                if(!userDetails.user.emailVerified){
                    setError('Please verify your email first')
                    return
                }
                setUser(userDetails)
                setSuccess("Logged in successfully")
                form.reset()
                setLoading(false)
                navigate(from)

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
                    <Form.Control type={passwordType} name='password' required placeholder="Password" />
                </Form.Group>
                <p onClick={() => {setShow(!show)}} className='btn btn-link'><small>{show? 'Hide password': 'Show password'}</small></p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p><small>New to Ema-John? Signup<Link to='/signup' className='btn btn-link'>here</Link></small></p>
                    <p><small>Or, login with
                        <span className='fs-4 ms-3 me-3 text-success'>< FaGoogle /></span>
                        <span className='fs-4 me-3 text-primary'>< FaFacebook /></span>
                        <span className='fs-4 text-info'>< FaTwitter /></span>
                    </small></p>
                    <p><small><Link to='/recovery' className='btn btn-link text-decoration-none'>Forgot password?</Link></small></p>
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