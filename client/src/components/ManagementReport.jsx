import React, { useState, useEffect } from 'react';
import { LiaDownloadSolid } from 'react-icons/lia';
import * as XLSX from 'xlsx';
import PDFLogo from '../assets/pdf.png';

const ExportToExcel = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);


  async function getData() {
    setLoading(true);
    try {
      const result = await fetch('http://localhost:3000');
      const data = await result.json();
      setResults(data); 
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  const handleDownload = (data, reportType) => {
    if (!data) return; 

    const worksheet = XLSX.utils.json_to_sheet(data); 
    const workbook = XLSX.utils.book_new(); 
    XLSX.utils.book_append_sheet(workbook, worksheet, reportType); 
    XLSX.writeFile(workbook, `${reportType}_report.xlsx`);
  };
  const arrays = Object.keys(results || {}) || [];
  console.log(arrays);
  
  return (
   <>
   {arrays?.map((value)=><>
    <div className='flex   justify-between items-center gap-3'>
          <div className='flex gap-3'>
          <img src={PDFLogo}  alt='PDF Logo' className='w-6 h-6' />
          <div className='leading-4 '>
            <p className='text-gray-500 text-[12px] uppercase'>{value}</p>
            <p className='text-[10px] text-gray-200'>Sent: 14/10/2018</p>
          </div>
          </div>
          <p onClick={()=>handleDownload(results[value],value)} className='text-[10px] cursor-pointer text-gray-200'><LiaDownloadSolid size={22} className='hover:text-blue-500'/></p>
            </div>
          <hr/>
   </>)}
    
   </>
  );
};

export default ExportToExcel;
