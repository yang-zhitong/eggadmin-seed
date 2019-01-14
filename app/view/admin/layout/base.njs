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
      <a href="index2.html" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>A</b>LT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Admin</b>LTE</span>
      </a>
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>

        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages: style can be found in dropdown.less-->
            <li class="dropdown messages-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-envelope-o"></i>
                <span class="label label-success">4</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">你有4条消息</li>
                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu">
                    <li>
                      <!-- start message -->
                      <a href="#">
                        <div class="pull-left">
                          <img src="../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                        </div>
                        <h4>
                          支持团队
                          <small><i class="fa fa-clock-o"></i> 5 分钟</small>
                        </h4>
                        <p>为什么不买一个新的主题?</p>
                      </a>
                    </li>
                    <!-- end message -->
                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src="../dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                        </div>
                        <h4>
                          AdminLTE 设计团队
                          <small><i class="fa fa-clock-o"></i> 2 hours</small>
                        </h4>
                        <p>为什么不买一个新的主题?</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src="../dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                        </div>
                        <h4>
                          开发者
                          <small><i class="fa fa-clock-o"></i> 今天</small>
                        </h4>
                        <p>为什么不买一个新的主题?</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src="../dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                        </div>
                        <h4>
                          销售部
                          <small><i class="fa fa-clock-o"></i> 昨天</small>
                        </h4>
                        <p>为什么不买一个新的主题?</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src="../dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                        </div>
                        <h4>
                          评论
                          <small><i class="fa fa-clock-o"></i> 2 天</small>
                        </h4>
                        <p>为什么不买一个新的主题?</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer"><a href="#">查看所有消息</a></li>
              </ul>
            </li>
            <!-- Notifications: style can be found in dropdown.less -->
            <li class="dropdown notifications-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-bell-o"></i>
                <span class="label label-warning">10</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">你有10条通知</li>
                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu">
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-aqua"></i> 5 个新会员加入
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                        page and may cause design problems
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-red"></i> 5 个新会员加入
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart text-green"></i> 25 个订单
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user text-red"></i> 更改你的用户名
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer"><a href="#">查看所有</a></li>
              </ul>
            </li>
            <!-- Tasks: style can be found in dropdown.less -->
            <li class="dropdown tasks-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-flag-o"></i>
                <span class="label label-danger">9</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">你有9条任务</li>
                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu">
                    <li>
                      <!-- Task item -->
                      <a href="#">
                        <h3>
                          设计按钮
                          <small class="pull-right">20%</small>
                        </h3>
                        <div class="progress xs">
                          <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar"
                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">完成 20% </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                    <li>
                      <!-- Task item -->
                      <a href="#">
                        <h3>
                          创建漂亮的主题
                          <small class="pull-right">40%</small>
                        </h3>
                        <div class="progress xs">
                          <div class="progress-bar progress-bar-green" style="width: 40%" role="progressbar"
                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">完成 40%</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                    <li>
                      <!-- Task item -->
                      <a href="#">
                        <h3>
                          还有一些任务要做
                          <small class="pull-right">60%</small>
                        </h3>
                        <div class="progress xs">
                          <div class="progress-bar progress-bar-red" style="width: 60%" role="progressbar"
                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">完成 60%</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                    <li>
                      <!-- Task item -->
                      <a href="#">
                        <h3>
                          制作漂亮的过渡效果
                          <small class="pull-right">80%</small>
                        </h3>
                        <div class="progress xs">
                          <div class="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar"
                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">完成 80%</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                  </ul>
                </li>
                <li class="footer">
                  <a href="#">查看所有任务</a>
                </li>
              </ul>
            </li>
            <!-- User Account: style can be found in dropdown.less -->
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="../dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                <span class="hidden-xs">流体石头</span>
              </a>
              <ul class="dropdown-menu">
                <!-- User image -->
                <li class="user-header">
                  <img src="../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                  <p>
                    流体石头 - PHP开发者
                    <small>10. 2012</small>
                  </p>
                </li>
                <!-- Menu Body -->
                <li class="user-body">
                  <div class="row">
                    <div class="col-xs-4 text-center">
                      <a href="#">点赞</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">销售</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">朋友</a>
                    </div>
                  </div>
                  <!-- /.row -->
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">简介</a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat">退出</a>
                  </div>
                </li>
              </ul>
            </li>
            <!-- Control Sidebar Toggle Button -->
            <li>
              <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>流体石头</p>
            <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
          </div>
        </div>
        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="搜索...">
            <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
          <li class="header">主导航</li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-dashboard"></i> <span>仪表盘</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="index.html"><i class="fa fa-circle-o"></i> 仪表盘 v1</a></li>
              <li><a href="index2.html"><i class="fa fa-circle-o"></i> 仪表盘 v2</a></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-files-o"></i>
              <span>界面选项</span>
              <span class="pull-right-container">
                <span class="label label-primary pull-right">4</span>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="top-nav.html"><i class="fa fa-circle-o"></i> 顶部导航</a></li>
              <li><a href="boxed.html"><i class="fa fa-circle-o"></i> 盒子布局</a></li>
              <li><a href="fixed.html"><i class="fa fa-circle-o"></i> 固定布局</a></li>
            </ul>
          </li>
          <li>
            <a href="widgets.html">
              <i class="fa fa-th"></i> <span>小部件</span>
              <span class="pull-right-container">
                <small class="label pull-right bg-green">新</small>
              </span>
            </a>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-pie-chart"></i>
              <span>图表</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="chartjs.html"><i class="fa fa-circle-o"></i> JS图表</a></li>
              <li><a href="morris.html"><i class="fa fa-circle-o"></i> 遍历</a></li>
              <li><a href="flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>
              <li><a href="inline.html"><i class="fa fa-circle-o"></i> 内嵌图表</a></li>
              <li><a href="collapsed-sidebar.html"><i class="fa fa-circle-o"></i> 折叠侧栏</a></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-laptop"></i>
              <span>UI元素</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="general.html"><i class="fa fa-circle-o"></i> 一般</a></li>
              <li><a href="icons.html"><i class="fa fa-circle-o"></i> 图标</a></li>
              <li><a href="buttons.html"><i class="fa fa-circle-o"></i> 按钮</a></li>
              <li><a href="sliders.html"><i class="fa fa-circle-o"></i> 滑动条</a></li>
              <li><a href="timeline.html"><i class="fa fa-circle-o"></i> 时间行</a></li>
              <li><a href="modals.html"><i class="fa fa-circle-o"></i> 模式</a></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-edit"></i> <span>表单</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="general.html"><i class="fa fa-circle-o"></i> 普通元素</a></li>
              <li><a href="advanced.html"><i class="fa fa-circle-o"></i> 高级元素</a></li>
              <li><a href="editors.html"><i class="fa fa-circle-o"></i> 编辑</a></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-table"></i> <span>表格</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="simple.html"><i class="fa fa-circle-o"></i> 简单表格</a></li>
              <li><a href="data.html"><i class="fa fa-circle-o"></i> 数据表格</a></li>
            </ul>
          </li>
          <li>
            <a href="calendar.html">
              <i class="fa fa-calendar"></i> <span>日历</span>
              <span class="pull-right-container">
                <small class="label pull-right bg-red">3</small>
                <small class="label pull-right bg-blue">17</small>
              </span>
            </a>
          </li>
          <li>
            <a href="mailbox.html">
              <i class="fa fa-envelope"></i> <span>邮箱</span>
              <span class="pull-right-container">
                <small class="label pull-right bg-yellow">12</small>
                <small class="label pull-right bg-green">16</small>
                <small class="label pull-right bg-red">5</small>
              </span>
            </a>
          </li>
          <li class="treeview active">
            <a href="#">
              <i class="fa fa-folder"></i> <span>例子</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="invoice.html"><i class="fa fa-circle-o"></i> 发票</a></li>
              <li><a href="profile.html"><i class="fa fa-circle-o"></i> 简单</a></li>
              <li><a href="login.html"><i class="fa fa-circle-o"></i> 登录</a></li>
              <li><a href="register.html"><i class="fa fa-circle-o"></i> 注册</a></li>
              <li><a href="lockscreen.html"><i class="fa fa-circle-o"></i> 锁屏</a></li>
              <li class="active"><a href="404.html"><i class="fa fa-circle-o"></i> 404错误</a></li>
              <li><a href="500.html"><i class="fa fa-circle-o"></i> 500错误</a></li>
              <li><a href="blank.html"><i class="fa fa-circle-o"></i> 空白页面</a></li>
              <li><a href="pace.html"><i class="fa fa-circle-o"></i> 一页</a></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-share"></i> <span>多层级</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="#"><i class="fa fa-circle-o"></i> 一级</a></li>
              <li>
                <a href="#"><i class="fa fa-circle-o"></i> 一级
                  <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                <ul class="treeview-menu">
                  <li><a href="#"><i class="fa fa-circle-o"></i> 二级</a></li>
                  <li>
                    <a href="#"><i class="fa fa-circle-o"></i> 二级
                      <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                      </span>
                    </a>
                    <ul class="treeview-menu">
                      <li><a href="#"><i class="fa fa-circle-o"></i> 三级</a></li>
                      <li><a href="#"><i class="fa fa-circle-o"></i> 三级</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#"><i class="fa fa-circle-o"></i> 一级</a></li>
            </ul>
          </li>
          <li><a href="../documentation/index.html"><i class="fa fa-book"></i> <span>文档</span></a></li>
          <li class="header">标签</li>
          <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>重要</span></a></li>
          <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>警告</span></a></li>
          <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>信息</span></a></li>
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- =============================================== -->
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          固定布局
          <small>固定布局的空白示例</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> 主页</a></li>
          <li><a href="#">布局</a></li>
          <li class="active">固定</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="callout callout-info">
          <h4>提示!</h4>

          <p>Add the fixed class to the body tag to get this layout. The fixed layout is your best option if your
            sidebar
            is bigger than your content because it prevents extra unwanted scrolling.</p>
        </div>
        <!-- Default box -->
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">标题</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fa fa-minus"></i></button>
              <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body">
            开始创建你感兴趣的应用!
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            页脚
          </div>
          <!-- /.box-footer-->
        </div>
        <!-- /.box -->

      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <b>Version</b> 2.3.7
      </div>
      <strong>Copyright &copy; 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
      reserved.
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">全新界面</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">生日</h4>

                  <p>10/02 1990</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-user bg-yellow"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">更新联系方式</h4>

                  <p>新手机 +1(800)555-1234</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">加入邮件列表</h4>

                  <p>yaoxue2014@gmail.com</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-file-code-o bg-green"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>

                  <p>执行时间5s</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">任务进度</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  自定义模板设计
                  <span class="label label-danger pull-right">70%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  更新简历
                  <span class="label label-success pull-right">95%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-success" style="width: 95%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Laravel整合
                  <span class="label label-warning pull-right">50%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-warning" style="width: 50%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  后端框架
                  <span class="label label-primary pull-right">68%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-primary" style="width: 68%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->
        <!-- Stats tab content -->
        <div class="tab-pane" id="control-sidebar-stats-tab">统计选项卡内容</div>
        <!-- /.tab-pane -->
        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">普通设置</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                报告面板的使用
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                关于其它信息普通设置选项
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                允许邮件更改
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                其它设置选项是有效
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                文章作者姓名
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                允许用户在博客上显示名字
              </p>
            </div>
            <!-- /.form-group -->

            <h3 class="control-sidebar-heading">聊天设置</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                在线显示
                <input type="checkbox" class="pull-right" checked>
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                关闭通知
                <input type="checkbox" class="pull-right">
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                删除聊天记录
                <a href="javascript:void(0)" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
              </label>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
             immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>

  {%- block content %}{% endblock -%}


  <!-- SlimScroll -->
  <script src="/public/plugins/slimScroll/jquery.slimscroll.min.js"></script>
  <!-- FastClick -->
  <script src="/public/plugins/fastclick/fastclick.js"></script>
  <!-- AdminLTE App -->
  <script src="/public/js/app.min.js"></script>
  {%- block script %}{% endblock -%}
</body>

</html>