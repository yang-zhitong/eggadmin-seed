<!-- sidebar -->
{% raw %}
<div id="sidebar" class="sidebar bg-color is-white">
  <a class="sidebar-hide" title="点击隐藏/显示菜单栏">
    <i class="iconfont icon-takeup"></i>
  </a>
  <div class="user-profile">
    <a href="/talent/user/info" data-pjax>
      <figure class="avatar image is-64x64">
        <img id="avatar" :src="user.avatar || '/assets/img/avatar.jpg'">
      </figure>
    </a>
    <p class="user-info">
      {{user.user_name}} | {{user.postname}}
    </p>
    <p class="user-join-tips">
      {{tips}}
    </p>
  </div>
  <aside class="menu">
    <ul class="menu-list">
      <li v-for="item of list">
        <a :href="item.url || '#'" data-pjax>
          <span v-if="item.icon!==''" class="icon" :class="{scale: item.icon == 'icon-welfare'}"><i class="iconfont" :class="item.icon"></i></span>
          <!-- <span v-if="item.icon!==''" class="icon"><i class="fas" :class="item.icon"></i></span> -->
          <span class="name">{{ item.name }}</span>
          <span v-if="item.submenu" class="arrow is-pulled-right iconfont icon-daohangxia"></span>
        </a>
        <ul v-if="item.submenu" class="child">
          <li v-for="sub of item.submenu">
            <a :href="sub.url || '#'" data-pjax>
              <!-- 子级菜单没有图标了 20180525 -->
              <!-- <span v-if="sub.icon!==''" class="icon"><i class="fas fa-address-book" :class="sub.icon"></i></span> -->
              <span class="name">{{ sub.name }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</div>
<script>
  var bossPost = ['', 'CEO', 'COO', 'CTO'];
  window.vm.sidebar = new Vue({
    el: '#sidebar',
    data: {
      list: [],
      user: {},
      entryDay: 0, // 加入天数
    },
    computed: {
      tips: function () {
        var boss = bossPost[this.user.post];
        if (boss) return '这是您创建拓美的第' + this.entryDay + '天';
        return '这是您加入拓美的第' + this.entryDay + '天';
      }
    },
    created() {
      // 获取菜单数据
      var vthis = this;
      $.get('/sys/menu/getMenuListByLimit', function (data) {
        if (data.code == 200) {
          vthis.list = data.data;
        } else {
          noty('error', '菜单数据获取失败');
        }
      });

      // 获取当前登录用户信息
      $.get('/talent/user/getLoginUser', function (data) {
        // 获取当前登录用户信息
        vthis.user = data.data;
        // 计算入职天数
        if (vthis.user.entry_date) {
          vthis.entryDay = parseInt(Math.abs((new Date()) - new Date(vthis.user.entry_date * 1000)) / 1000 / 60 / 60 /24);
        }
      });
    }
  });

</script>
{% endraw %}
<!-- /sidebar -->
