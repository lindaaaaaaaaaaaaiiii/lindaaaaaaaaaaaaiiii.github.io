---
layout: default
title: 我是谁
permalink: /about/
---
{% assign about_settings = site.data.site_settings.about %}
<div class="about-page">
  <section class="about-intro{% if about_settings.photo %} has-portrait{% endif %}">
    <div class="about-intro__copy">
      <p class="eyebrow">{{ about_settings.eyebrow | default: "ABOUT / A LITTLE ABOUT ME" | escape }}</p>
      <h1>{{ about_settings.title | default: "Hi, I'm Ning." | escape }}</h1>
      <p class="about-intro__english">{{ about_settings.intro | escape }}</p>
      {% if about_settings.intro_zh %}<p class="about-intro__chinese">{{ about_settings.intro_zh | escape }}</p>{% endif %}
      <p class="about-intro__topics">EDUCATION <span>·</span> CULTURE <span>·</span> SOCIAL INQUIRY <span>·</span> RESEARCH</p>
    </div>
    {% if about_settings.photo %}
    <figure class="about-portrait">
      <img src="{{ about_settings.photo | relative_url }}" alt="Ning's portrait" loading="eager">
      <figcaption>NING / FIELD NOTES</figcaption>
    </figure>
    {% endif %}
  </section>

  <section class="about-story">
    <div class="about-section-marker">01 / A LITTLE ABOUT ME</div>
    <div class="about-story__body">
      <h2>在不同的现场之间，保持好奇。</h2>
      {% for paragraph in about_settings.paragraphs %}
      <p>{{ paragraph | escape }}</p>
      {% endfor %}
    </div>
  </section>

  <section class="about-interests about-shelf-section">
    <div class="about-section-marker">02 / THE SHELF</div>
    <div class="about-interests__body">
      <p class="about-shelf-kicker">BOOKS · FILMS · MUSIC</p>
      <h2>正在读、看与听</h2>
      <p class="about-shelf-intro">一些让我停下来、反复想起，或愿意再次回到其中的作品。</p>
      {% assign shelf_items = about_settings.shelf_items | default: empty %}
      {% if shelf_items.size > 0 %}
      <div class="about-shelf-grid">
        {% for item in shelf_items %}
          {% if item.link %}<a class="about-shelf-item" href="{{ item.link | escape }}" target="_blank" rel="noopener noreferrer">{% else %}<article class="about-shelf-item">{% endif %}
            <div class="about-shelf-cover about-shelf-cover--{{ item.type | default: 'book' | slugify }}">
              {% if item.cover %}
              <img src="{{ item.cover | relative_url }}" alt="{{ item.title | escape }} 封面" loading="lazy">
              {% else %}
              <div class="about-shelf-cover__placeholder"><span>{{ item.type | upcase }}</span><span>{{ item.title | escape }}</span></div>
              {% endif %}
            </div>
            <div class="about-shelf-item__meta">
              <span class="about-shelf-item__type">{{ item.type | default: "BOOK" | upcase }}</span>
              <h3>{{ item.title | escape }}</h3>
              {% if item.creator %}<p class="about-shelf-item__creator">{{ item.creator | escape }}</p>{% endif %}
              {% if item.note %}<p class="about-shelf-item__note">{{ item.note | escape }}</p>{% endif %}
            </div>
          {% if item.link %}</a>{% else %}</article>{% endif %}
        {% endfor %}
      </div>
      {% else %}
      <div class="about-shelf-empty">
        <span>THE SHELF IS TAKING SHAPE</span>
        <p>书架正在慢慢添置。可以从一本书、一部电影，或一张专辑开始。</p>
      </div>
      {% endif %}
      <div class="about-shelf-rail" aria-hidden="true"></div>
    </div>
  </section>

  <section class="about-approach">
    <div class="about-section-marker">03 / HOW I LIKE TO WORK</div>
    <div class="about-approach__body">
      <blockquote>Enjoy digging into questions, connecting the dots, and turning messy ideas into clear, meaningful findings.</blockquote>
      <p>我喜欢从一个问题出发，慢慢搜集线索、理解语境，再把复杂的材料整理成清晰而有意义的发现。比起匆忙得出结论，我更享受探索和连接的过程。</p>
    </div>
  </section>

  <section class="about-connect">
    <p class="eyebrow">04 / ALWAYS OPEN TO A GOOD CONVERSATION</p>
    <h2>Always happy to exchange ideas.</h2>
    <p>欢迎交流观点、分享经验，也欢迎认识有趣的人。</p>
    <p class="about-connect__signoff">Feel free to say hi~ <span>☺</span></p>
    <div class="about-connect__footer">READ · WATCH · THINK · CREATE</div>
  </section>
</div>
