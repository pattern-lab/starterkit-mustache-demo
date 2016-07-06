//Navigation toggle
var navActive = false,
    navOpen = document.querySelector('.nav-toggle-menu'),
    navListOpen = document.querySelector('.c-primary-nav');

navOpen.addEventListener("click", function(event){
	event.preventDefault();

    if (navActive === false) {
	    navActive = true;
	    navListOpen.classList.add("c-primary-nav--is-active");
	} 
	else {
		 navActive = false;
		 navListOpen.classList.remove("c-primary-nav--is-active");
	}
});

//Search form toggle
var searchActive = false,
    searchOpen = document.querySelector('.nav-toggle-search'),
    searchFormOpen = document.querySelector('.c-search-form');
    
    searchOpen.addEventListener("click", function(event){
	event.preventDefault();

    if (searchActive === false) {
	    searchActive = true;
	    searchFormOpen.classList.add("c-search-form--is-active");
	} 
	else {
		 searchActive = false;
		 searchFormOpen.classList.remove("c-search-form--is-active");
	}
});