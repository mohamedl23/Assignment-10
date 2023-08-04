var signUpName = document.querySelector(".nameSignUp");
var signUpEmail = document.querySelector(".emaiSignUp");
var signUpPasswod = document.querySelector(".passwordSignUp");
var signUpBtn = document.querySelector(".signUpBtn");
var reblaceSignin = document.querySelector(".signInRblace");
var logInEmail = document.querySelector(".emailLogin")
var logInPassword = document.querySelector(".passwordLogin")
var logInBtn = document.querySelector(".btnLogin")
var reblaceSignUp = document.querySelector(".signUpRblace")
var logOutBtn = document.querySelector(".logOut")
// console.log(logInEmail);


var signUpAll= []

if (localStorage.getItem("UserData") != null){
   signUpAll =JSON.parse( localStorage.getItem("UserData"))

}


function signUpData (){
    if(validation () == true){
        if(dontRebeat() == true){
            alert("This data already exists")
        }
        else{
            var signUp ={
                name :signUpName.value ,
                email: signUpEmail.value ,
                password : signUpPasswod.value
            }
             signUpAll.push(signUp)
             clearForm()
             
        }

    }

    else {
        alert(validation())
    }
    
    localStorage.setItem("UserData" , JSON.stringify(signUpAll)  )
    console.log(signUpAll); 
    
}


signUpBtn.addEventListener("click" , function(){
    signUpData ()
} )


function reblaceSignUpOrSignIn(){
    document.getElementById("signUp").classList.replace("d-block" , "d-none")
    document.querySelector(".logIn").classList.replace("d-none" , "d-block")

}
function reblaceSigninOrSignUp(){
    document.getElementById("signUp").classList.replace("d-none" , "d-block")
    document.querySelector(".logIn").classList.replace("d-block" , "d-none")
}
function reblaceLogOutOrLogIn(){
    document.querySelector(".logIn").classList.replace("d-none" , "d-block")
    document.querySelector(".smart").classList.replace("d-none","d-block")
    document.querySelector(".welcome").classList.replace("d-block" ,"d-none")
    document.querySelector(".navbar").classList.replace("d-block","d-none")
}
function clickInLogOut(){
    document.querySelector(".logOut")
    reblaceLogOutOrLogIn()
    clearLogIn()
}
logOutBtn.addEventListener("click", function(){
    clickInLogOut()
} )

function clickInSignIn(){
    document.querySelector("#demo")
    reblaceSignUpOrSignIn()

}
function clickInSignUp(){
    document.querySelector("#play")
    reblaceSigninOrSignUp()
}

reblaceSignin.addEventListener("click" , function(){
    clickInSignIn()
})
reblaceSignUp.addEventListener("click" , function(){
    clickInSignUp()
})

var flag = false ; 
 var index ;
function test(){
    for( var i = 0 ; i < signUpAll.length ; i++ ){
        if(signUpAll[i].email==logInEmail.value && signUpAll[i].password==logInPassword.value){
            flag = true
            index = i ;
            break ;
    }
    else if (signUpAll[i].email != logInEmail.value) {       
        flag = false ;
        }    
    }
    return flag ;
}

function logInEnter(){

    if(test()== true){
        document.getElementById("welcomeName").innerHTML="welcome "+ signUpAll[index].name
         pageName ()
    }
    else{
        alert("this data is wrung");
    }
}
logInBtn.addEventListener("click" , function(){
    logInEnter()  
})

function pageName (){
    document.querySelector(".logIn").classList.replace("d-block" , "d-none")
    document.querySelector(".welcome").classList.replace("d-none" ,"d-block")
    document.querySelector(".navbar").classList.replace("d-none","d-block")
    document.querySelector(".smart").classList.replace("d-block","d-none")
}
function validation (){
    var regeXName = /^[a-z1-9]{3,}$/gi
    var regeXEmail = /^[a-z1-9]{3,}$/ig
    var regeXPassword = /^[a-z1-9]{3,}$/ig

    if(regeXName.test(signUpName.value) ==false){
        return "Please enter a valid name consisting of 3 letters or more "
    }
    else if (regeXEmail.test(signUpEmail.value) == false){
        return "Please enter a valid email"
    }
    else if (regeXPassword.test(signUpPasswod.value) == false){
        return "Please enter a password consisting of letters and numbers"
    }
    return true 
}

function dontRebeat (){
    for( var i =0 ; i <signUpAll.length ; i++ ){
        if(signUpAll[i].name == signUpName.value  ){
       console.log("This data already exists");

            return true ;

    }  
}
}
function clearForm(){
    signUpName.value=""
    signUpEmail.value =""
    signUpPasswod.value =""
}
function clearLogIn(){
    logInEmail.value=""
    logInPassword.value=""
}


