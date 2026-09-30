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
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}"><span class="post-link-text">{{ post.title | escape }}</span></a>
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

<section class="post-list external-post-list wordpress-post-list" aria-labelledby="wordpress-posts-heading">
  <div class="external-posts-intro">
    <h2 id="wordpress-posts-heading">From My Old Blog</h2>
    <p>These are raw posts from a much younger version of me—often naive, badly written, and sometimes just stupid. I’m keeping them as a record. Read accordingly.</p>
  </div>

  <details class="external-archive">
    <summary>
      <span class="external-archive-label">Browse 208 posts from 2007–2016</span>
    </summary>

    <div class="external-archive-posts">
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
                referrerpolicy="no-referrer"
                aria-label="{{ post.title | escape }} (opens on my previous WordPress blog)"
              ><span class="post-link-text">{{ post.title | escape }}</span></a>
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

<section class="post-list external-post-list winpoin-post-list" aria-labelledby="winpoin-posts-heading">
  <div class="external-posts-intro">
    <h2 id="winpoin-posts-heading">From the Windows Community</h2>
    <p>During my college years, I contributed to Indonesia’s Windows community—as a Microsoft Student Partner (MSP), community builder, and Windows app developer. These articles cover app development, developer programs, platform ideas, and helping more people build for Windows.</p>
  </div>

  <details class="external-archive">
    <summary>
      <span class="external-archive-label">Browse 26 posts from 2015–2016</span>
    </summary>

    <div class="external-archive-posts">
      {% assign winpoin_posts_by_year = site.data.winpoin_posts | group_by_exp: "post", "post.date | date: '%Y'" %}
      {% for year in winpoin_posts_by_year %}
      <div class="year-group">
        <h3 class="year-label">{{ year.name }}</h3>
        <ul>
          {% for post in year.items %}

          <li>
            <div class="title">
              <a
                class="post-link"
                href="{{ post.url }}"
                referrerpolicy="no-referrer"
                aria-label="{{ post.title | escape }} (opens on WinPoin)"
              ><span class="post-link-text">{{ post.title | escape }}</span></a>
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

<script defer src="{{ site.baseurl }}/assets/post-title-marquee.js"></script>
