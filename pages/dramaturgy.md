---
layout: project
title: dramaturgy
permalink: /dramaturgy
section: dramaturgy
---

<div class="blog-container">
    {% for post in site.categories.dramaturgy %}
      {% if post.url %}
      <section class="{{ post.title }}">
        <div class="section-container">
        <a href="{{ post.url }}" class="post-url">
          <img src="{{- post.image | relative_url -}}" alt="" class="post-featured-images">
        </a>
      </div>

        <div class="blog-title"><a href="{{ post.url }}" class="post-url">{{ post.title }}</a></div>

      </section>
      {% endif %}
    {% endfor %}
</div>
