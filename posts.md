---
layout: default
title: Posts
permalink: /posts/
---

<section class="post-list" aria-label="All posts">
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
  <div class="year-group">
    <h2 class="year-label">{{ year.name }}</h2>
    <ul>
      {% for post in year.items %}

      <li>
        <div class="title">
          <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </div>

        <div class="post-date">
          <span>{{ post.date | date: "%d/%m" }}</span>
        </div>
      </li>

      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</section>
