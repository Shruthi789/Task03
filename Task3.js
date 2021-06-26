var player="player1";
function addTableRow(){
	for(i=1;i<=3;i++){
	  var tableRow=document.createElement('tr');
	  for(j=1;j<=3;j++){
	  var tabledata=document.createElement('td');
	  tabledata.style="border: 2px solid;";
	  tabledata.onclick=function(){operation(this.parentNode.rowIndex,this.cellIndex);};
	  tableRow.appendChild(tabledata);
	  }
	  document.getElementById('table').appendChild(tableRow);
	}	
}
addTableRow();
function operation(RowIndex,CellIndex)
{
    if(player==="player1"){
		 drawX(RowIndex,CellIndex);
	}
	else if(player==="player2"){
		drawCircle(RowIndex,CellIndex);
     }
}

function drawCircle(RowIndex,CellIndex)
{
	var canvas=document.createElement('canvas');
	var circle = canvas.getContext("2d");
	circle.beginPath();
	circle.arc(95, 50, 40, 0, 2 * Math.PI);
    circle.stroke();
	document.getElementById('table').rows[RowIndex].cells[CellIndex].appendChild(canvas);
	decideWinner(RowIndex,CellIndex,player);
    player="player1";	
}

function drawX(RowIndex,CellIndex)
{
	var img=document.createElement('img');
	img.src="https://pic.onlinewebfonts.com/svg/img_228759.png";
	img.width="50";
	document.getElementById('table').rows[RowIndex].cells[CellIndex].appendChild(img);
	decideWinner(RowIndex,CellIndex,player);
    player="player2";	
}
function decideWinner(RowIndex,CellIndex,player)
{
	var row=document.getElementById('table').rows[RowIndex];
	var rows=document.getElementById('table').rows;
if((row.cells[0].innerHTML===row.cells[1].innerHTML===row.cells[2].innerHTML) || (rows[0].cells[CellIndex].innerHTML===rows[1].cells[CellIndex].innerHTML===rows[2].cells[CellIndex].innerHTML))
{

	document.getElementById('result').innerText=player+" has won the game!";
}
else if((RowIndex===CellIndex)&&(rows[0].cells[0].innerHTML===rows[1].cells[1].innerHTML===rows[2].cells[2].innerHTML))
{
	document.getElementById('result').innerText=player+" has won the game!";
}
else if((RowIndex+CellIndex===2)&&(rows[0].cells[2].innerHTML===rows[1].cells[1].innerHTML===rows[2].cells[0].innerHTML))
{
	document.getElementById('result').innerText=player+" has won the game!";
}
}