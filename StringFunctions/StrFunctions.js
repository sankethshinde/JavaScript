window.onload = function()
{
    var b=document.getElementById("submit")
    b.onclick=operations;

	function operations()
	{
			var firstString=document.getElementById("firstString").value;
			var secondString=document.getElementById("secondString").value;
			var startIndex=document.getElementById("startIndex").value;
			var endIndex=document.getElementById("endIndex").value;
			var number=document.getElementById("charIndex").value;
			var character1=document.getElementById("character1").value;
			var stringToReplace=document.getElementById("stringToReplace").value;
			var replacingString=document.getElementById("replacingString").value;
			
			function StringFunctions(str,str1)
			{
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
       			if(endIndex=="")
        			endIndex=firstString.length;
        		if(startIndex>endIndex)
                    document.getElementById("demo").innerHTML = "Invalid start Index and End Index";
                else if(startIndex<0 || startIndex > firstString.length)
                    document.getElementById("demo").innerHTML = "The Start Index Is Invalid";
                else if (endIndex>firstString.length || endIndex<0)
                    document.getElementById("demo").innerHTML = "The End Index Is Invalid";
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
				var index=firstString.indexOf(stringToReplace);
            	var temp="";
	            if(index==-1)
	            {
	                return "String " + stringToReplace + " Does Not Exist in" + firstString;
	            }
            	else
            	{
	                    for (var i = 0; i < index; i++)
		                {
		                    temp= temp + firstString[i];
		                }
		                temp=temp+replacingString;
		                index+=stringToReplace.length;
		                for (var i = index; i < firstString.length; i++)
		                {
		                    temp=temp + firstString[i];   
		                }
            	}
	            firstString=temp;
	            return firstString;
			 }
			 StringFunctions.prototype.indexOf1 = function()
			 {

			    var temp="The Occurences are:";
            
	            for(var i = 0; i< firstString.length; i++)
	            {
	                if(firstString[i]==character1)
	                {
	                    temp=temp+i+",";
	                }
	            }
	            return temp;
			 }
			 StringFunctions.prototype.lastIndexOf1 = function()
			 {
			 		
			    var temp="The Occurences are:";
	            for(var i = firstString.length;i>=0 ;i--)
	            {
	                if(firstString[i]==character1)
	                {
	                    temp=temp+i+",";
	                }
	            }
	            temp[temp.length-1]='.';
	            return temp;
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
	} 
}

