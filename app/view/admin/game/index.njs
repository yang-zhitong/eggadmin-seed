{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    {{gameType.text}}管理
  </h1>
</section>

<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <div class="box-header">
          <h3 class="box-title">{{gameType.text}}列表</h3>
          <div class="box-tools">
            <a href="/admin/game/{{gameType.type}}/add" type="button" class="btn btn-sm btn-primary">新增{{gameType.text}}</a>
          </div>  
        </div>
        <div class="box-body table-responsive">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th width="30%">游戏名</th>
                <th>游戏描述</th>
                <th>地址</th>
                <th>创建时间</th>
                <th>显示</th>
                <th>显示</th>
                <th>操作</th>
              </tr>
              {% for item in gameList %}
              <tr>
                <td>{{item.name}}</td>
                <td>{{item.des.slice(0, 8)}}</td>
                <td>{{item.href.slice(0, 8) }}</td>
                <td>{{ helper.localDate(item.createdAt) }}</td>
                <td>
                  {% if item.sortTop > 0 %}
                  <button type="button" data-show="0" data-url="/admin/game/{{gameType.type}}/top/{{item.id}}/show" class="J_clickShow btn btn-xs bg-orange btn-flat margin">取消顶部显示</button>
                  {% else %}
                  <button type="button" data-show="1" data-url="/admin/game/{{gameType.type}}/top/{{item.id}}/show" class="J_clickShow btn btn-xs btn-default btn-flat margin">顶部显示</button>
                  {% endif %}
                </td>
                <td>
                  {% if item.sortLeft > 0 %}
                  <button type="button" data-show="0" data-url="/admin/game/{{gameType.type}}/left/{{item.id}}/show" class="J_clickShow btn btn-xs bg-orange btn-flat margin">取消左侧显示</button>
                  {% else %}
                  <button type="button" data-show="1" data-url="/admin/game/{{gameType.type}}/left/{{item.id}}/show" class="J_clickShow btn btn-xs btn-default btn-flat margin">左侧显示</button>
                  {% endif %}
                </td>
                <td>
                  <a href="/admin/game/{{gameType.type}}/{{item.id}}/edit" type="button" class="btn btn-info btn-xs">编辑</a>
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
            <li><a href="/admin/game/{{gameType.type}}?page={{nowPage - 1}}">«</a></li>
            {% endif %}
            {% for i in range(1, pageRange + 1) -%}
            <li><a href="/admin/game/{{gameType.type}}?page={{i}}">{{i}}</a></li>
            {%- endfor %}
            {% if nowPage < pageRange %}
            <li><a href="/admin/game/{{gameType.type}}?page={{nowPage + 1}}">»</a></li>
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
    
    $(document).on('click', '.J_clickShow', function() {
      var $this = $(this);
      var url = $this.data('url');
      var show = +$this.data('show');
      console.log(show);
      $.get(url + '?show=' + show, function(res) {
        if (res.code == 1) {
          var text = $this.text();
          // 如果是要展示的
          if (show === 1) {
            $this.attr('data-show', 0).data('show', 0);
            $this.text('取消' + text).removeClass('btn-default').addClass('bg-orange');
          } else {
            $this.attr('data-show', 1).data('show', 1);
            $this.text(text.slice(2)).removeClass('bg-orange').addClass('btn-default');
          }
        }
      });
    });
  });
</script>
{% endblock %}