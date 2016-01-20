Template.createUser.helpers({
  courseVerbatim: function () {
    return Session.get("verbatim");
  },
  userRole: function(){
    return Session.get("userRole");
  }
});

  Template.createUser.events({
    'click #btn-signup' : function(e, t) {
      e.preventDefault();
      var email = t.find('#email').value
        , password = t.find('#passwd').value
        
        , firstname = t.find('#firstname').value
        , lastname = t.find('#lastname').value;
      
        // Trim and validate the input

      //id = 
      Accounts.createUser({email:email, password:password}, function(error,result){
        if (error) {throw error;}
        else {
          Meteor.call('assignUserRole',Meteor.user(),Session.get("userRole") || "student",function(error,result){
        if (error) {throw error;}
        else {
          
          Session.set({
            userRole: null
          });
          var profile = {
            firstname: firstname,
            lastname: lastname
          };
          Meteor.call('createProfile',profile,function(error,result){
            if (error) {throw error}
              else {
                if (!Session.get("verbatim")) {
                  Router.go('homeIndex');
                } else {
                  Router.go('createCourse');
                }
              }
          });
        }
      });
        }


      });
      /**/
      /*function(err){
          if (err) {
            throw(err);
            // Inform the user that account creation failed
          } else {
            if (!Session.get("verbatim")) {
              Router.go('homeIndex');
            } else {
              Router.go('expertiseNew');
            }
          }
        }*/

      return false;
    }
  ,	'click #btn-login' : function(e,t) {
  		e.preventDefault();
  		var email = t.find('#login-username').value
        , password = t.find('#login-password').value;


        Meteor.loginWithPassword(email,password,function(){
          if(!Session.get("verbatim")) {
            Router.go('homeIndex');
            } else {
              Router.go('expertiseNew');
            }

        });
  	}
  });

