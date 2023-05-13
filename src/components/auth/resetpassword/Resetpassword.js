import React, { useEffect, useState } from 'react'
import '../login/styles/Login.scss';
import login from '../../../assets/login/login.webp';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import circle from '../../../assets/login/circle1.png';
import circle1 from '../../../assets/login/circle2.png';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LoginAction, ResetPasswordActions } from '../../../Redux/actions/authactions/Loginactions';
import { toast } from 'react-toastify';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

function Resetpassword() {

    const token = window.location.pathname;


    console.log(token.slice(16, 210), "kalai")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [show, setShow] = useState("");
    const histroy = useNavigate();
    const dispatch = useDispatch();
    const SubmitForm = (data) => {
        const datas = {
            password: data?.password
        }

        console.log(datas, "thala")

        dispatch(ResetPasswordActions(token.slice(16, 200), datas, toast, histroy));
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
                            Reset Password
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit(SubmitForm)}>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Password </Form.Label>
                            <div className="passwordform">

                                <div className='iceshow'>
                                    {show ? <>
                                        <div onClick={() => setShow(!show)}>
                                            <i class="fa-solid fa-eye"></i>
                                        </div>
                                    </> : <>
                                        <div onClick={() => setShow(!show)}>
                                            <i class="fa-solid fa-eye-slash"></i>
                                        </div>
                                    </>}
                                </div>


                                <Form.Control type={show ? "text" : "password"} placeholder="Password" className='formsection'
                                    {...register('password', { required: true })}
                                />
                            </div>
                            <Form.Text className="text-danger mt-3">
                                {errors.Password && <span>Password is required</span>}
                            </Form.Text>
                        </Form.Group>
                        {/* <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <div className="passwordform">

                                <div className='iceshow'>
                                    {show ? <>
                                        <div onClick={() => setShow(!show)}>
                                            <i class="fa-solid fa-eye"></i>
                                        </div>
                                    </> : <>
                                        <div onClick={() => setShow(!show)}>
                                            <i class="fa-solid fa-eye-slash"></i>
                                        </div>
                                    </>}
                                </div>


                                <Form.Control type={show ? "text" : "password"} placeholder="Confirm Password" className='formsection'
                                    {...register('password', { required: true })}
                                />
                            </div>

                            <Form.Text className="text-danger mt-3">
                                {errors.password && <span>Password is required</span>}
                            </Form.Text>
                        </Form.Group> */}
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

export default Resetpassword