var beers = [];

function addBeer(bname, bcategory, brating){
    beers.push({name : bname , category: bcategory, rating:brating});
    renderBeers();
}

function renderBeers(){
    $(".beers-list").empty();
    beers.forEach(beer => {
        $(".beers-list").append("<li>Name: " + beer.name + " Category:" + beer.category + " Rating:"+ beer.rating + "</li>");
    });
}


function  sortBeersAscending(b1,b2){
    return b1.rating - b2.rating;
}

$(".post-beer").click(function(){
    addBeer($(".beer-input").val(),$(".category-input").val(),$(".select-rating option:selected").val());
})

var ascending = true;
$(".sort-beers").click(function(){
    if(ascending){
        ascending = false;
        beers.reverse(sortBeersAscending);
    }
    else{
        ascending = true;
        beers.sort(sortBeersAscending);
    }
    renderBeers();
})