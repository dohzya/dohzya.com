var $ = jQuery;

$(function(){
    "use strict";

    var $toc = $(".maruku_toc");
    var $container = $('<div class="dropdown"></div>');
    var $link = $('<a class="dropdown-toggle" id="toc" data-toggle="dropdown" href="#">[toc]</a><p></p>');
    var $dropdown = $('<ul class="dropdown-menu" role="menu" aria-labelledby="toc"></ul>');
    var content = $toc.html();

    $toc.html("");
    $container.append($link);
    $toc.append($container);
    $dropdown.html('<div>' + content + '</div>');
    $container.append($dropdown);
});
