var title = document.getElementById("title");
var image = document.getElementById("image");
var options = document.getElementById("options");
var audio1 = document.getElementById("audiohome");
var audio2 = document.getElementById("audiomirror");
var audio3 = document.getElementById("audiocarstart");
var audio4 = document.getElementById("audiocarradio");
var audio5 = document.getElementById("audiocarcrash");
var audio6 = document.getElementById("audiocarradio2");
var audio7 = document.getElementById("audiostationair");
var audio8 = document.getElementById("audiohome2");
var audio9 = document.getElementById("audioknife");
var audio10 = document.getElementById("audiodoor");
var audio11 = document.getElementById("audiooutside");
var audio12 = document.getElementById("audiogameover");
var deur = document.getElementById('deur1');
var sluit = document.getElementsByClassName("deursluit")
var knife = false;
var carkey = false;



function keuzes()
{
	document.getElementById("link1").innerHTML = "Start Game";
	image.src = "../foto/alonebg.jpg";
	link2.style.display="none";
	link3.style.display="none";
	document.getElementById("link1").onclick = slaapkamer1;
	audio1.pause();
	audio8.play();
	audio8.loop = true;
	audio8.volume = 0.35;
	link4.style.display="none";
	items1.style.display="none";
	items2.style.display="none";
	carkey = false;
	knife = false;
}

function slaapkamer1()
{
	audio8.pause();
	image.src = "../foto/slaapkamerdonker.jpg";
	link2.style.display="inline";
	link3.style.display="inline";
	audio1.play();
	audio1.loop = true;
	audio1.volume = 0.3;
	document.getElementById("link1").innerHTML = "Turn lights on";
	document.getElementById("link2").innerHTML = "Go to the bathroom";
	document.getElementById("link3").innerHTML = "Go to the hallway";
	document.getElementById("link2").onclick = badkameroff;
	document.getElementById("link3").onclick = hallway;
	document.getElementById("link1").onclick = lights;
}
function slaapkamer2()
{
	image.src = "../foto/slaapkamerlicht.jpg";
	link3.style.display="inline";
	document.getElementById("link1").innerHTML = "Turn lights off";
	document.getElementById("link2").innerHTML = "Go to the bathroom";
	document.getElementById("link3").innerHTML = "Go to the hallway";
	document.getElementById("link2").onclick = badkameron;
	document.getElementById("link3").onclick = hallway;
	document.getElementById("link1").onclick = slaapkamer1;
}
function badkameron()
{
	image.src = "../foto/badkamerlicht.png";
	link3.style.display="none";
	document.getElementById("link1").innerHTML = "Go back to your bedroom";
	document.getElementById("link2").innerHTML = "Look in the mirror";
	document.getElementById("link2").onclick = mirror;
	document.getElementById("link1").onclick = lights;
}
function badkameroff()
{
	image.src = "../foto/badkamerdonker.png";
	link3.style.display="none";
	document.getElementById("link1").innerHTML = "Go back to your bedroom";
	document.getElementById("link2").innerHTML = "Look in the mirror";
	document.getElementById("link2").onclick = mirror;
	document.getElementById("link1").onclick = slaapkamer1;
}

function hallway ()
{
	image.src = "../foto/hallway/gang.jpg";
	link2.style.display="inline";
	link3.style.display="none";
	document.getElementById("link1").innerHTML = "Go back to your bedroom";
	document.getElementById("link1").onclick = slaapkamer1;
	document.getElementById("link2").innerHTML = "Go downstairs";
	document.getElementById("link2").onclick = downstairs;
}
function lights()
{
	image.src = "../foto/slaapkamerlicht.jpg";
	document.getElementById("link1").innerHTML = "Turn lights off";
	document.getElementById("link2").innerHTML = "Go to the bathroom";
	document.getElementById("link3").innerHTML = "Go to the hallway";
	document.getElementById("link2").onclick = badkameron;
	document.getElementById("link3").onclick = hallway;
	document.getElementById("link1").onclick = slaapkamer1;
	link3.style.display="inline";
	}
function downstairs()
{
image.src = "../foto/downstairs1.gif";
document.getElementById("link1").innerHTML = "Go to the front door";
document.getElementById("link2").innerHTML = "go to the cellar";
document.getElementById("link3").innerHTML = "Go to the kitchen";
document.getElementById("link1").onclick = frontdoor;
document.getElementById("link2").onclick = kelder1;
document.getElementById("link3").onclick = kitchen;
link2.style.display="inline";
link3.style.display="inline";
link4.style.display="none";
}

function frontdoor()
{
	alert("This door is locked!");
}

