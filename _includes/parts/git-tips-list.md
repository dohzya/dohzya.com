{% capture currentDate %}{{site.time | date: "%Y-%m-%d"}}{% endcapture %}
<div class="post-list"><div class="name icon-pushpin">

{% if current == "git-tips" %}
**Git tips**
{% else %}
[Git tips](/article/2012-12-12/git-tips)
{% endif %}

</div><div class="list" markdown="true">

{% if current == "part1" %}
1. **Quelques idées sur la manière de travailler avec Git**
{% elsif currentDate >= "2012-12-12" %}
1. [Quelques idées sur la manière de travailler avec Git](/article/2012-12-12/git-tips-1)
{% else %}
1. Quelques idées sur la manière de travailler avec Git
{% endif %}

{% if current == "part2" %}
2. **Oubliez SVN**
{% elsif currentDate >= "2012-12-14" %}
2. [Oubliez SVN](/article/2012-12-14/git-tips-2)
{% else %}
2. Oubliez SVN
{% endif %}

{% if current == "part3" %}
3. **Le cas de git push**
{% elsif currentDate >= "2012-12-19" %}
3. [Le cas de git push](/article/2012-12-18/git-tips-3)
{% else %}
3. Le cas de git push
{% endif %}

{% if current == "part4" %}
4. **`git pull` ou `git fetch` ?**
{% elsif currentDate >= "2012-12-21" %}
4. [`git pull` ou `git fetch` ?](/article/2012-12-21/git-tips-4)
{% else %}
4. `git pull` ou `git fetch` ?
{% endif %}

{% if current == "part5" %}
5. **Réécrire l'histoire**
{% elsif currentDate >= "2012-12-26" %}
5. [Réécrire l'histoire](/article/2012-12-26/git-tips-5)
{% else %}
5. Réécrire l'histoire
{% endif %}

{% if current == "part6" %}
6. **Git gibs**
{% elsif currentDate >= "2012-12-28" %}
6. [Git gibs](/article/2012-12-28/git-tips-6)
{% else %}
6. Git gibs
{% endif %}

{% if current == "part7" %}
7. **Configuration**
{% elsif currentDate >= "2013-01-04" %}
7. [Configuration](/article/2013-01-04/git-tips-7)
{% else %}
7. Configuration
{% endif %}

</div></div>
