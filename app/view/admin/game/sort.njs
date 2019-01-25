{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    排序管理
    <small>表格排序时, 光标离开会提示保存成功, 不过不会自动刷新,可以改几个再刷新查看顺序是否正确 </small>
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
            {% elif key == 'sortPCLeft' %}
            左侧端游
            {% else %}
            左侧手游
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
                  <small style="font-weight:400" class="text-info">(数字为1-99, 删除或输入0则为取消显示)</small>
                </th>
              </tr>
              {% for item in sortList %}
              <tr>
                <td>{{item.name}}</td>
                <td>{{ item.des.slice(0, 8) if item.des else '' }}</td>
                <td>{{ item.href }}</td>
                <td>{{ helper.localDate(item.createdAt) }}</td>
                <td>
                  <input data-toggle="tooltip" data-container="right" data-placement="right"
                  data-title="数字1-99,失去焦点自动保存"
                  style="width:30%" class="form-control J_inputSort" maxlength="2" type="text" value="{{item[key]}}"
                    data-url="/admin/sort/{{position}}/{{item.id}}" placeholder="">
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
        <h4 class="modal-title J_errorMsg">操作结果</h4>
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
    $('[data-toggle="tooltip"]').tooltip();

    // $('#modal-default').on('hidden.bs.modal', function (e) {
    //   console.log(1);
    //   if ($(".modal-backdrop.fade.in").length > 1) {
    //     $(".modal-backdrop.fade.in").remove();
    //   }
    // })

    $(".J_inputSort").on('blur', function () {
      var self = this;
      var url = $(this).data('url');
      var val = $.trim($(this).val());
      if (!val) val = 0;
      if (val >= 0) {
        $.post(url, { sort: val }, function (res) {
          if (+res.code !== 1) {
            $(".J_errorMsg").addClass('text-danger').text('更新错误, ' + res.msg);
          } else {
            $(".J_errorMsg").addClass('text-success').text('更新成功, ' + (res.msg ? res.msg : ''));
          }
          $("#modal-default").modal('show');
        });
      }
    });
  });
</script>
{% endblock %}