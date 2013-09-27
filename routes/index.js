
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = {
	title : "Researcher's Diary",
	templateUrl : "https://github.com/verekia/initializr-template"
  }
  
  res.render('index', data);
};