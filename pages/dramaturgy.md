---
layout: default
title: dramaturgy
permalink: /dramaturgy
section: dramaturgy
---

<div class="blog-container">
  {% for post in site.categories.dramaturgy %}
    <section class="{{ post.categories }}" id="{{ post.categories }}">
      <div class="section-container">
        <!-- <div class="{{ post.categories }}"> -->
        <a href="{{ post.url }}" class="post-url">
          <img src="{{- post.image | relative_url -}}" alt="" class="post-featured-images">
        </a>
      <!-- </div> -->
        <div class="blog-title">
          <a href="{{ post.url }}" class="post-title">{{ post.title }}</a>
        </div>
      </div>
    </section>
  {% endfor %}
</div>
