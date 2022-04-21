exports.defaultStrains = [
           {
         strain_name: "Dream Team",
         origin_genetic: "Lemon Skunk + Super Silver Haze",
         sativity: "80%", //is also a string
         thc: "19",//on Api must be expressed as a string
            //Esto lo tengo que agregar a lo ultimo.
         type : "feminized" ,//Auto, Fem, Reg, Custom, Breed(Male) (This should be an automatic choise)
         
         minProdInt_bank: 450 ,//on api must be expressed as integer ( Gr/m2)
         maxProdInt_bank: 700 ,
         minProdExt_bank: 1000 ,
         maxProdExt_bank: 1200 ,//Integer(Gr/plant)
         days_complete_cycle: 12, //(expressed in weeks, should be transform to days on api to control total of cicle, and such.) 
         effect: ["Psichodelic" , "Euphoria"], //
         flavour: ["Lemony" , "Insciense" , "Peppery"], //  
        },
        {   
            strain_name: "Gorilla Glue Faster",
            origin_genetic: "Gorilla Glue #4",
            sativity: "70%",
            thc: "24",
            type : "Regular" ,
            minProdInt_bank: 500 ,
            maxProdInt_bank: 600 ,
            minProdExt_bank: 700 ,
            maxProdExt_bank: 700 ,
            days_complete_cycle: 6 , 
            effect: ["Narcotic", "Euphoria"], 
            flavour:["Damp Earth", "Chocolate"],  
        },
        {
            strain_name: "Blueberry XXL Auto",
            origin_genetic: "Blueberry Auto",
            sativity: "20",
            thc: "20",
            type : "Auto" ,
            minProdInt_bank: 450 ,
            maxProdInt_bank: 500 ,
            minProdExt_bank: 150 ,
            maxProdExt_bank: 200 ,
            days_complete_cycle: 11 ,
            effect: ["Brain Uprise", "Relaxation"], 
            flavour:["Raspberries" , "Blueberries"],  
        },
        {
            strain_name: "Blueberry XXL Fast",
            origin_genetic: "Blueberry Auto",
            sativity: "20",
            thc: "20",
            type : "Auto" ,
            minProdInt_bank: 450 ,
            maxProdInt_bank: 500 ,
            minProdExt_bank: 150 ,
            maxProdExt_bank: 200 ,
            days_complete_cycle: 11 ,
            effect: ["Brain Uprise", "Relaxation"], 
            flavour:["Raspberries" , "Blueberries"],  
        },

]