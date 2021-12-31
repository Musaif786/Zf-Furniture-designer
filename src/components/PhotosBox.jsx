import React from "react";
import "../css/PhotosBox.css";


 const PhotosBox = ()=>{ 
const btns = ()=>{
   
//    var p = document.querySelector('#btn-box');
//    if(p.style.display="flex"){

//        p.style.display = 'none';
//    }else if(p.style.display="none"){
//     p.style.display = 'flex';
//    }
 document.getElementById("btn-box").classList.toggle('add');

}
// new btn1
const btns1 = ()=>{
   
     document.getElementById("btn-box1").classList.toggle('add');
    
    }
var w = window.innerWidth;


     return(<><div className="PhotosBox">
     <div className="center-box">

         <div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            
         </div>


{/* test */}

<div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns1} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box1">
             <p id="p1">My name is mohammed musaif and im a programmer and i used to do programming and do coding and all.</p>
             <button id="btn1" onClick={btns1} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            
         </div>




         
<div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns1} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box1">
             <p id="p1">My name is mohammed musaif and im a programmer and i used to do programming and do coding and all.</p>
             <button id="btn1" onClick={btns1} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            
         </div>
         {/* end */}



         <div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button className="btn btn-dark px-4 my-2">More</button>
              
         </div>
         <div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button className="btn btn-dark px-4 my-2">More</button>
              
         </div>
         <div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button className="btn btn-dark px-4 my-2">More</button>
             
         </div>
         <div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button className="btn btn-dark px-4 my-2">More</button>
             
         </div>
         <div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button className="btn btn-dark px-4 my-2">More</button>
            
         </div>
         <div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button className="btn btn-dark px-4 my-2">More</button>
              
         </div>
         <div className="photos-container">
             <h2>titile</h2>
             <img src="./images/1.jpg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button className="btn btn-dark px-4 my-2">More</button>
              
         </div>
     </div>
     </div></>);
 }
 export default PhotosBox;