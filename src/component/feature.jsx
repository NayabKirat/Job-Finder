
import React, { Component } from "react";

const Feature = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="feature">
            <div className="feature-container">
            <h1>{obj.feature.h1}<span>{obj.feature.p}</span></h1>
            <ul>
                <li>
                    <div className="clip">
                <i class="fas fa-laptop"></i>
                <h2>{obj.feature.arr[0].h1}</h2>
            </div>
                </li> 
                <li>
                    <div className="clip">
                <i class="fas fa-suitcase"></i>
                <h2>{obj.feature.arr[1].h1}</h2>
                </div>
                </li>
                <li>
                    <div className="clip">
                <i class="fas fa-tachometer-alt"></i>
                <h2>{obj.feature.arr[2].h1}</h2>
                </div>
                </li>
                <li>
                    
                <div className="clip">
                <i class="far fa-money-bill-alt"></i>
                <h2>{obj.feature.arr[3].h1}</h2>
                </div>
                </li>
                <li>
                    <div className="clip">
                <i class="fas fa-chart-line"></i>
                <h2>{obj.feature.arr[4].h1}</h2>
                </div>
                </li>
                <li>
                    <div className="clip">
                <i class="fas fa-gavel"></i>
                <h2>{obj.feature.arr[5].h1}</h2>
                </div>
                </li>
                <li>
                    <div className="clip">
                <i class="fas fa-university"></i>
                <h2>{obj.feature.arr[6].h1}</h2>
                </div>
                </li>
                <li>
                    <div className="clip">
                <i class="fas fa-paint-brush"></i>
                <h2>{obj.feature.arr[7].h1}</h2>
                </div>
                </li>
            
            </ul>
            <div className="bt">
            <button>{obj.feature.b}</button></div>
            </div>
</div>
            </div>
        )
    })
    
    return (
       <div>{resp}</div>
    
    )
}
export default Feature;






