{% extends './base.njs' %}

{% block main %}
<main class="width-1280 main">
  <p class="page-box-title">联运合作</p>
  <div class="page-box-body">
    {{ result.content | safe }}
  </div>
</main>
{% endblock %}