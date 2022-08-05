import React, { useState } from "react"
import logo from "../Images/logo.png"
import newLogo from '../Images/blueprint-logo.png'
import BG from "../Images/BG.png"
import {Link } from 'react-router-dom'
import hamburger from '../Images/hambug.png'

import { HiMenuAlt1 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData"


function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url("${BG}")`,
    backgroundSize: "cover",
  }
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      {/* <div className='grid'>
        <div className='bg-[#105899] flex justify-between items-center max-h-10 relative'>
          <div className='ml-5'>
            <img src={logo} alt='' type='image/png' />
           
          </div>
       <div className={sidebar ? 'nav-menu active': 'nav-menu'} >
       <div className="z-10 mt-[250px] bg-[#03192CCF] w-[160px] h-[302px] pt-[40.29px]  ">
          
         
               <ul onClick={showSidebar}>
                 <li>
                 
                 </li>
                 {SidebarData.map((item, index)=>{
                   return(
                    <div className="pl-[40.25px]">
                      <li key={index}>
                       <Link to={item.path}>
                         <h5 className="font-[Karla] text-[11.36px] font-[400] leading-[32.65px] text-white pl-[13.25px]">{item.title}</h5>
                         
                       </Link>
                     </li>
                     <hr />
                    </div>
                 
                   )
                 })}
 
               </ul>
 
            
             <div className="w-[39.75px] bg-[#105899] h-[552px] absolute top-0 pl-[19.19px] pt-[19.19px]">
             <Link to='#' className="menu-bars" onClick={showSidebar}>
                   <AiOutlineClose className="w-[8.28px] text-white  "/>
                   
                   </Link>
 
             </div>
             
        
          </div>
       </div>
          <div>
            <div className='mr-5 text-white'>
            <Link to='#' className="menu-bars">
                  <HiMenuAlt1 onClick={showSidebar}  />
                  </Link>

             
            </div>
            
          </div>
        </div>
        <div className='' style={backgroundImageStyle}>
          <div className='bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] pt-[58px] pl-[27px] pr-[31px] pb-[61px] bord'>
            <div className="ml-[8.99px]">
            <h5 className='font-[Karla] text-[8.39px] text-white leading-[16.0px]'>
              Welcome to the cave{" "}
            </h5>
            <h1 className='font-[Montserrat] text-[16.78px] font-[800] text-white leading-[22px]'>
              IN OUR SPACE WE
              <br /> ALWAYS DELIVER <br />
              MORE THAN EXPECTED
            </h1>
            <button>GET STARTED</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className='grid-container header-content'>
        <div className="container-div" id="nav-menu">
        <img src={hamburger} alt='' id="ham" type='image/png' />
        </div>
        <div className="container-div" id="big-banner">
        <div className="logo-space">
            <img src={newLogo} alt='' id="our-logo" type='image/png' />
            </div>
        </div>
        <div className="inner-slider-content">
          <h4 className="pre-heading">Welcome to the cave</h4>
          <h1 className="headline">
          IN OUR SPACE WE ALWAYS DELIVER MORE THAN EXPECTED
          </h1>
          <a href="#" className="blue-button">GET STARTED</a>
        </div>
      </div>
    </>
  )
}

export default Home
