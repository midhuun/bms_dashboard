import { useEffect, useState } from 'react'
import './App.css';
import Profile from './assets/profile.jpg';
import Navbar from './components/Navbar'
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiOutlineCalculator } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
import { AiOutlineDesktop } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";
import { RiEqualFill, RiGolfBallLine } from "react-icons/ri";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { CiSettings, CiUser } from "react-icons/ci";
import { PiBuildingOfficeThin } from 'react-icons/pi';
import { WiDayCloudyGusts } from "react-icons/wi";
import { IoAddSharp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import WeatherWidget from './components/WeatherWidget';
import { LiaDownloadSolid } from "react-icons/lia";
import PDFLogo from './assets/pdf.png';
import Chart from './components/Chart';
import ExportToExcel from './components/ManagementReport';
function App() {
  const [loading, setLoading] = useState(true);
  const [results,setResults] = useState(null);
  async function getData() {
    setLoading(true);
    try {
      const result = await fetch('bms-dashboard-phi.vercel.app');
      const data = await result.json();
      setResults(data)
      console.log(data);
      
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(()=>{
   getData();
  },[])
  return (
    <>
    <Navbar />
    {loading && results?
    <div className="flex gap-5 items-center justify-center h-screen">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      <p className="mt-2 text-gray-700 font-semibold">Loading...</p>
    </div>:
    <div className='lg:ml-[250px] p-2 px-4 '>
        <div className=' flex justify-between items-center flex-wrap'>
        <div className='flex justify-center flex-col items-center leading-3 h-full'>
           <h1 className='text-xl lg:flex  font-semibold text-gray-700 pl-8 lg:pl-5 hidden  lg:mb-0'>Overview</h1>
           <p className='text-sm hidden lg:block text-gray-400 pl-8 lg:pl-5'>Cebu Towers</p>
           </div>
          <div className='flex items-center pl-8 pt-3 gap-4'>
            <div className="h-10 w-10 flex justify-center items-center rounded-full shadow-sm hover:bg-blue-400 group">
              <HiOutlineCalculator className="text-blue-400 group-hover:text-white" size={20} />
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-full shadow-sm hover:bg-blue-400 group">
              <HiMiniUserGroup className="text-blue-400 group-hover:text-white" size={20} />
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-full shadow-sm hover:bg-blue-400 group">
              <HiSpeakerphone className="text-green-400 group-hover:text-white" size={20} />
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-full shadow-sm hover:bg-blue-400 group">
              <MdMarkEmailUnread className="text-violet-400 group-hover:text-white" size={20} />
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-full shadow-sm hover:bg-blue-400 group">
              <AiOutlineDesktop className="text-orange-400 group-hover:text-white" size={20} />
            </div>
            <div className='hidden lg:block h-8 mx-3 bg-gray-300 w-[2px]'></div>
            <div className='flex gap-3 justify-center items-center'>
              <div className="h-10 w-10 flex justify-center items-center rounded-full shadow-sm hover:bg-blue-400 group">
                <img className="text-orange-400 h-8 w-8 rounded-full object-cover group-hover:text-white" src={Profile} />
              </div>
              <p className='text-[12px]'>Building Management</p>
              <RxCaretDown />
            </div>
          </div>
        </div>

        {/* Counts */}
        <div className='p-3 pt-8 flex flex-wrap justify-between items-center gap-4'>
          <div className='flex text-[12px] lg:text-[16px] justify-start items-center gap-[30px] flex-wrap'>
            <div className='relative after:content-[""] after:w-[1px] after:h-full after:bg-gray-200 after:absolute after:right-[-12px] after:top-0'>
              <p className='flex items-center gap-1 text-gray-400'>
                Residents <span><RiEqualFill size={14} className='text-orange-400' /></span>
              </p>
              <p className='text-lg font-semibold text-gray-600'>{results?.resident.length}</p>
            </div>

            <div className='relative after:content-[""] after:w-[1px] after:h-full after:bg-gray-200 after:absolute after:right-[-12px] after:top-0'>
              <p className='flex items-center gap-1 text-gray-400'>
                Assets <span><FaCaretUp size={14} className='text-green-400' /></span>
              </p>
              <p className='text-lg font-semibold text-gray-600'>{results?.buildings?.length}</p>
            </div>

            <div className='relative after:content-[""] after:w-[1px] after:h-full after:bg-gray-200 after:absolute after:right-[-12px] after:top-0'>
              <p className='flex items-center gap-1 text-gray-400'>
                Contractors <span><FaCaretUp size={14} className='text-green-400' /></span>
              </p>
              <p className='text-lg font-semibold text-gray-600'>{results?.contractor.length}</p>
            </div>

            <div className='relative after:content-[""] after:w-[1px] after:h-full after:bg-gray-200 after:absolute after:right-[-12px] after:top-0'>
              <p className='flex items-center gap-1 text-gray-400'>
                Active Cases <span><FaCaretDown size={14} className='text-red-400' /></span>
              </p>
              <p className='text-lg font-semibold text-gray-600'>{results?.cases.length}</p>
            </div>

            <div className=''>
              <p className='flex items-center gap-1 text-gray-400'>
                Work Orders Sent <span><FaCaretUp size={14} className='text-green-400' /></span>
              </p>
              <p className='text-lg font-semibold text-gray-600'>{results?.workOrders.length}</p>
            </div>
          </div>
          <div className=''>
            <input className='p-2 rounded-md shadow-sm w-full md:w-auto' type='date' />
          </div>
        </div>

        {/* Cards */}
        <div className='flex flex-wrap pt-6 gap-4'>
          {/* Items Requiring Action */}
          <div className='w-full md:w-1/2 lg:w-[32%] min-h-[450px] text-white bg-blue-500 p-4 shadow-sm rounded-lg space-y-4'>
            <p className='font-semibold'>Items Requiring Action</p>
            <div className='p-2 rounded-md bg-blue-400 flex justify-between px-3 items-center'>
              <p className=' text-[12px]'><span><CiSettings className='my-2' size={30} /></span>Overdue Cases</p>
              <p className='text-lg font-bold'>{results?.cases.length}</p>
            </div>
            <div className='p-2 rounded-md bg-blue-400 flex justify-between px-3 items-center'>
              <p className='text-[12px]'><span><RiGolfBallLine size={22} className='my-2' /></span>Contractor Insurance expiring</p>
              <p className='text-lg font-bold'>{results?.contractor.length}</p>
            </div>
            <div className='p-2 rounded-md bg-blue-400 flex justify-between px-3 items-center'>
              <p className='text-[12px]'><span><CiUser size={22} className='my-2' /></span>Resident Information Update requests</p>
              <p className='text-lg font-bold'>{results?.resident.length}</p>
            </div>
            <div className='p-2 rounded-md bg-blue-400 flex justify-between px-3 items-center'>
              <p className='text-[12px]'><span><PiBuildingOfficeThin size={22} className='my-2' /></span>Overdue Maintenance Schedules</p>
              <p className='text-lg font-bold'>{results?.cases.length}</p>
            </div>
          </div>

          {/* Notes */}
          <div className='w-full  md:w-1/2 lg:w-[32%] p-3 min-h-[450px] bg-white shadow-sm rounded-lg'>
            <div className='relative flex items-center'>
              <input type='text' placeholder='Search notes' className='pl-10 focus:outline-none focus:border-b placeholder:pl-10 focus:border-blue-500 placeholder:text-gray-400 p-2 pt-3 w-full border-b border-blue-400' />
              <button><IoAddSharp size={24} className='text-blue-500' /></button>
              <span className='absolute top-4 left-3 text-gray-400'><IoIosSearch size={22} /></span>
            </div>
            <div className='space-y-4 pt-3'>
            {results?.workOrders?.slice(0, 4).map((caseItem) => (
            <div key={caseItem._id} className='p-3 hover:bg-gray-300 cursor-pointer flex justify-between items-center shadow-md rounded-md'>
            <div>
               <p className='text-[12px] font-semibold text-gray-500'>{caseItem.title} - {new Date(caseItem.due_date).toLocaleDateString()}</p>
               <p className=' text-[10px]'>{caseItem.description}</p>
               </div>
              <button className='text-red-500'><AiOutlineDelete size={16} /></button>
               </div>
              ))}      
            </div>
          </div>

          {/* Weather */}
          <div className='w-full md:w-1/2 lg:w-[32%] p-4 min-h-[450px] '>
          <div className='w-full flex  gap-4 h-[40%]'>
              <div className='w-1/2 flex justify-center items-center  rounded-md relative overflow-hidden bg-[#765af5]'>
              <WeatherWidget />
              <WiDayCloudyGusts className='text-white w-full  absolute right-[-70px] bottom-[-20px]  opacity-15' />
              </div>
              <div className='w-1/2 gap-2 flex flex-col text-white justify-center items-center relative rounded-md bg-[#fd818b]'>
              <LuPhoneCall size={40} />
              <p className='text-sm font-semibold'>Important <br/> Numbers</p>
              <LuPhoneCall className='text-white w-full absolute right-[-70px] bottom-[-20px]  opacity-15' />
              </div>
              </div>
              <div className='w-full h-1/2 mt-10 bg-white rounded-lg shadow-sm'>
               <Chart />
              </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-[32%] min-h-[450px] bg-white space-y-3 p-4 shadow-sm rounded-lg '>
          <h1 className='font-semibold pb-3'>Management Reports Generated</h1>
          <ExportToExcel />
            </div>
          <div className='w-full md:w-1/2 lg:w-[32%] min-h-[450px] bg-white  p-4 shadow-sm rounded-lg space-y-4'>
          <h1 className='font-semibold pb-3'>Last Work Orders Sent</h1>
          <div className='flex justify-between items-center gap-3'>
          <div className='flex gap-3'>
          <img src={PDFLogo}  alt='PDF Logo' className='w-6 h-6' />
          <div className='leading-4'>
            <p className='text-gray-500 text-[12px]'>ABC Maintenance</p>
            <p className='text-[10px] text-gray-200'>Sent: 14/10/2018</p>
          </div>
          </div>
          <p className='text-blue-500 text-[10px]'>WO#513 -A</p>
          </div>
          <hr/>
          <div className='flex   justify-between items-center gap-3'>
          <div className='flex gap-3'>
          <img src={PDFLogo}  alt='PDF Logo' className='w-6 h-6' />
          <div className='leading-4 '>
            <p className='text-gray-500 text-[12px]'>Report 10/10/2018 -15/10/2018</p>
            <p className='text-[10px] text-gray-200'>Sent: 14/10/2018</p>
          </div>
          </div>
          <p className='text-blue-500 text-[10px]'>WO#513 -A</p>          </div>
          <hr/>
          <div className='flex justify-between items-center gap-3'>
          <div className='flex gap-3'>
          <img src={PDFLogo}  alt='PDF Logo' className='w-6 h-6' />
          <div className='leading-4'>
            <p className='text-gray-500 text-[12px]'>Report 10/10/2018 -15/10/2018</p>
            <p className='text-[10px] text-gray-200'>Created 14/10/2018</p>
          </div>
          </div>
          <p className='text-blue-500 text-[10px]'>WO#513 -A</p>          </div>
          <hr/>
          <div className='flex justify-between items-center gap-3'>
          <div className='flex gap-3'>
          <img src={PDFLogo}  alt='PDF Logo' className='w-6 h-6' />
          <div className='leading-4'>
            <p className='text-gray-500 text-[12px]'>Report 10/10/2018 -15/10/2018</p>
          </div>
          </div>
          <p className='text-blue-500 text-[10px]'>WO#513 -A</p>          </div>
          <hr/>
          </div>
          <div className='w-full md:w-1/2 lg:w-[32%] min-h-[450px] bg-white  p-4 shadow-sm rounded-lg space-y-4'>
          <h1 className='font-semibold '>Activity Feed</h1>
            <div className='space-y-2 pt-3'>
            {results?.workOrders?.slice(0, 5).map((caseItem) => (
            <div key={caseItem._id} className='flex gap-6 items-center justify-between'>
               <p className='text-[12px] w-[30%] font-semibold text-gray-500'>{new Date(caseItem.due_date).toLocaleDateString()}</p>
               <div  className='w-[70%]'>
               <p className=' text-[14px] font-semibold '>{caseItem.contractor.name}</p>
              <p className='text-[12px] text-gray-400'>{caseItem.description}</p>
               </div>
              <hr />
               </div>
              ))}      
            </div>
          </div>
        </div>
      </div>
}
  </>
  )
}

export default App;
