
$(function() {
	var current = 1;
	
	var iterate		= function(){
		var i = parseInt(current+1);
		var lis = $('#rotmenu').children('li').size();
		if(i>lis) i = 1;
		display($('#rotmenu li:nth-child('+i+')'));
	}
	display($('#rotmenu li:first'));
   // var slidetime = setInterval(iterate,10000);
	
	$('#rotmenu li').bind('click',function(e){
	  //  clearTimeout(slidetime);
		display($(this));
		e.preventDefault();
	});
	
	function display(elem){
		var $this 	= elem;
		var repeat 	= false;
		if(current == parseInt($this.index() + 1))
			repeat = true;
		
		if(!repeat)
			$this.parent().find('li:nth-child('+current+') a').stop(true,true).removeClass("active",function(){
				$(this).animate({'opacity':'1'},700);
			});
		
		current = parseInt($this.index() + 1);
		
		var elem = $('a',$this);
		
			elem.stop(true,true).addClass("active");
			
		//$('.rotator ul li a').hover().animate({'marginRight':'0px','opacity':'0.8'},300);
		
		var info_elem = elem.next();
		$('#rot1 .client_des').animate({'right':'-420px'}, 500,'easeOutCirc',function(){
			//$('h3',$(this)).html(info_elem.find('.info_heading').html());
			$('p',$(this)).html(info_elem.find('.info_description').html());
			$(this).animate({'right':'0px'},400,'easeInOutQuad');
		});

	}
});

$(function(){
		$("ul.work").addClass("workAdv");
		$("ul.workAdv li").hover(
			function(){
				$(this).find(".desc").stop().animate({
					top: "-20"
				},600, function(){
					$(this).animate({
						top: "0"						
					},300);
				});
			},
			function(){
				$(this).find(".desc").stop().animate({
					top: "-20"
				},300, function(){
					$(this).animate({
						top: "154"						
					},600);
				});
			}
		);									 
});
			

			
$(function() {
  $('.errorr').hide();

  $(".button").click(function() {

		
	  var name = $("input#name").val();
		if (name == "") {
      $("label#name_error").addClass("name_error");
      $("input#name").focus();
      return false;
    }
		var email = $("input#email").val();
		if (email == "") {
      $("label#email_error").addClass("email_error");
      $("input#email").focus();
      return false;
    }
		var message = $("input#message").val();
		if (message == "") {
      $("label#message_error").addClass("message_error");
      $("input#message").focus();
      return false;
    }
		
		var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "bin/process.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message_sent'></div>");
        $('#message_sent').html("<h2>Thanks for your message!</h2>")
        .append("<p>I'll be in touch as soon as i can.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message_sent');
        });
      }
     });
    return false;
	});
});
runOnLoad(function(){
  $("input#name").select().focus();
});


$(function(){
	$('#header').localScroll({
		target:'html'
	});  

});

$(document).ready(function() {

	jQuery("#navBar").navBar({
		fx: "backout",
		speed: 700,
		click: function (event, menuItem) {
		}
	});
}); 
