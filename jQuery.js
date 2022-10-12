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
            localStorage.setItem("RadioGenderStore", 'unchecked');
            localStorage.setItem("RadioContactByStore", 'unchecked');
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
            localStorage.setItem("RadioGenderStore", $(".Genders").val('checked'))
            localStorage.setItem("RadioContactByStore", $(".ContactChoose").val('checked'))
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
        var RadioGender = localStorage.getItem("RadioGenderStore");
        var RadioContactBy = localStorage.getItem("RadioContactByStore");
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
        if(RadioGender !== 'unchecked')
            $(".Genders").val('checked')
        if(RadioContactBy !== 'unchecked')
            $(".ContactChoose").val('checked')
        if(CareerName === "" || CareerMail === "" || CareerRole === "" || File === "" )//|| ContactName === "" || ContactMail === "" || ContactNumber === "" || ContactOrganization === "" || ContactCity === "" || ContactState === "None" || PromoText === "None" || TextArea1 === "" || TextArea2 === "") 
        {
            Details = false;
            $("#CareerSubmits").attr("Disabled", true);
            //$("#SubmitButton").attr("Disabled", true);
        }
        if(Details)
        {
           $("#CareerSubmits").attr("Disabled", false);
           //$("#SubmitButton").attr("Disabled", false);
        }
        if(ContactName === "" || ContactMail === "" || ContactNumber === "" || ContactOrganization === "" || ContactCity === "" || ContactState === "None" || PromoText === "None" || TextArea1 === "" || TextArea2 === "" || RadioGender === 'unchecked' || RadioContactBy === 'unchecked'){
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
       // $("#ContactUs").get(0).reset();
        $("#ContactUs").trigger("reset");
        $("#ErrorMessage, #ContactNameError, #ContactMailError, #ContactOrganizationError").html("");
        $("#SubmitButton").attr("Disabled", true);
    });

    $(".Genders").click(function(){
        //var m = $('input[name = "gen"]:checked').val();
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

    $("#ContactUs").submit(function(){
        var Details = true;
        var ContactName= $("#ContactNames").val();
        var ContactMail = $("#ContactMails").val();
        var ContactOrganization = $("#ContactOrganizations").val();
        if(ContactName == "" || ContactMail == "" || ContactOrganization == ""){
            Details = false;
            $("#ErrorMessage").html("Please fill all the required fields below");
            $("#ErrorMessage").css("color", "red");
            $("#ContactNameError").html("Name is required");
            $("#ContactNameError").css("color", "red");
            $("#ContactMailError").html("E-mail is required");
            $("#ContactMailError").css("color", "red");
            $("#ContactOrganizationError").html("Organization is required");
            $("#ContactOrganizationError").css("color", "red");
        }
        if(Details == false)
        {
            return false;
        }
        else{
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

    $("#ContactNames, #ContactMails, #ContactNumber, #ContactOrganizations, #ContactCity, #ContactStates, .Genders, .ContactChoose").on('keyup keyup keyup keyup keyup change click', function(){
        var Details = true;
        var ContactName = $("#ContactNames").val();
        var ContactMail = $("#ContactMails").val();
        var ContactNumber = $("#ContactNumber").val();
        var ContactOrganization = $("#ContactOrganizations").val();
        var ContactCity = $("#ContactCity").val();
        var ContactStates = $("#ContactStates").val();
        var IsGenderChecked = $(".Genders").val('checked');
        var IsContactChose = $(".ContactChoose").val('checked');
        if(ContactName === "" || ContactMail === "" || ContactNumber === "" || ContactOrganization === "" || ContactCity === "" || ContactStates === "None")
        {
            if(IsGenderChecked === 'unchecked' && IsContactChose === 'unchecked'){
                Details = false;
                $("#SubmitButton").attr("Disabled", true);
            }
        }
        if(Details)
        {
           $("#SubmitButton").attr("Disabled", false);
        }
    }); 
    
});