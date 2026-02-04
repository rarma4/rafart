"use client"
import { useState } from "react"
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaPhoneAlt, FaMailBulk, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi";
import toast from "react-hot-toast"
import { useTranslations } from "next-intl"

const Contact = () => {

    const t = useTranslations("ContactPage")

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!form.name || !form.email || !form.message) {
            // addToast({
            //     title: "Please fill all required fields!",
            //     description: "Make sure to enter your name, email, and message before sending.",
            //     color: "warning",
            // })
            toast.error(t("alertWarning"))

            return
        }


        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })

        if (res.ok) {
            toast.success(t("alertSuccess"))

            setForm({ name: "", email: "", phone: "", message: "" })
        } else {

            toast.error(t("alertError"))
        }
    }


    return (
        <div className='py-16'>
            <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* Text content */}
                <div>
                    <h2 className='text-2xl sm:text-4xl lg:text-4xl font-bold text-zinc-200'>{t("title")}</h2>
                    <p className='text-zinc-400 mt-6 text-base sm:text-lg'>
                        {t("subtitle")}
                    </p>
                    {/* Info */}
                    {/* <div className='mt-7'>
                        <div className='flex items-center space-x-3 mb-4'>
                            <FaPhoneAlt className='w-5 h-5 text-amber-500' />
                            <p className='sm:text-xl font-bold text-zinc-400'>11 99976 7629</p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <FaMailBulk className='w-6 h-6 text-amber-500' />
                            <p className='sm:text-xl font-bold text-zinc-400'>rarma4@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <FaMapMarkerAlt  className='w-5 h-5 text-amber-500' />
                            <p className='sm:text-xl font-bold text-zinc-400'>São Paulo - SP</p>
                        </div>
                    </div> */}
                    {/* Social Icons */}
                    <div className='flex items-center space-x-3 mt-8'>

                        <Link href={"https://github.com/rarma4"} target="_blank" rel="noopener noreferrer"  title={t("labelGitHub")}>
                            <div className='text-zinc-300 w-14 h-14 bg-[#171D1D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-zinc-600 transition-all duration-300'>
                                <FaGithub className='w-6 h-6' />
                            </div>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/rarma4/"} target="_blank" rel="noopener noreferrer"  title={t("labelLinkedIn")}>
                            <div className='w-14 h-14 bg-[#171D1D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-700 transition-all duration-300'>
                                <FaLinkedin className='text-zinc-300 w-6 h-6' />
                            </div>
                        </Link>
                        <Link href={"https://api.whatsapp.com/send/?phone=5511999767629&text=Contato+pelo+site+Raf%27Art%3A&type=phone_number&app_absent=0"} target="_blank" rel="noopener noreferrer"  title={t("labelWhatsApp")}>
                            <div className='w-14 h-14 bg-[#171D1D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-green-700 transition-all duration-300'>
                                <FaWhatsapp className='text-zinc-300 w-6 h-6' />
                            </div>
                        </Link>
                        <Link href={"tel:5511999767629"} rel="noopener noreferrer"  title={t("labelMobile")}>
                            <div className='w-14 h-14 bg-[#171D1D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-purple-700 transition-all duration-300'>
                                <FaPhoneAlt className='text-zinc-300 w-5 h-5' />
                            </div>
                        </Link>
                        <Link href={"mailto:rarma4@gmail.com"} rel="noopener noreferrer" title={t("labelEmail")}>
                            <div className='w-14 h-14 bg-[#171D1D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-red-700 transition-all duration-300'>
                                <BiLogoGmail className='text-zinc-300 w-6 h-6' />
                            </div>
                        </Link>
                    </div>
                </div>
                {/* form */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className='md:p-10 p-5 bg-[#171D1D] rounded-lg'>
                    <form onSubmit={handleSubmit} >
                        <input type="text" placeholder={t("namePlaceholder")} className='px-4 py-3.5 bg-[#2B2B2B] text-zinc-300 outline-none rounded-md w-full placeholder:text-zinc-300/70 '
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })} />
                        <input type="email" placeholder={t("emailPlaceholder")} className='mt-6 px-4 py-3.5 bg-[#2B2B2B] text-zinc-300 outline-none rounded-md w-full placeholder:text-zinc-300/70 '
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                        />
                        <input type="text" placeholder={t("mobilePlaceholder")} className='mt-6 px-4 py-3.5 bg-[#2B2B2B] text-zinc-300 outline-none rounded-md w-full placeholder:text-zinc-300/70 '
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                        />
                        <textarea placeholder={t("messagePlaceholder")} className='mt-6 px-4 py-3.5 bg-[#2B2B2B] text-zinc-300 outline-none rounded-md w-full placeholder:text-zinc-300/70 h-10rem'
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                        ></textarea>
                        <button type="submit" className='mt-8 px-12 py-4 bg-amber-500 hover:bg-[#ff9500] transition-all duarition-300 cursor-pointer text-[#171D1D] rounded-full'>{t("sendButton")}</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact