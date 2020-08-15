canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_height=90;
car_width=100;
car_x=10;
car_y=10;
background_img="race.webp";
car_img="car1.jpg";
function add(){
    back_img=new Image();
    back_img.onload=upload_back_img;
    back_img.src=background_img;
    cars_img=new Image();
    cars_img.onload=upload_car_img;
    cars_img.src=car_img;
}
function upload_car_img(){
    ctx.drawImage(cars_img,car_x,car_y,car_width,car_height);
}
function upload_back_img(){
    ctx.drawImage(back_img,0,0,canvas.width,canvas.height);
}
window.addEventListener("keydown",kdown);
function kdown(e){
var keyval=e.keyCode;
if(keyval=='37'){
   left()
    console.log("left");
}
if(keyval=='38'){
   Top()
    console.log("top");
}
if(keyval=='39'){
    right()
    console.log("right");
}
if(keyval=='40'){
    down()
    console.log("down");
}
}
function left(){
    if(car_x>=0){
car_x=car_x-10;
upload_back_img()
upload_car_img()
    }
}
function right(){
    if(car_x<=790){
car_x=car_x+10;
upload_back_img()
upload_car_img()
    }
}
function Top(){
if(car_y>=0){
    car_y=car_y-10;
    upload_back_img()
    upload_car_img()
}
}
function down(){
    if(car_y<=700){
        car_y=car_y+10;
        upload_back_img()
        upload_car_img()
    }
}
