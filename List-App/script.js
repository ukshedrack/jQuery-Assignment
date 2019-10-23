// Question 14
$(document).ready(function(){
	$("thead").css({"background-color":"blue", "color":"white"});
	$(".add-row").click(function(){
        var category = $("#category").val();
        var name = $("#name").val();
        var rating = $("#rating").val();
        var markup = "<tr>" + "<td>" + category + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + rating + "</td>" + "<td><button>delete</button></td>" + "</tr>";

        if ($("table tbody").length == 0) {
    		$("table").append("<tbody></tbody>");
  		}

        $("table tbody").append(markup);
        $("#category").val("");
        $("#name").val("");
        $("#rating").val("");

        $("td button").click(function(){
        	$(this).parents("tr").remove();
        })
    });
});