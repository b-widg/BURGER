
$(function() {
    $(`.create-form`).on(`submit`, function(event) {
        event.preventDefault();

        var newBurger  = {
            burger_name: $(`#newburget`).val().trim(),
            devoured: 0
        };

        $.ajax(`/api/burgers`, {
            type: `POST`,
            data: newBurger
        }).then(function() {
            console.log(`Added new burger`);
            location.reload();
        });
    });

    $(`.eatBurger`).on(`click`, function(event) {
        event.preventDefault();

        var id = $(this).data(`id`);
        var devouredState = {
            devouredState: 1
        };
        
        $.ajax(`/api/burgers/` + id, {
            type: `PUT`,
            data: devouredState
        }).then(function() {
            console.log(`Burger Devoured`);
            location.reload();
        });
    });

    $(`.trashburger`).on(`click`, function(event) {
        event.preventDefault();
        var id = $(this).data(`id`);

        $.ajax({
            type: `DELETE`,
            url: `/api/burgers/` + id
        }).then(location.reload());
    });
}); 