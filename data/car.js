export class Car{
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails){
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }
    displayInfo(){
        const truckStatus = this.isTrunkOpen ? 'open' : 'closed';

        console.log(`${this.#brand} ${this.#model} Speed: ${this.speed} km/h , trunk: ${truckStatus}`);
    }
    go(){
        if(!this.isTrunkOpen){
            this.speed +=5;
            if(this.speed>200){
                this.speed = 200;
            }
        }     
    }
    slow(){
        this.speed -= 5;
        if(this.speed < 0){
            this.speed = 0;
        }
    }
    openTrunk(){
        if(this.speed === 0){
            this.isTrunkOpen = true;
        }
    }
    closeTrunk(){
        this.isTrunkOpen = false;
    }
}
const car1 = new Car({
    brand : 'toyota',
    model : 'corolla'
});

class RaceCar extends Car{
    acceleration;
    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
        
    }

    go(){
        this.speed += this.acceleration;
        if(this.speed > 300){
            this.speed = 300;
        }     
    }
    openTrunk(){
        console.log('trunks not available');
    }
    closeTrunk(){
        console.log('trunks not available');
    }
}

const rr = new RaceCar({
    brand : 'McLaren',
    model : '720S',
    acceleration : 20
})
rr.go();
rr.displayInfo();
rr.openTrunk();





/*car1.go()
car1.openTrunk();
car1.displayInfo();*/