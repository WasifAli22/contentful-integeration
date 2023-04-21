import React from 'react'
import Link from 'next/link';
import { Aboutmissions } from '../../request';
export default async function AboutMission() {
    const abmission = await Aboutmissions()
    console.log(abmission);
    const aboutHeading = abmission.items[0].fields.aboutheading.content[0].content[0].value;
    const missionHeading = abmission.items[0].fields.missionheading.content[0].content[0].value;
    return (
        <>
            <div className="bg-[#F4F0F8] container mx-auto my-8 p-10">
                {abmission.items.map((abmiss: any) => {
                    return (
                        <div className="grid grid-cols-12" key={abmiss.sys.id}>
                            <div className="col-span-12 md:col-span-5 mb-8 md:mb-0">
                                <h3 className='text-[#232536] text-xl font-semibold'>ABOUT US</h3>
                                <h2 className='text-[#232536] md:text-4xl text-3xl font-bold my-2'>{aboutHeading}</h2>
                                <p className=' text-base mb-3 text-[#6D6E76] font-normal
                                 mt-3'>{abmiss.fields.aboutdesc}</p>
                                <Link className='text-[#592EA9] font-bold mt-3' rel="stylesheet" href="/" >Read More </Link>
                            </div>
                            <div className="md:col-span-1"></div>
                            <div className="col-span-12 md:col-span-6 mb-8 md:ml-6 md:mb-0">
                                <h3 className='text-[#232536] text-xl font-semibold'>Our mision</h3>
                                <h2 className='text-[#232536] md:text-4xl text-3xl font-bold my-2'>{missionHeading}</h2>
                                <p className='text-base text-[#6D6E76] mt-3 font-normal'>{abmiss.fields.missiondesc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
