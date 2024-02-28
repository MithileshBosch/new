// let person = {
//     //key value pairs
//     name : 'Mithilesh',
//     age : 30
// }

// person.name = 'X'
// //or
// person['name'] = 'Mithilesh'

// console.log(person.name)

// let selectedColors = ['red','blue']
// console.log(selectedColors)
// console.log(selectedColors[1])
// selectedColors[2] = 'orange'
// console.log(selectedColors)

//Parameter is name in this function
// function greet(name){
//     console.log("Hello " + name);
// }

// //Argument is this !
// greet("Mithilesh");


// export default function func(){

// }

// const func = ()=>{

// }
// let age = 16;
// let name = age>10 ? "Mithilesh":"XY"

// const person = {
//     name:"Mithilesh",
//     age:20,
//     isMarried:false,
// }
//Destructuring
// const name = person.name // wrong way

// const {name, age, isMarried} = person

//Keep everything from person object, change the name
// const person2 = {...person, name:"Shashank"}
// console.log(person2)

//# important array functions

// .map()
// .filter()
// .reduce()

// let names = ["X", "Y", "Z", "X", "X"]
//Adding 1 to each name
//Conventional way is using for loop

// names.map((name)=>{
//     return name + "1";
    
// })

//Removing all X
// names.filter((name) =>{
//     return name !=="X"
// })


//Promises

const data = new Promise((Resolve, Reject)=>{
    var name = "Mithilesh"
    if(name == "Something"){
        Resolve();
    }
    else{
        Reject();
    }
});

data.then((name)=>{
    console.log(name);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Promise Fulfilled")
})

//example
//Fetch some data
const data1 = axios.get("Apicall");
data1.then((res)=>{
    console.log(res.data); // log the data received from the api call
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Promise resolved")
});


//Async Await

const func = async ()=>{
    try{
        const data = await axios.get("apicall");
        console.log(data) // no need to write then catch
    }
    catch(err){
        console.log(err)
    }finally{
        console.log("Hello")
    }
    //we can use try catch to log the error for error handling

}