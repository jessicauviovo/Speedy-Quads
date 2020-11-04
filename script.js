function changeBackground(color)
{
	let blue = '#0392BF';
	let pink = '#ED48BA';
	let textcolor = '#E4E4E4';
	let yellow = '#FBEC06';
	let grey = '#B3D4E0';
	let i = 4;

	switch(color)
	{
		case blue: case pink: //blue and pink
		document.getElementById("right-col1").style.background = color;
		document.getElementsByTagName("ARTICLE")[0].style.color = textcolor;
		document.getElementById('shoe').src='images/skate.png';
		document.getElementById('cart').src='images/cart.png';
		document.getElementById('left-col1').style.background = 'lightblue';
		for(i=4; i<9; i++)
			document.getElementsByTagName("A")[i].style.color = 'lightblue';
		break;  

		case yellow: 
		document.getElementById("right-col1").style.background = color;
		document.getElementsByTagName("ARTICLE")[0].style.color = blue;
		document.getElementById('shoe').src='images/skate2.png';
		document.getElementById('cart').src='images/cart1.png';
		document.getElementById('left-col1').style.background = 'lightblue';
		for(i=4; i<9; i++)
			document.getElementsByTagName("A")[i].style.color = 'lightblue';
		break;
			
		case grey:
		document.getElementById("right-col1").style.background = color;
		document.getElementsByTagName("ARTICLE")[0].style.color = blue;
		document.getElementById('shoe').src='images/skate2.png';
		document.getElementById('cart').src='images/cart1.png';
		document.getElementById('left-col1').style.background = blue;
		document.getElementsByTagName("SELECT")[0].style.color = 'black';
		document.getElementById('facebook').src='images/facebook2.png';
		document.getElementById('vk').src='images/vk2.png';
		for(i=4; i<9; i++)
			document.getElementsByTagName("A")[i].style.color = pink;
		//document.getElementById('nav').style.color = grey;
		break;
	}
}
