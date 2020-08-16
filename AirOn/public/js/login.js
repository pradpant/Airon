function validateForm() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;

	var loginStatus = document.getElementById('loginStatus').innerHTML;

    var oldEmail = document.getElementById('email').value;
    var oldPassword = document.getElementById('email').value;


 	if(loginStatus == 'true'){
	document.getElementById("mainContent").style.display = "block";
	document.getElementById("authSection").style.display = "none";
	return;
 }
    if (email == "" || password == '' ) {
		document.getElementById('LoginFail').innerHTML = 'All fields are required';
		// document.getElementById("LoginSuccess").style.display = "none";
		document.getElementById("LoginFail").style.display = "block";
		document.getElementById("login").style.marginBottom = "228px";
        
        if (email != 'undefined'){ oldEmail = email;}
        if (password != 'undefined'){ oldPassword = email;}
	}
	else  if (email == 'arpitsr666@gmail.com' && password == '11111'){
		document.getElementById("mainContent").style.display = "block";
		document.getElementById("authSection").style.display = "none";
		loginStatus = "true";
		// document.getElementById("LoginSuccess").style.display = "block";
		document.getElementById("LoginFail").style.display = "none";

	}
	else{
		// document.getElementById("LoginSuccess").style.display = "none";
		document.getElementById("LoginFail").style.display = "block";
        document.getElementById("login").style.marginBottom = "228px";
        if (email != 'undefined'){ oldEmail = email;}
        if (password != 'undefined'){ oldPassword = email;}
    }
}

