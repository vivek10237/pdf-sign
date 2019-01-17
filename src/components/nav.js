import React, { Component } from 'react';
import { Nav,Button } from 'react-bootstrap';
class NavBar extends Component{
  render(){
    return(
               <div className="navmenu">
               <Nav  className="navbar-default navbar-static-top" role="navigation">
                  <div className="navbar-header">
                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                   </button>
                  <h1> <a className="navbar-brand" href="#">DASHBOARD</a></h1>
                </div>
                <div className=" border-bottom">
                <div className="full-left">
                 <section className="full-top">
                <button id="toggle"><i className="fa fa-arrows-alt"></i></button>
                </section>
                <form className=" navbar-left-right">
                   <input type="text"  placeholder="Search..."  />
                   <input type="submit" value="" className="fa fa-search"/>
                 </form>
                 <div className="clearfix"> </div>
                </div>
                <div className="drop-men" >
                 <ul className=" nav_1">

                <li className="dropdown">
                     <a href="#" className="dropdown-toggle dropdown-at" data-toggle="dropdown"><span className=" name-caret">Admin<i className="caret"></i></span></a>
                     <ul className="dropdown-menu " role="menu">
                     <li><a href="#"><i className="fa fa-user"></i>Edit Profile</a></li>
                     <li><a href="#"><i className="fa fa-envelope"></i>Inbox</a></li>
                     <li><a href="#"><i className="fa fa-calendar"></i>Calender</a></li>
                     <li><a href="#"><i className="fa fa-clipboard"></i>Tasks</a></li>
                     </ul>
                   </li>

                 </ul>
                </div>
                <div className="clearfix">

                </div>

                <div className="navbar-default sidebar" role="navigation">
                   <div className="sidebar-nav navbar-collapse">
                   <ul className="nav" id="side-menu">

                     <li>
                       <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-dashboard nav_icon "></i><span className="nav-label">Dashboards</span> </a>
                     </li>

                     <li>
                       <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-indent nav_icon"></i> <span className="nav-label">Notification</span><span className="fa arrow"></span></a>
                     </li>
                <li>
                       <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-inbox nav_icon"></i> <span className="nav-label">Documents</span> </a>
                     </li>

                     <li>
                       <a href="#l" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Customers</span> </a>
                     </li>
                      <li>
                       <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-desktop nav_icon"></i> <span className="nav-label">Department</span><span className="fa arrow"></span></a>
                     </li>
                      <li>
                       <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-th nav_icon"></i> <span className="nav-label">Users</span> </a>
                     </li>

                     <li>
                       <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-cog nav_icon"></i> <span className="nav-label">Settings</span><span className="fa arrow"></span></a>
                     </li>
                   </ul>
                 </div>
                </div>
                </div>
                </Nav>
               </div>
    )
  }
}
export default NavBar;
