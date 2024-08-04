const superHeros: string[] = []
// const power: number[] = []
const power: Array<number> = [] // second way to define array


superHeros.push("superman")
power.push(100)

type User = {
    name: string;
    isActive: boolean
}

const allUsers: User[] = []
allUsers.push({ name: "",isActive: false})
