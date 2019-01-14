{% extends '../layout/base.njs' %}

{% block content %}
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          固定布局
          <small>固定布局的空白示例</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> 主页</a></li>
          <li><a href="#">布局</a></li>
          <li class="active">固定</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="callout callout-info">
          <h4>提示!</h4>

          <p>Add the fixed class to the body tag to get this layout. The fixed layout is your best option if your
            sidebar
            is bigger than your content because it prevents extra unwanted scrolling.</p>
        </div>
        <!-- Default box -->
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">标题</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fa fa-minus"></i></button>
              <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body">
            开始创建你感兴趣的应用!
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            页脚
          </div>
          <!-- /.box-footer-->
        </div>
        <!-- /.box -->

      </section>
{% endblock %}

