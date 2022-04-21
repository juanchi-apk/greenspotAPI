const path = require('path');
const env = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const {sequelize}	 = require('./database/index');
const routes = require("./routes/index");
const cors = require("cors");
const morgan = require("morgan");
const { defaultStrains } = require('./database/defaultStrains');





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
		
		console.log(strain_name)
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
					days_complete_cycle,
					effect,
					flavour : JSON.stringify(flavour)
			
			})
			} 
			strainLength--;
	}

}




sequelize
	//.sync({force : true}) 	
	.sync()
	.then(() => {
		strainCreator(defaultStrains)
		app.listen(process.env.PORT);
		//pending set timezone
		console.log("App listening on port " + process.env.PORT);
	})
	.catch(err => {
		console.log(err);
	});
