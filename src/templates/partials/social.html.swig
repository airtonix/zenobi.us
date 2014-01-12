<div class="social">
  <a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
  <span class="g-plusone" data-size="medium" data-annotation="bubble" data-width="300"></span>
  <a href="http://news.ycombinator.com/submit" class="hn-share-button">Vote on HN</a>
</div>

<div id="comments">
  <div id="disqus_thread"></div>
</div>

<!-- Helper scripts for social share icons -->
<!-- Hacker News -->
<script type="text/javascript">
!(function(doc, elm){

  var inject = function(id, url, async) {
    var js,
        fjs=doc.getElementsByTagName(elm)[0];
    if(!doc.getElementById(id)){
      js=doc.createElement(elm);
      js.id=id;
      js.src=url;
      js.type='text/javascript';
      js.async=async;
      fjs.parentNode.insertBefore(js,fjs);
    }
  }

  inject('hacker-news', '//hnbutton.appspot.com/static/hn.min.js');
  inject('twitter-wjs', '//platform.twitter.com/widgets.js');
  inject('google-plus', '//apis.google.com/js/plusone.js');
  inject('disqus', '//{{ data.social.disqus_shortname }}.disqus.com/embed.js');

})(document, 'script');
</script>

