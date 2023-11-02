const usernamefield=document.getElementById("enter-username")
const useragefield=document.getElementById("enter-age")
const useremailfield=document.getElementById("enter-email")
const usercityfield=document.getElementById("enter-city")
const userstatefield=document.getElementById("enter-state")
const userstoryfields=document.querySelectorAll(".enter-about")
const savedbuttons=document.querySelectorAll(".save-details")

//Tracking user story
let userstory
userstoryfields.forEach(userstoryfield=>{
   
    userstoryfield.addEventListener("keypress",(e)=>{
       userstory= e.currentTarget.value
    //    console.log(userstory)
        userstoryfields.forEach(userstoryfield=>{
            userstoryfield.value=userstory

        })
    })
   })


savedbuttons.forEach(savedbutton=>{
    savedbutton.addEventListener('click',()=>{
     
      
        const userObject={
            username:usernamefield.value,
            userage:useragefield.value,
            useremail:useremailfield.value,
            usercity:usercityfield.value,
            userstate:userstatefield.value,
        }
        // console.log(userstory)
        userObject.userstory=userstory
        // console.log(userObject)
        localStorage.setItem("user-profile", JSON.stringify(userObject))
        window.location.href="profile.html"
    })
})

