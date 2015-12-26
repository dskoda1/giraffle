module.exports = function (app, models){
    
    
    //Add future api routes here
    require('./donations')(app, models.Donation)
}