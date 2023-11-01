import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { saveAs } from 'file-saver'
import { contextProvider } from '@/global/global'
import { GiCrossedBones, GiFallDown } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";


function image(props) {
  const {photoset, setphotoset, sea} = useContext(contextProvider)
  const downloadImage = () => {
    const number = Math.floor(Math.random()* (100 - 1 + 1)) + 1;
    const name1 = sea.concat(number)+".jpg";
    saveAs(photoset, name1.trim()) // Put your image URL here.
  }

  
  return (
    <>
   
{/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn h-full w-full m-0 p-0 overflow-hidden" data-aos="zoom-in-up">
  <img src ={props.urls.small} key={props.key} onClick={()=>{setphotoset(props.urls.small)}} alt="img not found" className='mb-2 overflow-hidden'/></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal w-screen h-screen ">
  <div className="modal-box  relative">
    <div className="modal-action absolute right-4 top-4">
      <label htmlFor="my_modal_6" className="btn"><GiCrossedBones/></label>
    </div>
    <div className="btn absolute right-4 top-24" onClick={downloadImage}>
      <FaDownload/>
    </div>
  <img src ={photoset} key={props.key} alt="img not found" className='m-2'/>
  
  </div>
</div>
       </>
  )
}

export default image


