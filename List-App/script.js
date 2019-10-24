// Question 14
$(document).ready(function(){
	$("thead").css({"background-color":"blue", "color":"white"});

    // Adding rows to Table
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

        // Deleting a row
        $("td button").click(function(){
            $(this).parents("tr").remove();
        });
    });
    
    //Sorting Table by Names
    $(".sort-table").click(function(){
        var rows = $('table tbody  tr').get();
        rows.sort(function(a, b) {
            var A = $(a).children('td').eq(1).text().toUpperCase();
            var B = $(b).children('td').eq(1).text().toUpperCase();
            if(A < B) {
                return -1;
            }
            if(A > B) {
                return 1;
            }
            return 0;
        });
        $.each(rows, function(index, row) {
            $('table').children('tbody').append(row);
        });
    });
});