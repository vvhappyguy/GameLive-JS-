var po = 0; //memory for different points
var st = 0;	//
var stop = 0;

//starting filling array 20x20
function matrixArray(rows, columns) {
  var mem = [];
  for (var i = 0; i < columns; i++) {
    mem[i] = new Array();
    for (var j = 0; j < rows; j++) {
      mem[i][j] = 0;
    }
  }
  return mem;
}
var mem = matrixArray(22, 22);

function let(n) {
	if (st == 0) {
		changecolor(n);
		var i = parseInt(n / 1000);
		var j = n % 100;
		if (mem[i][j] == 0) {
			mem[i][j] = 1
		} else {
			mem[i][j] = 0
		}
		console.log('mem['+i+']['+j+'] = '+mem[i][j]);
	}
	console.log(st);
}

function readyBtn(n) {
	st = n;
	console.log(st);
}

function newBtn(n) {
	location.reload();
}

function game(n) {
	if (st == 1) {
		if (n == 1) {
			for (var i = 1; i < 21; i++) {
				for (var j = 1; j < 21; j++) {
					console.log(mem[i][j]);
					var sum = mem[i - 1][j - 1] + mem[i - 1][j] + mem[i - 1][j + 1] + mem[i][j - 1] + mem[i][j + 1] + mem[i + 1][j - 1] + mem[i + 1][j] + mem[i + 1][j + 1];
					var numP = 1000 * i + j;
					console.log('sum p['+i+']['+j+'] = '+ sum);
					po = $("#point" + numP).css("background-color");
					if (po == "rgb(255, 255, 255)") {
						if (sum == 3) {
							mem[i][j] = 1;
							$("#point" + numP).css("background", "rgb(0,0,0)");
						}
					} else if(po == "rgb(0, 0, 0)"){
							if ( sum>1 && sum<4){
								mem[i][j] = 1;
								$("#point" + numP).css("background", "rgb(0,0,0)");
							} else {
								mem[i][j] = 0;
								$("#point" + numP).css("background", "rgb(255,255,255)");
							}
					}
				}
			}
		}
	}
}

//function for taking points for next steps
function changecolor(n) {

	if (po != n) {
		po = $("#point" + n).css("background-color");
		console.log(po);
		if (po == "rgb(255, 255, 255)") {
			$("#point" + n).css("background-color", "rgb(0, 0, 0)");
		}
		else {
			$("#point" + n).css("background", "rgb(255,255,255)");
		}
	}
}