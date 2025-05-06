import React from 'react'

export default function Sidebar() {
    return (
        <aside className="w-1/5 hidden lg:block mt-10 mr-3">
            <section>
                <header className="mb-3">
                    <h5 className="font-light text-sm">دسته ها</h5>
                </header>
                <section className="space-y-5">
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-home"></i>
                        <p>املاک</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-car"></i>
                        <p>وسیله نقلیه</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-tablet text-2xl"></i>
                        <p>کالای دیجیتال</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-diamond"></i>
                        <p>خانه و آشپزخانه</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-magic"></i>
                        <p>خدمات</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-clock-o"></i>
                        <p>وسایل شخصی</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-inbox"></i>
                        <p>سرگرمی و فراغت</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-user-secret"></i>
                        <p>اجتماعی</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-microphone"></i>
                        <p>تجهیزات و صنعتی</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-shopping-bag"></i>
                        <p>استخدام و کاریابی</p>
                    </div>
                    <div className="flex items-center  space-x-2 text-gray-600">
                        <i className="fa fa-user-plus"></i>
                        <p>
                            رزومه کارجویان{" "}
                            <span className="text-red-700 text-sm">(جدید)</span>
                        </p>
                    </div>
                </section>
            </section>

            <section className="border-t border-gray-300 mt-6 pt-6 w-3/4">
                <div id="accordionExample">
                    <div>
                        <h2 className="mb-0" id="headingTwo">
                            <button
                                className="group relative flex  space-x-3 "
                                type="button"
                                data-te-collapse-init
                                data-te-collapse-collapsed
                                data-te-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                                <p>محل</p>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="!visible hidden"
                            data-te-collapse-item
                            aria-labelledby="headingTwo"
                            data-te-parent="#accordionExample"
                        >
                            <div className="py-4">
                                <button className="border w-full text-start py-2 ps-2 text-gray-400 rounded text-sm">
                                    تعیین محل
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-gray-300 mt-6 pt-6 w-3/4">
                <div id="accordionExample1">
                    <div>
                        <h2 className="mb-0" id="headingTwo">
                            <button
                                className="group relative flex  space-x-3"
                                type="button"
                                data-te-collapse-init
                                data-te-collapse-collapsed
                                data-te-target="#collapseTwo1"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                                <p>قیمت</p>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo1"
                            className="!visible hidden"
                            data-te-collapse-item
                            aria-labelledby="headingTwo"
                            data-te-parent="#accordionExample1"
                        >
                            <div className="py-4">
                                <section className="flex items-center">
                                    <div className="w-1/4 text-sm text-gray-500">
                                        <p>حداقل</p>
                                    </div>
                                    <div className="w-3/4">
                                        <select
                                            name=""
                                            id=""
                                            className="border border-gray-300 w-full text-gray-400 rounded"
                                        >
                                            <option value="">مثلا ۷۰۰۰</option>
                                            <option value="">1000</option>
                                            <option value="">1000</option>
                                            <option value="">1000</option>
                                            <option value="">1000</option>
                                            <option value="">1000</option>
                                        </select>
                                    </div>
                                </section>
                                <section className="rotate-90 w-4 text-gray-300">...</section>
                                <section className="flex items-center">
                                    <div className="w-1/4 text-sm text-gray-500">
                                        <p>حداکثر</p>
                                    </div>
                                    <div className="w-3/4">
                                        <select
                                            name=""
                                            id=""
                                            className="border w-full text-gray-400 rounded"
                                        >
                                            <option value="">مثلا ۷۰۰۰</option>
                                            <option value="">1000</option>
                                            <option value="">1000</option>
                                            <option value="">1000</option>
                                            <option value="">1000</option>
                                            <option value="">1000</option>
                                        </select>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-gray-300 mt-6 pt-6 w-3/4">
                <div id="accordionExample2">
                    <div>
                        <h2 className="mb-0" id="headingTwo">
                            <button
                                className="group relative flex  space-x-3"
                                type="button"
                                data-te-collapse-init
                                data-te-collapse-collapsed
                                data-te-target="#collapseTwo2"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                                <p>وضعیت آگهی</p>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo2"
                            className="!visible hidden"
                            data-te-collapse-item
                            aria-labelledby="headingTwo"
                            data-te-parent="#accordionExample2"
                        >
                            <div className="py-4 space-y-4">
                                <section className="flex items-center justify-between">
                                    <div className=" text-sm text-gray-500">
                                        <p>فقط عکس دار</p>
                                    </div>
                                    <div className="">
                                        <input
                                            className="flex flex-row-reverse mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckDefault"
                                        />
                                    </div>
                                </section>

                                <section className="flex items-center justify-between">
                                    <div className=" text-sm text-gray-500">
                                        <p>فقط فوری ها</p>
                                    </div>
                                    <div className="">
                                        <input
                                            className="flex flex-row-reverse mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckDefault"
                                        />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-gray-300 w-3/4 mt-7 pt-5">
                <section>
                    <ul className="flex flex-wrap space-x-4   space-y-4">
                        <li>
                            <a href="" className="text-sm text-gray-500">
                                درباره دیوار
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-sm text-gray-500">
                                دریافت برنامه
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-sm text-gray-500">
                                اتاق خبر
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-sm text-gray-500">
                                کسب و کار ها
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-sm text-gray-500">
                                پشتیبانی و قوانین
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="flex justify-center w-3/4 mt-5 space-x-7 ">
                    <div>
                        <i className="fa fa-twitter text-lg"></i>
                    </div>
                    <div>
                        <i className="fa fa-linkedin text-lg"></i>
                    </div>
                    <div>
                        <i className="fa fa-yc-square text-lg"></i>
                    </div>
                    <div>
                        <i className="fa fa-instagram text-lg"></i>
                    </div>
                </section>

                <section className="flex justify-center items-center space-x-4  mt-8">
                    <div>
                        <img src="images/1.png" alt="" className="w-24 h-20" />
                    </div>
                    <div>
                        <img src="images/2.png" alt="" className="w-24 h-20" />
                    </div>
                    <div>
                        <img src="images/3.jpeg" alt="" className="w-24 h-20" />
                    </div>
                </section>
            </footer>
        </aside>
    )
}
