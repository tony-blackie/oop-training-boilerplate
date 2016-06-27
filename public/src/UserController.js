function UserController() {
	this.something = 'Hello World!';
}

$.extend(UserController.prototype, {
	alertSomething: function() {
		alert(this.something)
	},
	getUsers: function() {
		requestManager.getAllUsers()
			.done(function(data){
				viewManager.renderTemplate(data);
		});
	}

});

var userController = new UserController();
userController.getUsers();