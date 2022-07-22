let signuparr=JSON.parse(localStorage.getItem("signupstore"))||[];



document.querySelector("#submitbtn").addEventListener("click",function(){
    event.preventDefault();
     
    let signupobj={
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    }
    
    if(document.querySelector("#email").value=="" || document.querySelector("#password").value=="" ){
        alert("Please Fill All Fields")
    }
    
    else{
        signuparr.push(signupobj);
    localStorage.setItem("signupstore",JSON.stringify(signuparr));
    alert("SignUp Successful. Please Login to continue")
    }
    
})

document.querySelector("#login").addEventListener("click",function (){
    window.location.href="loginpage.html"
})

document.querySelector("#navbar>img").addEventListener("click",function (){
    window.location.href="home.html"
})


document.querySelector("#chokor").addEventListener("click",function(){
    window.location.href="https://railsware.com/"
})