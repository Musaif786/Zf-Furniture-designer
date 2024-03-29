import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";



const Header = ()=>{
    var w = window.innerWidth;

    //DarkMode button
    const darkmode1 = ()=>{
        var body = document.querySelector('body');
        var darkbtn= document.getElementById('darkbtn');
        var header = document.querySelector('header');
        
        body.classList.toggle('darkmode');
        header.classList.toggle('darkmode');
        // body.style.backgroundColor = "black";
      
    }

//     var htoggle =()=>{
//     var ul = document.querySelector("ul");
    
//     if(ul.style.width <="500px"){
//     // ul.style.backgroundColor="white";
//     ul.style.display="flex";

//     }
//    }     

    return(<>
        {/* <header className="col-12 col-md-10">
        
            <div className="d-flex">
            <div className="logo">
                <Link to="/home">Fz_Furniture {w}</Link>
            </div>
              <ul className=" ul d-flex" >
                  <li><Link to="/home">Home <i className="fa fa-home" aria-hidden="true"></i></Link></li>
                  <li><Link to="/about">About <i className="fa fa-desktop" aria-hidden="true"></i></Link></li>
                  <li><Link to="/photos">Photos <i className="fa fa-photo" aria-hidden="true"></i></Link></li>
                  <li><Link to="/contact">Contact <i className="fa fa-phone" aria-hidden="true"></i></Link></li>
                   <button id="h-btn" onClick={htoggle} >click</button>
              </ul>
            </div>
        </header> */}

        {/* header css in index.css */}
     <header>

     
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid mx-2">
    <Link className="navbar-brand text-white" to="/home">Musaif</Link>
    <button className="navbar-toggler btn bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="ul navbar-nav  me-1 mb-2 mb-lg-0 float-lg-end d-lg-flex  d-flex justify-content-lg-end  ">
        <li className="nav-item">
          <Link className="nav-link text-white active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/photos">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact_Us</Link>
        </li>
        
        
      </ul>
      <ul className="d-flex">
       <button id="darkbtn" onClick={darkmode1} className="btn-sm btn-outline-primary "><i class="fa fa-sun-o" aria-hidden="true">Mode</i>
</button>
      </ul>
    </div>
  </div>
</nav>

</header>








    </>)
}
export default Header; 