const {DataTypes } = require('sequelize');

const Lights = (sequelizedb)=>{

	sequelizedb.define('lights', {
		light_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true	
		},		
		light_type:{
			type: DataTypes.STRING,
			isAlpha: true,
            allowNull: false,

		},
    }, 
	 {
		underscored:true,
	
  	})
	  
}



module.exports = Lights;