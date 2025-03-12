import React from 'react'

export default function Header() {
    return (
        <header>
            <section className="container flex justify-center items-center">
                <img src="images/logo.png" alt="" className="w-24 h-24" />
            </section>

            <section className="border-b">
                <nav
                    className="container flex justify-around items-center space-x-1 space-x-reverse text-gray-500 text-xs md:text-sm lg:text-lg font-light pb-4 px-8">
                    <a href="">ثبت آگهی</a>
                    <a href="">درباره دیوار</a>
                    <a href="">دریافت برنامه</a>
                    <a href="">اتاق خبر</a>
                    <a href="">پشتیبانی</a>
                </nav>
            </section>
        </header>
    )
}
