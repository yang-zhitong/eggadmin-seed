{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    {{gameType.text}}管理
  </h1>
</section>

<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">{{gameType.text}}列表</h3>
          <div class="box-tools">
            <a href="/admin/game/{{gameType.type}}/top/sort" type="button" class="btn btn-sm btn-primary">顶部排序</a>
            <a href="/admin/game/{{gameType.type}}/left/sort" type="button" class="btn btn-sm btn-primary">左侧排序</a>
            <a href="/admin/game/{{gameType.type}}/add" type="button" class="btn btn-sm btn-primary">新增{{gameType.text}}</a>
          </div>  
        </div>
        <div class="box-body table-responsive no-padding">
          <style>
            .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
              vertical-align: middle;
            }
          </style>
          <table class="table table-hover">
            <tbody>
              <tr>
                <th>游戏名</th>
                <th>游戏描述</th>
                <th>下载地址</th>
                <th>操作</th>
              </tr>
              {% for item in gameList %}
              <tr>
                <td>{{item.name}}</td>
                <td>{{item.des}}</td>
                <td>{{item.href}}</td>
                <td>
                  <a href="/admin/game/{{gameType.type}}/{{item.id}}/edit" type="button" class="btn btn-info btn-xs">编辑</a>
                  {% if item.sortTop > 0 %}
                  <button type="button" data-show="0" data-url="/admin/game/{{gameType.type}}/top/{{item.id}}/show" class="J_clickShow btn btn-xs bg-orange btn-flat margin">取消顶部显示</button>
                  {% else %}
                  <button type="button" data-show="1" data-url="/admin/game/{{gameType.type}}/top/{{item.id}}/show" class="J_clickShow btn btn-xs bg-orange btn-flat margin">顶部显示</button>
                  {% endif %}
                  {% if item.sortLeft > 0 %}
                  <button type="button" data-show="0" data-url="/admin/game/{{gameType.type}}/left/{{item.id}}/show" class="J_clickShow btn btn-xs bg-orange btn-flat margin">取消左侧显示</button>
                  {% else %}
                  <button type="button" data-show="1" data-url="/admin/game/{{gameType.type}}/left/{{item.id}}/show" class="J_clickShow btn btn-xs bg-orange btn-flat margin">左侧显示</button>
                  {% endif %}
                </td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </div>
        <!-- /.box-body -->

        <!-- <div class="box-footer clearfix">
                <ul class="pagination pagination-sm no-margin pull-right">
                  <li><a href="#">«</a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">»</a></li>
                </ul>
              </div> -->

      </div>
    </div>
  </div>
</section>
{% endblock %}

{% block script %}
<!-- <link rel="stylesheet" href="/public/plugins/iCheck/square/blue.css">
<script src="/public/plugins/iCheck/icheck.min.js"></script> -->
<script>
  $(function() {
    
    $(document).on('click', '.J_clickShow', function() {
      var $this = $(this);
      var url = $this.data('url');
      var show = +$this.data('show');
      $.get(url + '?show=' + show, function(res) {
        if (res.code == 1) {
          var text = $this.text();
          // 如果是要展示的
          if (show === 1) {
            $this.attr('data-show', 0);
            $this.text('取消' + text);
          } else {
            $this.attr('data-show', 1);
            $this.text(text.slice(2));
          }
        }
      });
    });
  });
</script>
{% endblock %}