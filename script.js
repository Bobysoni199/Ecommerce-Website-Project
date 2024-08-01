const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}
if(close){
    bar.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $('#name').text(profile.getname());
    $('#email').text(profile.getemail());
    $("#img").attr('src',profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
    });
  }
  const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
