var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Donor = require('../express/models/Donor');
var router = express.Router();

mongoose.connect('mongodb://localhost/donors'); // connect to our database

router.use(function (req, res, next){
	next();
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

router.get('/', function(req, res){
	res.json({message:'we are set'});
});

router.route('/donors')
	.post(function (req, res){
		var donor = new Donor();
		donor.firstName     = req.body.firstName;
		donor.lastName      = req.body.lastName;
		donor.contactNumber = req.body.contactNumber;
		donor.email         = req.body.email;
		donor.bloodGroup    = req.body.bloodGroup;
		donor.latitude      = req.body.latitude;
		donor.longitude     = req.body.longitude;
		donor.ipAddress     = req.body.ipAddress;
		
		donor.save(function (err){
			if (err)
				res.send(err);
			
			res.json({ message: 'Donor created!'});
		})
	})
	.get(function (req, res){
		Donor.find(function (err, donors){
			if (err)
				res.send(err);
			
			res.json(donors);
		})
	});

router.route('/donors/:donorId')
	.get(function (req, res){
		Donor.findById(req.params.donorId, function (err, donor){
			if (err)
				res.send(err);
			
			if (donor != null)
				res.json(donor);
			else
				res.json({});
		})
	})
	.put(function (req, res){
		Donor.findById(req.params.donorId, function (err, donor){
			if (err)
				res.send(err);
			
			if (req.body.firstName) donor.firstName         = req.body.firstName;
			if (req.body.lastName) donor.lastName           = req.body.lastName;
			if (req.body.contactNumber) donor.contactNumber = req.body.contactNumber;
			if (req.body.email) donor.email                 = req.body.email;
			if (req.body.bloodGroup) donor.bloodGroup       = req.body.bloodGroup;
			if (req.body.latitude) donor.latitude           = req.body.latitude;
			if (req.body.longitude) donor.longitude         = req.body.longitude;
			if (req.body.ipAddress) donor.ipAddress         = req.body.ipAddress;
			
			donor.save(function (err){
				if (err)
					res.send(err);
				
				res.json({message: 'Donor updated'});
			})
		})
	})
	.delete(function (req, res){
		Donor.remove({
			_id: req.params.donorId
		}, function (err, donor){
			if (err)
				res.send(err);
			
			if (donor != null)
				res.json({ message: 'Successfully deleted'});
			else
				res.json({ message: 'Did not find user'});
		})
	});

app.use('/api', router);

app.listen(port);
console.log('Listening on port ' + port);