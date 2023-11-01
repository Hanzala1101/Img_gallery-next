import React from 'react'
import Image from 'next/image'

function image(props) {
  return (
    <>
    {/* <div data-aos="zoom-in-up"><img src ={props.urls.small} alt="img not found" className='mb-2'/></div> */}
       {/* Open the modal using document.getElementById('ID').showModal() method */}
       {/* <button className="btn w-full h-full p-0 m-0" onClick={()=>document.getElementById('my_modal_2').showModal()}data-aos="zoom-in-up"><img src ={props.urls.small} alt="img not found" className='mb-2'/></button>
       <dialog id="my_modal_2" className="modal">
         <div className="modal-box">
         <img src ={props.urls.small} alt="img not found" className='mb-2'/>
         </div>
         <form method="dialog" className="modal-backdrop">
           <button>close</button>
         </form>
       </dialog> */}
{/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn h-full w-full m-0 p-0" data-aos="zoom-in-up"><img src ={props.urls.small} key={props.key} alt="img not found" className='mb-2'/></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal w-screen h-screen ">
  <div className="modal-box w-full h-full pt-0 overflow-hidden">
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">x</label>
    </div>
  <img src ={props.urls.small} key={props.key} alt="img not found" className='mb-2'/>
  </div>
</div>
       </>
  )
}

export default image