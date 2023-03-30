import React, { useContext ,useEffect } from "react";
import Image from "./image";
import { contextProvider } from '../global/global'
import AOS from 'aos';
import 'aos/dist/aos.css';

function body() {
    const  {photo,photo1,photo2} = useContext(contextProvider);

    useEffect(() => {
      AOS.init();
    }, [])
    // useEffect(() => {
    //   fetchfun();
    //   fetchfun1();
    //   fetchfun2();
    // }, [])
    
  return (<>
    <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
      <div >
        {!photo ? (
          <h2>loding....</h2>
        ) : (
          <div >
            {photo.map((data) => (
              <Image key={data.id} {...data} />
            ))}
          </div>
        )}
      </div>
      <div > 
      {!photo1 ? (
          <h2>loding....</h2>
        ) : (
          <div >
            {photo1.map((data) => (
              <Image key={data.id} {...data} />
            ))}
          </div>
        )}

      </div>
      <div> 
      {!photo2 ? (
          <h2>loding....</h2>
        ) : (
          <div >
            {photo2.map((data) => (
              <Image key={data.id} {...data} />
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
export default body;