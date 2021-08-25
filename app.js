const mon = 'mon'
const tue = 'tue'
const wed = 'wed'
const tur = 'tur'
const fri = 'fri'
const sat = 'sat'
const sun = 'sun'

const daysofWeek = ["mon" , "tue" , "wed" , "tur" , "fri" , "sat" , "sun"];
console.log(daysofWeek[5])
daysofWeek.push("var")
console.log(daysofWeek)


const player = {
  name : "bum",
  points : 15,
  fat : true,
}

console.log(player)
console.log(player.name)
player.lastName = "Kim"
console.log(player)

function SayHellow(C) {
  console.log("hello!", C)
}

SayHellow("Nicole");
SayHellow("bumjoong");
SayHellow("Kim");
SayHellow("siYul");


const players = {
  name : "bum",
  points : 15,
  SayHellow : function(a) {
    console.log("Hello",a,"Nice to meet you")
  },
  fat : true,
}

console.log(players.name)
players.SayHellow("Lyne")

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(96);
console.log(KrAge)

function calculateKrAge2(a, b) {
  console.log(a + b);
}

calculateKrAge2(2, 3); 


const age = prompt("How old are you?")
console.log(typeof age, parseInt(age))

const age2 = parseInt("15")
console.log(age2)

const age = parseInt(prompt("How old are you?"))
console.log(isNaN(age))


const age = parseInt(prompt("How old are you?"))

if(isNaN(age) || age < 0) {
  console.log(age,"Please write a number")
  ///condition = false
} else if(age<19) {
  console.log(age,"Too young")
} else if(age<50) {
  console.log(age,"Normal")
} else if(age==100) {
  console.log(age,"wow you are wise")
} else if(age<=50 && age > 90) {
  console.log(age,"Should be exercised")
} else {
  console.log(age,"Thank you for writing your age")
} 
