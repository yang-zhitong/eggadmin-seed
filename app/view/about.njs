{% extends './base.njs' %}

{% block main %}
<main class="width-1280 main">
  <p class="page-box-title">关于我们</p>
  <div class="page-box-body">
    {{ result.content | safe }}
  </div>
</main>
{% endblock %}
