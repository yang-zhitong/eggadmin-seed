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
                <th>
                  顺序
                  <small style="font-weight:400" class="text-info">(光标离开输入框自动保存)</small>
                </th>

              </tr>
              {% for item in sortList %}
              <tr>
                <td>{{item.name}}</td>
                <td>{{item.des}}</td>
                <td>{{item.href}}</td>
                <td>
                  <input class="J_inputSort" maxlength="1" type="text" value="{{item[key]}}" data-url="/admin/game/{{gameType.type}}/{{position}}/{{item.id}}/sort" placeholder="输入1-9">
                </td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </div>
        <!-- /.box-body -->
        <div class="box-footer clearfix">
        </div>
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
    $(".J_inputSort").on('blur', function() {
      var url = $(this).data('url');
      var val = $.trim($(this).val());
      if (val > 0) {
        $.post(url, {
          sort: val,
        })
      }
    });
  });
</script>
{% endblock %}