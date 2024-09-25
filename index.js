var loginicon = document.querySelector(".Navbar_section1_home_login")
var sidelogin=document.querySelector(".Navbar_section1_home_login_onclick")
var close=document.querySelector(".close")
var overlay=document.querySelector(".overlay")
var login=document.getElementById("login")
var signup=document.getElementById("signup")
var Logincontainer=document.querySelector(".Logincontainer")
var Logincontainer_close=document.getElementById("Logincontainer_close")
loginicon.addEventListener("click",function(){
  sidelogin.style.display="flex"
})

close.addEventListener("click",function(){
  sidelogin.style.display="none"
})

login.addEventListener("click",function(){
  overlay.style.display="block"
  Logincontainer.style.display="flex"
})

signup.addEventListener("click",function(){
  overlay.style.display="block"
  Logincontainer.style.display="flex"
})

Logincontainer_close.addEventListener("click",function(){
  overlay.style.display="none"
  Logincontainer.style.display="none"

})

