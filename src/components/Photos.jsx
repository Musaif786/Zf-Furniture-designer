import React from "react";
import Animation from "./Animation";
import Footer from "./Footer";
import PhotosBox from "./PhotosBox";
import Slider from "./Slider";
const Photos= ()=>{
    return(<>
      
     <Slider collections="Successfull Project's Gallery"/>
     <PhotosBox/>
     <Footer/>
       {/* <Animation/> */}
    </>)
}
export default Photos;