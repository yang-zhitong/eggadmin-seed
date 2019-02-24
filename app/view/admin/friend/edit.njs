{% extends '../layout/base.njs' %}

{% block head %}
{% endblock %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>{{ '编辑' if queryItem else '新增' }}友链</h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <!-- form start -->
        <form {% if queryItem %} action="/admin/friend/{{queryItem.id}}" {% else %} action="/admin/friend/add" {% endif %}
          method="post" style="width: 100%">
          <div class="box-body">
            <div class="form-group">
              <label for="input1">名称</label>
              <input type="text" class="form-control" id="input1" name="title" placeholder="名称" value="{{queryItem.title}}">
            </div>
            <div class="form-group">
              <label for="input3">链接</label>
              <input type="text" class="form-control" id="input3" name="href" value="{{queryItem.href}}">
            </div>
          </div>
          <div class="box-footer">
            <button type="submit" class="btn btn-primary">提交</button>
            {% if queryItem %}
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
        <a href="/admin/friend/delete/{{queryItem.id}}" type="button" class="btn btn-primary">确认</a>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>

{% endblock %}


{% block script %}
{% endblock %}