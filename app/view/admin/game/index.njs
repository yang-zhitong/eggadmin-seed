{% extends '../layout/base.njs' %}

{% block content %}
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    游戏管理
  </h1>
</section>

<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box box-primary">
        <div class="box-header">
          <h3 class="box-title">游戏列表</h3>
          <div class="box-tools">
            <a href="/admin/game/add" type="button" class="btn btn-sm btn-primary">新增游戏</a>
          </div>  
        </div>
        <div class="box-body table-responsive">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th width="25%">游戏名</th>
                <th>开服时间</th>
                <th>游戏描述</th>
                <th>创建时间</th>
                <th>显示</th>
                <th>显示</th>
                <th>显示</th>
                <th>编辑</th>
              </tr>
              {% for item in gameList %}
              <tr>
                <td>{{item.name}}{{item.additionName}}</td>
                <td>{{ item.openTime.slice(0, 8) if item.openTime else '' }}</td>
                <td>{{ item.des.slice(0, 8) if item.des else '' }}</td>
                <td>{{ helper.localDate(item.createdAt) }}</td>
                <td>
                  {% if item.sortTop > 0 %}
                  <button type="button" data-show="0" data-url="/admin/game/{{item.id}}/show/top" class="J_clickShow btn btn-xs bg-orange btn-flat margin">取消顶部显示</button>
                  {% else %}
                  <button type="button" data-show="1" data-url="/admin/game/{{item.id}}/show/top" class="J_clickShow btn btn-xs btn-default btn-flat margin">顶部显示</button>
                  {% endif %}
                </td>
                <td>
                  {% if item.sortPCLeft > 0 %}
                  <button type="button" data-show="0" data-url="/admin/game/{{item.id}}/show/pcleft" class="J_clickShow btn btn-xs bg-orange btn-flat margin">取消左侧显示</button>
                  {% else %}
                  <button type="button" data-show="1" data-url="/admin/game/{{item.id}}/show/pcleft" class="J_clickShow btn btn-xs btn-default btn-flat margin">左侧端游显示</button>
                  {% endif %}
                </td>
                <td>
                  {% if item.sortMBLeft > 0 %}
                  <button type="button" data-show="0" data-url="/admin/game/{{item.id}}/show/mbleft" class="J_clickShow btn btn-xs bg-orange btn-flat margin">取消左侧显示</button>
                  {% else %}
                  <button type="button" data-show="1" data-url="/admin/game/{{item.id}}/show/mbleft" class="J_clickShow btn btn-xs btn-default btn-flat margin">左侧手游显示</button>
                  {% endif %}
                </td>
                <td>
                  <a href="/admin/game/{{item.id}}/edit" type="button" class="btn btn-info btn-xs">编辑</a>
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
            <li><a href="/admin/game?page={{nowPage - 1}}">«</a></li>
            {% endif %}
            {% for i in range(1, pageRange + 1) -%}
            <li><a href="/admin/game?page={{i}}">{{i}}</a></li>
            {%- endfor %}
            {% if nowPage < pageRange %}
            <li><a href="/admin/game?page={{nowPage + 1}}">»</a></li>
            {% endif %}
          </ul>
        </div>
        {% endif %}

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
          <h4 class="modal-title J_errorMsg">操作结果</h4>
        </div>
        <div class="modal-body">
          <p>手动刷新查看最新顺序, 点击外面任意区域即可关闭弹窗</p>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
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
      $.get(url + '?show=' + show, function(res) {
        if (+res.code == 1) {
          var text = $this.text();
          // 如果是要展示的
          if (show === 1) {
            $this.attr('data-show', 0).data('show', 0);
            $this.text('取消' + text).removeClass('btn-default').addClass('bg-orange');
          } else {
            $this.attr('data-show', 1).data('show', 1);
            $this.text(text.slice(2)).removeClass('bg-orange').addClass('btn-default');
          }
        } else {
          $(".J_errorMsg").addClass('text-danger').text('更新错误, ' + res.msg);
          $("#modal-default").modal('show');
        }
      });
    });
  });
</script>
{% endblock %}