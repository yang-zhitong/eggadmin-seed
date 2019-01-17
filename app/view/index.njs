{% extends './base.njs' %}

{% block main %}
<main class="width-1280 main">
  <p class="page-box-title">热门端游</p>
  <div class="hot-box">
    <div class="games-wrap">
      {% for item in pcTop %}
      <div class="game-box">
        <a href="{{item.href}}"><img src="{{item.img}}" alt="" class="thumbnail" /></a>
        <a href="{{item.href}}" class="name">{{item.name}}</a>
        <p class="des">{{item.des}}</p>
        <div class="icons">
          <a class="ios"></a>
          <a class="android"></a>
          <a class="pc"></a>
        </div>
        <a href="{{item.href}}" class="enter-web">进入官网</a>
      </div>
      {% endfor %}
    </div>
  </div>

  <!-- 开服表 start -->
  <div class="server-list">
    <div class="hd">
      <p class="tab on J_gameTabs">端游开服表</p>
      <p class="tab J_gameTabs">手游开服表</p>
    </div>
    <div class="bd">

      <div class="J_gameTabBd">
        {% for item in pcLeft %}
        <div class="item {% if loop.index0 == 0 %}hover{% endif %}">
          <a class="normal-show">
            <span class="name ellipsis">{{item.name}}</span>
            <span class="open ellipsis">{{item.openTime}}&nbsp;</span>
            <span class="state ellipsis">火爆开放中</span>
          </a>
          <div href="{{item.href}}" class="hover-show ib-center">
            <img src="{{item.img}}" alt="" class="thumbnail ib" />
            <div class="text-box ib">
              <a class="name ellipsis">{{item.name}}</a>
              <p class="open ellipsis">{{item.openTime}}&nbsp;</p>
            </div>
            <a href="{{item.href}}" class="start-link">开始游戏</a>
          </div>
        </div>
        {% endfor %}
      </div>

      <div class="J_gameTabBd" style="display:none">
        {% for item in mbLeft %}
        <div class="item {% if loop.index0 == 0 %} hover {% endif %}">
          <a class="normal-show">
            <span class="name ellipsis">{{item.name}}</span>
            <span class="open ellipsis">{{item.openTime}}&nbsp;</span>
            <span class="state ellipsis">火爆开放中</span>
          </a>
          <div href="{{item.href}}" class="hover-show ib-center">
            <img src="{{item.img}}" alt="" class="thumbnail ib" />
            <div class="text-box ib">
              <a class="name ellipsis">{{item.name}}</a>
              <p class="open ellipsis">{{item.openTime}}&nbsp;</p>
            </div>
            <a href="{{item.href}}" class="start-link">开始游戏</a>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
  <!-- 开服表 end -->

  <!-- 游戏咨询 start -->
  <div class="news-list">
    <div class="common-hd">
      <p class="common-title">游戏资讯</p>
      <a href="" class="more-btn">更多 &nbsp;>></a>
    </div>
    <div class="common-bd">
      {% for item in newList %}
      <div class="item">
        <a href="/news/{{item.id}}" class="title">{{item.title}}</a>
        <span class="time fr">{{ helper.newsFormateDate(item.createdAt) }}</span>
      </div>
      {% endfor %}
    </div>
  </div>
  <!-- 游戏咨询 end -->

  <!-- 快速通道 start -->
  <div class="quickway">
    <div class="common-hd"><span class="common-title">快速通道</span></div>
    <div class="common-bd">
      <a href="/" class="way-item">
        <i class="icon quick1"></i> <span>快速注册</span>
      </a>
      <a href="/" class="way-item">
        <i class="icon quick2"></i> <span>找回密码</span>
      </a>
      <a href="/" class="way-item">
        <i class="icon quick3"></i> <span>充值中心</span>
      </a>
      <a href="/" class="way-item">
        <i class="icon quick4"></i> <span>被盗申诉</span>
      </a>
      <div class="qqkf">
        <i class="kf-icon"></i>
        <div class="ib">
          <a href="/" class="contact-kf">联系在线客服</a>
          <p class="qqnum">官方客服QQ：800828608</p>
        </div>
      </div>
    </div>
  </div>
  <!-- 快速通道 end -->

  <!-- 关注我们 start -->
  <div class="sub-us">
    <div class="common-hd">
      <span class="common-title">关注我们</span>
      <a href="" class="more-btn">更多 &nbsp;>></a>
    </div>
    <div class="bd">
      <div class="sub-way">
        <img src="/public/assets/qrcode_app.png" alt="APP手游端下载" class="qrcode" />
        <p class="text">APP手游端下载</p>
        <p class="text">安卓/苹果手机通用</p>
      </div>
      <div class="sub-way">
        <img src="/public/assets/qrcode_wechat.png" alt="天心神途官方公众号" class="qrcode" />
        <p class="text">天心神途官方公众号</p>
        <p class="text">ID:tianxinst</p>
      </div>
      <div class="sub-way">
        <img src="/public/assets/qrcode_qq.png" alt="官方QQ游戏群" class="qrcode" />
        <p class="text">官方QQ游戏群</p>
        <p class="text">88897788</p>
      </div>
    </div>
  </div>
  <!-- 关注我们 end -->
</main>
{% endblock %}


{% block script %}
<script>
    $(function() {
      $('.J_gameTabs').hover(function() {
        var index = $(this).index();
        $(this)
          .addClass('on')
          .siblings()
          .removeClass('on');
        $('.J_gameTabBd')
          .eq(index)
          .show()
          .siblings()
          .hide();
      });
      $('.J_gameTabBd .item').hover(function() {
        $(this)
          .addClass('hover')
          .siblings('.item')
          .removeClass('hover');
      });
    });
  </script>
{% endblock %}
