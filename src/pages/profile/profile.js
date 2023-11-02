function getProfile(){
    const userProfile=JSON.parse(localStorage.getItem("user-profile"))
    if (!userProfile){
        // console.log("user profile not found")
        return
    }
    else{
        // console.log("user profile found",userProfile)
        const updatedAbout=document.getElementById("update-about")
        const updatedUsername=document.getElementById("update-username")
        const updatedAge=document.getElementById("update-age")
        const updatedEmail=document.getElementById("update-email")
        const updatedCity=document.getElementById("update-city")
        const updatedState=document.getElementById("update-state")

        if(userProfile.userstory){
            updatedAbout.textContent=userProfile.userstory
        }
        
        if(userProfile.username){
            updatedUsername.textContent=userProfile.username
        }
        
        if(userProfile.userage){
            updatedAge.textContent=userProfile.userage
        }
        
        if(userProfile.useremail){
            updatedEmail.textContent=userProfile.useremail
        }
        
        if(userProfile.userscity){
            updatedCity.textContent=userProfile.userscity
        }
        
        if(userProfile.userstate){
            updatedState.textContent=userProfile.userstate
        }
    }

}
getProfile()