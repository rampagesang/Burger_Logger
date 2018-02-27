function writecustomer(event) {
	event.preventDefault();
	var id = $(this).attr("id").substring(6);
	$("#customer" + id).css("display", "inline-block");
	$(this).attr("type", "submit").html("Devour it").attr("class", "devour");
};

$(document).on("click", ".predevour", writecustomer);