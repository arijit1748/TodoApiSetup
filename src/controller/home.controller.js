function homepingController(req, res) {
    // collect the request
    // send it to the service
    // and then prepare and send response
    return res.json({msg:'welcome home'});
}

module.exports = homepingController;