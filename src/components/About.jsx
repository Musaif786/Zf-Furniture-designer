import React from "react";
import Animation from "./Animation";
import Footer from "./Footer";
import PhotosBox from "./PhotosBox";
import Slider from "./Slider";
const About= ()=>{
    return(<>
        {/* <h2>im About page</h2> */}
        {/* <Animation/> */}
        {/* <PhotosBox/> */}
        <Slider name='About-us' />

        {/* text */}
        <div className="container">
        <h1 className="text-center">Lorem ipsum dolor sit amet:</h1>
          <p className="my-2 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex beatae accusamus quod? Mollitia perspiciatis reprehenderit nam officiis quia quam quibusdam odio vel eaque neque aperiam vitae labore iste, dolores sed. Qui accusamus iste ipsum adipisci? Dolor rerum illo delectus mollitia amet nemo voluptatum culpa eligendi modi doloribus necessitatibus velit, dolore numquam quam asperiores possimus non inventore quos consequatur ullam assumenda totam autem sint! Facilis molestiae laborum tempore iure doloremque dolores labore. <br /><br /> voluptatum, nihil voluptatibus incidunt reprehenderit! Tempore ratione doloremque repudiandae hic quidem, obcaecati esse, veritatis cumque sequi exercitationem quisquam repellendus distinctio sunt, tempora incidunt neque dolores voluptatibus consectetur? Voluptatem eius nisi cupiditate incidunt eaque sapiente totam a nemo maxime odit voluptate consectetur dolores assumenda, labore atque?  Labore natus perspiciatis pariatur at quaerat qui exercitationem, accusamus amet reiciendis praesentium eaque molestiae similique error esse nostrum expedita rem laudantium nisi aliquid? Ducimus deserunt distinctio corporis autem laborum facilis perferendis nostrum beatae, blanditiis ut dolorem quos 
          <br /><br /> quaerat, nam animi amet ea iste quae molestiae vitae! Debitis repellendus laborum non itaque nisi, nobis beatae numquam adipisci quae cupiditate aliquam labore hic veritatis vitae id, dolor omnis blanditiis in assumenda quod quidem nemo. Qui repellendus neque illo modi quasi aspernatur officiis excepturi, eligendi officia aut?
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem non unde, asperiores rem ratione amet nesciunt sunt sapiente hic? Vero itaque molestiae quaerat exercitationem quibusdam laborum eos, laudantium quas commodi harum? Aliquid fuga amet in aut cumque ipsam quisquam voluptates asperiores, numquam atque culpa consectetur illum nihil quibusdam delectus sit necessitatibus! Sapiente consequatur illo voluptatibus nam rem cum quod beatae eius eligendi, nisi voluptatum consequuntur odit debitis perferendis facilis dicta veritatis atque harum quia natus labore dolorum quae? Incidunt ipsam voluptatibus dolorem unde veritatis, quasi aperiam quas expedita, minus, error ullam cumque assumenda iusto pariatur quia adipisci nisi consectetur molestiae.<br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perspiciatis illo a consequatur ut reiciendis neque est rerum cumque nostrum, incidunt distinctio vitae provident dolorum similique velit cupiditate quo esse quae ullam iusto repellendus ipsa in! Quisquam consequuntur laudantium laborum neque unde in eos, dolorum, soluta libero, nihil sequi minima?
          </p>
        </div>

        {/* below box */}
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
             <div className="h-box-img"> <img src="./images/1.jpg" alt="auto/img" /></div>

             </div>
          </div>
          <Footer/>
    </>)
}
export default About;