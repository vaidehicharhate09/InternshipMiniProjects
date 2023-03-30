function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    console.log(username)  //to print onto console

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password,cpassword)
}

function checkusername(username){
    if(username.length > 7){   
        document.getElementById('username').classList.add('success')       
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerHTML=''
    }    //after the error gets corrected it is replaced by success
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='username must be 8 letters long'
    }    //initially empty field is checked it is indicated as error 
}

function checkemail(email){
    if(email.length > 8 && email.includes('@gmail.com')){   
        document.getElementById('email').classList.add('success')       
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerHTML=''
    }    //after the error gets corrected it is replaced by success
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='Email length must be greater than 8 and must include @gmail.com'
    }    //initially empty field is checked it is indicated as error 
}

function checkpassword(password){
    if(password.length > 7 && password.includes('.')){   
        document.getElementById('password').classList.add('success')       
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password_error').innerHTML=''
    }    //after the error gets corrected it is replaced by success
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='Password must be 8 characters long and must contain .'
    }    //initially empty field is checked it is indicated as error 
}

function checkpasswordmatch(password, cpassword){
    if(password==cpassword && password!=''){
        document.getElementById('cpassword').classList.add('success')       
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassword_error').innerHTML=''
    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText='password did not match'
    }
}