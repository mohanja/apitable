


var getData=() => fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((data)=>data.json())

var data=getData()
console.log(data)



let table=document.createElement("table")
table.setAttribute("class","table")

let thead=document.createElement("thead")
thead.setAttribute("class","thead-dark")

let tr =document.createElement("tr")

let th=document.createElement("th")
th.setAttribute("scope","col")
th.innerHTML="First"

let th2=document.createElement("th")
th2.setAttribute("scope","col")
th2.innerHTML="Middle"

let th3=document.createElement("th")
th3.setAttribute("scope","col")
th3.innerHTML="Last"

let thead1=document.createElement("thead")

let tbody=document.createElement("tbody")


let tr1 =document.createElement("tr")
let tr2 =document.createElement("tr")







table.append(thead)
thead.append(tr)
tr.append(th,th2,th3)
table.append(tbody)
document.body.append(table)



const tables =async ()=>{
const data=await getData();


     for(var i=0;i<10;i++){
    let tr1 =document.createElement("tr")

   
    let td=document.createElement("td")
 
    td.setAttribute("scope","row")
   
    td.innerHTML+=data[i].id

    let td2=document.createElement("td")
   
    td2.setAttribute("scope","row")
    td2.innerHTML+=data[i].name

    let td3=document.createElement("td")
    
    td3.setAttribute("scope","row")
    td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
    tbody.append(tr1)

     
   }


}

const tables1 =async ()=>{
    const data=await getData();
   


    for(var i=10;i<20;i++){
 
   let tr1 =document.createElement("tr")

   let td=document.createElement("td")
  
   td.setAttribute("scope","row")
   td.innerHTML+=data[i].id

   let td2=document.createElement("td")
   td2.setAttribute("scope","row")
   td2.innerHTML+=data[i].name
  
   let td3=document.createElement("td")
  
   td3.setAttribute("scope","row")
   td3.innerHTML+=data[i].email
   tr1.append(td,td2,td3)
   tbody.append(tr1)


  }


}

const tables2 =async ()=>{
  const data=await getData();
 


  for(var i=10;i<20;i++){
 let tr1 =document.createElement("tr")

 let td=document.createElement("td")
 td.setAttribute("scope","row")
 td.innerHTML+=data[i].id

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML+=data[i].name

 let td3=document.createElement("td")
 td3.setAttribute("scope","row")

 td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
 tbody.append(tr1)


}


}

const tables3 =async ()=>{
  const data=await getData();
 


  for(var i=20;i<30;i++){
 let tr1 =document.createElement("tr")

 let td=document.createElement("td")
 td.setAttribute("scope","row")
 td.innerHTML+=data[i].id

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML+=data[i].name

 let td3=document.createElement("td")
 td3.setAttribute("scope","row")
 td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
 tbody.append(tr1)


}


}

const tables4 =async ()=>{
  const data=await getData();
 


  for(var i=30;i<40;i++){
 let tr1 =document.createElement("tr")

 let td=document.createElement("td")
 td.setAttribute("scope","row")
 td.innerHTML+=data[i].id

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML+=data[i].name

 let td3=document.createElement("td")
 td3.setAttribute("scope","row")
 td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
 tbody.append(tr1)


}


}

const tables5 =async ()=>{
  const data=await getData();
 


  for(var i=40;i<50;i++){
 let tr1 =document.createElement("tr")

 let td=document.createElement("td")
 td.setAttribute("scope","row")
 td.innerHTML+=data[i].id

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML+=data[i].name

 let td3=document.createElement("td")
 td3.setAttribute("scope","row")
 td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
 tbody.append(tr1)


}


}

const tables6 =async ()=>{
  const data=await getData();
 


  for(var i=50;i<60;i++){
 let tr1 =document.createElement("tr")

 let td=document.createElement("td")
 td.setAttribute("scope","row")
 td.innerHTML+=data[i].id

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML+=data[i].name

 let td3=document.createElement("td")
 td3.setAttribute("scope","row")
 td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
 tbody.append(tr1)


}


}

const tables7 =async ()=>{
  const data=await getData();
 


  for(var i=60;i<70;i++){
 let tr1 =document.createElement("tr")

 let td=document.createElement("td")
 td.setAttribute("scope","row")
 td.innerHTML+=data[i].id

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML+=data[i].name

 let td3=document.createElement("td")
 td3.setAttribute("scope","row")
 td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
 tbody.append(tr1)


}


}

const tables8 =async ()=>{
  const data=await getData();
 


  for(var i=70;i<80;i++){
 let tr1 =document.createElement("tr")

 let td=document.createElement("td")
 td.setAttribute("scope","row")
 td.innerHTML+=data[i].id

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML+=data[i].name

 let td3=document.createElement("td")
 td3.setAttribute("scope","row")
 td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
 tbody.append(tr1)


}


}

const tables9 =async ()=>{
  const data=await getData();
 


  for(var i=80;i<90;i++){
 let tr1 =document.createElement("tr")

 let td=document.createElement("td")
 td.setAttribute("scope","row")
 td.innerHTML+=data[i].id

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML+=data[i].name

 let td3=document.createElement("td")
 td3.setAttribute("scope","row")
 td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
 tbody.append(tr1)


}


}

const tables0 =async ()=>{
  const data=await getData();
 


  for(var i=90;i<100;i++){
 let tr1 =document.createElement("tr")

 let td=document.createElement("td")
 td.setAttribute("scope","row")
 td.innerHTML+=data[i].id

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML+=data[i].name

 let td3=document.createElement("td")
 td3.setAttribute("scope","row")
 td3.innerHTML+=data[i].email
tr1.append(td,td2,td3)
 tbody.append(tr1)


}


}

// let nav=document.createElement("nav")
// nav.setAttribute("aria-label","Page navigation example")

// let ul=document.createElement("ul")
// ul.setAttribute("class","pagination justify-content-center")

// let li=document.createElement("li")
// li.setAttribute("class","page-item disabled")

// let a=document.createElement("a")
// a.setAttribute("class","page-link")
// a.setAttribute("onclick",tables())
// a.innerHTML="1"

// nav.append(ul)
// ul.append(li)
// li.append(a)
// document.body.append(nav)


 
let button=document.createElement("button")

button.innerHTML="1"
button.addEventListener("click",tables)
document.body.append(button)

let button2=document.createElement("button")

button2.innerHTML="2"
button2.addEventListener("click",tables2)
document.body.append(button2)

let button3=document.createElement("button")
button3.innerHTML="3"
button3.addEventListener("click",tables3)
document.body.append(button3)

let button4=document.createElement("button")
button4.innerHTML="4"
button4.addEventListener("click",tables4)
document.body.append(button4)

let button5=document.createElement("button")
button5.innerHTML="5"
button5.addEventListener("click",tables5)
document.body.append(button5)

let button6=document.createElement("button")
button6.innerHTML="6"
button6.addEventListener("click",tables6)
document.body.append(button6)

let button7=document.createElement("button")
button7.innerHTML="7"
button7.addEventListener("click",tables7)
document.body.append(button7)

let button8=document.createElement("button")
button8.innerHTML="8"
button8.addEventListener("click",tables8)
document.body.append(button8)

let button9=document.createElement("button")
button9.innerHTML="9"
button9.addEventListener("click",tables9)
document.body.append(button9)

let button0=document.createElement("button")
button0.innerHTML="10"
button0.addEventListener("click",tables0)
document.body.append(button0)

