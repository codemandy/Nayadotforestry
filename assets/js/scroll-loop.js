$('document').ready(function() {
  $(document).scroll(function(){
  if(document.documentElement.clientHeight +
  $(document).scrollTop() >= document.body.offsetHeight )$(document).scrollTop(0);
  });
});
