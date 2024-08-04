let score: number | string = 33
score = 45;
score = "55"

type UserUnion = {
    name: string;
    id:number
}

type Admin = {
    userName: string;
    id:number
}

let sunil: UserUnion | Admin = {name: "Sunil", id:30}
sunil = {userName: "Sunil", id:30}

// function getDbId(id:number|string){
//     return {userName: "Sunil", id:30}
// }

getDbId(3)
getDbId("6")

function getDbId(id:number|string){
   if(typeof id === "string"){
    id.toLocaleLowerCase()
   }
}

// array
const data:number[] = [1,2,3,4]
const dataString:string[] = ["1","2","3","4"]
const mixArray: string[] | number[] = ["1","2","3","4"]
const mixArraySuper: (string | number | boolean)[] = ["1","2","3","4",6,7,87,8,true]

//strict
let pi:3.14 = 3.14

let seatAllotment: "aisle" | "middle" |"window" 
seatAllotment = "window"


