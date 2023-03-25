import React, { useRef, useState } from 'react'
import bgVideo from '../../../assets/video.mp4'
import Quizystem from '../../../assets/QLogo1.png'
import DinaraLogo from '../../../assets/DLogo.png'
import { useForm } from "react-hook-form";

export const LoginPage = () => {

  const {register,handleSubmit,formState: { errors }} = useForm();

  const email = useRef(null)
  const passwordRef = useRef(null)

  const onSubmit = (data) => {
    console.log(data,errors)
  };

  return (
    <>
      <video autoPlay loop muted className='object-cover min-w-full w-auto min-h-full fixed -z-20' src={bgVideo}>
      </video>
      <div className='w-full min-h-full fixed -z-10 bg-black opacity-50'>
      </div>

      <div className='w-full min-h-screen flex items-center'>
        <div className='flex flex-col justify-between items-center rounded py-8 px-6 min-w-[400px] max-w-[600px] w-1/4 min-h-[550px] h-4/5 my-2 ml-[8%] bg-white '>

          <div>
            <figure>
              <img onClick={()=> console.log(errors)} src={Quizystem} alt="QuizystemLogo" />
            </figure>

            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-1 w-full' action="">
              <div className=''>
                <label ref={email} htmlFor="email" className='auth-label-placeholder text-lg bg-white relative px-2 left-2'> 
                Email 
                </label>
                {email.current?
                 errors.email ? email.current.classList.add('error-auth-label') : email.current.classList.remove('error-auth-label')
                : undefined
                }
                <input
                  type="text"
                  name="email"
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message:
                        "Invalid email, please type your email again ",
                    },
                  })}
                  onFocus={() => {
                    email.current.classList.remove('auth-label-placeholder')
                    email.current?.classList.add('auth-label-transition')              
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value === '') {
                      email.current?.classList.remove('auth-label-transition')
                      email.current?.classList.add('auth-label-placeholder')
                    }
                  }}
                  className={ errors.email? 
                    'w-full px-3 border-[1px] h-12 rounded-md border-red-600 focus:outline-none focus:border-red-600':
                    'w-full px-3 border-[1px] h-12 rounded-md border-zinc-300 focus:border-primary focus:outline-none'}
                />
                {errors?.email?.type === 'required' ? <div className='pl-1 text-red-600 text-sm font-light'> Required </div> : undefined}
                {errors?.email?.type === 'pattern' ? <div className='text-red-600 text-sm font-light'> {errors.email.message} </div> : undefined}
              </div>


              <div className='flex flex-col'>
                <label
                  ref={passwordRef}
                  htmlFor="password"
                  className="w-min auth-label-placeholder text-lg bg-white relative px-2 left-2"
                >
                  Password
                </label>
                {passwordRef.current?
                 errors.password ? passwordRef.current.classList.add('error-auth-label') : passwordRef.current.classList.remove('error-auth-label')
                : undefined
                }
                <input
                  type="text"
                  name="password"
                  id="password"
                  {...register("password", {
                    required: true,
                    maxLength: 25,
                    minLength: 6,
                  })}
                  onFocus={() => {
                    passwordRef.current.classList.remove('auth-label-placeholder')
                    passwordRef.current.classList.add('auth-label-transition')
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value === '') {
                      passwordRef.current.classList.remove('auth-label-transition')
                      passwordRef.current.classList.add('auth-label-placeholder')
                    }
                  }}                  
                  className={ errors.password? 
                    'w-full px-3 border-[1px] h-12 rounded-md border-red-600 focus:outline-none focus:border-red-600':
                    'w-full px-3 border-[1px] h-12 rounded-md border-zinc-300 focus:border-primary focus:outline-none'}
                />
                {errors?.password?.type === 'required' ? <div className='pl-1 text-red-600 text-sm font-light'> Required </div> : undefined}
                {errors?.password?.type.includes("Length") ? <div className='text-red-600 text-sm font-light'> Min 6 - Max 25 </div> : undefined}
                <span className='self-end text-sm text-primary cursor-pointer'>¿Forgot your password?</span>
              </div>

              <input
                type="submit"
                value="Login"
                className='transition-colors duration-200 ease-linear hover:bg-[#6c799a] bg-primary rounded-md h-10 text-white font-semibold cursor-pointer mt-5'
              />
            </form>
          </div>

          <div className='flex w-full justify-center gap-3'>
            <span className='my-auto text-gray-500'>Powered by</span>
            <img className='w-4/12' src={DinaraLogo} alt="" />
          </div>

          <div className='flex w-full justify-evenly text-sm text-primary cursor-pointer'>
            <span>Terms and conditions</span>
            <span>Privacy policy</span>
          </div>

        </div>
        <h1 className='text-white mx-auto text-6xl font-semibold'>Hey you, Welcome :D!</h1>
      </div>
    </>)
}
