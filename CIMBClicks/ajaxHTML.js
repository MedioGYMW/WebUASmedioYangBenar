function loadHTML(file) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	   document.getElementById("1").innerHTML = this.responseText;
	  }
	};
	xhttp.open("GET", file, true);
	xhttp.send();
  }