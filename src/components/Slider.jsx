import React from "react";
import "../css/Slider.css";


const Slider= (props)=>{


    let images = ["https://source.unsplash.com/400x300/?nature,water","https://source.unsplash.com/400x300/?nature,birds","https://source.unsplash.com/400x300/?technology","https://source.unsplash.com/400x300/?furniture","https://source.unsplash.com/400x300/?cars","https://source.unsplash.com/400x300/?bikes","https://source.unsplash.com/400x300/?nature,water","https://source.unsplash.com/400x300/?phone","https://source.unsplash.com/400x300/?nature,cats"];

    var num = 0;
    const  next= ()=>{
        var slider = document.querySelector('#slider');
        
        var body = document.querySelector('#d-flex');
        num++;
        if(num >=images.length){
            num=0;
        }
        slider.src = images[num];
        body.setAttribute("backgroundImage",`url"${images[num]}"`);
        // alert(images[num])
        
    }
    // pre
    const  pre= ()=>{
        var slider = document.querySelector('#slider');
        num--;
        if(num < 0){
            num=images.length-1;
        }
        slider.src = images[num];
        // alert(images[num])
        
    }

    return(<>
        <div  id="d-flex" className="container-fluid d-flex">
        <h1>{props.collections} {props.name}</h1>
           <div >
               <img id="slider" src="https://source.unsplash.com/1600x650/?nature,water
" alt="" />
           </div>
           <div className="btns">
           <button onClick={pre}>Preview</button>
           <button onClick={next}>Next</button>
           </div>
        </div>
    </>);
}
export default Slider;