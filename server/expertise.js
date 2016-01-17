Meteor.methods({
	updateInstructorTime: function(query, expertise){
	var findprice = instructorTime.findOne(query);
	if(!findprice) {
		var product = instructorTime.insert(query);
		
	} else {
		var product = findprice._id;
	}
	var course = _.extend(expertise,{
			product: product
		});
	return Meteor.users.upsert(this.userId,{"$addToSet":{course:course}});

	}

	
});