//Navigation toggle
var navActive = false,
    navOpen = document.querySelector('.nav-toggle-menu'),
    navListOpen = document.querySelector('.nav');

navOpen.addEventListener("click", function(event){
	event.preventDefault();

    if (navActive === false) {
	    navActive = true;
	    navListOpen.classList.add("active");
	} else {
		 navActive = false;
		 navListOpen.classList.remove("active");
	}
});

//Search form toggle
var searchActive = false,
    searchOpen = document.querySelector('.nav-toggle-search'),
    searchFormOpen = document.querySelector('.header .search-form');
    
    searchOpen.addEventListener("click", function(event){
	event.preventDefault();

    if (searchActive === false) {
	    searchActive = true;
	    searchFormOpen.classList.add("active");
	} else {
		 searchActive = false;
		 searchFormOpen.classList.remove("active");
	}
});