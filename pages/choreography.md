---
layout: project
title: Choreography
permalink: /choreography
section: choreography
---

<!-- <section>


  <ul>
    {% for post in site.posts %}
    <li>
      <img src="{{- post.image | relative_url -}}" alt="" class="post-featured-images">

      <h4><a href="{{ post.url }}" class="post-url">{{ post.title }}</a></h4>
    </li>
    {% endfor %}
  </ul>


</section> -->

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





<!-- {% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reverse %}
<h2 id="{{category[0] | uri_escape | downcase }}">{{category[0] | capitalize}}</H2>
<ul>
  {% for post in sorted_posts %}
 	<li><a href="{{ site.url }}{{ site.baseurl }}{{  post.url }}">{{  post.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %} -->
