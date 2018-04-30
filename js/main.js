// store submit button
var submitButton = document.getElementById("submit-button");

// Display username inout and  comment input when submit button is clicked
 submitButton.addEventListener("click", function(e) {
	// prevent button default behavior of resetting page after button-click
	e.preventDefault();

	// store USERNAME in var
	var username = document.querySelector("input").value;
	// store COMMENT in var
	var comment = document.querySelector("textarea").value;


	// Prevent user input from empty submissions
	if ((username==null || username=="") && (comment==null || comment=="" )) {
		alert("Please enter a Username and Comment");
		return false;
	} else if (username==null || username=="") {
		alert("Don't forget your Username!");
		return false;
	}  else if (comment==null || comment=="") {
		alert("Please fill in a Comment!");
		return false;
	}

	// create the parent DIV element
	var newDiv = document.createElement("div");

	// create  username (h3) and comment (p) elements onto page 
	var newH3 = document.createElement("h3");
	var newP = document.createElement("p");	
	var removeButton = document.createElement("button");

	// update USERNAME and COMMENT input
	newH3.textContent = "Username: " + username;
	newP.textContent = "Comment: " + comment;	
	removeButton.textContent = "Remove";

	// append elemets to newDiv 
	newDiv.appendChild(newH3);
	newDiv.appendChild(newP);
	newDiv.appendChild(removeButton);

	// append newDiv to body
	document.body.appendChild(newDiv);

	// adding Bootstrap classes to the div element
	newDiv.classList.add("d-inline-block", "border", "border-primary", "border-3" , "border-circle", "p-3")
	// add background color to newDiv
	newDiv.style.backgroundColor = "#DCEAEF";
	// add class to remove button
	removeButton.classList.add("btn", "btn-danger");
	// add id to remove button
	removeButton.id = "remove";

	// logic when you click remove button,  message box
	removeButton.addEventListener("click", function(event) {
		if (event.target.id=="remove") {
			document.body.removeChild(newDiv);
		}
	});

});




