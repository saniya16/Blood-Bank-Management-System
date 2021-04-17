$(document.getElementById("dropdown-item1")).click(function(){
   	alert("Password Reset link has been sent to your registered email address");
   });

   $('button').click(function(){
   	var pass = $("#exampleInputPassword1").val();
   	var user = $("#exampleInputEmail1").val()
    if(pass == 'password' && user == 'saniya@gmail.com')
    {
    	alert("Successful Login");
    } 

    else if(pass == "" && user == "")
    {
    	console.log("fill empty field");

    }

    else if(pass == "" || user == "")
    {
       console.log("fill empty field");
    }

    else
    {
    	alert("Incorrect username/password. Try again")
    }
    
});

 


  

   




 
