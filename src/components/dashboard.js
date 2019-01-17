import React, { Component } from 'react';
import { Nav,Button } from 'react-bootstrap';
import NavBar from './nav.js';
import './../css/dashboardcss/style.css';
import './../css/dashboardcss/custom.css';
class dashboard extends Component{
  render(){
    return(
      <div className="dashboard-block">
        <div id="wrapper">
     	  <NavBar />
      <div id="page-wrapper" className="gray-bg dashbard-1">
       <div className="content-main">
       <div class="banner">

       <h2>
       <a href="#">Home</a>
       <i className="fa fa-angle-right"></i>
       <span>Dashboard</span>
       </h2>
       </div>
           
       </div>
       </div>
        </div>
     </div>

     );
  }
}
export default dashboard;
