import React, { useState, useRef } from 'react';
import styled from "styled-components";
import Label from "../components/Forms/Label";
import FormButton from "../components/Buttons/FormButton";
import Link from "next/link";
import {useForm} from "react-hook-form"
import { useRouter } from 'next/router';
import {toast} from 'react-toastify';
import Head from 'next/head';

export default function Login() {
    const [spinner, setSpinner] = useState('Log in');
    const router = useRouter();


    const { register, watch, handleSubmit, formState: {errors} } = useForm({
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

    const handleLogin = async (data, event) => {
        event.preventDefault();
        const email = data.email;
        const password = data.password;
        setSpinner(<span className='loader'></span>);

        try {
            const res = await fetch('/api/user/login', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password}),
            });

            if (res.ok) {
                // setLoggedIn(true);
                router.push('/');
            } else {
                notifyerror();
                setSpinner('Log in')
                console.error("Login failed");
            }

            const data = await res.json();
            console.log(data)

        } catch (e) {
            notifyerror();
            setSpinner('Log in')
            console.error(e);
        }
    }
    return (
        <>
        <Head>
            <title>Static Studio - Влез</title>
        </Head>
        <div className="flex justify-center align-center vh-100">
        <Form 
        className="flex column g-20"
        onSubmit={handleSubmit(handleLogin)}
        >
            <div className="flex column g-12 mb-20">
                <h1>Good to see you back!</h1>
                <p>Come on! Enter your details to proceed.</p>
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
            <div>
                    <Label name="Password" />
                    <input 
                    type="password" 
                    placeholder="Enter your password" 
                    id="password"
                    className={errors.password ? "input-error" : ""}

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

            <FormButton type="submit" title={spinner}/>
            <span>Already have an account? <Link href="/signup">Sign up</Link></span>
        </Form>

        </div>
        </>
    )
}

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