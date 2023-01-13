import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMail,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {

    const [nav,setNav]= useState(false);
    const handleNav = () =>{
        setNav(!nav);
    }
  return (
    <div className='fixed w-full h-20  shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-7 2xl:px-16'>
            <h1 className='text-4xl cursor-pointer pl-0'>Portfolio</h1>
            <div>
                <ul className='hidden md:flex '>
                    {/* <Link href='/' className='invisible ml-10 text-md font-bold uppercase'>
                        Home
                    </Link> */}
                    <Link href='/'>
                        <li className='font-bold ml-10 text-md uppercase hover:scale-125 hover:bg-gray-700 hover:text-white'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='font-bold ml-10 text-md uppercase'>About</li>
                    </Link>
                    <Link href='/'>
                        <li className='font-bold ml-10 text-md uppercase'>Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className='font-bold ml-10 text-md uppercase'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='font-bold ml-10 text-md uppercase'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/> 
                </div>
            </div>
        </div>
        <div className={nav?'fixed left-0 top-0 w-full h-screen bg-black/70':''}>
            <div className={nav?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-10 px-6 ease-in duration-500':'hidden'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <h1 className='text-4xl'>Portfolio</h1>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose size={15}/>    
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[100%] md:w-[90%] py-2'>Let's build something legendary</p>
                    </div>
                </div>
                <div>
                    <ul className='uppercase font-bold'>
                        <Link href=''>
                            <li className='py-4 text-md'>Home</li>
                        </Link>
                        <Link href=''>
                            <li className='py-4 text-md'>About</li>
                        </Link>
                        <Link href=''>
                            <li className='py-4 text-md'>Skills</li>
                        </Link>
                        <Link href=''>
                            <li className='py-4 text-md'>Projects</li>
                        </Link>
                        <Link href=''>
                            <li className='py-4 text-md'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-[40%]'>
                        <p className='uppercase tracking widest text-[#5651e5]'>Let's connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <Link href='https://www.linkedin.com/in/japneetrajput/' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn size={18}/>
                            </Link>
                            <Link href='https://github.com/JapneetRajput' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub size={18}/>
                            </Link>
                            <Link href='mailto:japneetrajput2804@gmail.com' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail size={18}/>
                            </Link>
                            <Link href='tel:+918104235686' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill size={18}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar