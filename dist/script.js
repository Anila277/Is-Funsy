function getData(event) {

    const input = $("#search").val();

    event && event.preventDefault();


    const URL = $.ajax(`https://api.giphy.com/v1/gifs/search?api_key=OGD0zgCTUf7x7LmIUocQW3v67k6IM9rH&q=${input}&limit=25&offset=0&rating=g&lang=en`);

    URL.done(function (data) {

        const gifs = data.data

        for (i in gifs) {
            $('.container').append("<img src='" + gifs[i].images.original.url + "'/>")
        }

    });

    $(".container").empty(location + " .container"); // refresh page when searching new gif

}

//Enter key
$(document).ready(() => {
    $('.enterKey').on('submit', () => {

        return false;
    });
});