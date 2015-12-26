module.exports = function(mongoose){
    
    return {
        Donation: mongoose.model('donation', {
        amount: String,
        email: String
        })
    }
    
}