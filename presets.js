var presets = {

  dripping:{
    parameters: {
    	x:500,
    	y:200,
    	dy:1,
    	ay:0.1
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


	}

}
