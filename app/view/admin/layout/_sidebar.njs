<aside class="main-sidebar">
  <!-- sidebar: style can be found in sidebar.less -->
  <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 896px;">
    <div class="sidebar" id="scrollspy" style="height: 896px; overflow: hidden; width: auto;">
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="nav sidebar-menu">
        <li class="header">条目列表</li>
        {% for item in userMenu %}
          {% if item.children %}
            <li class="treeview">
              <a href="javascript:;">
                <i class="fa fa-circle-o"></i> <span>{{item.name}}</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu" style="display: none;">
                {% for childItem in item.children %}
                <li><a data-sub="1" href="{{ childItem.url }}"><i class="fa fa-circle-o"></i> {{childItem.name}}</a></li>
                {% endfor %}
              </ul>
            </li>
          {% else %}
          <li class=""><a href="{{ item.url }}"><i class="fa fa-circle-o"></i>{{ item.name }}</a></li>
          {% endif %}
        {% endfor %}
      </ul>
    </div>
    <div class="slimScrollBar" style="background: rgba(0, 0, 0, 0.2); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 896px;"></div>
    <div class="slimScrollRail" style="width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
  </div>
  <!-- /.sidebar -->
  <script>
    $(function() {
      $('#scrollspy a').each(function() {
        var url = $(this).attr('href');
        var isSub = +$(this).data('sub');
        if (window.location.pathname == url) {
          console.log(url);
          var parent = $(this).parent('li').addClass('active');
          if (isSub) {
            parent.parent('ul').show().parent('.treeview').addClass('active');
          }
        } 
      }); 
    });
  </script>
</aside>