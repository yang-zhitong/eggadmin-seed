{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    新闻管理
  </h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <div class="box-header">
          <h3 class="box-title">新闻列表</h3>
          <div class="box-tools">
            <a href="/admin/new/add" type="button" class="btn btn-sm btn-primary">新增新闻</a>
          </div>  
        </div>

        <div class="box-body table-responsive">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th width="30%">新闻标题</th>
                <th>类别</th>
                <th>操作</th>
                <th>创建时间</th>
                <th>置顶
                  <small style="font-weight:400" class="text-info">（数字越大越靠前, 光标失去焦点即保存, 刷新查看正确结果）</small>
                </th>
              </tr>
              {% for item in list %}
              <tr>
                <td>{{item.title}}</td>
                <td>{{item.type}}</td>
                <td>
                  <div class="btn-group">
                    <a href="/admin/new/{{item.id}}/edit" type="button" class="btn btn-info btn-xs">编辑</a>
                  </div>
                </td>
                <td>{{ helper.localDate(item.createdAt) }}</td>
                <td>
                  <input data-toggle="popover" data-container="body" data-placement="right" data-content="保存成功，刷新查看最新排序" style="width:30%" value="{{item.sort}}" class="form-control J_inputSort" maxlength="2" type="text" data-url="/admin/new/{{item.id}}/sort" placeholder="1-99">
                </td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </div>

        {% if pageRange > 1 %}
        <div class="box-footer clearfix">
          <ul class="pagination pagination-sm no-margin">
            {% if nowPage > 1 %}
            <li><a href="/admin/new?page={{nowPage - 1}}">«</a></li>
            {% endif %}
            {% for i in range(1, pageRange + 1) -%}
            <li><a href="/admin/new?page={{i}}">{{i}}</a></li>
            {%- endfor %}
            {% if nowPage < pageRange %}
            <li><a href="/admin/new?page={{nowPage + 1}}">»</a></li>
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
<script>
  $(function() {
    $(".J_inputSort").on('blur', function() {
      var self = this;
      var url = $(this).data('url');
      var val = $.trim($(this).val());
      if (val > 0) {
        $.post(url, { sort: val}, function() {
          $(self).popover();
          $(self).popover('show');
          setTimeout(function() {
            $(self).popover('destroy');
          }, 1000)
        })
      }
    });
  });
</script>
{% endblock %}
