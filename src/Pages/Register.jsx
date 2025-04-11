import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'

const Register = () => {
    return (
        <>
            <Formik initialValues={{ uname: '', Password: '', cpassword: '', email: '' }}
                validationSchema={Yup.object({

                    uname: Yup.string()
                        .required("Username is Required ")
                        .matches(/^[a-zA-Z0-9]+$/, 'Invalid Username ')
                        .min(3, "Username must be of 3 Characters")
                        .max(30, "Username cannot be more than 30 Characters"),

                    Email: Yup.string()
                        .email("Invalid Email")
                        .required("Email is Required"),

                    Password: Yup.string()
                        .required("Password is Required")
                        .matches(/^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/, 'Weak Password'),

                    cpassword: Yup.string()
                        .required("Password is Required")
                        .oneOf([Yup.ref('Password')], 'Password do not matches')


                })}>
                <div className="container my-5">
                    <div className="col-md-5 shadow p-4 rounded-3 m-auto bg-success-subtle">
                        <Form>
                            <h2 className="text-center"> Register For Free !</h2>
                            <hr />

                            <div className="form-group mb-2">
                                <label htmlFor="uname">Username</label>
                                <Field type='text' id='uname' name='uname' className='form-control' />
                                <ErrorMessage name="uname">
                                    {
                                        msg => <span className="text-danger">{msg}</span>
                                    }
                                </ErrorMessage>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="Password">Password</label>
                                <Field type='password' id='Password' name='Password' className='form-control' />
                                <ErrorMessage name="Password">
                                    {
                                        msg => <span className="text-danger">{msg}</span>
                                    }
                                </ErrorMessage>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <Field type='password' id='cpassword' name='cpassword' className='form-control' />
                                <ErrorMessage name="cpassword">
                                    {
                                        msg => <span className="text-danger">{msg}</span>
                                    }
                                </ErrorMessage>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="Email">Email</label>
                                <Field type='email' id='Email' name='Email' className='form-control' />
                                <ErrorMessage name="Email">
                                    {
                                        msg => <span className="text-danger">{msg}</span>
                                    }
                                </ErrorMessage>
                            </div>

                            <input type="submit" value="Register" className="btn btn-primary w-100 my-3" />
                        </Form>
                    </div>
                </div>
            </Formik>
        </>
    )
}

export default Register