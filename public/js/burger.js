

var url = window.location.search;
var counter = 0;
// Construct a newPost object to hand to the database
var newBurger = {
    burger_name: null,
    devour: false,
    created_at: null
};
//single object to control the DOM
var burger = {
    
    init: function() {  
        this.cacheDom();
        this.renderHide();
        this.bindEvents();
    },
    cacheDom: function () {
        this.$displayDiv    = $("#displayDiv");
        this.$burgerName    = $("#burgerName");
        this.$submitBtn     = $("#submitBtn");
        this.$uneatenBurger = $("#uneatenBurger");
        this.$btn           = $("#btns");
        this.$eatenBurger   = $("#eatenBurger");
    },
    bindEvents: function () {
        this.$submitBtn.on("click", this.createBurger.bind(this));
        //need to have a selector argument for dynamically create buttons.
        $(document).on("click", ".devBtn", this.updateBurger);
    }, 
    renderHide: function () {
        this.$displayDiv.hide();
    },
    renderShow: function () {
        this.$displayDiv.show();
    },
    //create a new burger to the db
    createBurger: function() {
        newBurger.burger_name = this.$burgerName.val().trim();
        //ajax post call with path url and newBurger data entered by user.
        $.post("api/create", newBurger)
            .done(function() {
                counter++;
                //dynamically appending newly added burger.
                var newDiv = $("<div>");
                newDiv.addClass("col-sm-4 well ");
                newDiv.append("<p>" + newBurger.burger_name + " </p>");
                newDiv.attr("id", counter);
                burger.$uneatenBurger.append(newDiv);

                //dynamically appending devour buttons.
                var devourBtn = $("<button>Devour</button>");
                devourBtn.addClass("btn btn-md btn-danger devBtn");
                devourBtn.attr("value", counter);
                burger.$btn.append(devourBtn);
        });
        this.$burgerName.val("");
        this.renderShow();
    }, 
    
    updateBurger: function() {
        //storing identifier into variable
        var toDelete = "#" + $(this).val();
        //adding to eaten area
        var newDiv = $("<div>");
        newDiv.addClass("col-sm-4 well");
        newDiv.append("<p>" + $(toDelete).text() + " </p>");
        burger.$burgerName.append(newDiv);
        //removing added burger
        $(toDelete).remove();
        //deleting the devour button.
        $(this).remove();
        burger.$burgerName.append(newDiv);

    }
};

$( document ).ready(function() {
    burger.init();
});