import React, { useState, useRef } from 'react';
import styled from "styled-components";
import Label from "../components/Forms/Label";
import FormButton from "../components/Buttons/FormButton";
import Link from "next/link";
import {useForm} from "react-hook-form"
import { useRouter } from 'next/router';
import {toast} from 'react-toastify';



const Form = styled.form`
padding: 24px;
width:500px;
max-width: 500px;

h1 {
    text-align:center;
    color: var(--gray-900);
    font-weight: var(--font-weight-semibold);
    font-color: var(--font-size-display-sm);
}

p {
    text-align:center;
    color: var(--gray-500);
    font-size: var(--font-size-text-md);
    font-weight: var(--font-weight-regular);
}

span {
    text-align:center;
    font-size: var(--font-size-text-sm);
    font-weight: var(--font-weight-regular);

    a {
        color:var(--primary-700);
        font-weight:var(--font-weight-semibold);

        &:hover {
            color: var(--primary-800);
        }
    }
}

@media only screen and (max-width: 768px) {
    div {
        flex-direction:column;
        width:100% !important;
        gap:20px;
    }
  }
  
`

const Error = styled.h6`
color: #F04438;
font-size: 14px;
margin-top:6px;
font-weight:400;

`

export default function Signup() {
    const [spinner, setSpinner] = useState('Sign up');
    // const [emailMessage, setEmailMessage] = useState('');
    const router = useRouter();

    const { register, watch, handleSubmit, setError, formState: {errors} } = useForm({
        mode: "onBlur", 
    });
    const password = useRef({});
    password.current = watch("password", "");

    const notifyerror = () => toast.error("Wrong Email/Password", {
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        duration: "5000",
    });

    const handleSignup = async (data, event) => {
        event.preventDefault();
        setSpinner(<span className='loader'></span>);
        const firstname = data.firstName
        const lastname = data.lastName
        const email = data.email;
        const password = data.password;

        try {
            const res = await fetch('/api/user/signup', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({firstname, lastname, email, password}),
            });

            if (res.ok) {
                router.push('/');
                setSpinner('Sign up')
            } else {
                console.error("Sign Up failed")
                // notifyerror();
                setSpinner('Sign up')
            }
            if (res.status === 401) {
                setError('email', {
                    type: "server",
                    message: "Email is already in use"
                });                
            }
            const data = await res.json();
            console.log(data)

        } catch (e) {
            console.error(e);
        }


    }

    return(
        <div className="flex justify-center align-center vh-100">
            <Form 
            className="flex column g-20"
            onSubmit={handleSubmit(handleSignup)}
            >
                <div className="flex column g-12 mb-20">
                    <h1>Create your acount</h1>
                    <p>Hello! Please enter your details.</p>
                </div>
                <div className="flex space-between">
                    <div
                    style={{ width: "48%" }}
                    >
                        <Label 
                        for="Firstname" 
                        name="First name"
                        />
                        <input 
                        className={errors.firstName ? "input-error" : ""}
                        type="text" 
                        placeholder="John" 
                        id="firstname"
                        {...register("firstName", {
                            required: {
                                value: true,
                                message: "Your first name is required"
                            },
                            maxLength: {
                                value:20,
                                message: "Your first name contains more than 20 characters. Change it"
                            },
                            minLength: {
                                value:2,
                                message: "Your first name must be at least 2 characters long"
                            }                       
                        })} 
                        aria-invalid={errors.firstName ? "true" : "false"} 
                        />
                        {errors.firstName && <Error>{errors.firstName.message}</Error>}

                    </div>
                    <div
                    style={{ width: "48%" }}
                    >
                        <Label 
                        for="Lastname" 
                        name="Last name"/>
                        <input 
                        className={errors.lastName ? "input-error" : ""}
                        type="text" 
                        name="lastname" 
                        placeholder="Doe" 
                        id="lastname"
                        {...register("lastName", {
                            required: {
                                value: true,
                                message: "Your last name is required"
                            },
                            maxLength: {
                                value:20,
                                message: "Your last name contains more than 20 characters. Change it"
                            },
                            minLength: {
                                value:2,
                                message: "Your last name must be at least 2 characters long"
                            }                       
                        })} 
                        />
                        {errors.lastName && <Error>{errors.lastName.message}</Error>}
                    </div>
                </div>
                <div>
                    <Label name="Email" />
                    <input 
                    className={errors.email ? "input-error" : ""}
                    type="email" 
                    placeholder="Enter your email"
                    id="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Your email address is required"
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Your email address is invalid"
                        }
                    })}
                    />
                    {errors.email && <Error>{errors.email.message}</Error>}

                </div>
                <div className="flex space-between">
                    <div style={{ width: "48%" }}>
                        <Label name="Password" />
                        <input 
                        type="password" 
                        placeholder="Enter your password" 
                        id="password"
                        {...register("password", {
                            required: {
                            value:true,
                            message: "Your must specify a password"
                            },
                            minLength: {
                            value: 8,
                            message: "Your password must contain at least 8 characters"
                            }
                        })}
                        />
                        {errors.password && <Error>{errors.password.message}</Error>}
                    </div>
                    <div style={{ width: "48%" }}>
                        <Label name="Repeat password" />
                        <input 
                        type="password"
                        placeholder="Repeat your password" 
                        id="repeatPassword"
                        {...register("repeatPassword", {
                            required: {
                            value: true,
                            message: "Please confirm your password"
                            },
                            validate: (value) => value === password.current || "The passwords do not match"
                        })}
                        />
                        {errors.repeatPassword && <Error>{errors.repeatPassword.message}</Error>}
                    </div>
                </div>

                <FormButton type="submit" title={spinner}/>
                <span>Already have an account? <Link href="/login">Log in</Link></span>
            </Form>

        </div>
    )
}