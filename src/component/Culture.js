import React,{useState,useRef,useEffect} from 'react'
import { SliderData } from './SliderData'

function Culture({slides}) {
    const [current,setCurrent] =useState(0)
    const length = slides.length
    const timeout = useRef(null)
    useEffect(()=>{
        const nextSlide =()=>{
            setCurrent(current => (current === length -1 ? 0 :current +1))
          }
            timeout.current = setTimeout(nextSlide,3000)
                return function(){
                    if(timeout.current){
                        clearTimeout(timeout.current)
                    }
                }
            
        

     },[current, length]
    )
    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }
  return (
    <>
     <div className='text-[16.32px] text-[#666666] font-[700] leading-[19px] font-[Karla] mt-[42px] ml-[25px] uppercase pb-[4px] mb-[21px] title'>
       CULTURE
      </div>
      <div className='relative flex justify-center items-center'>
      {SliderData.map((slide,index)=>{
        return(
            <div className={index ===current ? 'slide active' : 'slide'} key={index}>
                {index=== current && (<img className='w-[360px]' src={slide.image} alt="" />)}
                
            </div>
        )

      })}
      </div>
    </>
  )
}

export default Culture