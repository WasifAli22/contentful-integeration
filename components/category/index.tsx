import React from 'react'
import Image from 'next/image'
import { Category } from '../../request'
import { global } from 'styled-jsx/css'
export default async function Categorysect() {
    const categories = await Category()
    console.log(categories);
    return (
        <>
            <div className="my-8 container mx-auto">
                <h2 className='text-[#232536] font-bold text-center my-10 text-4xl'>Choose A Catagory</h2>

                <div className="grid grid-cols-12">
                    {categories.items.map((categori: any) => {
                        return (
                            <div className="lg:col-span-4 md:col-span-6 ml-5 mb-4 md:mb-0 col-span-12" key={categori.sys.id}>
                                <div className="border border-[#c1c2c5] box-border box-cust p-6 transition-all hover:bg-[#FFD050] hover:cursor-pointer">
                                    {categories.includes.Asset.map((elems: any) => {
                                        return (
                                            <div key={categori.fields.catimg.sys.id}>
                                                {categori.fields.catimg.sys.id == elems.sys.id ?
                                                    <Image src={"https:" + elems.fields.file.url} alt="" height={40} width={40} className="object-cover object-center img-white" /> : <div></div>}
                                            </div>
                                        )
                                    })}
                                    <h3 className='text-[#232536] font-bold text-2xl'>{categori.fields.catheading.content[0].content[0].value}</h3>
                                    <p className='text-[#6D6E76] text-base font-medium'>{categori.fields.catdesc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
