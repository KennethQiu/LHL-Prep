$(document).ready(function() {
  console.log("Script included!");
  $('li').click(function(){
  	$(this).toggleClass('fade')
  });
  $('button').click(function(){
  	$('#steak').fadeOut('fast')
  	$(this).fadeOut('fast')
  });
});