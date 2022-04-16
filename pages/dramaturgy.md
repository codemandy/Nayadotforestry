---
layout: project
title: dramaturgy
permalink: /dramaturgy
section: dramaturgy
---
<ul>
  {% for post in site.categories.dramaturgy %}
    {% if post.url %}
        <li>
         <img src="{{- post.image | relative_url -}}" alt="" class="post-featured-images">
        <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endif %}
  {% endfor %}
</ul>
