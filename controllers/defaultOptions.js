const sequelize = require('../database/index');
const {Lights, Soils, Strains} =sequelize;

exports.getDefaultOptions = async (req, res) =>{

    console.log("LLEGO AL SERVER; SINO CHEQUEAR IP")
    const lightList  = await Lights.findAll()
    const soilList  = await Soils.findAll()
    const strainList  = await Strains.findAll()
    if(
        (!lightList|| !soilList || !strainList ) ||
        (lightList==null || soilList==null || strainList==null)
        
        ){
        return res.status(200).json({
            status: "HYDRATION FAILED",
            message:"Hydration Failed",
            data: "Hydration Failed"
            
    }) 
    } 

    return res.status(200).json({ 
        status: "SUCCESS",
        message: "Succesfull Login",
        data: {
            lightList,
            soilList,
            strainList
        }
       })
}