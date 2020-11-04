function changeBackground(color)
{
	let blue = '#0392BF';
	let pink = '#ED48BA';
	let grey = '#E4E4E4';

	switch(color)
	{
		case blue: case pink: //blue and pink
		document.getElementById("right-col1").style.background = color;
		document.getElementsByTagName("ARTICLE")[0].style.color = grey;
		document.getElementById('shoe').src='images/skate.png';
		document.getElementById('cart').src='images/cart.png';
		break;  

		case 'yellow': case 'white':
		document.getElementById("right-col1").style.background = color;
		document.getElementsByTagName("ARTICLE")[0].style.color = blue;
		document.getElementById('shoe').src='images/skate2.png';
		document.getElementById('cart').src='images/cart1.png';
		break;
	}
}
