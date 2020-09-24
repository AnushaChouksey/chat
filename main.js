var questionNum = 0;													
var question = '<h1>what is your name?</h1>';				  

var output = document.getElementById('output');				
output.innerHTML = question;													

function bot() { 
    var input = document.getElementById("input").value;
    

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';
    document.getElementById("input").value = "";   		
    question = '<h1>how old are you?</h1>';		
    setTimeout(timedQuestion, 2000);
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>That means you were born in ' + (2020 - input) + '</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>where are you from?</h1>';					      	
    setTimeout(timedQuestion, 2000);
    }   

    else if (questionNum == 2) {
    output.innerHTML = "<h1>That's a nice place.</h1>";
    document.getElementById("input").value = "";
    question = '<h1>What sport do you play?</h1>';
    setTimeout(timedQuestion, 2000);
    }

    else if (questionNum == 3) {
    output.innerHTML = "<h1>Oh i play " + input + ' too' + '</h2>';
    document.getElementById('input').value = "";
    question = '<h1>Intresting!</h1>';
    setTimeout(timedQuestion, 1000);
    }
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;												// increase questionNum count by 1
  }
});
