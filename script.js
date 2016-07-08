$(document).ready(function() {
  console.log("Script included!");
  $('li').click(function(){
  	$(this).fadeTo('fast',0.2)
  });
  $('button').click(function(){
  	$('#steak').fadeOut('fast')
  });
});