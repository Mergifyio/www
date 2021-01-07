// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-118666091-1', 'auto');
ga('send', 'pageview');


// Mailchimp
!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/339c31be17ff8e8e65b0e6466/7ef49deade42c6f4640cd8a30.js");

// External deps
function loadScript(url) {
  var script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/prism.min.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components/prism-python.min.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components/prism-yaml.min.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components/prism-graphql.min.js");


