//Menggunakan Class
class Enemy {
  constructor(name, speed, healthPoint, attackPoint, isDead) {
    this.name = name;
    this.speed = speed;
    this.healthPoint = healthPoint;
    this.attackPoint = attackPoint;
    this.isDead = isDead;
  }
  attack() {
    return `${this.name} attack pointnya: ${this.attackPoint}`;
  }
  confused() {
    return `confused: ${this.isDead}`;
  }
}

//buat class Zombie utk cetakan
class Zombie extends Enemy {
  constructor(name, speed, healthPoint, attackPoint, isDead) {
    super(name, speed, healthPoint, attackPoint, isDead);
  }
  walk() {
    return `Walk: ${this.healthPoint}`;
  }
  running() {
    return `Running: ${this.healthPoint}`;
  }
}

let Zombie1 = new Zombie("Eren", 200, 2000000, 100500, -10);
let Zombie2 = new Zombie("Reiner", 700, 900, 300, 0);

console.log("Menggunakan CLASS:");
console.log(Zombie1);
console.log(Zombie1.attack());
console.log(Zombie1.confused());
console.log(Zombie1.walk());
console.log(Zombie1.running());

//buat class Pocong utk cetakan
class Pocong extends Enemy {
  constructor(name, speed, healthPoint, attackPoint, isDead) {
    super(name, speed, healthPoint, attackPoint, isDead);
  }
  jump() {
    return `Jump: ${this.healthPoint}`;
  }
  supperJump() {
    return `Supper Jump: ${this.healthPoint}`;
  }
}

let Pocong1 = new Pocong("Mikasa", 20000, 300, 99998, 0);
let Pocong2 = new Pocong("Levi", 40000, 700, 99999, -20);

console.log(Pocong1);
console.log(Pocong1.attack());
console.log(Pocong1.confused());
console.log(Pocong1.jump());
console.log(Pocong1.supperJump());

console.log(Pocong2);
console.log(Pocong2.attack());
console.log(Pocong2.confused());
console.log(Pocong2.jump());
console.log(Pocong2.supperJump());

//Menggunakan Function
function EnemyF(name, speed, healthPoint, attackPoint, isDead){
  this.name = name;
  this.speed = speed;
  this.healthPoint = healthPoint;
  this.attackPoint = attackPoint;
  this.isDead = isDead;

  this.attackF = function() {
    return `${this.name} attack pointnya: ${this.attackPoint}`;
  }
  this.confusedF = function() {
    return `${this.name} confuse pointnya: ${this.healthPoint}`;
  }
}

function ZombieF(name, speed, healthPoint, attackPoint, isDead){
  EnemyF.call(this, name, speed, healthPoint, attackPoint, isDead)

  this.walkF = function(){
    return `Walk: ${this.healthPoint}`;
  }
  this.runningF = function(){
    return `Running: ${this.healthPoint}`;
  }
}

let zombieF1 = new ZombieF("Reiner", 1500, 4000, 3700, 0);
let zombieF2 = new ZombieF("Zeke", 200, 9000, 66700, 0);

console.log("Menggunakan FUNCTION:");
console.log(zombieF1);
console.log(zombieF1.attackF());
console.log(zombieF1.confusedF());
console.log(zombieF1.walkF());
console.log(zombieF1.runningF());

console.log(zombieF2);
console.log(zombieF2.attackF());
console.log(zombieF2.confusedF());
console.log(zombieF2.walkF());
console.log(zombieF2.runningF());


function PocongF(name, speed, healthPoint, attackPoint, isDead){
  EnemyF.call(this, name, speed, healthPoint, attackPoint, isDead)

  this.jumpF = function(){
    return `Walk: ${this.healthPoint}`;
  }
  this.supperJumpF = function(){
    return `Running: ${this.healthPoint}`;
  }
}

let PocongF1 = new PocongF("Falco", 1500, 4000, 3700, 0);
let PocongF2 = new PocongF("Pieck", 200, 9000, 66700, 0);

console.log(PocongF1);
console.log(PocongF1.attackF());
console.log(PocongF1.confusedF());
console.log(PocongF1.jumpF());
console.log(PocongF1.supperJumpF());

console.log(PocongF2);
console.log(PocongF2.attackF());
console.log(PocongF2.confusedF());
console.log(PocongF2.jumpF());
console.log(PocongF2.supperJumpF());