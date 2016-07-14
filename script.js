$(document).ready(function(){
  
  console.log("Script included!");
  /* Original 
  $('li').click(function(){
  	$(this).toggleClass('fade');
  });
  */

  //Laurel's Sugguestion:
  $('ul').on("click","li",function(){
  	$(this).toggleClass('fade');
  });
  $('ol').on("click","li",function(){
  	$(this).toggleClass('fade');
  });

  $('button').click(function(){
  	$('#steak').fadeOut('fast');
  	$(this).fadeOut('fast');
  });
});