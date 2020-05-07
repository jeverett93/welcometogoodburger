// Attaches handlebars when the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    let id = $(this).data("id");
    let newDevoured = $(this).data("newdevoured");

    let newDevouredState = {
      devoured: newDevoured
    };

    // Sends the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Sends the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    // Sends the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});