function catalogue() {
    // var count = 0
    var shoes = {
        "1": {
            "color": "green",
            "brand": "Nike",
            "price": 750,
            "size": 5,
            "in_stock": 10
        },
        "2": {
            "color": "black",
            "brand": "Nike",
            "price": 750,
            "size": 5,
            "in_stock": 8
        },
        "3": {
            "color": "silver",
            "brand": "Adidas",
            "price": 850,
            "size": 5,
            "in_stock": 12
        },
        "4": {
            "color": "blue",
            "brand": "Vans",
            "price": 500,
            "size": 5,
            "in_stock": 20
        },
        "5": {
            "color": "pink",
            "brand": "Vans",
            "price": 450,
            "size": 5,
            "in_stock": 14
        },
        "6": {
            "color": "red",
            "brand": "Air force",
            "price": 999,
            "size": 5,
            "in_stock": 7
        },
        "7": {
            "color": "orange",
            "brand": "Puma",
            "price": 650,
            "size": 5,
            "in_stock": 20
        },
        "8": {
            "color": "light blue",
            "brand": "Nike",
            "price": 1200,
            "size": 5,
            "in_stock": 10
        },
        "9": {
            "color": "black",
            "brand": "Reebok",
            "price": 1300,
            "": 5,
            "in_stock": 23
        },
        "10": {
            "color": "blue",
            "brand": "New balance",
            "price": 950,
            "size": 5,
            "in_stock": 15
        },
        "11": {
            "color": "white",
            "brand": "Reebok",
            "price": 850,
            "size": 5,
            "in_stock": 23
        },
        "12": {
            "color": "orange",
            "brand": "Fila",
            "price": 1500,
            "size": 5,
            "in_stock": 15
        },
        "13": {
            "color": "gold",
            "brand": "fila",
            "price": 1600,
            "size": 5,
            "in_stock": 9
        },
        "14": {
            "color": "silver",
            "brand": "Superga",
            "price": 750,
            "size": 5,
            "in_stock": 11
        },
        "15": {
            "color": "blue",
            "brand": "Superga",
            "price": 750,
            "size": 5,
            "in_stock": 13
        },
        "16": {
            "color": "pink",
            "brand": "Superga",
            "price": 750,
            "in_stock": 5
        },
        "17": {
            "color": "black",
            "brand": "asics",
            "price": 350,
            "size": 5,
            "in_stock": 5
        },
        "18": {
            "color": "blue",
            "brand": "asics",
            "price": 350,
            "size": 5,
            "in_stock": 5
        },
        "19": {
            "color": 'silver',
            "brand": "asics",
            "price": 350,
            size: 5,
            in_stock: 5
        },
        "20": {
            "color": "brown",
            "brand": "asics",
            "price": 350,
            "size": 5,
            "in_stock": 5
        },
    }


    function shoeList() {
        return shoes;
    }

    //finding a item on a list 
    function findItems() {
        console.log(Object.values(shoes).filter(criteria => criteria.color === 'green' 
        && criteria.brand === 'Nike' 
        && criteria.size === 5));
    }
    //put parameteres






    return {
        shoeList,
        findItems,
    }
}


 //     // for (var i = 0; i < shoes.length; i++) {
    //     var list = shoes;
    //     let filteredList = list.filter(function (one, two) {
    //         return Number(one.size.includes(outputOne))
    //             && Number(one.size.includes(outputTwo))
    //             && Number(two.price.includes(outputOne))
    //             && Number(two.price.includes(outputThree))
    //         // });
    //     })
    //     return filteredList;