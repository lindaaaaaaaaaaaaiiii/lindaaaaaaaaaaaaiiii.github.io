---
layout: default
title: 文章归档
permalink: /archive/
---
<div class="page-intro"><p class="eyebrow">INDEX / 03</p><h1>文章归档</h1><p>按照发布时间整理文章，回看写作与研究的轨迹。</p></div>
{% assign grouped = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% if grouped.size > 0 %}
  {% for year in grouped %}
    <section class="archive-year"><h2>{{ year.name }}</h2>{% include post-list.html posts=year.items %}</section>
  {% endfor %}
{% else %}
  <p class="empty-note">发布第一篇文章后，这里会自动出现按年份整理的归档。</p>
{% endif %}
