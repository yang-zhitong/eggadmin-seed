<!DOCTYPE html>
<html lang="zh-Hans">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- 用在360中 -->
    <meta name="renderer" content="webkit" />
    <!-- 用在其它 -->
    <meta name="force-rendering" content="webkit" />
    <!-- 针对 IE 浏览器 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- 针对百度搜索 -->
    <meta http-equiv="Cache-Control" content="no-transform" />

    <title>首页</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <!-- <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> -->
    <script src="http://lib.baomitu.com/jquery/1.12.4/jquery.min.js"></script>
    <!--[if lt IE 9]>
      <script src="http://lib.baomitu.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="/public/pages/index.css?v2" />
    <script>
      $(function() {
        $('.J_scroll').on('click', function() {
          $( "html, body" ).animate({scrollTop: 3000 });
        });
      });
    </script>
  </head>

  <body>
    <header>
      <div class="lt-header">
        <div class="width-1280">
          <a href="http://www.ccxst.com" target="_blank" class="header-link">
            <i class="icon icon1"></i> <span>开服列表</span>
          </a>
          <a href="" class="header-link">
            <i class="icon icon2"></i> <span>放到桌面</span>
          </a>
          <div class="fr">
            <a href="/about" class="header-link">
              <i class="icon icon3"></i> <span>关于我们</span>
            </a>
            <a href="customer" class="header-link">
            <!-- <a  target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=4000929777&site=qq&menu=yes" class="header-link"> -->
              <i class="icon icon4"></i> <span>在线客服</span>
            </a>
            <a href="javascript:;" class="header-link J_scroll">
              <i class="icon icon5"></i> <span>关注微信</span>
            </a>
          </div>
        </div>
      </div>
      <div class="nav-header">
        <div class="width-1280 ib-center">
          <img src="/public/assets/logo.png" alt="" class="logo ib" />
          <nav class="nav fr">
            <a href="/" class="nav-item">首页</a>
            <a href="http://www.ccxst.com" target="_blank" class="nav-item">开服列表</a>
            <a href="/zzsq" class="nav-item">资质授权</a>
            <a href="/lyhz" class="nav-item">联运合作</a>
            <a href="/about" class="nav-item">关于我们</a>
            <a href="/customer" class="nav-item">客服中心</a>
          </nav>
        </div>
      </div>
    </header>
    <div class="banner-bg">
      <div class="width-1280">
        <div class="qrcode-box wechat">
          <img src="/public/assets/qrcode_wechat.png" alt="官方公众号" class="code-img ">
        </div>
        <div class="qrcode-box app">
          <img src="/public/assets/qrcode_app.png" alt="APP下载" class="code-img ">
        </div>
        <div class="shadow"></div>
        <div class="shadow mirror"></div>
      </div>
    </div>

    {%- block main %}{% endblock -%}
    
    <footer>
      <div class="width-1280">
        <p class="footer-line">
          健康游戏公告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防上当受骗
          适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活
        </p>
        <p class="footer-line">
          文网游备字[2011]C-RPG152号
          |网络文化经营许可证:皖网文〔2018〕10415-261号
          |增值电信业务经营许可证:浙B2-20110064
        </p>
        <p class="footer-line">
          《互联网文化管理暂行规定》|《网络游戏管理暂行办法》|
          赣ICP备18015084号-2 适龄提示：本游戏适合18岁以上的成年人进入
        </p>
        <img src="/public/assets/footer_company.png" alt="" class="company-logo" />
        <p class="copyright">
          CopyRight 2018-2019 江西搜搜信息科技有限公司, All right reserved.
        </p>
      </div>
    </footer>
    {%- block script %}{% endblock -%}
  </body>
</html>
