function changeBackground(color)
{
	let blue = '#0392BF';
	let pink = '#ED48BA';
	let textcolor = '#E4E4E4';
	let yellow = '#FBEC06';
	let grey = '#B3D4E0';

	switch(color)
	{
		case blue: case pink: //blue and pink
		document.getElementById("right-col1").style.background = color;
		document.getElementsByTagName("ARTICLE")[0].style.color = textcolor;
		document.getElementById('shoe').src='images/skate.png';
		document.getElementById('cart').src='images/cart.png';
		break;  

		case yellow: 
		document.getElementById("right-col1").style.background = color;
		document.getElementsByTagName("ARTICLE")[0].style.color = blue;
		document.getElementById('shoe').src='images/skate2.png';
		document.getElementById('cart').src='images/cart1.png';
		break;
			
		case grey:
		document.getElementById("right-col1").style.background = color;
		document.getElementsByTagName("ARTICLE")[0].style.color = blue;
		document.getElementById('shoe').src='images/skate2.png';
		document.getElementById('cart').src='images/cart1.png';
		document.getElementByClass('left-col1').style.background = blue;
		document.getElementsByTagName("LI")[0].style.color = blue;
		break;
	}
}
