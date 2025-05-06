import Image from 'next/image'
import React from 'react'

export default function MainHeader() {
    return (
        <header
            className="flex justify-center items-center border-b-2 border-gray-300 pb-4 pt-3 lg:space-x-8  xl:space-x-12 ">

            <section className="hidden lg:flex">
                <Image className="w-14 h-14" alt='logo' src={'/images/logo.png'} width={50} height={50} />
            </section>

            <section className="hidden lg:flex text-gray-500">
                <button className="flex justify-center items-center space-x-3">
                    <i className="fa fa-map-marker text-xl text-gray-500"></i>
                    <p>تهران</p>
                </button>
            </section>

            <section className="hidden lg:flex text-gray-500">
                <button className="flex justify-center items-center space-x-3 ">
                    <p>دسته ها</p>
                    <i className="fa fa-angle-down text-xl text-gray-500"></i>
                </button>
            </section>

            <section className="container mx-4 lg:mx-0 lg:w-2/6 flex justify-center items-center bg-gray-100 rounded-sm">
                <input type="text" placeholder="&#xf002 جستجو در همه آگهی ها"
                    className="fa border-l lg:border-l-0 border-gray-300 w-5/6 py-1 my-2 ps-2 lg:w-[94%] placeholder:text-gray-400 placeholder:text-lg bg-gray-100" />
                <div className="mx-1 flex justify-center lg:hidden  items-center space-x-2 ">
                    <button className="text-gray-600 ms-2">تهران</button>
                    <i className="fa fa-map-marker text-xl text-gray-400"></i>
                </div>
            </section>

            <section className="hidden lg:flex text-gray-500">
                <button className="flex justify-center items-center space-x-3 ">
                    <i className="fa fa-user text-xl text-gray-500"></i>
                    <p className="text-xs">دیوار من</p>
                </button>
            </section>

            <section className="hidden lg:flex text-gray-500">
                <button className="flex justify-center items-center space-x-3 ">
                    <i className="fa fa-comment text-xl text-gray-500"></i>
                    <p className="text-xs">چت</p>
                </button>
            </section>


            <section className="hidden lg:flex text-gray-500">
                <button className="flex justify-center items-center">
                    <p className="text-xs">پشتیبانی</p>
                </button>
            </section>


            <section className="hidden lg:flex text-gray-500">
                <button className="flex justify-center items-center bg-red-700 text-white px-5 py-2 font-bold rounded">
                    ثبت آگهی
                </button>
            </section>

        </header>
    )
}
