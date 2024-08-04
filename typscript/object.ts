const user = {name:"sunil",email:"sunil@gmail.com",isActive:false}




function createUser({name: string,isPaid: boolean}){

}
let newUser = {name:"sunil",isPaid:false,email:"sunil@gmail.com"}
createUser(newUser)




function createCourse():{name:string,price:number}{
    return {name:"react js",price:233}
}

// ====== type ===

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser1(user:User):User{
    return {name:'reactjs', email:"", isActive:false}
}

createUser1({name:'reactjs', email:"", isActive:false})

// ==== 3 ====

type Admin = {
    readonly _id:string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?:number
}
let myAdmin: Admin  = {
    _id: "12345",
    name: "admin",
    email: "admin@gmail.com",
    isActive: true,
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardNumber: string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

myAdmin.email = "admin001@gmail.com"
// myAdmin._id = "12345"
export {}