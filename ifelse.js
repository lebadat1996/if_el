function enter() {
    let userName =  document.getElementById("account").value;
    let password = document.getElementById("Password").value;
    if (userName === 'Admin') {
        if(password === 'TheMaster'){
            alert('welcome')
        }
        else if(password === ''){
            alert('canceld')
        }
        else {
            alert('Wrong password')
        }
    }else if(userName === ''){
        alert('canceld')
    }else{
        alert('I dont know you')
    }
}