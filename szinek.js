function szinvalt(r,g,b) {
	document.getElementById('r').value=r;
	document.getElementById('g').value=g;
	document.getElementById('b').value=b;
	szinkever();
}
function szintabla() {
	function szincella(r,g,b) {
		document.write( "<td "+
			"style='background-color:rgb("+r+","+g+","+b+")' "+
			"title='("+r+","+g+","+b+")' "+
			"onClick='szinvalt("+r+","+g+","+b+")'></td>" )
	}
	document.write("<table id='szinskala'>");
	for( i=0; i<16; i++ )	{
		document.write( "<tr>" )
		for( j=0; j<16; j++ ) szincella(j*16,i*16,0);
		for( j=0; j<16; j++ ) szincella(255,i*16,j*16);
		for( j=0; j<16; j++ ) szincella(255-j*16,i*16,255);		
		document.write( "</tr>" )
	}
	document.write("</table>")
}
function atvalt(dec) {
	let hex=parseInt(dec).toString(16);
	if (hex.length==1) hex="0"+hex;
	return hex
}
function szinkever() {
	let r=document.getElementById('r').value;
	let g=document.getElementById('g').value;
	let b=document.getElementById('b').value;
	document.getElementById('szinminta').innerHTML=""+
		"<p>RGB: ("+r+","+g+","+b+")</p>"+
		"<p>HEX: #"+atvalt(r)+atvalt(g)+atvalt(b)+"</p>";
	document.getElementById('szinminta').style.backgroundColor="rgb("+r+","+g+","+b+")"
}