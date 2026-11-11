---
layout: default
title: 内容
permalink: /content/
---
<div class="page-intro"><p class="eyebrow">INDEX / 01</p><h1>内容</h1><p>从作品、阅读与个人经验出发，持续记录值得思考的内容。</p></div>

<section class="taxonomy" id="culture-reading">
  <p class="eyebrow">01 / CULTURE & READING</p><h2>文化与阅读</h2>
  <p>电影、剧集、纪录片、书籍、文章与阅读札记。</p>
  {% assign posts = site.posts | where: "subcategory", "文化与阅读" %}
  {% include post-list.html posts=posts %}
</section>
<section class="taxonomy" id="creative-work">
  <p class="eyebrow">02 / CREATIVE WORK</p><h2>个人创作</h2>
  <p>随笔、评论、原创文章，以及对个人经验的整理与表达。</p>
  {% assign posts = site.posts | where: "subcategory", "个人创作" %}
  {% include post-list.html posts=posts %}
</section>
<section class="taxonomy" id="social-observation">
  <p class="eyebrow">03 / SOCIAL OBSERVATION</p><h2>社会观察</h2>
  <p>社会现实、公共事件、个体经验与独立思考。</p>
  {% assign posts = site.posts | where: "subcategory", "社会观察" %}
  {% include post-list.html posts=posts %}
</section>
