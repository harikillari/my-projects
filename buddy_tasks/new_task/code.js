// const inp = document.querySelectorAll('input')

// const btn = document.querySelectorAll('button')
// console.log(inp, btn)

// const inp = document.querySelector('input');
// const h1 = document.querySelector('h1');

// btn[0].addEventListener('click', function(e){

//     h1.innerText = inp.value
//     if (h1.innerText.length == 0){
//         h1.innerText = "Enter Your NAme..."
//     }
//     console.log("HEY ME INPUT>>>>>>>")
// })


var obj = {'fname':'hari', 'lname':'killari', 'age':22, village:'thalvaipadu'}


////////////////////////////

//////  STATIC  Way /////////

var student = {
    RegNo: '16G21A0561',
    Name: "Hari Krishna",
    Branch: "CSE",
    No_Of_Subjects : 7,
    Address:'Thalvaipadu',
    Email: 'kilarihari143@gmail.com'
  };

std_obj1 =  Object.create(student)



////// Dynamic Way ///////

var user_student = {
    RegNo: function(regno){
        return regno
    },
    Name: function(fname, lname){
        return `${fname} ${lname}`
    },
    Branch: function(branch){
        return branch
    },
    No_Of_Subjects: function(sub_no){
        return sub_no
    },
    Address:function(present_address, perment_address){
       return  {PresentAddress:present_address, PrementAddress:perment_address}
    },
    Email: function(std_gmail){
        return std_gmail+"@gmail.com"
    }
}

user_std_obj =  Object.create(user_student)

///////////////  



///// using new ///////

function Person(first, last, age, gender, interests) {

    // property and method definitions
    this.name = {
      'first': first,
      'last' : last      ////// constructor this block 
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests
  }

  let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);


Object.defineProperties(person1,{
    'age':{
            enumerable: false,
            configurable: false,
            writable: false,
            value: '19'        
    },
    'gender':{
            enumerable: false,
            configurable: false,
            writable: false,
            value: 'NOO'
    }
 })


 Object.defineProperty(person1, 'age',{
            enumerable: false,
            configurable: false,
            writable: false,
            value: '19'        
    }
 )


 class cls_name{
     constructor (name, age){
     this.name = name;
     this.age=age;
     }

 }



 p = new cls_name('hari', 42)



 function fun_name(name, age){
     this.name = name;
     this.age = age;
 }


 new_p = new fun_name('vinay', 12)



 class parent{

    fun_1(){
        return "HII"
    }

 }

 obj = new parent()
 console.log(obj.fun_1())


/////////////


//// self - invoking - functions
 function func1(){
     return "hey man,"
 }

 function func2(fun){
     return fun + " Chill Bro"
 }

 console.log(func2(func1()))


 var a = 20;

//// closures /////  a function along with its lexcial scope

 function x(){
     var a = 10;
     function y(){
         console.log(a)
     }
     return y /// y()
 }

 x()() // x()


 ////// do while /////


var result = '';
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);


console.log(result);


/// while////

var n = 0;

var count = 0;

while (n < 3) {
  n++;
  count+=n
}

console.log(count);


/////////

a=10
b=a
b = 20 
console.log(a, b)

////////////////

x = [1, 2, 3]
y = x

y[0]=22

new_val = Array.apply([], x)

new_val[0] = 0

console.log(x, y, new_val)


///////////////


bo = {'name':'chiku'}
co = bo
co.name = 'bhai'
cu = Object.assign({}, co)

co.name = "surya"



console.log(bo, co, cu)


///////////////



function arr_func(model, name, prize, speed, velocity){
    this.name = name
    this.car_model = function(){
        return name + model
    }
    this.prize = prize
    // this.speed = speed
    // this.velocity = velocity
    this.cc = function(power){
        var sum  = (speed + velocity) / power
        console.log(sum)
        return sum

    }
}


cls_ob = new arr_func('2134', 'audi', 1000, 200, 300)




aa = []
if (aa.length >=0){
    console.log("heyy")
} else{
    console.log("byee")

}



res = ''
i =0
do {
    i = i + 1
    res = res + i /// first incerement after condition checking

} while (i<5)

console.log(res)

i= 0
count =0 
while (i<5){
    i = i+1 /// first checking condition then increment 
    count+=i

}

console.log(count)


