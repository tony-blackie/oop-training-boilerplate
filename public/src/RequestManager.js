function RequestManager() {
	this.something = 'Hello World!';
}

$.extend(RequestManager.prototype, {
	alertSomething: function() {
		alert(this.something)
	},
	getAllUsers: function() {
		return $.ajax('/users', {
			type: 'GET'
		});
	}
});

var requestManager = new RequestManager();