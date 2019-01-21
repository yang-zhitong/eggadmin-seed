{% extends '../layout/base.njs' %}

{% block head %}
{% endblock %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>图片管理</h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    {% for img in imgs %}
    <div class="col-xs-6 col-md-3">
      <div class="thumbnail">
        <img style="height: 180px; width: 100%; display: block;" src="{{ img.slice(3) }}" data-holder-rendered="true">
        <div class="caption clearfix">
          <a href="/admin/ue/images/del?src={{img}}" class="btn btn-danger pull-right">删除</a>
          <!-- <button class="btn btn-danger pull-right" role="button" data-toggle="modal" data-target="#modal-default">删除</button> -->
        </div>
      </div>
    </div>
    {% endfor %}
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
        <img src="" alt="" class="img-thumbnail J_delThumbnail">
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">取消</button>
        <a href="/about" type="button" class="btn btn-primary J_sureDel">确认</a>
      </div>

    </div>
  </div>
</div>

{% endblock %}


{% block script %}
<script>
  $(function () {

    // $('#modal-default').on('show.bs.modal', function (e) {
    //   console.log(11);

    // });
  });
</script>
{% endblock %}