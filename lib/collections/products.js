Courses = [
{
	"area" : "Science",
	"subject" : "Math"
},
{
	"area" : "Art",
	"subject" : "Music"
}
];

Courses.findOne = function(args){
	return _.find(Courses, function(course) {
		return course.id === args.id;
	});
};

Courses.list = function(){
	return Courses;
};
