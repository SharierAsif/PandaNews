import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsChat } from "react-icons/bs";

function NewsItem() {
  return (
    <section classname="text-gray-600 body-font">
  <div classname="container px-5 py-24 mx-auto">
    <div classname="flex flex-wrap -m-4">
      <div classname="p-4 md:w-1/3">
        <div classname="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img classname="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
          <div classname="p-6">
            <h2 classname="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 classname="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p classname="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div classname="flex items-center flex-wrap  ">
              <a classname="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <AiOutlineArrowRight/>
              </a>
              <span classname="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <AiOutlineEye/>1.2K
              </span>
              <span classname="text-gray-400 inline-flex items-center leading-none text-sm">
                <BsChat/>6
              </span>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>
  )
}

export default NewsItem
