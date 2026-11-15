---
layout: default
title: 研究与实践
permalink: /research/
---
<div class="page-intro"><p class="eyebrow">INDEX / 02</p><h1>研究与实践</h1><p>围绕社会问题、公共政策与市场现象开展的研究和实践记录，关注问题意识、研究方法与证据。</p></div>

<section class="taxonomy" id="sociology">
  <span id="policy" aria-hidden="true"></span>
  <p class="eyebrow">01 / SOCIAL & PUBLIC ISSUES RESEARCH</p><h2>社会与公共议题研究</h2>
  <p>研究设计、文献梳理、访谈与资料分析，关注社会问题、公共政策及项目评估。</p>
  {% assign posts = site.posts | where_exp: "post", "post.subcategory == '社会与公共议题研究' or post.subcategory == '社会学研究' or post.subcategory == '政策与公共议题研究'" %}
  {% include post-list.html posts=posts %}
</section>
<section class="taxonomy" id="market">
  <p class="eyebrow">02 / MARKET RESEARCH</p><h2>市场研究</h2>
  <p>消费者访谈、用户需求、市场观察与品牌体验研究。</p>
  {% assign posts = site.posts | where: "subcategory", "市场研究" %}
  {% include post-list.html posts=posts %}
</section>
