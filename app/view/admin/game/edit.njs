{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->  
<section class="content-header">
  <h1>{{ '编辑' if queryGame else '新增' }}游戏</h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <!-- form start -->
        <form enctype="multipart/form-data"
         {% if queryGame %} 
         action="/admin/game/{{queryGame.id}}/edit" 
         {% else %} 
         action="/admin/game/add" 
         {% endif %} 
         method="post">

          <div class="box-body">

            <div class="form-group">
              <label for="input1">名字</label>
              <input type="text" class="form-control" id="input1" name="name" placeholder="" value="{{queryGame.name}}">
            </div>
            <div class="form-group">
              <label for="input5">辅助描述</label>
              <input type="text" class="form-control" id="input5" name="additionName" placeholder="如:[三端]" value="{{queryGame.additionName}}">
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
              <label for="input6">人气</label>
              <input type="text" class="form-control" id="input6" name="hot" placeholder="" value="{{ queryGame.hot if queryGame.hot else 0 }}">
            </div>

            <div class="checkbox">
              <label>
                <input name="iconPC" type="checkbox" {% if queryGame.iconPC %}checked{% endif %}> PC端小图标
              </label>
            </div>
            <div class="checkbox">
              <label>
                <input name="iconIOS" type="checkbox" {% if queryGame.iconIOS %}checked{% endif %}> IOS小图标
              </label>
            </div>
            <div class="checkbox">
              <label>
                <input name="iconAD" type="checkbox" {% if queryGame.iconAD %}checked{% endif %}> 安卓小图标
              </label>
            </div>

            <div class="form-group">
              <label for="input4">官网左侧预告开服时间</label>
              <input type="text" class="form-control" id="input4" name="openTime" placeholder="" value="{{queryGame.openTime}}">
            </div>

            <div class="form-group">
              <label for="fileInput" class="input-group-btn">
                  <span class="btn btn-primary">
                      <i class="glyphicon glyphicon-folder-open"></i>  
                      PC缩略图 <input type="file" name="filepc" id="fileInput" style="display: none;">
                  </span>
              </label>
              <p id="J_helpBlock" class="help-block"></p>
            </div>
            
            {% if queryGame.img %}
            <div class="form-group">
              <label>pc端原图(图片比例仅作展示, 点击查看原图)</label>
              <a href="{{queryGame.img}}" target="_blank" class="thumbnail">
                <img width="180" height="180" alt="100%x180" src="{{queryGame.img}}" data-holder-rendered="true">
              </a>
            </div>
            {% endif %}

            <div class="form-group">
              <label for="fileInput2" class="input-group-btn">
                  <span class="btn btn-primary">
                      <i class="glyphicon glyphicon-folder-open"></i>  
                      手机缩略图 <input type="file" name="filemb" id="fileInput2" style="display: none;">
                  </span>
              </label>
              <p id="J_helpBlock2" class="help-block"></p>
            </div>


            {% if queryGame.imgMobile %}
            <div class="form-group">
              <label>手机端原图(图片比例仅作展示, 点击查看原图)</label>
              <a href="{{queryGame.imgMobile}}" target="_blank" class="thumbnail">
                <img width="180" height="180" alt="100%x180" src="{{queryGame.imgMobile}}" data-holder-rendered="true">
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
          <a href="/admin/game/{{queryGame.id}}/delete" type="button" class="btn btn-primary">确认</a>
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

      $("#fileInput2").on('change', function(e) {
        console.log(e.target.files);
        if (e.target.files.length > 1) {
          return false;
        }
        file2 = e.target.files[0];
        $('#J_helpBlock2').text('上传图片名: ' + file2.name);
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
        if (file2) {
          var size = file2.size / 1024 | 0;
          if (!/image/.test(file2.type)) {
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