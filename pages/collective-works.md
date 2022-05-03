---
layout: default
title: Collective Works
permalink: /collective-works
section: collective-works
---

<div class="blog-container">
  {% for post in site.categories.collective-works %}
    <section class="{{ post.categories }}" id="{{ post.categories }}">
      <div class="section-container blog-scroll">
        <!-- <div class="{{ post.categories }}"> -->
        <div class="blog-content">
          <a href="{{ post.url }}" class="post-url"> </a>
            <img src="{{- post.image | relative_url -}}" alt="" class="post-featured-images">
         <div><a href="{{ post.url }}" class="blog-title">{{ post.title }}</a></div>
        </div>
      </div>
    </section>
  {% endfor %}
</div>