function kitchen()
{
		if (knife == false) {
		image.src = "../foto/kitchen1.jpg";
		link4.style.display="inline";
	}	else {
		image.src = "../foto/kitchen2.jpg";
		link4.style.display="none";
	}
	document.getElementById("link1").innerHTML = "Go back";
	document.getElementById("link1").onclick = downstairs;
	document.getElementById("link4").innerHTML = "Take the knife";
	document.getElementById("link4").onclick = knifekitchen;
	link2.style.display="none";
	link3.style.display="none";

}
function knifekitchen()
{
	image.src = "../foto/kitchen2.jpg";
	knife = true;
	link4.style.display="none";
	items1.src = "../foto/items/knife.png";
	items1.style.display="inline";
}

function kelder1()
{
	link2.style.display="none";
	link3.style.display="none";
	link4.style.display="none";
	image.src = "../foto/kelder1.jpg";
	document.getElementById("link1").innerHTML = "Go downstairs";
	document.getElementById("link1").onclick = knifekelder;
	audio10.play();
	audio10.volume = 0.4;

function knifekelder()
	{
		if (knife == true) {
			audio9.play();
			audio9.volume = 0.5;
			kelder2();
		}
		else {
 			gameover();
		}
	}
}

function kelder2()
{
	link2.style.display="inline";
	link3.style.display="none";
	link4.style.display="none";
	image.src = "../foto/kelder2.jpg";
	document.getElementById("link1").innerHTML = "Go back upstairs";
	document.getElementById("link1").onclick = downstairs;
	document.getElementById("link2").innerHTML = "Go outside through the window";
	document.getElementById("link2").onclick = gooutside;
}

function gooutside()
{
	alert("If you go outside you can't go back, are you sure?");
	document.getElementById("link1").innerHTML = "yes";
	document.getElementById("link1").onclick = outside1;
	document.getElementById("link2").innerHTML = "no";
	document.getElementById("link2").onclick = kelder2;

}
function outside1()
{
	image.src = "../foto/outside1.jpg";
	link2.style.display="inline";
	link3.style.display="none";
	link4.style.display="none";
	document.getElementById("link2").innerHTML = "Walk to the garden";
	document.getElementById("link2").onclick = outside2;
	document.getElementById("link1").innerHTML = "Walk to the driveway";
	document.getElementById("link1").onclick = driveway;
}
function driveway()
{
	image.src = "../foto/outside3.jpg";
	document.getElementById("link1").innerHTML = "Get in the car";
	document.getElementById("link1").onclick = car1;
	document.getElementById("link2").innerHTML = "Go back to the house";
	document.getElementById("link2").onclick = outside1;
}
function car1()
{
	if (carkey == true) {
		image.src = "../foto/car/car2.jpg";
		document.getElementById("link1").innerHTML = "Get out of the car";
		document.getElementById("link1").onclick = getoutofcar;
		document.getElementById("link2").innerHTML = "Start the car";
		document.getElementById("link2").onclick = car2;
	}
	else {
		alert("The car is locked you need a key!");
	}
}
function getoutofcar()
{
	driveway();
	audio3.pause();
	audio4.pause();
	audio6.pause();
	audio7.pause();
}
function car2()
{
	image.src = "../foto/car/car4.gif";
	audio3.play();
	setTimeout("audioradio()", 500);
	setTimeout("carfunctions()", 5000);
	link1.style.display="none";
	link2.style.display="none";
	link3.style.display="none";
}
function audioradio()
{
	audio7.play();
	audio4.play();
	audio4.volume = 0.5;
	audio7.volume = 0.15;
	audio4.loop = true;
	audio7.loop = true;
}
function carfunctions()
{
	link1.style.display="inline";
	link2.style.display="inline";
	document.getElementById("link1").innerHTML = "Get out of the car";
	document.getElementById("link1").onclick = getoutofcar;
	document.getElementById("link2").innerHTML = "drive towards the end of the road";
	document.getElementById("link2").onclick = car3;
}
function car3()
{
image.src = "../foto/car/car5.jpg";
audio4.pause();
audio5.play();
audio6.play();
audio7.pause();
audio6.volume = 0.5;
audio5.volume = 0.7;
audio6.loop = true;
document.getElementById("link1").innerHTML = "Get out of the car";
document.getElementById("link1").onclick = car4;
link2.style.display="none";
}

