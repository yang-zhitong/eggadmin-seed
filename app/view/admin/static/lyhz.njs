{% extends '../layout/base.njs' %}

{% block head %}
<script type="text/javascript" charset="utf-8" src="/public/plugins/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/plugins/ueditor/ueditor.all.min.js"></script>
<script type="text/javascript" src="/public/plugins/ueditor/lang/zh-cn/zh-cn.js"></script>
{% endblock %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>联运合作</h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <!-- form start -->
        <form action="/admin/lyhz" method="post" style="width: 100%">
          <div class="box-body">
            <script type="text/plain" id="editor" style="width:100%;height:240px;">
              {% if result.content %}
              {{result.content | safe }}
              {% endif %}
            </script>
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


{% block script %}
<script>
  $(function () {

    var um = UE.getEditor('editor');
    um.ready(function () {
      // um.setContent('');
    });
    
  });
</script>
{% endblock %}