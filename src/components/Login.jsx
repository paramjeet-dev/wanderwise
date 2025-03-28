import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (form) => {
    console.log(form)
    reset()
  }

  return (
    <>
      <p className='text-center font-bold text-[36px] mt-12 mb-4 font-serif'>Welcome Back, Traveler</p>
      
      <div className='flex justify-center items-center h-[70vh]'>
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className='flex flex-col gap-4 bg-white p-10 rounded-2xl shadow-lg w-[90%] max-w-md'
        >

          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            type='email'
            autoComplete='current-user'
            className='border border-gray-400 bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none focus:border-black'
          />
          {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

          <div className='relative'>
            <input
              {...register('password', { required: 'Password is required' })}
              placeholder='Enter your password'
              type={showPassword ? 'text' : 'password'}
              className='w-full border border-gray-400 bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none focus:border-black'
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
            {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
          </div>

          <button 
            type='submit' 
            className='border bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition'
          >
            Log In
          </button>

          <span className='text-center text-sm text-gray-700 mt-2'>
            <a href="#" className='text-blue-600 hover:underline'>Forgot Password?</a> | <Link to="/signup" className='text-blue-600 hover:underline'>Create an account</Link>
          </span>

        </form>
      </div>
    </>
  )
}

export default Login
