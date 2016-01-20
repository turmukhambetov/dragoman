Meteor.methods({
	updateProducts: function(query){
	var findproduct = products.findOne(query);
	if(!findproduct) {
		return products.insert(query);
		
	} else {
		return findproduct;
	//	console.log(product);
	}
	//var exp=[];
	
	//exp.push(course);
	//console.log(exp);
	

	},

	updateCourses: function(course){
		return courses.insert(course);
	}

	
});