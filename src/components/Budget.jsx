import React from 'react'
import { useForm } from 'react-hook-form'

const Budget = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (form) => {
        console.log(form)
    }

    return (
        <div className='min-h-screen bg-gray-100 px-8 py-6 font-sans'>

            <nav className='flex justify-between items-center bg-white shadow-md p-4 rounded-lg'>
                <span className='text-2xl font-bold text-gray-900'>WanderWise</span>
                <ul className='flex gap-6 text-gray-700 font-medium'>
                    <li><button className='hover:text-blue-600 transition'>Home</button></li>
                    <li><button className='hover:text-blue-600 transition'>Trip Overview</button></li>
                    <li><button className='hover:text-red-600 transition'>Log Out</button></li>
                </ul>
            </nav>

            <div className='grid grid-cols-2 mt-12 gap-8'>
                <div className='text-center my-8'>
                    <h1 className='text-3xl font-bold text-gray-900'>Trip Budget Overview</h1>
                    {/* Graph section to be populated with backend data */}
                    <div className='w-full max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-4'>
                        <h2 className='text-xl font-semibold text-gray-900'>Expense Breakdown</h2>
                        <div className='h-64 flex justify-center items-center text-gray-500'>
                            Graph will be displayed here
                        </div>
                    </div>
                </div>

                <div className='max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg'>
                    <h2 className='text-xl font-semibold mb-4 text-gray-900'>Add Expenses</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>

                        <input
                            {...register("amount", { required: "Amount is required" })}
                            type="number"
                            placeholder="Enter the expense"
                            className='border border-gray-400 bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none focus:border-black'
                        />
                        {errors.amount && <span className='text-red-500 text-sm'>{errors.amount.message}</span>}

                        <div className='grid grid-cols-2 gap-4'>
                            {[
                                { name: "Flight", value: "flight", img: "https://via.placeholder.com/100" },
                                { name: "Accommodation", value: "accommodation", img: "https://via.placeholder.com/100" },
                                { name: "Food & Drinks", value: "food", img: "https://via.placeholder.com/100" },
                                { name: "Activities", value: "activities", img: "https://via.placeholder.com/100" }
                            ].map((category) => (
                                <label key={category.value} className='cursor-pointer bg-gray-100 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md'>
                                    <input
                                        type="radio"
                                        {...register("category", { required: "Category is required" })}
                                        value={category.value}
                                        className='hidden'
                                    />
                                    <img src={category.img} alt={category.name} className='w-16 h-16 object-cover mb-2 rounded-full' />
                                    <span className='text-gray-900 font-medium'>{category.name}</span>
                                </label>
                            ))}
                        </div>
                        {errors.category && <span className='text-red-500 text-sm'>{errors.category.message}</span>}

                        <button
                            type='submit'
                            className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition'
                        >
                            Add Expense
                        </button>
                    </form>
                </div>
            </div>

            <div className='text-center mt-10'>
                <h2 className='text-xl font-semibold text-gray-900'>Recent Expenses</h2>
            </div>
        </div>
    )
}

export default Budget
