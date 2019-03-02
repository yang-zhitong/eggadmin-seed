{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->  
<section class="content-header">
  <h1>{{ '编辑' if queryItem else '新增' }}图片</h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <!-- form start -->
        <form enctype="multipart/form-data"
         {% if queryItem %} 
         action="/admin/pics/edit/{{queryItem.id}}" 
         {% else %} 
         action="/admin/pics/edit" 
         {% endif %} 
         method="post">

          <div class="box-body">

            <div class="form-group">
              <label for="input1">图片描述(选填)</label>
              <input type="text" class="form-control" id="input1" name="title" placeholder="" value="{{queryItem.title}}">
            </div>
   

            <div class="form-group">
                <div class="radio">
                  <label>
                    <input type="radio" name="type" value="1" {% if queryItem.type === 1 %} checked="" {% endif %}>
                    游戏截图
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="type" value="2" {% if queryItem.type === 2 %} checked="" {% endif %}>
                    玩家照片
                  </label>
                </div>
            </div>

        
            <div class="form-group">
              <label for="fileInput" class="input-group-btn">
                  <span class="btn btn-primary">
                      <i class="glyphicon glyphicon-folder-open"></i>  
                      缩略图 <input type="file" name="pic" id="fileInput" style="display: none;">
                  </span>
              </label>
              <p id="J_helpBlock" class="help-block"></p>
            </div>
            
            {% if queryItem.img %}
            <div class="form-group">
              <label>原图(图片比例仅作展示, 点击查看原图)</label>
              <a href="{{queryItem.img}}" target="_blank" class="thumbnail">
                <img width="180" height="180" alt="100%x180" src="{{queryItem.img}}" data-holder-rendered="true">
              </a>
            </div>
            {% endif %}


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
          <p>确认要删除 {{queryItem.name}} 吗</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">取消</button>
          <a href="/admin/pics/delete/{{queryItem.id}}" type="button" class="btn btn-primary">确认</a>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>

  <script>
    $(function() {
      var file, file2;

      $("#fileInput").on('change', function(e) {
        console.log(e.target.files);
        if (e.target.files.length > 1) {
          return false;
        }
        file = e.target.files[0];
       $('#J_helpBlock').text('上传图片名: ' + file.name);
      });


      $('form').on('submit', function() {
        if (file) {
          var size = file.size / 1024 | 0;
          if (!/image/.test(file.type)) {
            alert('图片格式不对');
            return false;
          }
          if (size > 2000) {
            alert('图片太大了');
            return false;
          }
        }
        return true;
      });
    });
  </script>
{% endblock %}