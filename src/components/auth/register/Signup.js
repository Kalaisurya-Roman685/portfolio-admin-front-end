import React, { useState } from 'react'
import '../login/styles/Login.scss';
import login from '../../../assets/login/login.webp';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import circle from '../../../assets/login/circle1.png';
import circle1 from '../../../assets/login/circle2.png';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SignupAction } from '../../../Redux/actions/authactions/Loginactions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [show, setShow] = useState("");

    const history = useNavigate();

    const dispach = useDispatch();


    const SubmitForm = (data) => {
    
        const datas = {
            email: data?.email,
            password: data?.password,
            image: "dummy",
            username: data?.username
        }
        dispach(SignupAction(datas, toast, history))

    }
    return (
        <div className='loginmain'>
            <div className='inside-login'>
                <div className='left-images'>
                    <div>
                        <img src={circle} alt="no image" className='circle' />
                    </div>
                    <div>
                        <img src={circle1} alt="no image" className='circle1' />
                    </div>
                    <div className='mb-5 '>
                        <div className='Login-text'>
                            Signup
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit(SubmitForm)}>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" className='formsection'
                                {...register('username', { required: true })}
                            />
                            <Form.Text className="text-danger mt-3">
                                {errors.username && <span>User Name is required</span>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className='formsection'
                                {...register('email', { required: true })}
                            />
                            <Form.Text className="text-danger mt-3">
                                {errors.email && <span>Email is required</span>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
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
                                {errors.password && <span>password is required</span>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" placeholder="image" className='formsection'
                                {...register('file', { required: true })}
                            />
                            <Form.Text className="text-danger mt-3">
                                {errors.file && <span>file is required</span>}
                            </Form.Text>
                        </Form.Group>
                        <button className='loginbutton mt-4'>
                            Signup
                        </button>
                    </Form>
                </div>
                <div className='right-content'>
                    <img src={login} alt="no image" />

                </div>
            </div>
        </div>
    )
}

export default Signup