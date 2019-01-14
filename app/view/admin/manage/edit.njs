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
        <form {% if queryUser %} action="/admin/manage/edit"  {% else %} action="/admin/manage/add" {% endif %} method="post">

          <div class="box-body">
            <div class="form-group">
              <label for="input1">用户名</label>
              <input type="text" class="form-control" id="input1" name="username" placeholder="用户名" value="{{queryUser.username}}">
            </div>
            <div class="form-group">
              <label for="input2">密码</label>
              <input type="password" class="form-control" id="input2" placeholder="Password">
            </div>
            <div class="form-group">
              <label>用户角色</label>
              <select class="form-control" name="id">
                {% for item in roleList %}
                <option value="{{item.id}}" {% if item.id == queryUser.id %} selected="selected" {% endif %}>{{item.title}}</option>
                {% endfor %}
              </select>
            </div>
          </div>
          <div class="box-footer">
            <button type="submit" class="btn btn-primary">提交</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</section>
{% endblock %}