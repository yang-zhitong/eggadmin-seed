<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="renderer" content="webkit">
  <title>后台</title>
  {%- include "./_assets.njs" -%}
  {%- block head %}{% endblock -%}
</head>

<body class="hold-transition skin-blue fixed sidebar-mini">

  <div class="wrapper">

    <header class="main-header">
      <!-- Logo -->
      <!-- Logo -->
      <a href="../index2.html" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>A</b>LT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Admin</b>LTE</span>
      </a>
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">切换导航</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <li><a>admin</a></li>
            <li><a href="/">退出</a></li>
          </ul>
        </div>
      </nav>
    </header>

    {%- include "./_sidebar.njs" -%}

    <!-- =============================================== -->
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      {%- block content %}{% endblock -%}
    </div>

    
    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <!-- <b>Version</b> 2.3.7 -->
      </div>
      <strong>Copyright &copy; 2019 <a href="">xxxx</a>.</strong> All rights
      reserved.
    </footer>
  </div>


  <!-- SlimScroll -->
  <script src="/public/plugins/slimScroll/jquery.slimscroll.min.js"></script>
  <!-- FastClick -->
  <script src="/public/plugins/fastclick/fastclick.js"></script>
  <!-- AdminLTE App -->
  <script src="/public/js/app.min.js"></script>
  {%- block script %}{% endblock -%}
</body>

</html>