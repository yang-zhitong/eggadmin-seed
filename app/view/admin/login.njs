<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="renderer" content="webkit">
  <title>登录</title>
  {%- include "./layout/_assets.njs" -%}
</head>

<body class="hold-transition login-page">

  <div class="login-box">
    <div class="login-logo">
      <a><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      {% if code === -1 %}
      <p class="login-box-msg text-danger">{{msg}}</p>
      {% else %}
      <p class="login-box-msg">请登录</p>
      {% endif %}

      <form action="/admin/login" method="post">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="用户名" name="username">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="密码" name="password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8"></div>
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
          </div>
        </div>
      </form>
    </div>
    <!-- /.login-box-body -->
  </div>

</body>
</html>