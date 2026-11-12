---
layout: default
title: 我是谁
permalink: /about/
---
{% assign about_settings = site.data.site_settings.about %}
<div class="page-intro"><p class="eyebrow">{{ about_settings.eyebrow | default: "ABOUT / 04" }}</p><h1>{{ about_settings.title | default: "我是谁" }}</h1><p>{{ about_settings.intro | default: "一个持续更新的个人写作与研究档案。" }}</p></div>
<div class="prose about-copy">
{% for paragraph in about_settings.paragraphs %}
<p>{{ paragraph }}</p>
{% endfor %}
</div>
