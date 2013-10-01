var kontroller = require('kontroller'),
  Driver = kontroller.BaseController.constructClass();

  before(think, {only: 'accelerate'});
// define action
exports.accelerate = Driver.actions.accelerate = function accelerate(req, res, next) {
    res.send('accelerating!');
};

function think() {
  console.log('in think in think in think in think ');
};