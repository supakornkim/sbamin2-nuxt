<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <nuxt-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">Admin</div>
    </nuxt-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <nuxt-link class="nav-link" to="/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></nuxt-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Report
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span>Monthly</span>
      </a>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Monthly Report:</h6>
          <nuxt-link class="collapse-item" to="/monthlyStudent">Student</nuxt-link>
          <nuxt-link class="collapse-item" to="/monthlyAgent">Agent</nuxt-link>
        </div>
      </div>
    </li>

    <!-- Nav Item - Utilities Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Daily</span>
      </a>
      <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Daily Report:</h6>
          <nuxt-link class="collapse-item" to="/dailyStudent">Student</nuxt-link>
          <nuxt-link class="collapse-item" to="/dailyAgent">Agent</nuxt-link>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Addons
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
        <i class="fas fa-fw fa-folder"></i>
        <span>Pages</span>
      </a>
      <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Login Screens:</h6>
          <a class="collapse-item" href="login.html">Login</a>
          <a class="collapse-item" href="register.html">Register</a>
          <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
          <div class="collapse-divider"></div>
          <h6 class="collapse-header">Other Pages:</h6>
          <a class="collapse-item" href="404.html">404 Page</a>
          <a class="collapse-item" href="blank.html">Blank Page</a>
        </div>
      </div>
    </li>

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts</span></a>
    </li>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <a class="nav-link" href="tables.html">
        <i class="fas fa-fw fa-table"></i>
        <span>Tables</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

  </ul>
</template>
