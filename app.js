$(document).ready(function(){
    let $gifArea = $("#gif-area");
    let $searchInput = $("#search");

    $("form").on("submit", function(e){

        e.preventDefault();

        let searchTerm = $searchInput.val();
        $searchInput.val("");

        $.get(
            "http://api.giphy.com/v1/gifs/search",
            {
                q: searchTerm,
                api_key: "dc6zaTOxFJmzC"
            }
        ).then(function(res){
            let numResults = res.data.length;
            if(numResults){
                let randomIdx = Math.floor(Math.random() * numResults);
                let $newCol = $("<div>", {class: "col-md-4 col-12 mb-4"})
            }
        })
    })
})