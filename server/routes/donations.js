//Pass the router, and the donation model in
module.exports = function(router, model) {

    //Get all donations
    router.get('/api/donation', function(req, res) {

        // use mongoose to get all todos in the database
        model.find(function(err, donations) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) res.send(err)

            res.json(donations); // return all todos in JSON format
        });
    });

    //Create new donation and send back all donations after creation
    router.post('/api/donation', function(req, res) {

        //Data needed contained in req.body.__
        model.create({
            email: req.body.email,
            amount: req.body.amount
        }, function(err, donation) {

            if (err) res.send(err)

            //Find all the donations now that you've inserted
            model.find(function(err, donations) {
                if (err) res.send(err)
                res.json(donations);
            });
        });
    });

    //Delete a donation
    router.delete('/api/donation', function(req, res) {

        //Find the donation up for deletion
        model.findById(req.body.id, function(err, doc) {
            if (err) res.send(err)

            //No error, remove the doc in question
            //First check if the doc was found actually 
            if (doc) {
                //Go ahead and remove
                doc.remove(function(err) {
                    if (err) res.send(err)
                    else {
                        res.send("Success");
                    }
                });
            }
            else {
                //Send back to client that doc not found
                res.status(404).send("Item for deletion not found.");
            }
        })
    });

}