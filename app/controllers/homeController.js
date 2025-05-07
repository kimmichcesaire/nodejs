 
const  homeController = {
    
    getHomePage : (req ,res) =>{
        res.render('home.ejs')
    },
 
//entrainement
   getTotoPage : (req ,res) =>{
       res.render('toto.ejs')
     },

     //mon teste
     getAcPage : (req ,res) =>{
        res.render('ac.ejs')
     }

     //
    
 
}
 
module.exports = homeController
 
 