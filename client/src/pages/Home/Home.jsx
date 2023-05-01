import React, { useState } from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';
import SignUpModal from '../../components/SignUpInput/SignUpModal';
import Logo from '../../assets/logo-icon.png';

const Home = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
    };
    const toggleSignUpModal = () => {
        setSignUpModal(!signUpModal);
    };
    return (
        <div className=' flex flex-col mx-auto'>
            {/* Greetings Section <--to--> Not a Member? */}
            <div className='flex flex-col m-8 px-4'>
                <h1
                    className=' py-5 mt-10 text-5xl font-bowlby text-hotpink text-center drop-shadow-lg
        md:text-center
        xl:text-6xl'
                >
                    WELCOME <br className='md:hidden' />
                    TO <br />
                    {/* TASTEBUDS! */}
                </h1>
                {/* LOGO IMAGE */}
                <div>
                    <img
                        src={Logo}
                        alt='logo'
                        class='object-scale-down md:object-scale-down mx-auto h-48 w-96 '
                    />
                </div>
                <p
                    className='  py-5 text-5xl text-hotpink text-center drop-shadow-lg
        md:text-center
        xl:text-4xl'
                >
                    "Where foodies become besties."
                </p>

                {/* Login */}
                <p
                    className='text-center font-bowlby text-apricot drop-shadow-lg text-2xl pt-5 m-2
        xl:text-4xl'
                >
                    Not a member?
                </p>
            </div>
            {/* SignUp and Login */}
            <div className='flex flex-row justify-center  mx-auto items-center gap-2'>
                <div className='hidden md:flex justify-center'>
                    <button
                        onClick={toggleSignUpModal}
                        className='text-2xl py-5 font-manrope text-hotpink bg-orange rounded-lg
                         md:bg-blue md:font-bowlby md:text-hotpink  md:w-[180px]  md:p-2 md:drop-shadow-md
                         md:mt-4 md:mx-auto md:text-base
                         xl:text-2xl'
                    >
                        Sign Up!
                    </button>
                </div>
                <div className='hidden md:flex justify-center'>
                    <button
                        onClick={toggleLoginModal}
                        id='loginButton'
                        className='text-2xl py-5 font-manrope text-hotpink bg-orange rounded-lg
                         md:bg-blue md:font-bowlby md:text-hotpink  md:w-[180px]  md:p-2 md:drop-shadow-md
                         md:mt-4 md:mx-auto md:text-base
                         xl:text-2xl'
                    >
                        Login
                    </button>
                </div>

                <SignUpModal
                    className=''
                    signUpModal={signUpModal}
                    setSignUpModal={setSignUpModal}
                    toggleSignUpModal={toggleSignUpModal}
                />
                <LoginModal
                    className=''
                    loginModal={loginModal}
                    setLoginModal={setLoginModal}
                    toggleLoginModal={toggleLoginModal}
                />
            </div>

            <p
                className='t m-auto font-manrope pt-10 h-46 w-96 right-4 w-full self-end drop-shadow-md
        sm:text-xl
        md:text-center
        xl:text-3xl'
            ></p>
        </div>
    );
};

export default Home;
