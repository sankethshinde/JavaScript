 
var min_X_Coordinate = 0;  //initial x-coordinate
var max_X_Coordinate= window.innerWidth;  //this will adjust window width when width of window is change
var min_Y_Coordinate= 0;  //initial y-coordinate
var max_Y_Coordinate=window.innerHeight; //this will adjust window height when height of window is change
var addBallObj=document.getElementById("addBall"); //this is used to handle onclick event on addball button

function movement(ballObject){

  this.obj=ballObject;
  this.x_Cooridinate=Math.floor((Math.random() * window.innerWidth) + 1);
  this.y_Coordinate=Math.floor((Math.random() * window.innerHeight) + 1);
  this.valueToAddInX=20;  
  this.valueToAddInY=20;
  this.divTag=ballObject;

    this.ballAnimation=function(){
    this.x_Cooridinate= parseInt(this.divTag.style.left);
    this.y_Coordinate= parseInt(this.divTag.style.top); 
    this.x_Cooridinate +=this.valueToAddInX;
    this.y_Coordinate += this.valueToAddInY;
    this.boundaryCondition();
    this.divTag.style.left = this.x_Cooridinate + "px";
    this.divTag.style.top = this.y_Coordinate + "px";
   }

    this.boundaryCondition=function(){
    if(this.x_Cooridinate>max_X_Coordinate || this.x_Cooridinate<min_X_Coordinate){

         this.valueToAddInX =- this.valueToAddInX;
    }
        
     if(this.y_Coordinate>max_Y_Coordinate || this.y_Coordinate<min_Y_Coordinate){

      this.valueToAddInY =- this.valueToAddInY;
     }
   
   }
}

addBallObj.onclick=function(){
   var ballDiv=createBall();
   var movobj=new movement(ballDiv);
   window.setInterval(function (){ movobj.ballAnimation() },100);

}

function createBall(){
  var divTag = document.createElement("div");
  var random =(Math.floor((Math.random() * 100) + 1));
  //alert(random);
    divTag.id = "div" + random ;
   divTag.style.position= 'absolute'; 
   divTag.style.left = Math.floor((Math.random() * window.innerWidth) + 1)+ "px";
   divTag.style.top=Math.floor((Math.random() * window.innerHeight) + 1) + "px";
   divTag.style.width='30px';
   divTag.style.height='30px';
   divTag.style.borderRadius = '50%';
   divTag.style.backgroundColor='#'+ Math.floor(Math.random()*16777215).toString(16); 
   //console.log(divTag);         
   document.body.appendChild(divTag);
   return divTag;

}