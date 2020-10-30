function readMore() {
	var dots = document.getElementById( "dots" );
	//Removed dots "..." from span so it looks better with article
	var moreText = document.getElementById( "more" );
	var btnText = document.getElementById( "read-more" );
  
  if ( dots.style.display === "none" ) {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    
	}
}