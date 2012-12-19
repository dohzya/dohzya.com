---
title:  Dégradé sur texture
subtitle: C'est possible :-)
author: Étienne VALLETTE d'OSIA
language: French
layout: post
category : article
tags: [css]
---

{% include JB/setup %}

Il est assez courant d'utiliser des textures pour donner du relief à certaines parties d'une interface… pour briser la monotonie des fonds parfaitement uniformes.

Le problème c'est que ces textures sont de simples images utilisée en fond. On ne peut donc pas (à ma connaissance) leur appliquer toute la panoplie de filtres fournis pas CSS(3).

Voici donc la technique que j'ai trouvé : réaliser un dégradé transparent au dessus d'une image. De cette manière, la zone possède bien une texture, et le dégradé servira à lui ajouter une ombre dynamiquement.

Petit exemple :

{% highlight css %}
background: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(140,140,140,0.3) 100%), url("/picture.png");
{% endhighlight %}

Notez qu'il faut bien spécifier le gradient puis l'image et non l'inverse (l'image serait au dessus du dégradé et le masquerait complètement).

Bonus, une version avec un peu tous les navigateurs (la partie sale du CSS) :

{% highlight css %}
background: url("/picture.png");
background: -moz-linear-gradient(top, rgba(255,255,255,0.3) 0%, rgba(140,140,140,0.3) 100%), url("/picture.png"); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(235,235,255)), color-stop(100%,rgba(200,2001400,0.3))), url("/picture.png"); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top, rgba(255,255,255,0.3) 0%,rgba(140,140,140,0.3) 100%), url("/picture.png"); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top, rgba(255,255,255,0.3) 0%,rgba(140,140,140,0.3) 100%), url("/picture.png"); /* Opera 11.10+ */
background: -ms-linear-gradient(top, rgba(255,255,255,0.3) 0%,rgba(140,140,140,0.3) 100%), url("/picture.png"); /* IE10+ */
background: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(140,140,140,0.3) 100%), url("/picture.png"); /* W3C */
background-repeat: repeat-x;
{% endhighlight %}

Note : je ne suis pas _du tout_ un expert CSS, donc vous trouverez sans doute à redire de cette utilisation de linear-gradiant. Sachez que ce post ne cherche en aucun cas à servir de référence, l'idée est juste de montrer que ça existe®. Cependant je suis toujours féru de nouvelles informations, donc n'hésitez pas à me faire part de vos remarques.