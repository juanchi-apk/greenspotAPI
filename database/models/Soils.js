const {DataTypes } = require('sequelize');

const Soils = (sequelizedb)=>{

	sequelizedb.define('soils', {
		soil_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true	
		},		
		soil_type:{
			type: DataTypes.STRING,
			isAlpha: true,
            allowNull: false,

		},
    }, 
	 {
		underscored:true,
	
  	})
	  
}



module.exports = Soils;