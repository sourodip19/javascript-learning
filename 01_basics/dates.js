// let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())

let newdate = Date.now()
// console.log(newdate)



let createmydate = new Date("2025-03-18")
 console.log(createmydate.toLocaleDateString())

let formatdate = createmydate.toLocaleDateString('default',{
    weekday: "long",
})

console.log(formatdate)