---
layout: page
permalink: /github/
title: GitHub
description: 
nav: true
nav_order: 4
social: true
---

Here's all my GitHub information. I go by the account [Kishan-Ved](https://github.com/Kishan-Ved) on GitHub.

## GitHub Stats

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center"> <div class="repo p-2 text-center"> <a href="https://github.com/Kishan-Ved" rel="external nofollow noopener" target="_blank"> <img class="repo-img-light w-100" alt="Kishan-Ved" src="https://github-readme-stats.vercel.app/api/?username=Kishan-Ved&amp;theme=cobalt&amp;include_all_commits=true&amp;count_private=true&amp;show_icons=true"> <img class="repo-img-dark w-100" alt="Kishan-Ved" src="https://github-readme-stats.vercel.app/api/?username=Kishan-Ved&amp;theme=tokyonight&amp;show_icons=true"> </a> </div> </div>
---

## OpenSource Contributions

My top open source contributions on various GitHub Repositories are listed here.

<p align="left">
  <img src="https://github-contributor-stats.vercel.app/api?username=Kishan-Ved&limit=5&theme=cobalt&combine_all_yearly_contributions=true" alt="Top Contributed Repo">
</p>

---

## Top Repositories

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}

