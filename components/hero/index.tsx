import React from 'react'
import Image from 'next/image'
import HeroImage from '../../public/hero.png'
import { getBlogs } from '../../request'
export default async function Hero() {
    const heros = await getBlogs()
    console.log(heros);
    const mainHeading = heros.items[0].fields.mainheading.content[0].content[0].value;
    // console.log(mainHeading);
    return (
        <>

            <div className="relative">
                <Image src={HeroImage} className='h-[400px] w-auto object-cover md:h-auto md:w-full' alt='hero' />
                <div className="absolute top-0 left-0 bg-gradient-to-br w-full h-full from-transparent to-black"
                    style={{ background: 'radial-gradient(30.56% 76.04% at 74.58% 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)' }}>
                    {heros.items.map((blog: any) => {
                        return (
                            <div className="absolute text-white left-3 top-7 md:top-20" key={blog.sys.id}>
                                <h6 className='text-xl'>{blog.fields.heropost}</h6>
                                <h2 className='text-4xl font-bold mt-1 mb-4 w-full md:w-2/3'>{mainHeading}</h2>
                                <small className=''><span className='text-[#FFD050]'> {blog.fields.heroauth}</span></small>
                                <p className='md:w-1/2 w-full mt-4'>{blog.fields.herodesc}</p>
                                <button className="dark:bg-gray-100 mt-5 bg-[#FFD050] dark:text-gray-800 text-[#232536] py-2 px-6 font-normal text-xl dark:border-transparent">Read more</button>
                            </div>

                        )
                    })}
                </div>
            </div>

        </>
    )
}
