import React from 'react'
import {FaWhatsapp,FaLinkedinIn,FaInstagram,FaTwitter} from "react-icons/fa";

function Contact() {
  return (
    <>
     <div className='bg-[#105899]'>
        <div>
        <div className='text-[16.32px] text-[#ffffff] font-[700] leading-[19px] tracking-[0.015em] pt-[83px] pr-[26px]  font-[Karla] mt-[42px] ml-[25px] uppercase pb-[10px] titlee'>
        CONTACT US
      </div>
      <div className='flex'>
      <div className='flex pl-[26px] pt-[26px]'>
      <div className='p-[10px] bg-white rounded-full text-[15px] text-[#105899] mr-[5px]'>
         <FaWhatsapp/>
       </div>
        <div className='p-[10px] bg-white rounded-full text-[15px] text-[#105899] mr-[5px]'>
        <FaLinkedinIn/>
       </div>
       <div className='p-[10px] bg-white rounded-full text-[15px]  text-[#105899]  mr-[5px]'>
         <FaInstagram/>
       </div>
       <div className='p-[10px] bg-white rounded-full text-[15px]  text-[#105899]'>
       <FaTwitter/>
       </div>
        
        
      </div>
      <div className='pl-[20px]'>
        <h5 className='font-[Karla] font-[400] text-[12px] leading-[30px] tracking-[0.02em] text-white'>Subscribe to our email</h5>
        <button className='bg-white h-[33px] w-[127px] rounded-[5px] text-[#1C1A64] font-[Karla] font-[400] text-[10px] leading-[] tracking-[0.02em]'>JOIN EMAIL LIST</button>
      </div>
      </div>
      <div>
        <h5 className=' pl-[24px]font-[Karla] font-[400] text-[14px] leading-[21px] tracking-[0.01em] text-white pt-[23px] pl-[26px] '>Elf Bus stop, No 1b Akinyemi Ave, Lekki<br/> Phase 1 106104, Lagos</h5>
        <h5 className='font-[Karla] font-[400] text-[14px] leading-[30px] tracking-[0.02em] text-white pt-[10px] pl-[26px]'>+234 - 816 - 919 - 9932</h5>
        <h5 className='font-[Karla] font-[400] text-[14px] leading-[30px] tracking-[0.02em] text-white pt-[1px] pl-[26px]'>Talktous@blueprintspathway.com</h5>
      </div>
        </div>
     </div>
     <div className='bg-white'>
        <h6 className='text-center text-[8px] text-[#105899] font-[Karla] font-[400] leading-[30px] tracking-[0.02em] pb-[7px] pt-[8px]'>Copyright - 2022 BlueprintsPathways - All rights reserved.</h6>

     </div>
    </>
  )
}

export default Contact