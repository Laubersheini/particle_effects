
//handling of user input


function setOption(e,option){
	if(option != "color"){
		continousParticlesParams[option] = parseFloat( e.value);
	}else{
		continousParticlesParams[option] = e.value

	}
document.getElementById("preset-custom").checked = true;

}
function setSpread(e,option){
	if(option != "color"){
		continousParticlesSpread[option] = parseFloat( e.value);
	}else{
		continousParticlesSpread[option] = e.value

	}
document.getElementById("preset-custom").checked = true;
}

function generateBurst(){
generateParticleBurst(continousParticlesParams,continousParticlesSpread)

}


function setContinous(caller){
	continousParticles = caller.checked;
}
function setPreset(caller){
	//console.log("hey");
	//console.log(caller.value);
	if(caller.value != "custom"){

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


	//this is possibly the single worst way to deepcopy the presets into the actual properties (but it works)
	updateFromInputs()
	document.getElementById("preset-" + caller.value).checked = true;
}
}

//keep the user input even after reload
function updateFromInputs(){
	let inputs = document.getElementsByTagName("input");
	for(let i = 0; i<inputs.length;i++){
		if(inputs[i].type != "radio"){
			inputs[i].oninput();
		}
	}


}
updateFromInputs()
