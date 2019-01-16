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
      <div class="box box-primary">
        <div class="box-header">
          <h3 class="box-title">{{gameType.text}}列表</h3>
          <div class="box-tools">
            <a href="/admin/game/{{gameType.type}}" type="button" class="btn btn-sm btn-primary">全部{{gameType.text}}</a>
            <a href="/admin/game/{{gameType.type}}/top/sort" type="button" class="btn btn-sm btn-primary">顶部排序</a>
            <a href="/admin/game/{{gameType.type}}/left/sort" type="button" class="btn btn-sm btn-primary">左侧排序</a>
            <a href="/admin/game/{{gameType.type}}/add" type="button" class="btn btn-sm btn-primary">新增{{gameType.text}}</a>
          </div>  
        </div>
        <div class="box-body table-responsive">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th width="30%">游戏名</th>
                <th>游戏描述</th>
                <th>下载地址</th>
                <th>创建时间</th>
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
                <td>{{ helper.localDate(item.createdAt) }}</td>
                <td>
                  <input data-toggle="popover" data-container="body" data-placement="right" data-content="保存成功，刷新查看最新排序" style="width:30%" class="form-control J_inputSort" maxlength="1" type="text" value="{{item[key]}}" data-url="/admin/game/{{gameType.type}}/{{position}}/{{item.id}}/sort" placeholder="输入1-9">
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
    // $('[data-toggle="popover"]').popover()

    $(".J_inputSort").on('blur', function() {
      var self = this;
      var url = $(this).data('url');
      var val = $.trim($(this).val());
      if (val > 0) {
        $.post(url, { sort: val }, function(res) {
          $(self).popover();
          $(self).popover('show');
          setTimeout(function() {
            $(self).popover('destroy');
          }, 1000)
        });
      }
    });
  });
</script>
{% endblock %}