
import React, { Component } from "react";
import AOS from "aos";

const Home = (b) => {
    AOS.init()
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            
<div className="home">
<img src={obj.home.img} />
<div className="cover">
<div className="text"> 
<h2 data-aos="slide-left" data-aos-duration="1000" data-aos-delay="ease">{obj.home.heading}</h2> 
    <h1 data-aos="slide-right" data-aos-duration="1000" data-aos-delay="ease">{obj.home.paragraph}</h1>
    <span>
    <input type="text" placeholder={obj.home.in1} className="in1"/>
    <input type="text" placeholder={obj.home.city}/>
    <input type="text" placeholder={obj.home.Category}/>
{/* <img src={obj.home.img1} className="img1" /> */}
<button className="b1">{obj.home.search}</button>
    </span>
</div> 

</div>
</div>
            </div>
        )
    })
    
    return (
        
       <div>{resp}</div>
    
    )
}
export default Home;






