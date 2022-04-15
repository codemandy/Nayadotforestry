---
layout: project
title: Choreography
permalink: /choreography
section: choreography
---

<section>

  <h3>Posts</h3>


    {% for post in site.posts %}
        <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
        <time datetime="{{ post.date }}">

        </time>
        {{ post.excerpt | strip_newlines | truncate: 180 }}

    {% endfor %}


</section>
