var progress = document.querySelectorAll(".c-progress");

[].forEach.call(progress, function(el) {
	el.classList.add("start");
	setTimeout(function() { el.classList.remove("start"); el.classList.add("anim")  }, 10);
});
