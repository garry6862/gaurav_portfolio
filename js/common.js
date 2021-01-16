$(document).ready(function() {
  function updateScroll() {
      if ($(window).scrollTop() >= 100) {
          $(".site-header").addClass('shadow inverse');
      } else {
          $(".site-header").removeClass("shadow inverse");          
      }
  }
  $(function() {
      $(window).scroll(updateScroll);
      updateScroll();
  });
  });



// back to top scroll js here
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn(300);
    } else {
        $('#back-top').fadeOut(300);
    }
});
//Click event to scroll to top
$('#back-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}

		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.my-nav-links a.active').removeClass('active');
						$('.my-nav-links a').eq(i).addClass('active');
				}
		});
}).scroll();
