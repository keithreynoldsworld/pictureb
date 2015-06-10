
var patt1 = new RegExp("http");
		

var Item = Backbone.Model.extend({
	defaults:{
		caption: "happy new year",
		picture: "http://www.eatsxm.com/uploads/1/3/8/6/13862036/1353573_orig.jpg"
		 
	},
	validate: function(attr, options) {
		if(attr.picture.length === 0) {
			return 'You must enter a todo item';
		}
		else if (patt1.test(attr.picture)===false){
			
			$('#warning').html("need real image, dum dum");
			return "need real image buster";
		}

		else{
			return false;
		}
		return false;
	},
	urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/bigbigkeith',
	idAttribute: '_id'

});