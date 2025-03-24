import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (form) => {
    console.log(form)
    reset()
  }

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <>
      <p className='text-center font-bold text-[30px] mt-12 mb-4 font-serif'>Join WanderWise – Plan Smarter, Travel Better!</p>
      
      <div className='flex justify-center items-center h-[70vh]'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-4 bg-white p-10 rounded-2xl shadow-lg w-[90%] max-w-md'
        >

          {/* Full Name */}
          <input
            {...register('name', { required: 'Full Name is required' })}
            placeholder='Enter your full name'
            className='border border-gray-400 bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none focus:border-black'
          />
          {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}

          {/* Email */}
          <input
            {...register('email', { required: 'Email is required' })}
            placeholder='Enter your email'
            type='email'
            className='border border-gray-400 bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none focus:border-black'
          />
          {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

          {/* Password */}
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

          {/* Confirm Password */}
          <div className='relative'>
            <input
              {...register('confirmPassword', {
                required: 'Confirm your password',
                validate: (value) =>
                  value === watch('password') || 'Passwords do not match',
              })}
              placeholder='Confirm your password'
              type={showConfirmPassword ? 'text' : 'password'}
              className='w-full border border-gray-400 bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none focus:border-black'
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
            {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='border bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition'
          >
            Sign Up
          </button>

        </form>
      </div>
    </>
  )
}

export default Signup
