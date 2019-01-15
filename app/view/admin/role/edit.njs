{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->  
<section class="content-header">
  <h1>{{ '编辑' if queryRole else '新增' }}角色</h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <!-- form start -->
        <form {% if queryRole %} action="/admin/role/{{queryRole.id}}/edit"  {% else %} action="/admin/role/add" {% endif %} method="post">

          <div class="box-body">
            <div class="form-group">
              <label for="input1">角色名称</label>
              <input type="text" class="form-control" id="input1" name="title" placeholder="角色名称" value="{{queryRole.title}}">
            </div>
            <div class="form-group">
              <label for="input2">角色详细描述(可为空)</label>
              <input type="text" class="form-control" id="input2" name="description" placeholder="角色名称" value="{{queryRole.description}}">
            </div>
          </div>
          <div class="box-footer">
            <button type="submit" class="btn btn-primary">提交</button>
            {% if queryRole %}
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
          <a href="/admin/role/{{queryRole.id}}/delete" type="button" class="btn btn-primary">确认</a>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
{% endblock %}