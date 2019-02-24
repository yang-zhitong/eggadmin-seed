{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    友情链接
  </h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <div class="box-header">
          <h3 class="box-title">友情链接</h3>
          <div class="box-tools">
            <a href="/admin/friend/add" type="button" class="btn btn-sm btn-primary">新增友链</a>
          </div>
        </div>

        <div class="box-body table-responsive">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th>名称</th>
                <th>地址</th>
                <th>操作</th>
              </tr>
              {% for item in list %}
              <tr>
                <td>{{item.title}}</td>
                <td>{{item.href}}</td>
                <td>
                  <div class="btn-group">
                    <a href="/admin/friend/{{item.id}}" type="button" class="btn btn-info btn-xs">编辑</a>
                  </div>
                </td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </div>


      </div>
    </div>
  </div>
</section>


{% endblock %}
{% block script %}
{% endblock %}