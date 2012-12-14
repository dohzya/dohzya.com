{% capture currentDate %}{{site.time | date: "%Y-%m-%d"}}{% endcapture %}
<div class="post-list"><div class="name icon-pushpin">

{% if current == "git-tips" %}
**Git tips**
{% else %}
[Git tips](/article/2013-01-02/git-tips)
{% endif %}

</div><div class="list" markdown="true">

{% if current == "part1" %}
1. **Quelques idées sur la manière de travailler avec Git**
{% elsif currentDate >= "2013-01-03" %}
1. [Quelques idées sur la manière de travailler avec Git](/article/2013-01-03/git-tips-1)
{% else %}
1. Quelques idées sur la manière de travailler avec Git
{% endif %}

{% if current == "part2" %}
2. **Oubliez SVN**
{% elsif currentDate >= "2013-01-10" %}
2. [Oubliez SVN](/article/2013-01-10/git-tips-2)
{% else %}
2. Oubliez SVN
{% endif %}

{% if current == "part3" %}
3. **Le cas de git push**
{% elsif currentDate >= "2013-01-17" %}
3. [Le cas de git push](/article/2013-01-17/git-tips-3)
{% else %}
3. Le cas de git push
{% endif %}

{% if current == "part4" %}
4. **`git pull` ou `git fetch` ?**
{% elsif currentDate >= "2013-01-24" %}
4. [`git pull` ou `git fetch` ?](/article/2013-01-24/git-tips-4)
{% else %}
4. `git pull` ou `git fetch` ?
{% endif %}

{% if current == "part5" %}
5. **Réécrire l'histoire**
{% elsif currentDate >= "2013-01-31" %}
5. [Réécrire l'histoire](/article/2013-01-31/git-tips-5)
{% else %}
5. Réécrire l'histoire
{% endif %}

{% if current == "part6" %}
6. **Git gibs**
{% elsif currentDate >= "2013-02-07" %}
6. [Git gibs](/article/2013-02-07/git-tips-6)
{% else %}
6. Git gibs
{% endif %}

{% if current == "part7" %}
7. **Configuration**
{% elsif currentDate >= "2013-02-14" %}
7. [Configuration](/article/2013-02-14/git-tips-7)
{% else %}
7. Configuration
{% endif %}

</div></div>
