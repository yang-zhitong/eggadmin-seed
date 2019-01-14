{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    用户管理
    <!-- <small>固定布局的空白示例</small> -->
  </h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">用户列表</h3>

          <div class="box-tools">
            <a href="/admin/manage/add" type="button" class="btn btn-block btn-primary">新增用户</a>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th>ID</th>
                <th>用户名</th>
                <th>用户角色</th>
                <th>Reason</th>
              </tr>
              <tr>
                <td>183</td>
                <td>John Doe</td>
                <td>111</td>
                <td>
                    <div class="btn-group">
                      <button type="button" class="btn btn-info btn-xs">编辑</button>
                    </div>
                </td>
              </tr>
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