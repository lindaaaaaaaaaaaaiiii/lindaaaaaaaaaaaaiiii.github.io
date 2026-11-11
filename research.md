---
layout: default
title: 研究与实践
permalink: /research/
---
<div class="page-intro"><p class="eyebrow">INDEX / 02</p><h1>研究与实践</h1><p>围绕社会问题、公共政策与市场现象开展的研究和实践记录，关注问题意识、研究方法与证据。</p></div>

<section class="taxonomy" id="sociology">
  <p class="eyebrow">01 / SOCIOLOGY</p><h2>社会学研究</h2>
  <p>研究设计、文献梳理、访谈、资料分析与学术写作。</p>
  {% assign posts = site.posts | where: "subcategory", "社会学研究" %}
  {% include post-list.html posts=posts %}
</section>
<section class="taxonomy" id="policy">
  <p class="eyebrow">02 / POLICY & PUBLIC ISSUES</p><h2>政策与公共议题研究</h2>
  <p>政策分析、公共议题、项目研究与评估。</p>
  {% assign posts = site.posts | where: "subcategory", "政策与公共议题研究" %}
  {% include post-list.html posts=posts %}
</section>
<section class="taxonomy" id="market">
  <p class="eyebrow">03 / MARKET RESEARCH</p><h2>市场研究</h2>
  <p>消费者访谈、用户需求、市场观察与品牌体验研究。</p>
  {% assign posts = site.posts | where: "subcategory", "市场研究" %}
  {% include post-list.html posts=posts %}
</section>
