---
layout: default
title: 创作
permalink: /content/
---
<div class="page-intro"><p class="eyebrow">INDEX / 01</p><h1>创作</h1><p>从影视、阅读与社会现实出发，记录观看、思考、评论与个人表达。</p></div>

<section class="taxonomy" id="film-reading">
  <p class="eyebrow">01 / FILM & READING</p><h2>影视阅读</h2>
  <p>电影、剧集、纪录片、书籍、文章、书评与观影札记。</p>
  {% assign posts = site.posts | where: "subcategory", "影视阅读" %}
  {% include post-list.html posts=posts %}
</section>
<section class="taxonomy" id="social-observation">
  <p class="eyebrow">02 / SOCIAL OBSERVATION</p><h2>社会观察</h2>
  <p>社会现实、公共事件、个体经验，以及对日常生活与公共议题的观察和思考。</p>
  {% assign posts = site.posts | where: "subcategory", "社会观察" %}
  {% include post-list.html posts=posts %}
</section>
