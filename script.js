var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d");
var continousParticles = true;
var continousParticlesParams;
var continousParticlesSpread;

const maxParticles = 200;

class Particle{

	constructor({
		x=0,
		y=0,
		dx = 0,
		dy = 0,
		ax = 0,
		ay = 0,
		width = 10,
		height = 10,
		color = "#ff00ff"
	}){

		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.ax= ax;
		this.ay = ay;
		this.width = width
		this.height= height
		this.color = color;
	}

	update(){
		this.x += this.dx
		this.y += this.dy
		this.dx += this.ax
		this.dy += this.ay
		this.draw();
	}

	draw(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.width,this.height);


	}

}


var particles = [];

function generateParticleBurst(parameters,spreads){

	for(let i=0;i< 200;i++){
		particles[i] = generateRandomParticle(parameters,spreads)
	}
}
continousParticlesParams = {
	x:500,
	y:200,
	dy:1,
	ay:0.1
}
continousParticlesSpread = {
	spreadDx :5,
	spreadDy :0.5
}



function generateRandomParticle(
	{
		x=0,
		y=0,
		dx = 0,
		dy = 0,
		ax = 0,
		ay = 0,
		width = 10,
		height= 10,
		color = "#ff00ff"
},{
	spreadX = 0,
		spreadY = 0,
		spreadDx = 0,
		spreadDy = 0,
		spreadAx = 0,
		spreadAy = 0,
		spreadWidth =0,
		spreadHeight = 0

	}){

	x += generateSpread(spreadX)
	y += generateSpread(spreadY)
	dx += generateSpread(spreadDx)
	dy += generateSpread(spreadDy)
	ax += generateSpread(spreadAx)
	ay += generateSpread(spreadAy)
	width += generateSpread(spreadWidth)
	height  += generateSpread(spreadHeight)

	return new Particle({
	x : x,
	y : y,
	dx : dx,
	dy : dy,
	ax : ax,
	ay : ay,
	width : width,
	height : height,
	color : color
	})
}

function generateSpread(spread){
	return Math.random()*spread -spread/2;
}


function render(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(let i=0;i<particles.length;i++){
		particles[i].update();


	}

	//this could probably be way more effitent if we wouldnt destroy the objects but simply change their properties
	if(continousParticles){
		particles.push(	generateRandomParticle(continousParticlesParams,continousParticlesSpread))
		if(particles.length > maxParticles){
			particles.shift()
		}
	}

requestAnimationFrame(render)
}
requestAnimationFrame(render)



//handling of user input


function setOption(e,option){
	if(option != "color"){
		continousParticlesParams[option] = parseFloat( e.value);
	}else{
		continousParticlesParams[option] = e.value

	}

}
function setSpread(e,option){
	if(option != "color"){
		continousParticlesSpread[option] = parseFloat( e.value);
	}else{
		continousParticlesSpread[option] = e.value

	}

}

function generateBurst(){
generateParticleBurst(continousParticlesParams,continousParticlesSpread)

}


function setContinous(caller){
	continousParticles = caller.checked;
}

function setPreset(caller){
	console.log(caller)
	continousParticlesParams = presets[caller.value].parameters;
	continousParticlesSpread = presets[caller.value].spread;

	 //set the inputfields to the preset values

	let paramInputs = document.getElementById("sliderContainer").getElementsByTagName("input");
	let spreadInputs = document.getElementById("spreadSliderContainer").getElementsByTagName("input");

	paramInputs[0].value = presets[caller.value].parameters.x ?? 0
	paramInputs[1].value = presets[caller.value].parameters.y ?? 0
	paramInputs[2].value = presets[caller.value].parameters.dx ?? 0
	paramInputs[3].value = presets[caller.value].parameters.dy ?? 0
	paramInputs[4].value = presets[caller.value].parameters.ax ?? 0
	paramInputs[5].value = presets[caller.value].parameters.ay ?? 0
	paramInputs[6].value = presets[caller.value].parameters.width ?? 10
	paramInputs[7].value = presets[caller.value].parameters.height ?? 10
	paramInputs[8].value = presets[caller.value].parameters.color ?? "#ff00ff"

	spreadInputs[0].value = presets[caller.value].spread.spreadX ?? 0
	spreadInputs[1].value = presets[caller.value].spread.spreadY ?? 0
	spreadInputs[2].value = presets[caller.value].spread.spreadDx ?? 0
	spreadInputs[3].value = presets[caller.value].spread.spreadDy ?? 0
	spreadInputs[4].value = presets[caller.value].spread.spreadAx ?? 0
	spreadInputs[5].value = presets[caller.value].spread.spreadAy ?? 0
	spreadInputs[6].value = presets[caller.value].spread.spreadWidth ?? 0
	spreadInputs[7].value = presets[caller.value].spread.spreadHeight ?? 0


}

//keep the user input even after reload
{
	let inputs = document.getElementsByTagName("input");
	for(let i = 0; i<inputs.length;i++){
		if(inputs[i].type != "radio"){
			inputs[i].oninput();
		}
	}


}
