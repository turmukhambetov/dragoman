Template.instructorCreate.helpers({
  courseVerbatim: function () {
    return Session.get("verbatim");
  }
});

  Template.instructorCreate.events({
    'click #btn-signup' : function(e, t) {
      e.preventDefault();
      var email = t.find('#email').value
        , password = t.find('#passwd').value
        , firstname = t.find('#firstname').value
        , lastname = t.find('#lastname').value;

        // Trim and validate the input

      Accounts.createUser({email:email, password:password, profile:{lastname:lastname,firstname:firstname}}, function(err){
          if (err) {
            throw(err);
            // Inform the user that account creation failed
          } 

        });

      return false;
    }
  });