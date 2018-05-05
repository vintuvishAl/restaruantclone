const User = require('../../models/User');
const UserSession = require('../../models/UserSession');
const Restaurant = require('../../models/Restaurant');

module.exports = (app) => {

    app.get('/api/account/restaurant', (req, res, next) => {
        Restaurant.find()
          .exec()
          .then((restaurant) => res.json(restaurant))
          .catch((err) => next(err));
      });




    app.post('/api/account/restaurant', (req, res, next) => {
        const { body } = req;
        let {name,phonenumber,timings,averagecost,cuisines,address,moreinfo,user} = body;
        
        if (!name) {
          return res.send({
            success: false,
            message: 'Error: Name cannot be blank.'
          });
        }
        if (!phonenumber) {
          return res.send({
            success: false,
            message: 'Error: Phonenumber cannot be blank.'
          });
        }
        if (!timings) {
            return res.send({
              success: false,
              message: 'Error: Timings cannot be blank.'
            });
          }
          if (!averagecost) {
            return res.send({
              success: false,
              message: 'Error: Averagecost cannot be blank.'
            });
          }
          if (!cuisines) {
            return res.send({
              success: false,
              message: 'Error: Cuisines cannot be blank.'
            });
          }
          if (!address) {
            return res.send({
              success: false,
              message: 'Error: Address cannot be blank.'
            });
          }
          
       
       name = name.trim();
       phonenumber = phonenumber.trim();
       timings = timings.trim();
       averagecost = averagecost.trim();
       address = address.trim();
       moreinfo = moreinfo.trim();
      
       
        // Steps:
        // 1. Verify restaurant doesn't exist
        // 2. Save
        Restaurant.find({
          name: name
        }, (err, previousRestaurants) => {
          if (err) {
            return res.send({
              success: false,
              message: 'Error: Server error'
            });
          } else if (previousRestaurants.length > 0) {
            return res.send({
              success: false,
              message: 'Error: Restaurants already exist.'
            });
          }
          // Save the new user
          const newRestaurant = new Restaurant();
          newRestaurant.name = name;
          newRestaurant.phonenumber = phonenumber;
          newRestaurant.timings = timings;
          newRestaurant.averagecost = averagecost;
          newRestaurant.cuisines = cuisines;
          newRestaurant.address = address;
          newRestaurant.moreinfo = moreinfo;
          newRestaurant.user = user;
      
          newRestaurant.save((err, restaurant) => {
            if (err) {
              return res.send({
                success: false,
                message: 'Error: Server error'
              });
            }
            return res.send({
              success: true,
              message: 'Restaurant Saved'
            });
          });
        });
      });
    
    
};