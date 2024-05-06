function szinvalt(r,g,b) {
	document.getElementById('r').value=r;
	document.getElementById('g').value=g;
	document.getElementById('b').value=b;
	szinkever();
}
function szintabla() {
	function szincella(r,g,b) {
		return "<td "+
			"style='background-color:rgb("+r+","+g+","+b+")' "+
			"title='("+r+","+g+","+b+")' "+
			"onClick='szinvalt("+r+","+g+","+b+")'></td>"
	}
	let out="<table>";
	for( i=0; i<255; i=i+2 )	{
		out+= "<tr>";
		for( j=0; j<255; j=j+2 ) out+=szincella(j,i,0);
		for( j=0; j<255; j=j+2 ) out+=szincella(255,i,j);
		for( j=0; j<255; j=j+2 ) out+=szincella(255-j,i,255);		
		out+="</tr>"
	}
	out+="</table>";
	document.getElementById('szinskala').innerHTML=out;
}
function atvalt(dec) {
	let hex=parseInt(dec).toString(16);
	if (hex.length==1) hex="0"+hex;
	return hex
}
function szinkever() {
	var r=document.getElementById('r').value;
	var g=document.getElementById('g').value;
	var b=document.getElementById('b').value;
	let minta=document.getElementById('szinminta');
	minta.innerHTML=""+
		"<p>RGB: ("+r+","+g+","+b+")</p>"+
		"<p>HEX: #"+atvalt(r)+atvalt(g)+atvalt(b)+"</p>";
	minta.style.backgroundColor="rgb("+r+","+g+","+b+")";
	if (g<150)
		minta.style.color="rgb(255,255,255)";
	else 
		minta.style.color="rgb(0,0,0)";
}

szintabla();
szinkever();
document.getElementById('r').addEventListener('input', szinkever);
document.getElementById('g').addEventListener('input', szinkever);
document.getElementById('b').addEventListener('input', szinkever);