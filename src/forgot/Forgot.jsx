import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../assets/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {

    const navigate = useNavigate()

    const { resetPassword } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [sent, setSent] = useState(false)

    const handleRecovery = e => {
        setError('')
        setSuccess('')
        e.preventDefault()

        const email = e.target.email.value;
        console.log(email)

        resetPassword(email)
            .then(() => {
                setSuccess(`A verification mail is sent to ${email}`)
                setSent(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const goToLogin = () => {
        navigate('/login')
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
                {!sent ? <Button variant="primary" type="submit">
                    Submit
                </Button> :
                    <Button onClick={goToLogin} variant="primary" type="submit">
                        Login Now
                    </Button>}
            </Form>
        </div>
    );
};

export default Forgot;