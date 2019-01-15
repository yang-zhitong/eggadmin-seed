{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->  
<section class="content-header">
  <h1>{{ '编辑' if queryGame else '新增' }}{{gameType.text}}</h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <!-- form start -->
        <form enctype="multipart/form-data"
         {% if queryGame %} 
         action="/admin/game/{{gameType.type}}/{{queryGame.id}}/edit" 
         {% else %} 
         action="/admin/game/{{gameType.type}}/add" 
         {% endif %} 
         method="post">

          <div class="box-body">

            <div class="form-group">
              <label for="input1">名字</label>
              <input type="text" class="form-control" id="input1" name="name" placeholder="" value="{{queryGame.name}}">
            </div>

            <div class="form-group">
              <label for="input2">描述</label>
              <input type="text" class="form-control" id="input2" name="des" placeholder="" value="{{queryGame.des}}">
            </div>
            <div class="form-group">
              <label for="input3">官网下载地址</label>
              <input type="text" class="form-control" id="input3" name="href" placeholder="" value="{{queryGame.href}}">
            </div>

            <div class="form-group">
              <label for="fileInput" class="input-group-btn">
                  <span class="btn btn-primary">
                      <i class="glyphicon glyphicon-folder-open"></i>  
                      缩略图 <input type="file" name="file" id="fileInput" style="display: none;">
                  </span>
              </label>
              <p id="helpBlock" class="help-block"></p>
            </div>

            {% if queryGame.img %}
            <div class="form-group">
              <label for="input3">原图(图片比例仅作展示, 点击查看原图)</label>
              <a href="{{queryGame.img}}" target="_blank" class="thumbnail">
                <img alt="100%x180" src="{{queryGame.img}}" data-holder-rendered="true">
              </a>
            </div>
            {% endif %}

          </div>
          <div class="box-footer">
            <button type="submit" class="btn btn-primary">提交</button>
            {% if queryGame %}
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
          <p>确认要删除 {{queryGame.name}} 吗</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">取消</button>
          <a href="/admin/game/{{gameType.type}}/{{queryGame.id}}/delete" type="button" class="btn btn-primary">确认</a>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>

  <script>
    $(function() {
      $("#fileInput").on('change', function(e) {
        if (e.target.files.length > 1) {
          return false;
        }
        var file = e.target.files[0];
        $("#helpBlock").text('上传图片名: ' + file.name);
      });
    });
  </script>
{% endblock %}