var po = 0; //memory for different points

//starting filling array 20x20
function matrixArray(rows,columns){
  var mem = [];
  for(var i=1; i<columns; i++){
    mem[i] = new Array();
    for(var j=1; j<rows; j++){
      mem[i][j] = false;
    }
  }
  return mem;
}
var mem = matrixArray(21,21);

function let(n){
	changecolor(n);
	var	i = parseInt(n / 1000);
	var	j = n % 100;
	if(mem[i][j]==false){
		mem[i][j]=true
	}	else {
		mem[i][j]=false
	}
	console.log(mem[i][j]);
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