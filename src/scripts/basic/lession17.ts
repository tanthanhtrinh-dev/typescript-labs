class Persion{
        run(){
                console.log("I am running")
        }
}
let myClass = new Persion();
//console.log(typeof myClass);
//console.log(myClass.run());
console.log(myClass.run);
console.log(Persion.prototype.run);
//console.log(Persion.prototype.run());
console.log(myClass.run()===Persion.prototype.run());
