
class Person {

    constructor(name, age = 0){
        this.name = name;
        this.age = age;
    }

    getDiscribtion(){
        return `${this.name} is ${this.age} year(s) old,`;
    }
};

class Traveler extends Person{

    constructor(name,age,homeLocation){
        //calling the parent constructor
       super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){

        //when there is major value
        return !!this.homeLocation;
    }

    getLocation(){

        let getMyLocation = super.getDiscribtion();

        if(this.hasHomeLocation){
            getMyLocation += ` and his home location is ${this.homeLocation}`;
        }
        //returning the get locaATION
        return getMyLocation;
    }

}

const myPerson1 = new Traveler("Chikwado okoye",24,"Aba");
        console.log(myPerson1.getLocation());


const myPerson2 = new Traveler("Chikwado okoye");
        console.log(myPerson2.getLocation());
