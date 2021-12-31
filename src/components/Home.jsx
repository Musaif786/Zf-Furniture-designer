import React ,{useState} from "react";
import "../css/home.css";
import Footer from './Footer';


const Home = () => {


//    let imgs = Math.floor(Math.random() * 3 );
   let a;
   
   
   
   let btn = () => {
       a= document.querySelector("img");
       a.setAttribute("src","https://source.unsplash.com/200x250/?nature,technology");
       a.classList.add("add");
       
    // a.setAttribute = setImg(img_list[imgs]);
};
// setInterval(btn,1000);
let btn1 = () => {
     document.querySelector("img").setAttribute("src","https://source.unsplash.com/200x250/?technology,phone").classList.toggle("add");
    
 // a.setAttribute = setImg(img_list[imgs]);
};

const imgs = "https://source.unsplash.com/200x250/?nature,water" && "./images/1.jpg" ;

const img1 = "https://source.unsplash.com/200x250/?nature,water" && "./images/2.jpg" ;
  return (
    <>
      <main>
      
        <div className="container-fluid">
          <div className="left">
              <div className="row">
              <div id="main-div" className="col-10 text-center d-flex">
              {/* <p>{fruits_list[imgs]}</p> */}
              <img src={imgs} alt="img/auto" />
              <p className="my-2"> 
               emo fugiat aut quod asperiores quia dolorum facere. Eius vero sequi repellat quis ipsum, eum esse eaque. Ratione rem, quisquam qui accusamus porro explicabo earum!
              </p>
              <ul>
                  <li id="a"><button className="btn1 "><a id="a" href="#">More</a> <i class="fa fa-external-link " aria-hidden="true"></i></button> </li>
 
 
              </ul>
              <button  onClick={btn} className="arrowl"> <i class="fa fa-arrow-left" aria-hidden="true"></i></button>
              <button onClick={btn1} className="arrowr"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
               </div>

              </div>
          </div>
      

      {/* box below the 1st */}
          <div id="center-box" className="container-fluid d-md-flex d-d-sm-block my-2">
             <div className="h-center d-sm-block text-md-center mt-lg-5 ">
             <h3>Master of design</h3>
             <p>Lorem ipsum dolor sit amet.</p>
             </div>

             <div className="h-img-box d-flex">
             <div className="h-img-box-left">
               <p>Lorem ipsum dolor sit amet.</p>
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, minus.</h1>
             </div>
             <div className="h-box-img"> <img src={img1} alt="auto/img" /></div>

             </div>
          </div>
              
        {/* 2nd box */}
         
        <div id="center-box" className="container-fluid d-md-flex d-d-sm-block my-2">
             <div className="h-center d-sm-block text-md-center mt-lg-5 ">
             <h3>Master of Plan</h3>
             <p>Lorem ipsum dolor sit amet.</p>
             </div>

             <div className="h-img-box d-flex">
             <div className="h-img-box-left">
               <p>Lorem ipsum dolor sit amet.</p>
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, minus.</h1>
             </div>
             <div className="h-box-img"> <img src="https://source.unsplash.com/200x200/?nature,furniture
" alt="auto/img" /></div>

             </div>
          </div>

        </div>
       
      </main>
      <Footer/>
    </>
  );
};
export default Home;
