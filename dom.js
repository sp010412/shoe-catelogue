var findElem = document.querySelector(".find")
var addToCartElem = document.querySelector(".add")
var colorDropElem = document.querySelector(".slct1")
var brandDropElem = document.querySelector(".slct2")
var sizeDropElem = document.querySelector(".slct3")
var feedbackElem = document.querySelector(".feedback")

//my instance
var catalogueInsta = catalogue()

//finding a item on a list 
function findItems(colorDropElem, brandDropElem) {
    var shoes = catalogueInsta.shoeList()
    for (var i = 0; i < shoes.length; i++) {
        var list = shoes[i];
        let filteredList = list.filter(function (one, two) {
            return Number(one.size.includes(colorDropElem.value))
                && Number(one.size.includes(brandDropElem.value))
                && Number(two.price.includes(colorDropElem.value))
                && Number(two.price.includes(brandDropElem.value))
        });
        return filteredList;
    }
}
console.log(findItems())