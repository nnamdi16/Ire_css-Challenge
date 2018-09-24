/* 
TO DO:
======

1. When the user clicks on the button that says "Move to start", move that <article> element to the beginning of the row
2. When the user clicks on the button that says "Delete", remove that <article> from the page entirely

See https://res.cloudinary.com/bitkoin/video/upload/v1535438914/Untitled.mp4
*/


	var hidden = false;
	function action(){
		hidden = !hidden;
		if(hidden){
			document.getElementById('start1').style.visibility = 'hidden';
			document.getElementById('start2').style.visibility ='visible';
			document.getElementById('start3').style.visibility ='visible';
		}
		else{
			document.getElementById('start1').style.visibility ='hidden';
			document.getElementById('start2').style.visibility ='visible';
			document.getElementById('start3').style.visibility ='visible';
			
		}
	}

	function newAction(){
		hidden = !hidden;
		if(hidden){
			document.getElementById('start1').style.visibility = 'visible';
			document.getElementById('start2').style.visibility ='hidden';
			document.getElementById('start3').style.visibility ='visible';
		}
		else{
			document.getElementById('start1').style.visibility ='visible';
			document.getElementById('start2').style.visibility ='hidden';
			document.getElementById('start3').style.visibility ='visible';
			
		}
	}

	function reaction(){
		hidden = !hidden;
		if(hidden){
			document.getElementById('start1').style.visibility = 'visible';
			document.getElementById('start2').style.visibility ='visible';
			document.getElementById('start3').style.visibility ='hidden';
		}
		else{
			document.getElementById('start1').style.visibility ='visible';
			document.getElementById('start3').style.visibility ='hidden';
			document.getElementById('start2').style.visibility ='visible';
			
		}
	}


function firstMove(){
	document.getElementById("third").style.order ="3";
	document.getElementById("second").style.order ="2";
	document.getElementById("first").style.order ="1";
	action();	
}

function secondMove(){
	document.getElementById("third").style.order ="3";
	document.getElementById("first").style.order ="2";
	document.getElementById("second").style.order ="1";
	newAction();
}

function thirdMove(){
	document.getElementById("first").style.order ="3";
	document.getElementById("second").style.order ="2";
	document.getElementById("third").style.order ="1";
	reaction();
	
}

function firstDelete(){
	var div1 = document.getElementById('first');
	var div2 = document.getElementById('second');
	var div3 = document.getElementById('third');

if (div1) {    
	div1.parentNode.removeChild(div1);
} 

else if(div2){
	div2.parentNode.removeChild(div2);
}

else{
	div3.parentNode.removeChild(div3);
}
}