{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->  
<section class="content-header">
  <h1>{{ '编辑' if queryUser else '新增' }}用户</h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <!-- form start -->
        <form {% if queryUser %} action="/admin/manage/{{queryUser.id}}/edit"  {% else %} action="/admin/manage/add" {% endif %} method="post">

          <div class="box-body">
            <div class="form-group">
              <label for="input1">用户名</label>
              <input type="text" class="form-control" id="input1" name="username" placeholder="用户名" value="{{queryUser.username}}">
            </div>
            <div class="form-group">
              <label for="input2">密码</label>
              <input type="password" class="form-control" id="input2" name="password" placeholder="Password">
            </div>
            <div class="form-group">
              <label>用户角色</label>
              <select class="form-control" name="rid">
                {% for item in roleList %}
                <option value="{{item.id}}" {% if item.id == queryUser.roleId %} selected="selected" {% endif %}>{{item.title}}</option>
                {% endfor %}
              </select>
            </div>
          </div>
          <div class="box-footer">
            <button type="submit" class="btn btn-primary">提交</button>
            {% if queryUser %}
            <button type="button" class="btn btn-danger pull-right" data-toggle="modal" data-target="#modal-default">删除</button>
            {% endif %}
          </div>
        </form>

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
          <h4 class="modal-title">删除</h4>
        </div>
        <div class="modal-body">
          <p>确认要删除吗</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">取消</button>
          <a href="/admin/manage/{{queryUser.id}}/delete" type="button" class="btn btn-primary">确认</a>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
{% endblock %}