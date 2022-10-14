//Careers

$(document).ready(function(){

    $(".CareerReset").click(function(){
        $("#CareerForm").trigger("reset");
        $("#CareerSubmits").attr("Disabled", true);
        $("#FileText").html("");
    });

    $("#CareerSubmits").click(function(){
        var Mail = $("#CareerMails").val();
        var MailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!Mail.match(MailFormat))
        {
            alert(Mail+" is an invalid email !");
            $("#CareerMails").val("");
            return false;
        }
        else{
            return true;
        }
    });

    $("#CareerNames, #CareerMails, #CareerRoles, #CareerFiles").on('keyup change', function(){
        var Details = true;
        var CareerName = $("#CareerNames").val();
        var CareerMail = $("#CareerMails").val();
        var CareerRole = $("#CareerRoles").val();
        var File = $("#CareerFiles").val();
        $("#FileText").html(File);
        if(CareerName === "" || CareerMail === "" || CareerRole === "None" || File === "")
        {
            Details = false;
            $("#CareerSubmits").attr("Disabled", true);
        }
        if(Details)
        {
           $("#CareerSubmits").attr("Disabled", false);
        }
    }); 

    window.onbeforeunload = function() {
        var CareerName = $("#CareerNames").val();
        var CareerMail = $("#CareerMails").val();
        var CareerRole = $("#CareerRoles").val();

        var ContactName = $("#ContactNames").val();
        var ContactMail = $("#ContactMails").val();
        var ContactNumber = $("#ContactNumbers").val();
        var ContactOrganization = $("#ContactOrganizations").val();
        var ContactCity = $("#ContactCities").val();
        var ContactStates = $("#ContactStates").val();
        var Promo = $("#PromoResult").val();
        var TextArea1 = $("#TextAreas").val();
        var TextArea2 = $("#TextAreas2").val();
        
        if(CareerName === undefined && CareerMail === undefined && CareerRole === undefined)
        {
            //CareerLocalStorage
            localStorage.setItem("CareerNameStore", "");
            localStorage.setItem("CareerMailStore", "");
            localStorage.setItem("CareerRoleStore", "None");
            $("#FileText").html("");
        }
        else{
            //CareerLocalStorage
            localStorage.setItem("CareerNameStore", $("#CareerNames").val());
            localStorage.setItem("CareerMailStore", $("#CareerMails").val());
            localStorage.setItem("CareerRoleStore", $("#CareerRoles").val());
            localStorage.setItem("FileStore", $("#CareerFiles").val());
        }
        if(ContactName == undefined && ContactMail === undefined && ContactNumber === undefined && ContactOrganization === undefined && ContactCity === undefined && ContactStates === undefined && Promo === undefined && TextArea1 === undefined && TextArea2 === undefined){
            //ContactLocalStorage
            localStorage.setItem("ContactNameStore", "");
            localStorage.setItem("ContactMailStore", "");
            localStorage.setItem("ContactNumberStore", "");
            localStorage.setItem("ContactOrganizationStore", "");
            localStorage.setItem("ContactCityStore", "");
            localStorage.setItem("ContactStateStore", "None");
            localStorage.setItem("PromoTextStore", "");
            localStorage.setItem("TextArea1Store", "");
            localStorage.setItem("TextArea2Store", "");
        }
        else{
            //ContactLocalStorage
            localStorage.setItem("ContactNameStore", $("#ContactNames").val());
            localStorage.setItem("ContactMailStore", $("#ContactMails").val());
            localStorage.setItem("ContactNumberStore", $("#ContactNumbers").val());
            localStorage.setItem("ContactOrganizationStore", $("#ContactOrganizations").val());
            localStorage.setItem("ContactCityStore", $("#ContactCities").val());
            localStorage.setItem("ContactStateStore", $("#ContactStates").val());
            localStorage.setItem("PromoTextStore", $("#PromoResult").val());
            localStorage.setItem("TextArea1Store", $("#TextAreas").val());
            localStorage.setItem("TextArea2Store", $("#TextAreas2").val());
        }
    }

    window.onload = function(){
        var Details = true;
        var ContactDetails = true;
        //CareerPageLoad
        var CareerName = localStorage.getItem("CareerNameStore");
        var CareerMail = localStorage.getItem("CareerMailStore");
        var CareerRole = localStorage.getItem("CareerRoleStore");
        var File = localStorage.getItem("FileStore");
        //ContactPageLoad
        var ContactName = localStorage.getItem("ContactNameStore");
        var ContactMail = localStorage.getItem("ContactMailStore");
        var ContactNumber = localStorage.getItem("ContactNumberStore");
        var ContactOrganization = localStorage.getItem("ContactOrganizationStore");
        var ContactCity = localStorage.getItem("ContactCityStore");
        var ContactState = localStorage.getItem("ContactStateStore");
        var PromoText = localStorage.getItem("PromoTextStore");
        var TextArea1 = localStorage.getItem("TextArea1Store");
        var TextArea2 = localStorage.getItem("TextArea2Store");
        //Career
        if(CareerName !== "") 
            $("#CareerNames").val(CareerName);
        if(CareerMail !== "")
            $("#CareerMails").val(CareerMail);
        if(CareerRole !== "")
            $("#CareerRoles").val(CareerRole);
        if(File !== ""){
            $("#FileText").html(File);
        }
        //Contact
        if(ContactName !== "") 
            $("#ContactNames").val(ContactName);
        if(ContactMail !== "")
            $("#ContactMails").val(ContactMail);
        if(ContactNumber !== "")
            $("#ContactNumbers").val(ContactNumber);
        if(ContactOrganization !== "")
            $("#ContactOrganizations").val(ContactOrganization);
        if(ContactCity !== "")
            $("#ContactCities").val(ContactCity);
        if(ContactState !== "")
            $("#ContactStates").val(ContactState);
        if(PromoText !== "")
            $("#PromoResult").val(PromoText);
        if(TextArea1 !== "")
            $("#TextAreas").val(TextArea1);
        if(TextArea2 !== "")
            $("#TextAreas2").val(TextArea2);
        if(CareerName === "" || CareerMail === "" || CareerRole === "" || File === "" ) 
        {
            Details = false;
            $("#CareerSubmits").attr("Disabled", true);
        }
        if(Details)
        {
           $("#CareerSubmits").attr("Disabled", false);
        }
        if(ContactName === "" || ContactMail === "" || ContactNumber === "" || ContactOrganization === "" || ContactCity === "" || ContactState === "None" || PromoText === "None" || TextArea1 === "" || TextArea2 === ""){
            ContactDetails = false;
            $("#SubmitButton").attr("Disabled", true);
        }
        if(ContactDetails)
        {
            $("#SubmitButton").attr("Disabled", false);
        }
    }

});

