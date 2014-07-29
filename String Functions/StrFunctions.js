function operations()
{
var firstString=document.getElementById("firstString").value;
var secondString=document.getElementById("secondString").value;
var startIndex=document.getElementById("startIndex").value;
var endIndex=document.getElementById("endIndex").value;
var number=document.getElementById("charIndex").value;
var character1=document.getElementById("character1").value;
var stringToReplace=document.getElementById("stringToReplace");
var replacingString=document.getElementById("replacingString").value;
			function StringFunctions(str,str1) {

			this.str=str;
			this.str1=str1;
			}

			StringFunctions.prototype.concat1 = function()
			 {

			    firstString=firstString+secondString;
       			return firstString;
			 }
			 StringFunctions.prototype.substring1 = function()
			 {
       			var temp = []; 
       			for (var i = startIndex; i < endIndex; i++)
       			{
             		temp=temp+firstString[i];
       			}
       			return temp;
			 }
			 StringFunctions.prototype.length1 = function()
			 {
			 	 var i=0,count1=0;
			 	 while(firstString[i]!=undefined)
			 	 {
			 	 	count1=count1+1;
			 	 	i++;
			 	 }
			 	 return count1;
			 }
			 StringFunctions.prototype.charAt1 = function()
			 {

			    return firstString[number];
			 }
			 StringFunctions.prototype.replace1 = function()
			 {
				var j=0,count;
				var flag=0;
				for(var i=0;i<firstString.length;i++)
				{
					if(firstString[i]===stringToReplace[j])
					{
						var temp1=i;
						while(i< (temp1+stringToReplace.length))
						{
								if(firstString[i]!=stringToReplace[j])
								{
										flag=1;
								}
								i++;
						}
						if(flag!=1)
						{
							alert("b");
							var temp2=temp1;
							var k=0;
							while(temp1< (temp2+stringToReplace.length))
							{
								firstString[temp1]=replacingString[k];
								k=k+1;
								temp1=temp1+1;
							}
						}
					}
				}
				return firstString;
				

			 }
			 StringFunctions.prototype.indexOf1 = function()
			 {

			     for(var i=0;i<firstString.length;i++)
			     {
			     	if(firstString[i]==character1)
			     	{
			     		break;
			     	}
			     }
			     return i+1;
			 }
			 StringFunctions.prototype.lastIndexOf1 = function()
			 {
			 		
			     for(var i=firstString.length-1;i>=0;i--)
			     {
			     	if(firstString[i]==character1)
			     	{
			     		break;
			     	}
			     }
			     return i;
			 }
			 
			 	var checks=document.forms[0].StringOperations;
				var i;
				for (i = 0; i < checks.length; i++)
				{
				if (checks[i].checked)
				{
					break;
				}
				}

				switch(i)
				{
								case 0:
								{		
								var res=new StringFunctions(firstString,secondString);
								var res1=res.concat1();
													document.getElementById("demo").innerHTML = "concatenation is: " + res1 ;
								break;
								}					
								case 1:
								{					
								var res=new StringFunctions(firstString,secondString);
								var res1=res.substring1();
													document.getElementById("demo").innerHTML = "Substring is "+ res1;
								break;
								}
								case 2:
								{					
								var res=new StringFunctions(firstString,secondString);
								var res1=res.length1();
													document.getElementById("demo").innerHTML = "Length is: "+res1;
								break;
								}
								case 3:
								{					
								var res=new StringFunctions(firstString,secondString);
								var res1=res.charAt1();
													document.getElementById("demo").innerHTML = "Character is : "+res1;
								break;
								}
								case 4:
								{					
								var res=new StringFunctions(firstString,secondString);
								var res1=res.replace1();
													document.getElementById("demo").innerHTML = "Replaced string: "+res1;
								break;
								}
								case 5:
								{					
								var res=new StringFunctions(firstString,secondString);
								var res1=res.indexOf1();
													document.getElementById("demo").innerHTML = "Index Of given Character: "+res1;
								break;
								}
								case 6:
								{					
								var res=new StringFunctions(firstString,secondString);
								var res1=res.lastIndexOf1();
													document.getElementById("demo").innerHTML = "Last Index Of given Character: "+res1;
								break;
								}
				}
				checks[i].checked=false;


}
function checkall(formname,checkname,thestate){ 
  var   el_collection=eval("document.forms."+formname+"."+checkname) 
  for (c=0;c<el_collection.length;c++){ 
      el_collection[c].checked=thestate; 
    } 
} 

