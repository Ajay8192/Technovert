//Careers

function CareerReset(){
    document.getElementById("Career").reset();
    document.getElementById("filetxt").innerHTML= "";
    document.getElementById("Submits").disabled= true;
}

/*document.getElementById("infile").onchange=function(event){value()};
function value(event)
{
    document.getElementById("filename").value = document.getElementById("infile").value;
}
*/

function mailValid(){
    var mail = document.getElementById("camail").value;
    var rmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!mail.match(rmail))
    {
        alert(mail+" is an invalid email !");
        document.forms["career"]["Cmail"].focus();
        return false;
    }
    else{
        document.forms["career"]["Cmail"].focus();
        return true;
    }
}

function CareerForm(){
    var details= true;
    /*var ch = document.forms["career"].elements;
    for(var i=0 ; i<ch.length; i++)
    {
        if(ch[i].value.length == 0)
        {
            details = false;
        }
    } */
    var cname = document.forms["career"]["Cname"].value;
    var cmail = document.forms["career"]["Cmail"].value;
    var crole = document.forms["career"]["role"].value;
    var file = document.forms["career"]["Cfile"].value;

    document.getElementById("filetxt").innerHTML = file;
    if(cname === "" || cmail === "" || crole === "None" || file === "")
    {
        details = false;
        document.getElementById('Submits').disabled = true;
    }
    if(details)
    {
        document.getElementById('Submits').disabled = false;
    }
}

//Contact

function formReset(){
    document.getElementById("ContactUs").reset();
}

function formGender(){
    var m = document.forms["ContactsForm"]["gen"].value;
    if(m == "Male"){
        alert("Hello Sir");
    }
}

function formGenderf(){
    var f = document.forms["ContactsForm"]["gen"].value;
    if(f == "Female"){
        alert("Hello Lady");
    }
}

function formPromo(){
    var n = document.forms["ContactsForm"]["Costate"].value;
    var t = " -PROMO";
    var res= n+t;
    document.getElementById("result").value= res;
}

function formRequired(){
    var details = true;
    var n = document.getElementById("contname").value;
    var mail = document.getElementById("contmail").value;
    var org = document.getElementById("contorg").value;
   if(n == "" || mail == "" || org == ""){
        details = false;
        document.getElementById("errmsg").innerHTML = "Please fill all the required fields below";
        document.getElementById("errmsg").style.color = "red";
        document.getElementById("errname").innerHTML = "Name is required";
        document.getElementById("errname").style.color = "red";
        document.getElementById("errmail").innerHTML="E-mail is required";
        document.getElementById("errmail").style.color = "red";
    }
    if(details == false)
    {
        return false;
    }
    else{
        return true;
    }
}

function formValid(){
    var mail = document.getElementById("contmail").value;
    var rmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!mail.match(rmail))
    {
        alert(mail+" is an invalid email !");
        document.forms["ContactsForm"]["Comail"].focus();
        return false;
    }
    else{
        document.forms["ContactsForm"]["Comail"].focus();
        return true;
    }
}