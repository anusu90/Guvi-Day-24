let randomizer:(array:Array<string>) => void = function(array){
    let n = array.length;
    for (let i = n-1; i>0; i--){
        let j = Math.floor(Math.random() * i+1)
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

interface animalFeature{
    color: string,
    vaccinated: boolean
}


class Animal{
    type:string;
    name: string;
    feature: animalFeature;

    constructor(type:string,name:string,feature:animalFeature){
        this.type = type.toLocaleLowerCase();
        this.name = name.toLocaleLowerCase();
        this.feature = feature;
    }
}

class Petstore{
    stock: Array<Animal> = [];

    getStock (){
        let stockDict = {}

        this.stock.forEach(element => {
            // console.log(element);
            if(stockDict[element.type] === undefined){
                stockDict[element.type] = 1;
            } else {
                stockDict[element.type] = stockDict[element.type]+1;
            }
        });

        return stockDict;
    }

    addAnimal (type:string,name:string,feature:animalFeature){
        let newAnimal = new Animal(type,name,feature);
        this.stock.push(newAnimal)
    }

    mapAvailability(req:Array<string>){

        let flag = 1;
        let availability:string

        let tempStock = this.getStock();
        for (let reqItem of req){
            if (tempStock[reqItem] === undefined){
                flag = 0;
            }
        }
        flag==1?availability='Yes':availability='No'

        return availability;

    }
}

class Requests{
    requestArray: Array<Array<string>> =[];

    addNewRequest(inRequest:Array<string>){
        this.requestArray.push(inRequest);
    }
}


let myRequests = new Requests();
let myPetStore = new Petstore();





myRequests.addNewRequest(['cat', 'camel', 'elephant'])

let stockCreator = () => {
    let animals = ['cat', 'dog', 'himalayan griffon', 'otter', 'gecko', 'turtles']
    let colors = ['black', 'brown', 'grey', 'spotted-blue', 'dark-brown', 'white']
    let name = ['sammy', 'dammy', 'rammy', 'jammy', 'gammy', 'bammy']
    let vaccine = [true, false]
    
    for (let i =0; i<50; i ++ ){
        
        let index = Math.floor(Math.random() * 6);
        let bool = index%2;
        let tempAnimal = new Animal(animals[index],name[index],{color: colors[index], vaccinated:vaccine[bool]});
        myPetStore.stock.push(tempAnimal)
    }
}


let requestCreator = () => {

    let animals = ['cat', 'dog', 'himalayan griffon', 'otter', 'gecko', 'turtles', 'Squirrel', 'leopard']
    for (let i = 0; i <10; i++){
        let var1 = Math.floor(Math.random() * 9);
        var1 === 0||var1===1?var1=2:0;
        // console.log(var1);
        randomizer(animals);
        let tempRequest = animals.slice(1,var1);
        myRequests.addNewRequest(tempRequest);
        console.log(myRequests.requestArray);
    }

}


let checkRequestForFirstFive: () => void = function(){
    for (let i = 0; i <5; i++){
        console.log(myPetStore.mapAvailability(myRequests.requestArray[i]));
    }
}

stockCreator();
requestCreator();
