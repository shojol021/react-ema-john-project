import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const Signup = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const {
            createUser,
            setUserName,
            emailVerify
        } = useContext(AuthContext)

    const handleSignup = (event) => {
        setError('')
        setSuccess('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setUserName(name)

        if (confirm !== password) {
            setError("Password doesn't match")
            return
        }
        if (password.length < 6) {
            setError('At least 6 digit')
            return
        }
        if (!(/^(?=.*[a-zA-Z]).+$/.test(password))) {
            setError('At least 1 character')
            return
        }
        if (!(/^(?=.*\d).+$/.test(password))) {
            setError('At least 1 number')
            return
        }

        form.reset();

        createUser(email, password)
            .then(userDetails => {
                emailVerify(userDetails)
                    .then(() => {
                        setSuccess(`A varification mail sent to ${email}`)
                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    return (
        <div className='w-25 mx-auto border px-4 py-4 mt-5' >
            <h2>Please sign up</h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name address</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Re-type Password</Form.Label>
                    <Form.Control type="password" name='confirm' required placeholder="Confirm password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p><small>Already have an account? Login <Link to='/login' className='btn btn-link'>here</Link></small></p>
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

export default Signup;