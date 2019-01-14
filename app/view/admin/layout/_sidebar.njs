<aside class="main-sidebar">
  <!-- sidebar: style can be found in sidebar.less -->
  <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 896px;">
    <div class="sidebar" id="scrollspy" style="height: 896px; overflow: hidden; width: auto;">
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="nav sidebar-menu">
        <li class="header">条目列表</li>
        {% for item in userMenu %}
        <li class="" active><a href="{{ item.url }}"><i class="fa fa-circle-o"></i>{{ item.name }}</a></li>
        {% endfor %}
      </ul>
    </div>
    <div class="slimScrollBar" style="background: rgba(0, 0, 0, 0.2); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 896px;"></div>
    <div class="slimScrollRail" style="width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
  </div>
  <!-- /.sidebar -->
</aside>