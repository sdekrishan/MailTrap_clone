document.querySelector("#next").addEventListener("click",signin)
let useremail=document.querySelector("#email").value;
let userpassword=document.querySelector("#password").value;



document.querySelector("#signup").addEventListener("click",function(){
    event.preventDefault();
    window.location.href="signup.html"
})


let signuparr=JSON.parse(localStorage.getItem("signupstore"))
function signin(){
    if(result()){
        window.location.href="home.html";
        alert("Login Successful")
    }
    else{
        alert("Wrong Credentials")
        document.querySelector("#email").value="";
        document.querySelector("#password").value="";
    }
}

function result(){
    let count=false;
    for(let x=0;x<signuparr.length;x++){
        if(document.querySelector("#email").value==signuparr[x].email && document.querySelector("#password").value==signuparr[x].password){
            return true;
        }

}
}

document.querySelector("#navbar>img").addEventListener("click",function (){
    window.location.href="home.html"
})


document.querySelector("#chokor").addEventListener("click",function(){
    window.location.href="https://railsware.com/"
})

