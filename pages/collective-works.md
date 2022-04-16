---
layout: project
title: Collective Works
permalink: /collective-works
section: collective-works
---

<ul>
  {% for post in site.categories.collective-works %}
    {% if post.url %}
        <li>
         <img src="{{- post.image | relative_url -}}" alt="" class="post-featured-images">
        <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endif %}
  {% endfor %}
</ul>
