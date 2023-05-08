
import '../../login/styles/Login.scss';
import React, { useEffect, useState } from 'react'

import login from '../../../../assets/login/login.webp';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import circle from '../../../../assets/login/circle1.png';
import circle1 from '../../../../assets/login/circle2.png';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { ForgetpasswordActions } from '../../../../Redux/actions/authactions/Loginactions';
function Forgetpassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispach = useDispatch();
    const [show, setShow] = useState("");
    const histroy = useNavigate();
    const SubmitForm = (data) => {
        const datas = {
            email: data?.email
        }

        dispach(ForgetpasswordActions(datas, toast));
    }
    return (
        <div className='loginmain'>
            <div className='inside-login'>
                <div className='circle2'>

                </div>

                <div className='left-images'>
                    <div>
                        <img src={circle} alt="no image" className='circle' />
                    </div>
                    <div>
                        <img src={circle1} alt="no image" className='circle1' />
                    </div>
                    <div className='mb-5 '>
                        <div className='Login-text'>
                            Forget Password
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit(SubmitForm)}>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className='formsection'
                                {...register('email', { required: true })}
                            />
                            <Form.Text className="text-danger mt-3">
                                {errors.email && <span>Email is required</span>}
                            </Form.Text>
                        </Form.Group>
                        <button className='loginbutton mt-4'>
                            Reset Password
                        </button>
                    </Form>
                </div>
                <div className='right-content'>
                    <img src={login} alt="no image" />
                    <div className='circle3'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgetpassword