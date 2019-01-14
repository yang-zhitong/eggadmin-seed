<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="renderer" content="webkit">
  <title>{{ title + ' - ' if title else '' }}拓美OA系统页面</title>
  {%- include "./_assets.njs" -%}
  {%- block head %}{% endblock -%}
</head>
<body>
<!-- <div class="music-div" id="music-div" style="position: fixed; top: 50px; left: 240px; z-index: 1888;">
  <iframe id="music-iframe" frameborder="no" border="0" marginwidth="0" marginheight="0" width=300 height=300 src=""></iframe>
</div> -->
<script>
  $(function () {
    setTimeout(() => {
      $('#music-iframe').attr('src', '//music.163.com/outchain/player?type=0&id=169860845&auto=1&height=430');
    }, 0);
  });
</script>
<div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>

<div class="layout">
  {%- include "./_sidebar.njs" -%}
  <!-- wrapper -->
  <div class="wrapper">
    {%- include "./_header.njs" -%}
    <div id="container" class="container is-fluid">
      <div class="page">
        {%- include "./_breadcrumb.njs" -%}
        {% import "./_macro.njs" as macro %}
        {%- block content %}{% endblock -%}
      </div>
    </div>
    {%- include "./_footer.njs" -%}
  </div>
  <!-- /wrapper -->
</div>

{%- block script %}{% endblock -%}

{% if accessDenied === 1 %}
<script>
  noty('error', '您现在没有进入此页面的权限');
</script>
{% else %}
{% endif %}
</body>
</html>
