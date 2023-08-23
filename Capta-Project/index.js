let images = document.querySelector(".images");
let pointer = document.querySelector(".pointer");
let title   = document.querySelector(".title")
let objApi= [{
    "objimage" : "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" ,
    
    "title" : "Touch top of the Building" ,
    
    "pointVerifyMinX " : 110,

    "pointVerifyMaxX" : 140 ,

    "pointVerifyMinY " : 120,

    "pointVerifyMaxY" : 140
}, 
{
    "objimage" :"https://images.unsplash.com/photo-1692343814412-cbe23ff32765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , 

    "title" : "Where the French Fries ?"
}, 
{
    "objimage":"https://images.unsplash.com/photo-1692171709253-de4e334e84c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" ,

    "title" : "where the Headlight !!"
}, 
{
    "objimage":"https://images.unsplash.com/photo-1592924235953-9abceff2fb50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxhbHBoYWJldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" ,

    "title" : "Touch on the\"K\""
}];

let randomNum = Math.floor(Math.random()*objApi.length)

let xMin = objApi[randomNum].pointVerifyMinX
console.log(xMin)
let xMax = objApi[randomNum].pointVerifyMaxX



images.style.backgroundImage =`url('${objApi[randomNum].objimage}')`
title.innerText = `${objApi[randomNum].title}` 

images.addEventListener("click", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  console.log("x "+x);
  console.log("y "+y);
  pointer.style.top = `${y - 9}px`;
  pointer.style.left = `${x - 9}px`;

  if(x<= 120 && x>=140){
       console.log('yeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  }
});
