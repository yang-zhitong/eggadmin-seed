{% extends './base.njs' %}

{% block main %}
<main class="width-1280 main">
  <p class="page-box-title">新闻详情</p>
  标题: {{ queryNew.title }}

  {{ queryNew.content | safe }}
</main>
{% endblock %}
