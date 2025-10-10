class Car{
    constructor(name,speed,gear){
        this.name = name;
        this.speed = speed;
        this.gear = gear;

    }
    move_forward(){
        console.log(`The ${this.name}
            car is moving forward with speed:${this.speed}`);
            console.log("The"+this.name +"car is moving forward withe speed:" + this.speed);
    }
    move_backward(){
        console.log(`The ${this.name} is moving backward with speed of ${this.speed}`);
    }
    u_turn(){
        console.log("Car is taking U turn");
    }
}

const car1 = new Car('TATA',50,3);
car1.move_forward();
car1.move_forward();
car1.u_turn();
const car2 = new Car('BMW',140,5);
car2.move_backward();
car2.u_turn(); 




class  salaar {
released(){
    console.log('The cease fire');

}
}
class salaar2 extends salaar{
    notreleased(){
        console.log('harri yet be released');

    }
}
const movie = new salaar2();
movie.released();
movie.notreleased();
