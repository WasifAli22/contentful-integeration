import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'
export default function Footer() {
    return (
        <>
            <div className="md:p-10 p-5 bg-[#232536] text-white">
                <div className="flex flex-col md:flex-row justify-between">
                    <Link href="/" className='text-3xl font-bold' > Wasif</Link>
                    <div className="flex gap-4 md:mt-0 mt-3">
                        <Link href="/" > Home</Link>
                        <Link target='_blank' href="https://portfoliowebsites-git-main-wasifali22.vercel.app" > About us</Link>
                        <Link href="/contact-us" > Contact us</Link>
                    </div>
                </div>
                <div className="bg-[#7c707063] md:p-10 p-5 my-10">
                    <div className="flex justify-between flex-col md:flex-row items-center">
                        <h2 className='md:text-4xl text-3xl text-white tracking-tight md:mb-0 mb-3'>Subscribe to our news letter to get latest updates and news</h2>
                        <div className="flex flex-col md:flex-row">
                            <input type="text" placeholder='Enter Your Email' className='border h-[45px] w-full md:w-[300px] py-3 mr-5 pl-3 border-[#232536] bg-transparent text-[#232536] my-4 md:my-0' />
                            <button className='bg-[#FFD050] text-[#232536] h-[45px] w-full md:w-[unset] font-semibold text-base px-8'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <p className='text-base opacity-[0.7]'>wasifaliwasif22@gamil.com</p>
                        <p className='text-base opacity-[0.7]'>+923470439922</p>
                    </div>
                    <div className="flex gap-3 justify-center opacity-[0.7]">
                        <Link href="https://www.facebook.com/profile.php?id=100080079952424" target='_blank' >
                            <FaFacebook />
                        </Link>
                        <Link href="" target='_blank' >
                            <FaTwitter />
                        </Link>
                        <Link href="https://instagram.com/wasifaliwasif22?igshid=ZDdkNTZiNTM=" target='_blank' >
                            <FaInstagram />
                        </Link>
                        <Link href="" target='_blank' >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
