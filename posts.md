---
layout: default
title: Posts
permalink: /posts/
---

<section class="post-list" aria-label="Posts published on this site">
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
  <div class="year-group">
    <h2 class="year-label">{{ year.name }}</h2>
    <ul>
      {% for post in year.items %}

      <li>
        <div class="title">
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
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

<section class="post-list wordpress-post-list" aria-labelledby="wordpress-posts-heading">
  <div class="wordpress-posts-intro">
    <h2 id="wordpress-posts-heading">From My Old Blog</h2>
    <p>These are posts from my old blog, written by much younger versions of me.</p>
    <p>Some may be raw, unfiltered, naive, badly written, or simply wrong. I’m keeping them here as they were—a record of what I thought, learned, and cared about at the time.</p>
    <p>Read accordingly.</p>
  </div>

  <details class="wordpress-archive">
    <summary>
      <span class="wordpress-archive-label">Browse 208 posts from 2007–2016</span>
    </summary>

    <div class="wordpress-archive-posts">
      {% assign wordpress_posts_by_year = site.data.wordpress_posts | group_by_exp: "post", "post.date | date: '%Y'" %}
      {% for year in wordpress_posts_by_year %}
      <div class="year-group">
        <h3 class="year-label">{{ year.name }}</h3>
        <ul>
          {% for post in year.items %}

          <li>
            <div class="title">
              <a
                class="post-link"
                href="{{ post.url }}"
                aria-label="{{ post.title | escape }} (opens on my previous WordPress blog)"
              >{{ post.title | escape }}</a>
              <svg class="post-external-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16">
                <path d="M4 12 12 4M7 4h5v5" />
              </svg>
            </div>

            <div class="post-date">
              <span>{{ post.date | date: "%d/%m" }}</span>
            </div>
          </li>

          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>
  </details>
</section>
