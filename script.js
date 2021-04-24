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

generateParticleBurst({
	x:500,
	y:200,
	dy:1,
	ay:0.1
	},{
	spreadDx :5, 
	spreadDy :0.5

	});


function generateRandomParticle(
	{
		x=0,
		y=0,
		dx = 0,
		dy = 0,
		ax = 0,
		ay = 0,
		width = 10,
		height= 10	
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
	height : height
		
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
	if(continousParticles){
		particles.push(	generateRandomParticle(continousParticlesParams,continousParticlesSpread))
		if(particles.length > maxParticles){
			particles.shift()
		}
	}

requestAnimationFrame(render)
}
requestAnimationFrame(render)
