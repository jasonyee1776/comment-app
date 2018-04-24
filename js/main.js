var submitButton = document.getElementById("submit-button");

//funtion displaying username and user comment when button is clicked
 submitButton.addEventListener("click", function(e) {
	// prevent button default behavior of resetting page after button-click
	e.preventDefault();

	// store USERNAME in var
	var username = document.querySelector("input").value;
	// store COMMENT in var
	var comment = document.querySelector("textarea").value;

	// Prevent user input from empty submissions
	if (username==null || username=="" || comment==null || comment=="" ) {
		alert("Please enter a response");
		return false;
	}

	
	// store element DISPLAYING USERNAME
	var displayUsername= document.getElementById("display-username")

	// store element DISPLAYING COMMENT
	var displayComment = document.getElementById("display-comment")


	// create a DIV element
	var newDiv = document.createElement("div");

	// create H3 username 
	var newH3 = document.createElement("h3");
	// update USERNAME input
	newH3.textContent = "Username: " + username;
	// create P comment
	var newP = document.createElement("p");	
	// update COMMENT input
	newP.textContent = "Comment: " + comment;	


	// create icon from font-awesome
	var closeIcon = document.createElement("i");
	// give class to create "x" icon
	closeIcon.classList.add("fas", "fa-times");
	// float icon to right
	closeIcon.style.cssFloat = "right";
	// make mouse a pointer when hovering icon
	closeIcon.style.cursor = "pointer";
	// append icon to newDiv
	newDiv.appendChild(closeIcon);


	// append h3 to newLi element
	newDiv.appendChild(newH3);
	// append p to newLi element
	newDiv.appendChild(newP);
	// append newLi to body
	document.body.appendChild(newDiv);

	// adding Bootstrap classes to the div element
	newDiv.classList.add("d-inline-block", "border", "border-primary", "border-3" , "border-circle", "p-3")
	// add background color to newDiv
	newDiv.style.backgroundColor = "#DCEAEF";

	// logic when you click x, it closes new message box
	closeIcon.addEventListener("click", function(e) {
		// newDiv.removeChild();
		// newDiv.style.display = "none";
		// newDiv.classList.add("d-none");
		// newDiv.parentNode.removeChild(closeIcon);
	});

});




