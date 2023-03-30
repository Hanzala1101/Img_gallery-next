import React from 'react'
import Image from 'next/image'

function image(props) {
  return (
    <div data-aos="zoom-in-up"><img src ={props.urls.small} alt="img not found" className='mb-2'/></div>
  )
}

export default image