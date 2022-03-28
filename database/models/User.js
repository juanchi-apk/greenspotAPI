
const {DataTypes } = require('sequelize');

const User = (sequelizedb)=>{

	sequelizedb.define('users', {
		user_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true	
		},
		
		full_name: {
			type: DataTypes.STRING,
			required: true,
			allowNull:true,
		} ,
		date_of_birth:{
			type: DataTypes.STRING,	
			required: false,
			allowNull:true,
		},

		email: {
			type: DataTypes.STRING,
			isEmail:true,	
			required:true,
			allowNull:true,
			len:[7,80]

		},

		password: {
			type: DataTypes.STRING,
			allowNull:true
		},
		updated_at: {type:DataTypes.DATE},
		deleted_at: {type:DataTypes.DATE}

	},

		{
			underscored:true,
			paranoid:true,
		},
	
  	);
}

module.exports = User;