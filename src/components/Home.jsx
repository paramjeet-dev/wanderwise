import React from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <nav className='flex justify-between mx-9 pt-5'>
        <h1 className='font-medium text-[26px]'>WanderWise</h1>
        <ul className='flex gap-4'>
          <li><button type="submit" className='border bg-black text-white px-5 py-1 rounded-lg'>Sign Up</button></li>
          <li><button type="submit" className='border bg-black text-white px-5 py-1 rounded-lg'>Log In</button></li>
        </ul>
      </nav>

      <div className='relative mx-auto w-[90%] max-w-[1200px] h-[60vh] rounded-md mt-6'>
        <p className='absolute top-[10%] left-[20px] font-medium font-serif text-[34px] text-center w-full text-black'>
          Discover personalized travel suggestions
        </p>
        <img 
          src="https://tse4.mm.bing.net/th?id=OIP.UbGsNdm-2ylCa9XwA_QslgHaE8&pid=Api&P=0&h=220" 
          className='w-full h-full mx-auto rounded-lg object-cover'
          alt="Travel destination"
        />
        <div className='relative bottom-8 w-4/5 mx-auto bg-gray-600 text-white py-6 text-center rounded-lg'>
          <ul className='flex justify-center gap-8'>
            <li className='border-r-2 border-white pr-4'>Plan Seamlessly</li>
            <li className='border-r-2 border-white pr-4'>Stay on Budget</li>
            <li className='border-r-2 border-white pr-4'>Book hotels</li>
            <li><FaMapMarkedAlt /></li>
          </ul>
        </div>
        <p className='font-bold text-[22px] mt-8 mb-6'>Popular Destinations</p>
        
        {/* Container for horizontal scrolling */}
        <div className='flex gap-5 overflow-x-auto max-w-full'>
          <div className='cards flex flex-col w-1/4 border rounded-lg'>
            <img src="https://tse1.mm.bing.net/th?id=OIP.VqtXBGgLZXTBs8ClJkPYtQHaE8&pid=Api&P=0&h=220" className='rounded-lg h-[200px]' alt="Paris"/>
            <span className='font-bold text-[18px]'>Paris</span>
            <span className='font-bold text-[14px]'>Price Starts from Rs.4999</span>
          </div>
          <div className='cards flex flex-col w-1/4 border rounded-lg'>
            <img src="https://tse1.mm.bing.net/th?id=OIP.VqtXBGgLZXTBs8ClJkPYtQHaE8&pid=Api&P=0&h=220" className='rounded-lg h-[200px]' alt="Paris"/>
            <span className='font-bold text-[18px]'>Paris</span>
            <span className='font-bold text-[14px]'>Price Starts from Rs.4999</span>
          </div>
          <div className='cards flex flex-col w-1/4 border rounded-lg'>
            <img src="https://tse1.mm.bing.net/th?id=OIP.VqtXBGgLZXTBs8ClJkPYtQHaE8&pid=Api&P=0&h=220" className='rounded-lg h-[200px]' alt="Paris"/>
            <span className='font-bold text-[18px]'>Paris</span>
            <span className='font-bold text-[14px]'>Price Starts from Rs.4999</span>
          </div>
          <div className='cards flex flex-col w-1/4 border rounded-lg'>
            <img src="https://tse1.mm.bing.net/th?id=OIP.VqtXBGgLZXTBs8ClJkPYtQHaE8&pid=Api&P=0&h=220" className='rounded-lg h-[200px]' alt="Paris"/>
            <span className='font-bold text-[18px]'>Paris</span>
            <span className='font-bold text-[14px]'>Price Starts from Rs.4999</span>
          </div>
          
          {/* Additional cards hidden off-screen, but can be scrolled into view */}
          <div className='cards flex flex-col w-1/4 border rounded-lg'>
            <img src="https://tse1.mm.bing.net/th?id=OIP.VqtXBGgLZXTBs8ClJkPYtQHaE8&pid=Api&P=0&h=220" className='rounded-lg h-[200px]' alt="Paris"/>
            <span className='font-bold text-[18px]'>Paris</span>
            <span className='font-bold text-[14px]'>Price Starts from Rs.4999</span>
          </div>
          <div className='cards flex flex-col w-1/4 border rounded-lg'>
            <img src="https://tse1.mm.bing.net/th?id=OIP.VqtXBGgLZXTBs8ClJkPYtQHaE8&pid=Api&P=0&h=220" className='rounded-lg h-[200px]' alt="Paris"/>
            <span className='font-bold text-[18px]'>Paris</span>
            <span className='font-bold text-[14px]'>Price Starts from Rs.4999</span>
          </div>
          
        </div>
        
        <div>
          Footer
        </div>
      </div>
    </>
  );
};

export default Home;
