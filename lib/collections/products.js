products = new Mongo.Collection("products");
Schema ={};
Schema.Product = new SimpleSchema({
	vendor: {
		type: String
	},
	duration: {
		type: Number
	},
	price: {
		type: Number
	}
});

products.attachSchema(Schema.Product);

courses = new Mongo.Collection("courses");
Schema.Course = new SimpleSchema({
	verbatim:{
		type: String
	},
	subject:{
		type: String
	},
	target:{
		type: String
	},
	product:{
		type: String
	},
	owner:{
		type: String
	}
});

courses.attachSchema(Schema.Course);