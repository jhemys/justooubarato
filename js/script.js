// Accordion

$( document ).ready(function() {
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setaccordionAria,
	switchaccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);

		setAriaAttr = function(el, ariaType, newProperty){
		  el.setAttribute(ariaType, newProperty);
	   };
	setaccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchaccordion = function(e) {
  if (window.isScrolling) {
    window.isScrolling = false;
    return;
  }
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setaccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setaccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', function() { window.isScrolling = false; }, false);
      accordionToggles[i].addEventListener('touchmove', function() { window.isScrolling = true; }, false);
      accordionToggles[i].addEventListener('touchend', switchaccordion, false);
    }
    accordionToggles[i].addEventListener('click', switchaccordion, false);
  }
});

// Lightbox

var curr_lb_div;
var is_modal = false;

function ShowLightBox(lb_div, isModal) {
document.getElementById(lb_div).style.display='block';
document.getElementById('fade').style.display='block';
curr_lb_div = lb_div;
if (isModal)
 is_modal = true;
else is_modal = false;

setCenter(lb_div, isModal);
//setDimensions(lb_div);
}

function HideLightBox() {
if (document.getElementById(curr_lb_div)) {
    document.getElementById(curr_lb_div).style.display='none';
    document.getElementById('fade').style.display='none';
    curr_lb_div = '';
 }
}

function setCenter(lb_div, isModal) {
var div = document.getElementById(lb_div);

var newX = div.offsetWidth / 2;
var newY = div.offsetHeight / 2;

div.style.marginLeft = '-'+newX+'px';
div.style.marginTop = '-'+newY+'px';

}

/* Cadastro modal */

$(document).ready(function() {
	// this is ugly, threw it together to make it work.
	var state = true;

	$('.redo').click(function() {
	    reanimate();
	});

	$('.cadastromodal').hide().removeClass('animate');

	var reanimate = function() {
	    if (state === false) {
	        state = true;
	        $('.initialmodal').show().addClass('animate');
	        $('.cadastromodal').hide().removeClass('animate');
	    } else {
	        state = false;
	        $('.initialmodal').hide().removeClass('animate');
	        $('.cadastromodal').show().addClass('animate');
	    }
	};

});

/* Load images */


new AnimOnScroll( document.getElementsByClassName( 'catalog' ), {
	minDuration : 0.4,
	maxDuration : 0.7,
	viewportFactor : 0.2
} );

$(".catalog a").sort(function(){
    return Math.random()*10 > 5 ? 1 : -1;
}).each(function(){
    var $t = $(this),
        position = $t.attr("class");
    $t.appendTo( $t.parent() );    
});
