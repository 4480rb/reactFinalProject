 function createUser(user) {
    fetch("https://3070/api/buisnessUser", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },

    }).then(response => {
        if (response.ok){
            alert("הפרטים עודכנו בהצלחה");
        }
        else{
            alert("Your details do not meet the legal requirements");
            response.json().then(error => {alert(JSON.stringify(error.errors)); });
        }
            
    });
}
export default createUser;