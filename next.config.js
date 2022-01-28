// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  }
})
<!-- 来必力City版安装代码 -->
<div id="lv-container" data-id="city" data-uid="MTAyMC81NTM0OS8zMTgxNg==">
<script type="text/javascript">
(function(d, s) {
var j, e = d.getElementsByTagName(s)[0];

   if (typeof LivereTower === 'function') { return; }
   j = d.createElement(s);
   j.src = '<https://cdn-city.livere.com/js/embed.dist.js>';
   j.async = true;
   e.parentNode.insertBefore(j, e);

})(document, 'script');
</script>
<noscript> 为正常使用来必力评论功能请激活JavaScript</noscript>
</div>
<!-- City版安装代码已完成 -->
