
import React, { Component } from "react";

const Works = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="works">
            <div className="works-container">
            <h1>{obj.works.h1}<span>{obj.works.p1}</span></h1>
            <p>{obj.works.p}</p>
            <ul>
                <li>
                <i class="fas fa-phone"></i>
                <h2>{obj.works.arr[0].h2}</h2>
            <p>{obj.works.arr[0].p}</p>
                </li>
                <li>
                <i class="fas fa-university"></i>
                <h2>{obj.works.arr[1].h2}</h2>
            <p>{obj.works.arr[0].p}</p>
                </li>
                <li>
                <i class="fas fa-chart-line"></i>
                <h2>{obj.works.arr[2].h2}</h2>
            <p>{obj.works.arr[0].p}</p>
                </li>
            
            </ul>
            
            </div>
</div>
            </div>
        )
    })
    
    return (
       <div>{resp}</div>
    
    )
}
export default Works;






