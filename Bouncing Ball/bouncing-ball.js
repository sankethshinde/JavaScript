var imgObj = null;
var animate ;
var i=0,j=0,k=0,l=0;
var count=0;

function init()
{
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
   imgObj.style.top='200px';
   i=0,j=0,k=0,l=0;
   move();
}

function move()
{

		if(i<=200)
		{
			imgObj.style.top= (parseInt(imgObj.style.top)-1) + 'px';
			imgObj.style.left = (parseInt(imgObj.style.left) + 2) + 'px';
			i++;
		}
		if(j<=200 && i>=200)
		{
			imgObj.style.top= (parseInt(imgObj.style.top)+1) + 'px';
			imgObj.style.left = (parseInt(imgObj.style.left) + 2) + 'px';
			j++;
		}
		if(k<=200 && j>=200 && i>=200)
		{
			imgObj.style.top= (parseInt(imgObj.style.top)+1) + 'px';
			imgObj.style.left = (parseInt(imgObj.style.left) - 2) + 'px';
			k++;
		}
		if(l<=200 && j>=200 && i>=200 && k>=200)
		{
			imgObj.style.top= (parseInt(imgObj.style.top)-1) + 'px';
			imgObj.style.left = (parseInt(imgObj.style.left) - 2) + 'px';
			l++;
		}
		if(l==200)
		{
			l=0;j=0;i=0;k=0;
		}
		animate = setTimeout(move,5); // call moveRight in 20msec
}

function stop()
{
	   
	  	clearTimeout(animate);
	   	imgObj.style.position= 'relative';
   		i=0,j=0,k=0,l=0;
	   	imgObj.style.left = '0px'; 
	   	imgObj.style.top='200px';
}
window.onload=init;