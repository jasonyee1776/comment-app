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

	
	// store element DISPLAYING USERNAME and COMMENT
	var displayUsername= document.getElementById("display-username")
	var displayComment = document.getElementById("display-comment")


	// create the parent DIV element
	var newDiv = document.createElement("div");

	// create  username (h3) and comment (p) elements onto page 
	var newH3 = document.createElement("h3");
	var newP = document.createElement("p");	


	// update USERNAME and COMMENT input
	newH3.textContent = "Username: " + username;
	newP.textContent = "Comment: " + comment;	


	// create icon 
	var closeIcon = document.createElement("i");
	// give font-awesome class to create "x" icon
	closeIcon.classList.add("fas", "fa-times");
	// float icon to right of newDIv
	closeIcon.style.cssFloat = "right";
	// make mouse a pointer when hovering icon
	closeIcon.style.cursor = "pointer";


	// append elemets to newDiv 
	newDiv.appendChild(closeIcon);
	newDiv.appendChild(newH3);
	newDiv.appendChild(newP);

	// append newDiv to body
	document.body.appendChild(newDiv);

	// adding Bootstrap classes to the div element
	newDiv.classList.add("d-inline-block", "border", "border-primary", "border-3" , "border-circle", "p-3")
	// add background color to newDiv
	newDiv.style.backgroundColor = "#DCEAEF";

	// logic when you click x, it closes new message box
	closeIcon.addEventListener("click", function(event) {
		if (event.target.tagName == "div") {
			if (event.target.className=="fa-times") {
				body.removeChild(newDiv);
			}
		}
		// newDiv.parentNode.removeChild(newDiv);
		// newDiv.removeChild();
		// newDiv.style.display = "none";
		// newDiv.classList.add("d-none");
		// newDiv.parentNode.removeChild(closeIcon);
	});

});