//Contact

$(document).ready(function() {
    $("#ResetForm").click(function(){
        $("#ContactUs").trigger("reset");
        $("#ErrorMessage, #ContactNameError, #ContactMailError, #ContactOrganizationError").html("");
        $("#SubmitButton").attr("Disabled", true);
        $("#Popup").css("visibility", "hidden");
    });

    $(".Genders").click(function(){
        var Gender = $(".Genders:checked").val();
        if(Gender == "Male"){
            alert("Hello Sir");
        }
        else{
            alert("Hello Lady");
        }
    });

    $("#PromoResult").click(function(){
        var StateName = $("#ContactStates").val();
        var SuffixText = " - PROMO";
        if(StateName != "None")
        {
            var Result= StateName+SuffixText;
            $("#PromoResult").val(Result);
        }
        else{
            $("#PromoResult").val("None");
        }
    });

    $("#ContactUs").submit(function(e){
        var ContactDetails = true;
        var ContactName= $("#ContactNames").val();
        var ContactMail = $("#ContactMails").val();
        var ContactOrganization = $("#ContactOrganizations").val();
        if(ContactName == "" || ContactMail == "" || ContactOrganization == ""){
            ContactDetails = false;
            $("#ErrorMessage").html("Please fill all the required fields below");
            $("#ErrorMessage").css("color", "red");
            $("#ContactNameError").html("Name is required");
            $("#ContactNameError").css("color", "red");
            $("#ContactMailError").html("E-mail is required");
            $("#ContactMailError").css("color", "red");
            $("#ContactOrganizationError").html("Organization is required");
            $("#ContactOrganizationError").css("color", "red");
        }
        if(ContactDetails){
            e.preventDefault();
            var ContactName = "Name: "+$("#ContactNames").val();
            var ContactMail = "Mail: "+$("#ContactMails").val();
            var ContactNumber = "Contact: "+$("#ContactNumbers").val();
            var Gender = "Gender: "+ $(".Genders:checked").val();
            var ContactOrganization = "Organization: "+ $("#ContactOrganizations").val();
            var ContactCity = "City: "+ $("#ContactCities").val();
            var ContactState = "State: "+ $("#ContactStates").val();
            $("#Popup").css("visibility", "visible");
            $("#NameField").html(ContactName);
            $("#EmailField").html(ContactMail);
            $("#ContactField").html(ContactNumber);
            $("#GenderField").html(Gender);
            $("#OrgField").html(ContactOrganization);
            $("#CityField").html(ContactCity);
            $("#StateField").html(ContactState);
            return true;
        }
    });

    $("#SubmitButton").click(function(){
        var Mail = $("#ContactMails").val();
        var CheckMail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!Mail.match(CheckMail))
        {
            alert(Mail+" is an invalid email !");
            $("#ContactMails").focus(function(){
                return false;
            });
        }
        else{
            $("#ContactMails").focus(function(){
                return true;
                
            });
        }
    });

    $("#ContactNames, #ContactMails, #ContactNumbers, #ContactOrganizations, #ContactCities, #ContactStates").on('keyup change', function(){
        var ContactDetails = true;
        var ContactName = $("#ContactNames").val();
        var ContactMail = $("#ContactMails").val();
        var ContactNumber = $("#ContactNumbers").val();
        var ContactOrganization = $("#ContactOrganizations").val();
        var ContactCity = $("#ContactCities").val();
        var ContactStates = $("#ContactStates").val();
        if(ContactName === "" || ContactMail === "" || ContactNumber === "" || ContactOrganization === "" || ContactCity === "" || ContactStates === "None")
        {
                ContactDetails = false;
                $("#SubmitButton").attr("Disabled", true);
        }
        if(ContactDetails)
        {
           $("#SubmitButton").attr("Disabled", false);
        }
    }); 

    $("#Cancel").click(function(){
        $("#Popup").css("visibility", "hidden");
    });
    
    $("#Ok").click(function(){
        $("#ContactUs").submit(function(){
            var ContactDetails = true;
            var ContactName= $("#ContactNames").val();
            var ContactMail = $("#ContactMails").val();
            var ContactOrganization = $("#ContactOrganizations").val();
            if(ContactName == "" || ContactMail == "" || ContactOrganization == ""){
                ContactDetails = false;
                $("#ErrorMessage").html("Please fill all the required fields below");
                $("#ErrorMessage").css("color", "red");
                $("#ContactNameError").html("Name is required");
                $("#ContactNameError").css("color", "red");
                $("#ContactMailError").html("E-mail is required");
                $("#ContactMailError").css("color", "red");
                $("#ContactOrganizationError").html("Organization is required");
                $("#ContactOrganizationError").css("color", "red");
            }
            if(ContactDetails)
                return true;
        });
        $("#Popup").css("visibility", "hidden");
        $("#ContactUs").trigger("reset");
        $("#SubmitButton").attr("Disabled", true);
    });

});
