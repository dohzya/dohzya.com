/* jshint asi:true */
(function(){
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

      var post = document.querySelector('.post')
      var postList = document.querySelector('.post-list')
      if (post && postList) {
        postList.parentNode.removeChild(postList)
        post.insertBefore(postList, post.children[1])
        postList.style.display = "block"
      }

      var videos = document.querySelectorAll('div.oembed.video')
      for (var i=0; i < videos.length; i++) {
        var video = videos[i]
        var iframe = video.querySelector('iframe')
        video.style.width = iframe.getAttribute('width') + 'px'
        video.style.height = iframe.getAttribute('height') + 'px'
      }

    }, false)

}())
