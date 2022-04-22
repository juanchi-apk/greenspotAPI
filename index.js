const path = require('path');
const env = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const {sequelize}	 = require('./database/index');
const routes = require("./routes/index");
const cors = require("cors");
const morgan = require("morgan");
const { defaultStrains } = require('./database/defaultStrains');
const { defaultSoils } = require('./database/defaultSoils');
const { defaultLights } = require('./database/defaultLights');





//Inicio la sesion de Express
const app = express();
const corsOptions = {
	origin: ["http://localhost:3000", "*"]
	};

	env.config();



app.use(bodyParser.json());
app.use(cors(corsOptions)); 
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", routes);




async function strainCreator(strainList){
let strainLength = strainList.length;
	
	while(strainLength>0){
		let strainData = strainList[strainLength-1]
		let { strain_id,
			strain_name,
			origin_genetic,
			sativity,
			thc,
			 minProdInt_bank,
			 maxProdInt_bank,
			 minProdExt_bank,
			 maxProdExt_bank,
			 type,
			days_complete_cycle,
			effect,
			flavour
			
		} =  strainData;
		
		const savedStrains = await sequelize.models.Strains.findAll(
			{where:{strain_name: strain_name}})
		if(savedStrains.length==0){
				 await sequelize.models.Strains.create({
					strain_id,
					strain_name,
					origin_genetic,
					sativity,
					thc,
					 minProdInt_bank,
					 maxProdInt_bank,
					 minProdExt_bank,
					 maxProdExt_bank,
					 type,
					days_complete_cycle: (days_complete_cycle * 7),
					effect,
					flavour
			
			})
			} 
			strainLength--;
	}

}

async function soilCreator(soilList){
		
	let soilLength = soilList.length
	
	while(soilLength>0){
			let soilData = soilList[soilLength-1]
			
			const savedSoils = await sequelize.models.Soils.findAll(
				{where:{soil_type: soilData}})
			if(savedSoils.length==0){
					 await sequelize.models.Soils.create({
						soil_type:soilData
				})
				} 
				soilLength--;
		}
			
 	

	}

	async function lightCreator(lightList){
		
		let lightLength = lightList.length
			while(lightLength>0){
				let lightData = lightList[lightLength-1]
				const savedLights = await sequelize.models.Lights.findAll({where:{light_type: lightData}})
			
				if(savedLights.length==0){
				 await sequelize.models.Lights.create({
				light_type:lightData
				})
				} 
				lightLength--;
			}
	}	


sequelize
	//.sync({force : true}) 	
	.sync()
	.then(() => {
		strainCreator(defaultStrains)
		soilCreator(defaultSoils)
		lightCreator(defaultLights)

		app.listen(process.env.PORT);
		//pending set timezone
		console.log("App listening on port " + process.env.PORT);
	})
	.catch(err => {
		console.log(err);
	});
