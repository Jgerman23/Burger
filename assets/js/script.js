$("#addBurger").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $(".form-control").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            $(".form-control").val("");

            location.reload();
        }
    );
});