import React, { Component } from "react";
import { MyWork } from "./array";
import Nav from "./Nav";
import Home from "./home";
import Feature from "./feature";
import Visite from "./visited";
import Works from "./works";
import Cities from "./cities";
import About from "./about";
import News from "./news";
import Find from "./find&go";

class Data extends Component{   
    state = {
        data:MyWork
    }
    render(){
        console.log(this.state.data);
return(
    <div>
        <Nav a={this.state.data}/>
        <Home a={this.state.data}/>
        <Feature a={this.state.data}/>
        <Visite a={this.state.data}/>
        <Works a={this.state.data}/>
        <Cities a={this.state.data}/>
        <About a={this.state.data}/>
        <News a={this.state.data}/>
        <Find a={this.state.data}/>
        
</div>
) 
    }
}
export default Data;