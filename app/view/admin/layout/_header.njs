<!-- header -->
{% raw %}
<div class="header" id="header">
  <nav class="navbar">
    <div class="navbar-menu">
      <div class="navbar-start">
        <span id="top-message" class="navbar-item">
          <img src="/assets/img/logo.png" alt="" style="width: 30px;margin-right: 10px">
          拓美情报局：距离去纳斯达克上市还有<span id="header-day" style="color: #FF3860">0</span>天！
        </span>
      </div>
      <div class="navbar-end">
        <a class="navbar-item" href="/message" data-pjax>
          <span class="info-red-circle" style="display: none"></span>
          <i class="iconfont icon-msg mr5"></i>
          消息
        </a>
        <a class="navbar-item" href="/talent/user/info" data-pjax>
          <i class="iconfont icon-personal mr5"></i>
          个人中心
        </a>
        <a href="/login/loginOut" class="navbar-item loginout">退出</a>
      </div>
    </div>
  </nav>
</div>
<script>
  // TODO 获取情报局数据
  // 消息检测
  (function autoCheckMessage() {
    $.post('/message/unread', (res) => {
      if (res.code !== 200) {
        new Noty({type: 'error', text: '当前登录状态已过期，请刷新页面重新登录！', theme: 'mint', layout: 'topCenter', modal: true, callbacks: {
          afterClose: function () {window.location.href = '/login'}
        }}).show();
        return false;
      }
      if (res.data) {
        $('.info-red-circle').show();
      } else {
        $('.info-red-circle').hide();
      }
      setTimeout(autoCheckMessage, 60 * 1000);
    });
  }());
  $(function () {
    const endDate = new Date('2019-09-11');
    const day = parseInt((endDate.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24);
    $('#header-day').text(day);
  });
</script>
{% endraw %}
<!-- /header -->
