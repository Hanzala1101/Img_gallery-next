import React, { useContext, useEffect } from "react";
import Image from "./image";
import { contextProvider } from '../global/global'
import AOS from 'aos';
import 'aos/dist/aos.css';

function body() {
  const { photo,  photo2, photo3, photo1, setpagemore, pagen} = useContext(contextProvider);
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (<>
  
    <div className="p-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-item-center gap-2">
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
      <div>
        {!photo3 ? (
          <h2>loding....</h2>
        ) : (
          <div >
            {photo3.map((data) => (
              <Image key={data.id} {...data} />
            ))}
          </div>
        )}
      </div>
    </div>

    <button className="btn btn-active btn-ghost" onClick={()=>setpagemore(pagen+4)}>See More...</button>
  </>
  );
}
export default body;