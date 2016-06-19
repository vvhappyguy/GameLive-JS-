var po = 0; //memory for different points

function let(n){
	changecolor(n);
}


//function for taking points for next steps
function changecolor(n){

if (po != n){
	po = $("#point"+n).css("background-color");
	console.log(po);
	if (po == "rgb(255, 255, 255)"){
		$("#point"+n).css("background-color", "rgb(0, 0, 0)");
	}
	else {
		$("#point"+n).css("background", "rgb(255,255,255)");
	}
}
}