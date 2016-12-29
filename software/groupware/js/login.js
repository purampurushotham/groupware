
function validate_login() {
    var e=document.getElementById("Email").value;
    var p=document.getElementById("Password").value;
    var email=function () {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //alert(re.test(e));
        if(re.test(e)){
            //alert("email");
        return true;}
        else{
            return false;

        }
    }
    var password=function () {
        var r= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        //alert(r.test(p));
        if(r.test(p)){
            return true;
        }
        else{
            return false;
        }
    }
    if(email(e)&& password(p)){
        if(e=="puram@gmail.com" && p=="Passw0rd!23") {
            alert("in user");
            imageClick('../html/Dashboard.html');
        }
        else if(e=="admin@gmail.com" && p=="Passw0rd!23"){
            imageClick('../html/Admin.html');
        }
    }
    else {
        alert("invalid email id or password")
    }
}