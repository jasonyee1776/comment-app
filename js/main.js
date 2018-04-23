var submitButton = document.getElementById("submit-button");

//funtion displaying username and user comment when button is clicked
 submitButton.addEventListener("click", function(e) {
	// prevent button default behavior of resetting page after submit
	e.preventDefault();

	// store username in var
	var username = document.querySelector("input").value;
	console.log(username);
	// store comment in var
	var comment = document.querySelector("textarea").value;
	console.log(comment);
	
	// store element displaying username
	var displayUsername= document.getElementById("display-username")
	console.log(displayUsername);

	// store element displaying comment
	var displayComment = document.getElementById("display-comment")
	console.log(displayComment);


	//create a li element
	var newDiv = document.createElement("div");


	// create h3 username and comment
	var newH3 = document.createElement("h3");
	// update username input
	newH3.textContent = "Username: " + username;
	
	// create p username and comment
	var newP = document.createElement("p");
	// update comment input
	newP.textContent = "Comment: " + comment;


	// append h3 to newLi element
	newDiv.appendChild(newH3);
	// append p to newLi element
	newDiv.appendChild(newP);
	// append newLi to body
	document.body.appendChild(newDiv);

});




