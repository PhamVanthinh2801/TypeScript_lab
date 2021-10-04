// Variables in typescript
let year_old: number = 5;
let name: string = 'Thinh';
let check: boolean = true;  

//Operator in typescript
var msg:string = "Thinh"+"Pham" 
console.log(msg)
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);

//loop in typescript
var i:number = 1 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log (i) 
      break     
  }
   i++ 
}  

//function in typescript
function calculate_discount(price:number,rate:number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)

//Array in typescript
var numtr:string[]; 
numtr = ["1","2","3","4"] 
console.log(numtr[0]); 
//tupple
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
  
console.log("Items after pop "+mytuple.length)

//class in typeScript
class Car { 
   //field 
   engine:string; 
   
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  
   
   //function 
   disp():void { 
      console.log("Function displays Engine is  :   "+this.engine) 
   } 
} 

//create an object 
var obj = new Car("Honda")

//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine)  

//access the function
obj.disp()
// object
var person = { 
   firstname:"Tom", 
   lastname:"Hanks" 
}; 
var invokeperson = function(obj: { firstname:string, lastname :string }) { 
   console.log("first name :"+obj.firstname) 
   console.log("last name :"+obj.lastname) 
} 
invokeperson(person)