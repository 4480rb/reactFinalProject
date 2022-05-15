import { useHistory } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

export function SignUp(user) {
 if(user){

    fetch(`http://localhost:3070/api/BusinessUser`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        if (response.ok){
            alert("הפרטים עודכנו בהצלחה");
        }
        else if(response.status===404){
            alert("error 404");
        }
        else{
            alert("Your details do not meet the legal requirements");
            response.json().then(error => {alert(JSON.stringify(error.errors)); });
        }
            
  }); } 
  else
  {
      alert("you can't sign up, please put your details!");
  }
}

export function SignIn(email,password) {
    debugger
    const history = useHistory();
    
    // const navigate = useNavigate();

    if(email&&password){
 fetch(`http://localhost:3070/api/BusinessUser/${email}/${password}`)
     .then(res => {
         if(res.ok && res!=null&&res.status===204){
              alert("this user is undefined, enter user ");
              
         }
         else
         if (res!=null&&res.ok) 
             return res.json();
       
     })
     .then(data => {
         
         if (data) {
             alert("Hello to " + data.name);
           history.push("/Settings")
        // navigate('/Settings');

         }
     })}
     else
  {
      alert("you can't sign in, please put your details!");
  }
};

