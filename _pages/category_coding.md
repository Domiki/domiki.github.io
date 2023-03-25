---
layout: archive
permalink: /categories/coding
title: "Coding Category"
author_profile: true
sidebar:
  nav: coding
---

## 알고리즘
----

{% assign posts = site.categories['Algorithm'] %}
{% for post in posts reversed %}
  {% if post.id %}
    {% assign title = post.title | markdownify | remove: "<p>" | remove: "</p>" %}
  {% else %}
    {% assign title = post.title %}
  {% endif %}

  <div class="{{ include.type | default: 'list' }}__item">
    <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
      <h6 style="margin-top: 0.5em">
        {% if post.link %}
          <a href="{{ post.link }}">{{ title }}</a>
        {% else %}
          <a href="{{ post.url | relative_url }}" rel="permalink">{{ title }}</a>
        {% endif %}
      </h6>
    </article>
  </div>
{% endfor %}

## 자료구조
----

{% assign posts = site.categories['Data Structure'] %}
{% for post in posts reversed %}
  {% if post.id %}
    {% assign title = post.title | markdownify | remove: "<p>" | remove: "</p>" %}
  {% else %}
    {% assign title = post.title %}
  {% endif %}

  <div class="{{ include.type | default: 'list' }}__item">
    <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
      <h6 style="margin-top: 0.5em">
        {% if post.link %}
          <a href="{{ post.link }}">{{ title }}</a>
        {% else %}
          <a href="{{ post.url | relative_url }}" rel="permalink">{{ title }}</a>
        {% endif %}
      </h6>
    </article>
  </div>
{% endfor %}