
import React, { Component } from "react";

const Visite = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="visite">
            <div className="visite-container">
            <h1>{obj.visite.h1}<span>{obj.visite.p1}</span></h1>
            <p>{obj.visite.p}</p>
            <ul>
               <li>
				   <img src={obj.visite.arr[0].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[0].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li><li>
				   <img src={obj.visite.arr[1].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[1].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li>
			   <li>
				   <img src={obj.visite.arr[2].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[2].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li>
			   <li>
				   <img src={obj.visite.arr[3].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[3].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li>
			   <li>
				   <img src={obj.visite.arr[4].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[4].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li>
			   <li>
				   <img src={obj.visite.arr[5].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[5].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li>
			   <li>
				   <img src={obj.visite.arr[6].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[6].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li>
			   <li>
				   <img src={obj.visite.arr[7].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[7].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li>
			   <li>
				   <img src={obj.visite.arr[8].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[8].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li>
			   <li>
				   <img src={obj.visite.arr[9].img} />
				   <div className="set">
				   <h2>{obj.visite.arr[9].h2}</h2>
				   <h3>{obj.visite.arr[0].p}</h3>
				   <h3>{obj.visite.arr[0].p2}</h3>
				   <button className="bt1">{obj.visite.arr[0].bt1}</button>
				   <button className="bt2">{obj.visite.arr[0].bt2}</button>
				   </div>
			   </li>
 
            </ul>
			<div className="btn">
            <button className="b">{obj.feature.b}</button>
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
export default Visite;






