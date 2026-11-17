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
  {% assign merged_posts = site.posts | where: "subcategory", "社会与公共议题研究" %}
  {% assign sociology_posts = site.posts | where: "subcategory", "社会学研究" %}
  {% assign policy_posts = site.posts | where: "subcategory", "政策与公共议题研究" %}
  {% assign posts = merged_posts | concat: sociology_posts | concat: policy_posts | sort: "date" | reverse %}
  {% include post-list.html posts=posts %}
</section>
<section class="taxonomy" id="market">
  <p class="eyebrow">02 / CONSUMPTION & MARKETS</p><h2>消费与市场</h2>
  <p>消费者访谈、用户需求、市场观察与品牌体验研究。</p>
  {% assign current_market_posts = site.posts | where: "subcategory", "消费与市场" %}
  {% assign legacy_market_posts = site.posts | where: "subcategory", "消费与市场" %}
  {% assign posts = current_market_posts | concat: legacy_market_posts | sort: "date" | reverse %}
  {% include post-list.html posts=posts %}
</section>
