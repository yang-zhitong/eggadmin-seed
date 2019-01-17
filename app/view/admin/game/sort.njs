{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    排序管理
    <small>从1-10表示顺序, 数字相同则按时间排序, 即新创建的在上面 </small>
  </h1>
</section>

<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <div class="box-header">
          <h3 class="box-title">
            {% if key == 'sortTop' %}
            顶部
            {% else %}
            左侧
            {% endif %}排序
          </h3>
          <div class="box-tools">
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
                <td>{{item.des.slice(0, 8)}}</td>
                <td>{{item.href.slice(0, 8) }}</td>
                <td>{{ helper.localDate(item.createdAt) }}</td>
                <td>
                  <input style="width:30%" class="form-control J_inputSort" maxlength="1" type="text" value="{{item[key]}}"
                    data-url="/admin/sort/{{gameType.type}}/{{position}}/{{item.id}}" placeholder="输入1-9">
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

<div class="modal fade" id="modal-default" style="display: none;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span></button>
        <h4 class="modal-title">更新成功</h4>
      </div>
      <div class="modal-body">
        <p>手动刷新查看最新顺序, 点击外面任意区域即可关闭弹窗</p>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
{% endblock %}

{% block script %}
<!-- <link rel="stylesheet" href="/public/plugins/iCheck/square/blue.css">
<script src="/public/plugins/iCheck/icheck.min.js"></script> -->
<script>
  $(function () {
    // $('[data-toggle="popover"]').popover()

    $(".J_inputSort").on('blur', function () {
      var self = this;
      var url = $(this).data('url');
      var val = $.trim($(this).val());
      if (val > 0) {
        $.post(url, {
          sort: val
        }, function (res) {
          $("#modal-default").modal('show');
        });
      }
    });
  });
</script>
{% endblock %}