schedule = new Mongo.Collection("schedule");
Schema.Schedule = new SimpleSchema({
	instructor: {
		type: String
	},
	start: {
		type: Date,
		autoform: {
      type: "bootstrap-datepicker"
    }
	},
	end: {
		type: Date,
		autoform: {
      type: "bootstrap-datepicker"
    }
	},
	student: {
		type: String
	},
	course: {
		type: String
	},
	product: {
		type: String
	},
	instructorCheck: {
		type: Boolean,
		defaultValue: false
	},
	studentCheck: {
		type: Boolean,
		defaultValue: false
	},
	systemCheck: {
		type: Boolean,
		defaultValue: false
	},
	room: {
		type: String
	}
});

schedule.attachSchema(Schema.Schedule);


/* One object - one hour


date-hour
avilaiblit : {free,booked,not available}
instructor
object_id
[bookings]
	- student
	- course
	- confirmation


schedule:
object_id
student
course
confirmed_by_instructor(Boolean)


