
import React, { Component } from "react";

const News = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="news">
            <div className="news-container">
            <h1>{obj.news.h1}<span>{obj.news.p1}</span></h1>
            <p>{obj.news.p}</p>
            <ul>
                <li>
                    <div className="img">
                    <img src={obj.news.arr[0].img} />
                    <button className="b2">{obj.news.arr[0].b}</button></div>
                    <h2>{obj.news.arr[0].h2}</h2>
                    <p>By : <span>{obj.news.arr[0].p1}</span> Category :<span>{obj.news.arr[0].p2}</span> 
                    {obj.news.arr[0].p}</p>
                    <button className="b1">{obj.news.arr[0].b1}</button>
                    </li>
                <li>
                    <div className="img">
                    <img src={obj.news.arr[1].img} />
                    <button className="b2">{obj.news.arr[1].b}</button></div>
                    <h2>{obj.news.arr[0].h2}</h2>
                    <p>By : <span>{obj.news.arr[0].p1}</span> Category :<span>{obj.news.arr[0].p2}</span> 
                    {obj.news.arr[0].p}</p>
                    <button className="b1">{obj.news.arr[0].b1}</button>
                    </li>

                <li>
                <div className="img">
                    <img src={obj.news.arr[2].img} />
                    <button className="b2">{obj.news.arr[2].b}</button></div>
                    <h2>{obj.news.arr[0].h2}</h2>
                    <p>By : <span>{obj.news.arr[0].p1}</span> Category :<span>{obj.news.arr[0].p2}</span> 
                    {obj.news.arr[0].p}</p>
                    <button className="b1">{obj.news.arr[0].b1}</button>
                    
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
export default News;






