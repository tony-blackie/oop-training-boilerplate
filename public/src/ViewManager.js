function ViewManager() {
	this.something = 'Hello World!';
}

$.extend(ViewManager.prototype, {

	renderTemplate: function(data) {
		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);
		var context = {
			data: data
		};
		var theCompiledHtml = template(context);
		// Add the compiled html to the page
		$(document.body).append(theCompiledHtml);
	}
});

var viewManager = new ViewManager();