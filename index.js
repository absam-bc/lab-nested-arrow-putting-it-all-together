const personalInfo={
  username:"user1",
  password:"password123",
}

function createLoginTracker(personalInfo){
  let attemptCount=0;
  locked=false;
  let loginTracker=(passwordAttempt)=>{
    if(locked){
      console.log("Account locked")
      return
    }
    if(passwordAttempt===personalInfo.password){
      console.log("Login successful");
    }else {
      attemptCount++;
    }
    if(attemptCount>=3){
      let locked=true;
    }
  }
  return loginTracker
}

let login=createLoginTracker(personalInfo);

login("wrong");
login("wrong");
login("password123");

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};