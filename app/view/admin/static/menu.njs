{% extends '../layout/base.njs' %}

{% block content %}
<section class="content-header">
  <h1>网站操作</h1>
</section>

<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <a href="/admin/doRefresh" type="submit" class="btn btn-lg btn-primary">刷新图片缓存</a>
    </div>
  </div>
</section>
{% endblock %}

