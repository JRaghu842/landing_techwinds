import React from 'react'

import image4 from '../assets/images/client/05.jpg';
import image5 from '../assets/images/blog/06.jpg';
import image6 from '../assets/images/blog/07.jpg';
import image7 from '../assets/images/blog/08.jpg';
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom';

export default function BlogUserProfile() {
    return (
        <div className="sticky top-20">
            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
            <div className="text-center mt-8">
                <img src={image4} className="h-24 w-24 mx-auto rounded-full shadow mb-4" alt="" />

                <Link to="#"  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Cristina Romsey</Link>
                <p className="text-slate-400">Content Writer</p>
            </div>

            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Recent post</h5>
            <div className="flex items-center mt-8">
                <img src={image5} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                <div className="ms-3">
                    <Link to="#" className="font-semibold hover:text-indigo-600">Consultant Business</Link>
                    <p className="text-sm text-slate-400">1st May 2022</p>
                </div>
            </div>

            <div className="flex items-center mt-4">
                <img src={image6} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                <div className="ms-3">
                    <Link to="#" className="font-semibold hover:text-indigo-600">Grow Your Business</Link>
                    <p className="text-sm text-slate-400">1st May 2022</p>
                </div>
            </div>

            <div className="flex items-center mt-4">
                <img src={image7} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                <div className="ms-3">
                    <Link to="#" className="font-semibold hover:text-indigo-600">Look On The Glorious Balance</Link>
                    <p className="text-sm text-slate-400">1st May 2022</p>
                </div>
            </div>

            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
            <ul className="list-none text-center mt-8 space-x-1">
                <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="h-4 w-4"></Icon.GitHub></Link></li>
                <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="h-4 w-4"></Icon.Youtube></Link></li>
                <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="h-4 w-4"></Icon.Gitlab></Link></li>
            </ul>

            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
            <ul className="list-none text-center mt-8 space-x-1">
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Business</Link></li>
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Finance</Link></li>
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Marketing</Link></li>
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Fashion</Link></li>
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Bride</Link></li>
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Lifestyle</Link></li>
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Travel</Link></li>
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Beauty</Link></li>
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Video</Link></li>
                <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Audio</Link></li>
            </ul>
        </div>
    )
}
