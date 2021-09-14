// print test to page
// dictionary url
var urlBase = "https://en.langenscheidt.com/german-english/" 

document.addEventListener('mousemove', function (e) {
	//D5aOJc vJwDU Class for input text, get input string
	var input = document.getElementsByClassName('D5aOJc vJwDU')[0].innerHTML;
	
	//NqnNQd class for output text, get output string
	var output = document.getElementsByClassName("NqnNQd")[0].innerHTML;

	if (e.target.innerHTML == output) {
		var words = output.split(" ");
		for(var i = 0; i < words.length; i += 1) {
//ERROR: GETTING BLOCKED FROM WEBSITE (API MAYBE?)
			console.log(words[i]);
			var request = new XMLHttpRequest();
			request.open("GET", urlBase + words[i], true);
			request.send(null);
			request.onreadystatechange = function() {
				if (request.readyState == 4)
//				alert(request.response.responseType());
//				alert(typeof request.response);
//				var response = request.responseText;
				console.log(request.responseText);
				}

//				var classIndex = response.indexOf("pos\"> ") + 6;
//				var morphology = "";
//				var currLetter = response[classIndex];

//				console.log(classIndex + "  " + currLetter);
//				while(true){}
//				while (currLetter != "<") {
//					console.log(currLetter);
//					morphology += currLetter;
//					classIndex += 1;
//					currLetter = response[classIndex];
//				}
//				alert(morphology);

			};
		}
	}
	else if (e.target.innerHTML == input) {
		var words = input.split(" ");
		for(var i = 0; i < words.length; i += 1) {
			console.log(words[i]);
		
		}
	}

}, false);

