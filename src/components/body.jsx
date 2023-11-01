import React, { useContext, useEffect, useState } from "react";
import Image from "./image";
import { contextProvider } from '../global/global'
import AOS from 'aos';
import 'aos/dist/aos.css';

function body() {
  const { photo,  photo2, photo3, photo1, setpagemore, pagen, setphotoset} = useContext(contextProvider);
  const [loding, isloding] = useState()
  useEffect(() => {
    AOS.init();
  }, [])
useEffect(()=>{
  !photo3 == isloding(false)
},[photo3])
  return (<>
  {loding ? <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">loading......</h1>:
    <>
    <div className="p-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-item-center gap-2">
      <div >
        {!photo ? (
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">loding....</h2>
        ) : (
          <div >
            {photo.map((data) => (
                <Image key={data.id} {...data}/>
            ))}
          </div>
        )}
      </div>
      <div >
        {!photo1 ? (
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">loding....</h2>
        ) : (
          <div >
            {photo1.map((data) => (
              <Image key={data.id} {...data}/>
            ))}
          </div>
        )}

      </div>
      
      <div>
        {!photo2 ? (
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">loding....</h2>
        ) : (
          <div >
            {photo2.map((data) => (
              <Image key={data.id} {...data}/>
            ))}
          </div>
        )}
      </div>
      <div>
        {!photo3 ? (
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">loding....</h2>
        ) : (
          <div >
            {photo3.map((data) => (
              <Image key={data.id} {...data}/>
            ))}
          </div>
        )}
      </div>
    </div>

    <button className="btn btn-active btn-ghost" onClick={()=>{{setpagemore(pagen+4),isloding(true)}}}>See More...</button></>}
  </>
  );
}
export default body;