function car4()
{
	image.src = "../foto/car/car6.jpeg";
	audio5.pause();
	audio6.pause();
	audio7.pause();
	document.getElementById("link1").innerHTML = "Go further on feet south";
	document.getElementById("link1").onclick = gameover2;
	document.getElementById("link2").innerHTML = "Go further on feet north";
	document.getElementById("link2").onclick = village;
	document.getElementById("link3").innerHTML = "Get back in the car";
	document.getElementById("link3").onclick = car5;
	link2.style.display="inline";
	link3.style.display="inline";
	audio11.play();
}
function car5()
{
	image.src = "../foto/car/car5.jpg";
	audio6.play();
	audio6.volume = 0.5;
	audio6.loop = true;
	document.getElementById("link1").innerHTML = "Get out of the car";
	document.getElementById("link1").onclick = car4;
	link2.style.display="none";
	link2.style.display="none";
	audio11.pause();
}
function village()
{
	image.src = "../foto/village.jpg";
	document.getElementById("link1").innerHTML = "Go to the village";
	document.getElementById("link1").onclick = victory;
	link2.style.display="none";
	link3.style.display="none";
}
function victory()
{
	image.src = "../foto/victory.jpg";
	link2.style.display="none";
	document.getElementById("link1").innerHTML = "Return to main menu";
	document.getElementById("link1").onclick = keuzes;
	items1.style.display="none";
	items2.style.display="none";
	audio11.pause();
}
function outside2()
{
	image.src = "../foto/outside2.jpg";
	link2.style.display="inline";
	link3.style.display="none";
	link4.style.display="none";
	document.getElementById("link1").innerHTML = "Go to the shed";
	document.getElementById("link1").onclick = sheddark;
	document.getElementById("link2").innerHTML = "Go back to the house";
	document.getElementById("link2").onclick = outside1;
}
function sheddark()
{
	if (carkey == false) {
		image.src = "../foto/sheddark.jpg";
	}
	else {
		image.src = "../foto/sheddarkkey.jpg";
	}
	if (carkey == false) {
		link2.style.display="inline";
	}
	else {
		link2.style.display="none";
	}
	link3.style.display="inline";
	link4.style.display="none";
	document.getElementById("link1").innerHTML = "Turn lights on";
	document.getElementById("link1").onclick = shedlight;
	document.getElementById("link2").innerHTML = "Search the shed";
	document.getElementById("link2").onclick = shedsearch1;
	document.getElementById("link3").innerHTML = "Go back outside";
	document.getElementById("link3").onclick = outside2;
	audio10.play();
	audio10.volume = 0.4;

}
function shedlight()
{
	if (carkey == false) {
		image.src = "../foto/shedlight.jpg";
	}
	else {
		image.src = "../foto/shedlightkey.jpg";
	}
	if (carkey == false) {
		link2.style.display="inline";
	}
	else {
		link2.style.display="none";
	}
	link3.style.display="inline";
	link4.style.display="none";
	document.getElementById("link1").innerHTML = "Turn lights off";
	document.getElementById("link1").onclick = sheddark;
	document.getElementById("link2").innerHTML = "Search the shed";
	document.getElementById("link2").onclick = shedsearch2;
	document.getElementById("link3").innerHTML = "Go back outside";
	document.getElementById("link3").onclick = outside2;
}
function shedsearch1()
{
carkey = true;
items2.src = "../foto/items/carkey.png";
items2.style.display="inline";
alert("You found a car key!");
link2.style.display="none";
image.src = "../foto/sheddarkkey.jpg";
}
function shedsearch2()
{
carkey = true;
items2.src = "../foto/items/carkey.png";
items2.style.display="inline";
alert("You found a car key!");
link2.style.display="none";
image.src = "../foto/shedlightkey.jpg";
}

function mirror()
{
	link1.style.display="none";
	link2.style.display="none";
	image.src = "../foto/mirror.png";
	audio2.play();
	setTimeout("mirror1()", 200);
}
function mirror1()
{
	image.src = "../foto/mirror2.png";
	setTimeout("mirror2()", 200);
}
function mirror2()
{
	image.src = "../foto/mirror.png";
	setTimeout("mirror3()", 190);
}
function mirror3()
{
	image.src = "../foto/mirror2.png";
	setTimeout("mirror4()", 190);
}
function mirror4()
{
	image.src = "../foto/mirror.png";
	setTimeout("mirror5()", 180);
}
function mirror5()
{
	image.src = "../foto/mirror2.png";
	setTimeout("mirror6()", 180);
}
function mirror6()
{
	image.src = "../foto/mirror.png";
	setTimeout("mirror7()", 170);
}
function mirror7()
{
	image.src = "../foto/mirror2.png";
	setTimeout("mirror8()", 3000);
}
function mirror8()
{
	link1.style.display="inline";
	link2.style.display="inline";
	image.src = "../foto/badkamerdonker.png";
}
function gameover()
{
	audio12.play();
	audio12.volume = 0.5;
	audio11.pause();
	image.src = "../foto/gameover1.png";
	link2.style.display="none";
	link3.style.display="none";
	link4.style.display="none";
	document.getElementById("link1").innerHTML = "Return to main menu";
	document.getElementById("link1").onclick = keuzes;
}
function gameover2()
{
audio12.play();
audio12.volume = 0.5;
audio11.pause();
image.src = "../foto/gameover2.png";
link2.style.display="none";
link3.style.display="none";
link4.style.display="none";
document.getElementById("link1").innerHTML = "return to main menu";
document.getElementById("link1").onclick = keuzes;
}
