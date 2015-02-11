function process() {
	var command = $("#command").val();
	if (command === "cd projects") {
		Window.open("www.google.com", "_self");
	} else {
		$("#output").append("<p>This command doesn't exist</p>");
	}
}