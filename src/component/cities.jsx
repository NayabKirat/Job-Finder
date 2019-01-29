
import React, { Component } from "react";

const Cities = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="cities">
            <img src={obj.cities.img} />
            <div className="cont">
            <div className="cities-container">
            <h1>{obj.cities.h1}</h1>
            <p>{obj.cities.p}</p>
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
export default Cities;






