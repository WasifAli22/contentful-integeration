import React from 'react'
import Image from 'next/image'
import groupImage from '../../public/group-men.png'
import { Start } from '../../request'
export default async function Started() {
    const starts = await Start()
    console.log(starts);
    return (
        <>
            <div className="relative my-8 container mx-auto">
                <Image src={groupImage} alt='group-image' />
                <div className="grid grid-cols-12">
                    <div className="md:col-span-5 col-span-12"></div>
                    <div className="md:col-span-7 col-span-12">
                        {starts.items.map((i: any) => {
                            return (
                                <div className=" bg-white p-8 md:mt-[-500px]" key={i.sys.id}>
                                    <h5 className='text-[#232536] text-base font-semibold'>{i.fields.starttitle}</h5>
                                    <h2 className='text-[#232536] text-4xl font-bold my-5'>{i.fields.startheading.content[0].content[0].value}</h2>
                                    <p className='text-[#6D6E76] text-base font-normal'>{i.fields.startdesc}</p>
                                    <button className='px-5 mt-3 py-3 bg-[#FFD050] text-black font-medium'>Discover our story </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
