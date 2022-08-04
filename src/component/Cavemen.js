import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import images from './Gallery'



function Cavemen() {
    
  return (
    <>
    <div className='text-[16.32px] text-[#666666] font-[700] leading-[19px] font-[Karla] mt-[42px] ml-[30px] uppercase title pb-[4px] mb-[16px]'>
      THE CAVEMEN
      </div>
      <motion.div>
          <motion.div className='' >
            <motion.div className='rel' >
            {images.map(image=>{
                        return(
                         <motion.div className=''>
                            <img className='' src={image} alt="" />
                         </motion.div>
                           )
                        })}
             </motion.div>
           </motion.div>

        
      </motion.div>
      
    </>
  )
}

export default Cavemen