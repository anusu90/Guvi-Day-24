var randomizer = function (array) {
    var n = array.length;
    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i + 1);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
var Animal = /** @class */ (function () {
    function Animal(type, name, feature) {
        this.type = type.toLocaleLowerCase();
        this.name = name.toLocaleLowerCase();
        this.feature = feature;
    }
    return Animal;
}());
var Petstore = /** @class */ (function () {
    function Petstore() {
        this.stock = [];
    }
    Petstore.prototype.getStock = function () {
        var stockDict = {};
        this.stock.forEach(function (element) {
            // console.log(element);
            if (stockDict[element.type] === undefined) {
                stockDict[element.type] = 1;
            }
            else {
                stockDict[element.type] = stockDict[element.type] + 1;
            }
        });
        return stockDict;
    };
    Petstore.prototype.addAnimal = function (type, name, feature) {
        var newAnimal = new Animal(type, name, feature);
        this.stock.push(newAnimal);
    };
    Petstore.prototype.mapAvailability = function (req) {
        var flag = 1;
        var availability;
        var tempStock = this.getStock();
        for (var _i = 0, req_1 = req; _i < req_1.length; _i++) {
            var reqItem = req_1[_i];
            if (tempStock[reqItem] === undefined) {
                flag = 0;
            }
        }
        flag == 1 ? availability = 'Yes' : availability = 'No';
        return availability;
    };
    return Petstore;
}());
var Requests = /** @class */ (function () {
    function Requests() {
        this.requestArray = [];
    }
    Requests.prototype.addNewRequest = function (inRequest) {
        this.requestArray.push(inRequest);
    };
    return Requests;
}());
var myRequests = new Requests();
var myPetStore = new Petstore();
myRequests.addNewRequest(['cat', 'camel', 'elephant']);
var stockCreator = function () {
    var animals = ['cat', 'dog', 'himalayan griffon', 'otter', 'gecko', 'turtles'];
    var colors = ['black', 'brown', 'grey', 'spotted-blue', 'dark-brown', 'white'];
    var name = ['sammy', 'dammy', 'rammy', 'jammy', 'gammy', 'bammy'];
    var vaccine = [true, false];
    for (var i = 0; i < 50; i++) {
        var index = Math.floor(Math.random() * 6);
        var bool = index % 2;
        var tempAnimal = new Animal(animals[index], name[index], { color: colors[index], vaccinated: vaccine[bool] });
        myPetStore.stock.push(tempAnimal);
    }
};
var requestCreator = function () {
    var animals = ['cat', 'dog', 'himalayan griffon', 'otter', 'gecko', 'turtles', 'Squirrel', 'leopard'];
    for (var i = 0; i < 10; i++) {
        var var1 = Math.floor(Math.random() * 9);
        var1 === 0 || var1 === 1 ? var1 = 2 : 0;
        // console.log(var1);
        randomizer(animals);
        var tempRequest = animals.slice(1, var1);
        myRequests.addNewRequest(tempRequest);
        console.log(myRequests.requestArray);
    }
};
var checkRequestForFirstFive = function () {
    for (var i = 0; i < 5; i++) {
        console.log(myPetStore.mapAvailability(myRequests.requestArray[i]));
    }
};
stockCreator();
requestCreator();