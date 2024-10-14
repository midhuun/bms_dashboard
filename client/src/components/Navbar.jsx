import React, { useState } from 'react'
import Cebu from '../assets/cebu.jpg';
import { RxCaretDown } from "react-icons/rx";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiAirportSign1, CiUser } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { PiKeyLight } from "react-icons/pi";
import { MdOutlineInbox } from "react-icons/md";
import { RiGolfBallLine, RiMenu2Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
const Navbar = () => {
  const [isMenu,setisMenu] = useState(false);
  return (
    <>
    <RiMenu2Line onClick={()=>setisMenu(!isMenu)} size={24} className='cursor-pointer absolute top-7 left-1 block md:hidden' />
    <div className={`z-[1000] ${isMenu?"absolute":"hidden"} relative lg:absolute w-64 lg:block left-0`}>
    <div  className='w-8 lg:hidden cursor-pointer h-8 flex justify-center items-center rounded-full text-red-500 bg-white hover:text-white absolute right-3 top-3 hover:bg-red-500 transition delay-100'>
      <IoClose  onClick={()=>setisMenu(!isMenu)} />
    </div>
  <div className="flex flex-col pt-[10px] w-64 h-screen bg-white border-r">
   <div className='flex flex-col items-center'>
    <div className="flex flex-col w-[80%] rounded-md shadow-md py-3 mt-10 lg:mt-0 justify-center">
      <img src={Cebu} alt="Logo" classname="rounded-lg h-16 object-cover" />
      <h1 className="ml-1 border-b p-2 mb-1 text-md w-full items-center self-start flex justify-between ">Cebu Towers <span><RxCaretDown className='mx-3'/></span></h1>
      <p className='text-gray-300 px-2  text-[12px]'>200 George Street</p>
      <p className='text-gray-300 px-2 text-[12px]'>Sydney NSW 2000</p>

    </div>
    </div>
    <nav className="flex-1 text-sm py-6">
      <ul className="">
        <li>
          <a
            href="#"
            className="flex items-center p-2  text-gray-700 bg-gray-200 "
          >
           <MdOutlineSpaceDashboard size={24} className='ml-2 text-blue-500' />
            <span className="ml-3 font-medium">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 py-3 text-gray-700 hover:bg-gray-200 "
          >
            <CiSettings size={22} className='ml-2 ' />
            <span className="ml-3 font-medium">Cases</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 "
          >
              <CiAirportSign1 size={22} className='ml-2 ' />
            <span className="ml-3 font-medium">Work Orders</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 "
          >
              <CiCalendar size={22} className='ml-2 ' />
            <span className="ml-3 font-medium">Calendar</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 "
          >
              <PiBuildingOfficeThin size={22} className='ml-2 ' />
            <span className="ml-3 font-medium">Maintenance Schedule</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200"
          >
              <CiUser size={22} className='ml-2 ' />
            <span className="ml-3 font-medium">Residents</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 "
          >
             <PiKeyLight size={22} className='ml-2 ' />
            <span className="ml-3 font-medium">Keys</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 "
          >
             <MdOutlineInbox size={22} className='ml-2 ' />
            <span className="ml-3 font-medium">Parcels</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 "
          >
            <RiGolfBallLine size={22} className='ml-2 ' />
            <span className="ml-3 font-medium">Contractors</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 "
          >
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v9c0 5 9 7 10 7s10-2 10-7V7l-10-5zm0 2.18L19.74 8.5 12 12.35 4.26 8.5 12 4.18zm0 15.64c-2.72-.01-8-1.36-8-4.19v-6.1l8 4.17v6.12zm1.94-9.82l8-4.17v6.1c0 2.83-5.28 4.18-8 4.19v-6.12z" />
            </svg>
            <span className="ml-3 font-medium">Cloud Sense</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</>
  )
}

export default Navbar