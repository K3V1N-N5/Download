import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
<div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
  </a>
  <!-- Button  -->
  
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <a href="#">pro sidebar</a>
        <div id="close-sidebar"><i class="fas fa-times"></i></div>
      </div>
      <!-- sidebar-brand -->
      <div class="sidebar-header">
        <div class="user-pic" style="color:#fff;">
          <i class="fa fa-user-circle fa-4x" aria-hidden="true"></i>
        </div>
        <div class="user-info">
          <span class="user-name"> <strong>Joe Chien</strong></span>
          <span class="user-role">Administrator</span>
          <span class="user-status"><i class="fa fa-circle"></i> <span>Online</span></span>
        </div>
      </div>
      <!-- sidebar-header -->
     </div>
    </nav>
   </div>
  );
};

export default Home;
