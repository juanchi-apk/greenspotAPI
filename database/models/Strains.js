const {DataTypes } = require('sequelize');

const Strains = (sequelizedb)=>{

	sequelizedb.define('strains', {
		strain_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true	
		},		
		strain_name:{
			type: DataTypes.STRING,
			isAlpha: true,
            allowNull: false,

		},
		origin_genetic:{
			type: DataTypes.STRING,
			isAlpha: true,
            allowNull: false,

		},
		thc:{
			type: DataTypes.STRING,
			isAlpha: true,
            allowNull: true,
		},
		sativity:{
			type: DataTypes.STRING,
			isAlpha: true,
            allowNull: true,
		},
		type:{
			type: DataTypes.STRING,
			isAlpha: true,
            allowNull: false,
			
		},
		 minProdInt_bank:{
			type: DataTypes.INTEGER,
            allowNull: true,
		},
         maxProdInt_bank:{
			type: DataTypes.INTEGER,
            allowNull: true,
		},
         minProdExt_bank: {
			type: DataTypes.INTEGER,
            allowNull: true,
		},
         maxProdExt_bank: {
			type: DataTypes.INTEGER,
            allowNull: true,
		},
		days_complete_cycle: {
			type: DataTypes.STRING,
            allowNull: false,
		},
		effect:{
			type:DataTypes.BLOB,
			allowNull:false
		},
		flavour:{
				type:DataTypes.BLOB,
				allowNull:false
			},
		

	 } ,
	 {
		underscored:true,
	
  	})
	  
}



module.exports = Strains;