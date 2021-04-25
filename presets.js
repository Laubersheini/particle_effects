var presets = {

  dripping:{
    parameters: {
    	x:500,
    	y:200,
    	dy:1,
    	ay:0.1,
			color: "#c0c0c0"
    },
    spread: {
    	spreadDx :5,
    	spreadDy :0.5
    }
  },
	fountain:{

		parameters:{
			x:500,
			y:700,
			dy:-10,
			ay: 0.1,
			color: "#50a0ff"
		},
		spread:{
			spreadDx: 5,
			spreadDy:0.5

		}	
	},
	stars:{
		parameters:{
			x:500,
			y:500,
			color: "#ffff00"
		},
		spread:{
			spreadX:1000,
			spreadY:1000
		}
	},
	outward:{
		parameters:{
			x:500,
			y:500,
			color: "#50a0ff"

		},
		spread:{
			spreadX:1000,
			spreadAy:0.2
		}


	},
	turn:{
		parameters:{
			x: 500,
			y: 500,
			dx: 20,
			dy: -5.5,
			ax: -0.75,
			ay: 0.15,
			color: "#50a0ff"
		
		},
		spread:{
			spreadDx:1

		}
	},
	bouncing:{
		parameters:{
			x:450,
			y:200,
			dx:5,
			dy:10,
			ay:0.2,
			borderCollision :true
		},
		spread:{
			spreadDy:0.5
		}

	},
	parabola:{
		parameters:{
			x:100,
			y:800,
			dx:5,
			dy: -15,
			ay: 0.2,
			width: 5,
			height: 5,
			color : "#0000ff"		

		},
		spread:{
			spreadDy: 0.5
		}


	}


	

}
