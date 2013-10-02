var kontroller = require('kontroller'),
  Driver = kontroller.BaseController.constructClass('posts_controller');

Driver.before(think, {only: 'accelerate'});

exports.accelerate = Driver.actions.accelerate = function accelerate(req, res, next) {
    res.send('accelerating!');
};

function think() {
  console.log('in think in think in think in think ');
};