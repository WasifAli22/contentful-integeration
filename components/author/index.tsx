import React from 'react'
import Image from 'next/image';
import { Auth } from '../../request'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
export default async function Author() {
    const auth = await Auth()
    console.log(auth);

    return (
        <>
            <div className="relative my-8 container mx-auto">
                <h2 className='text-[#232536] font-bold text-center my-10 text-4xl'>
                    List of Authors
                </h2>
                <div className="grid grid-cols-12">
                    {auth.items.map((auths: any) => {
                        return (
                            <div className="md:col-span-4 col-span-12 mb-5 md:mr-4" key={auths.sys.id}>
                                <div className="bg-[#F4F4F4] p-9 text-center">
                                    {auth.includes.Asset.map((elemss: any) => {
                                        return (
                                            <div key={auths.fields.authimage.sys.id} className='m-auto'>
                                                {auths.fields.authimage.sys.id == elemss.sys.id ?
                                                    <Image src={"https:" + elemss.fields.file.url} alt="a" height={120} width={120} className="object-cover object-center m-auto" /> : <div></div>}
                                            </div>
                                        )
                                    })}
                                    <h2 className='text-[#232536] my-2 font-bold text-2xl'>{auths.fields.authheading.content[0].content[0].value}</h2>
                                    <p className='text-[#6D6E76] text-sm mb-2'>{auths.fields.authdesc}</p>
                                    <div className="flex gap-3 justify-center">
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
                        )
                    })}
                </div>
                
            </div>
        </>
    )
}
