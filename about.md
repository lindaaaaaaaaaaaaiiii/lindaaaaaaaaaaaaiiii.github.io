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

  <section class="about-interests">
    <div class="about-section-marker">02 / WHAT I'M CURIOUS ABOUT</div>
    <div class="about-interests__body">
      <h2>一些持续关注的方向</h2>
      <div class="about-interest-grid">
        <a class="about-interest-card" href="{{ '/content/' | relative_url }}">
          <span>01 / EDUCATION</span>
          <h3>教育与人的成长</h3>
          <p>从课堂与具体的人出发，关注知识、经验和成长如何彼此连接。</p>
          <i>↗</i>
        </a>
        <a class="about-interest-card" href="{{ '/content/' | relative_url }}">
          <span>02 / CULTURE</span>
          <h3>阅读与电影</h3>
          <p>在书页和银幕之间，观察故事、人物、记忆与时代。</p>
          <i>↗</i>
        </a>
        <a class="about-interest-card" href="{{ '/content/' | relative_url }}">
          <span>03 / SOCIETY</span>
          <h3>社会观察</h3>
          <p>留意日常经验与公共议题，尝试理解行为背后的社会关系。</p>
          <i>↗</i>
        </a>
        <a class="about-interest-card" href="{{ '/research/' | relative_url }}">
          <span>04 / RESEARCH</span>
          <h3>研究与专业探索</h3>
          <p>对定性研究、消费者洞察、学术研究与证据分析保持兴趣。</p>
          <i>↗</i>
        </a>
      </div>
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
