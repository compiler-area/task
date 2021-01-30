$.ajax({
    url: "https://api.github.com/users/compiler-area/repos",
    dataType: "json",
    cache: false,
    success: function (data, status) {
        $.each(data, function (index) {
            $("#show").append("<div><a href = " + data[index].html_url + ">" + data[index].html_url + "</a></div> <a href = https:/" + data[index].owner.login + ".github.io/" + data[index].name + " >  " + data[index].owner.login + ".github.io/" + data[index].name + " </a>");
        });
        console.log(status);
    },
    error: function (xhr, textStatus, err) {
        console.log(xhr);
        console.log(textStatus);
        console.log(err);
    }
})