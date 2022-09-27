var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
    color: "#FFFFFF",
    textColor: "#000000"
  });
});

router.post('/', function(req, res){
  res.render('index',{
    color: req.body.colorPicker,
    textColor: req.body.textColorPicker
  })
})

router.post('/random', function(req,res){
  res.render('index',{
    color: randomC(),
    textColor: randomC()
  })
})

module.exports = router;

function randomC(){
  let choice = "#"
  while (choice.length < 7 ){
    choice += (Math.round(Math.random() * 15)).toString(16)
  }
  return choice;
}