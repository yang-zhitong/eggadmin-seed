{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    角色管理
  </h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">角色列表</h3>
          <div class="box-tools">
            <a href="/admin/role/add" type="button" class="btn btn-block btn-primary">新增用户</a>
          </div>  
        </div>

        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th>ID</th>
                <th>角色名称</th>
                <th>角色详细描述</th>
                <th>操作</th>
              </tr>
              {% for item in roleList %}
              <tr>
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.description}}</td>
                <td>
                  <div class="btn-group">
                    <a href="/admin/role/{{item.id}}/edit" type="button" class="btn btn-info btn-xs">编辑</a>
                  </div>
                </td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
{% endblock %}