function RequestManager() {
	this.something = 'Hello World!';
}

$.extend(RequestManager.prototype, {
	alertSomething: function() {
		alert(this.something)
	}
});

var requestManager = new RequestManager();