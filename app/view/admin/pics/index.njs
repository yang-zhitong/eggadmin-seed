{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    游戏/玩家图片管理
  </h1>
</section>

<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <div class="box-header">
          <h3 class="box-title">图片列表</h3>
          <div class="box-tools">
            <a href="/admin/pics/edit" type="button" class="btn btn-sm btn-primary">新加图片</a>
          </div>  
        </div>
        <div class="box-body table-responsive">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th width="25%">图片类型</th>
                <th>图片缩略图</th>
                <th>图片描述</th>
                <th>编辑</th>
              </tr>
              {% for item in list %}
              <tr>
                <td>{% if item.type === 1 %} 游戏截图 {% else %} 玩家照片 {% endif %}</td>
                <td>
                  <img src="{{item.img}}" alt="" style="max-height: 100px">
                </td>
                <td>
                  {{item.title}}
                </td>
                <td>
                  <a href="/admin/pics/edit/{{item.id}}" type="button" class="btn btn-info btn-xs">编辑</a>
                </td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </div>
        <!-- /.box-body -->
        
        {% if pageRange > 1 %}
        <div class="box-footer clearfix">
          <ul class="pagination pagination-sm no-margin">
            {% if nowPage > 1 %}
            <li><a href="/admin/pics?page={{nowPage - 1}}">«</a></li>
            {% endif %}
            {% for i in range(1, pageRange + 1) -%}
            <li><a href="/admin/pics?page={{i}}">{{i}}</a></li>
            {%- endfor %}
            {% if nowPage < pageRange %}
            <li><a href="/admin/pics?page={{nowPage + 1}}">»</a></li>
            {% endif %}
          </ul>
        </div>
        {% endif %}
        
      </div>
    </div>
  </div>
</section>

{% endblock %}

{% block script %}
<!-- <link rel="stylesheet" href="/public/plugins/iCheck/square/blue.css">
<script src="/public/plugins/iCheck/icheck.min.js"></script> -->
<script>
  $(function() {
  });
</script>
{% endblock %}