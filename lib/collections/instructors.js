instructors = new Mongo.Collection("instructors");

var Schemas = {};

Schemas.Instructor = new SimpleSchema({
	email: {
		type: String
	}
	, firstname: {
		type: String
	}
	, lastname: {
		type: String
	}
	, courses: {
		type: [Object]
	}
	, "courses.$.verbatim": {
		type: String
	}
	, "courses.$.subject": {
		type: String
	}
	, "courses.$.target": {
		type: String
	}
	, "courses.$.product": {
		type: String
	}
});

instructors.attachSchema(Schemas.Instructor);

Meteor.methods({
	createInstructor : function(instructor){
		return instructors.insert(instructor);
	}
	, updateInstructor : function(instructor,query){
		return instructors.update(instructor,query);
	}
});