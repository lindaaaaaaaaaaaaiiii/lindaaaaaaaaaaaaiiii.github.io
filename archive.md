---
layout: default
title: 文章归档
permalink: /archive/
---
<div class="page-intro"><p class="eyebrow">INDEX / 03</p><h1>更多文章</h1><p>按照时间整理的全部文章。影像、阅读、社会观察与研究记录，都可以从这里继续浏览。</p></div>
{% assign grouped = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% if grouped.size > 0 %}
  {% for year in grouped %}
    <section class="archive-year archive-editorial-year">
      <div class="archive-editorial-year-heading">
        <h2>{{ year.name }}</h2>
        <span>{{ year.items.size }} ARTICLES</span>
      </div>
      <div class="archive-editorial-grid">
        {% for post in year.items %}
          <article class="archive-editorial-card">
            <a href="{{ post.url | relative_url }}" aria-label="阅读全文：{{ post.title | escape }}">
              <div class="archive-editorial-image">
                <img src="{% if post.cover %}{{ post.cover | relative_url }}{% else %}{{ '/assets/images/default-cover.svg' | relative_url }}{% endif %}" alt="{{ post.title | escape }}" loading="lazy">
              </div>
              <h3>{{ post.title }}</h3>
              {% if post.description %}<p class="archive-editorial-description">{{ post.description }}</p>{% endif %}
              <div class="archive-editorial-meta">
                <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m-%d-%Y" }}</time>
                <div class="archive-editorial-tags">
                  {% if post.category_group %}<span>{{ post.category_group }}</span>{% endif %}
                  {% if post.subcategory %}<span>{{ post.subcategory }}</span>{% endif %}
                  {% for tag in post.tags limit:1 %}<span>{{ tag }}</span>{% endfor %}
                </div>
              </div>
            </a>
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
{% else %}
  <p class="empty-note">发布第一篇文章后，这里会自动出现文章列表。</p>
{% endif %}
