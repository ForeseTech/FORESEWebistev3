/*
Template Name: EventGrids - Conference and Event HTML Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // WOW active
    new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });


})();

var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
	if (click) {
		if (curpage == 1) curpage = 5;
		console.log("woek");
		sliding = true;
		curpage--;
		svg = true;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function rightSlide() {
	if (click) {
		if (curpage == 4) curpage = 0;
		console.log("woek");
		sliding = true;
		curpage++;
		svg = false;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function move() {
	if (sliding) {
		sliding = false;
		if (svg) {
			for (j = 1; j <= 9; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		} else {
			for (j = 10; j <= 18; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		}
		setTimeout(() => {
			for (i = 1; i <= 4; i++) {
				if (i == curpage) {
					var a = document.getElementById(pagePrefix + i);
					a.className += " up1";
				} else {
					var b = document.getElementById(pagePrefix + i);
					b.classList.remove("up1");
				}
			}
			sliding = true;
		}, 600);
		setTimeout(() => {
			click = true;
		}, 1700);

		setTimeout(() => {
			if (svg) {
				for (j = 1; j <= 9; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
			} else {
				for (j = 10; j <= 18; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
				sliding = true;
			}
		}, 850);
		setTimeout(() => {
			click = true;
		}, 1700);
	}
}

left.onmousedown = () => {
	leftSlide();
};

right.onmousedown = () => {
	rightSlide();
};

document.onkeydown = e => {
	if (e.keyCode == 37) {
		leftSlide();
	} else if (e.keyCode == 39) {
		rightSlide();
	}
};

//for codepen header
// setTimeout(() => {
// 	rightSlide();
// }, 500);

