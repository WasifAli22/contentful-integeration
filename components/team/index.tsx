import React from 'react'

export default function Teams() {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-4"></div>
                    <div className="col-span-12 md:col-span-4 text-center">

                        <div className="my-24 text-center">
                            <h2 className='text-[#232536] font-bold text-4xl'>Join our team to be a part of our story</h2>
                            <p className='text-[#6D6E76] text-base text-center my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='bg-[#FFD050] text-[#232536] font-semibold text-base py-4 px-8'>Join Now</button>
                        </div>
                        <div className="col-span-4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
