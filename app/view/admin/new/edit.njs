{% extends '../layout/base.njs' %}

{% block head %}
<link rel="stylesheet" href="/public/plugins/ueditor/third-party/webuploader/webuploader.css">
<script type="text/javascript" charset="utf-8" src="/public/plugins/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/plugins/ueditor/ueditor.all.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/plugins/ueditor/lang/zh-cn/zh-cn.js"></script>
{% endblock %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>{{ '编辑' if queryNew else '新增' }}新闻</h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <!-- form start -->
        <form {% if queryNew %} action="/admin/new/{{queryNew.id}}/edit" {% else %} action="/admin/new/add" {% endif %}
          method="post">
          <div class="box-body">
            <div class="form-group">
              <label for="input1">新闻名称</label>
              <input type="text" class="form-control" id="input1" name="title" placeholder="新闻名称" value="{{queryNew.title}}">
            </div>
            <div class="form-group">
              <label for="input2">新闻类型</label>
              <input type="text" class="form-control" id="input2" name="type" placeholder="如资讯，公告，攻略" value="{{queryNew.type}}">
            </div>
            <div class="form-group">
              <label for="input2">内容(编辑器待添加)</label>
              <script id="editor" type="text/plain" style="width:100%;height:600px;"></script>
            </div>
          </div>
          <div class="box-footer">
            <button type="submit" class="btn btn-primary">提交</button>
            {% if queryNew %}
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
        <a href="/admin/new/{{queryNew.id}}/delete" type="button" class="btn btn-primary">确认</a>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>

<div class="hide-content" style="display:none">
    
</div>
{% endblock %}


{% block script %}
<script>
  $(function () {
    // // 富文本
    // var ue = UE.getEditor('editor', {
    //   autoHeightEnabled: true,
    // });
    // ue.ready(function () {
    //   ue.setContent('');
    // });

  });
</script>
{% endblock %}