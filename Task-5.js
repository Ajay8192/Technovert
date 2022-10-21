var details = JSON.parse(localStorage.getItem("formDetailsStore")), clickTile;

//On click add button, form must be visible

function formVisibility()
{
    $(".ButtonBox").css("display", "none");
    $("#AddButton").css("display", "unset");
    $("#DetailsForm").trigger("reset");
    $("#DetailsForm").css("visibility", "visible");
    $("#DisplayContent").css("visibility", "hidden");
}

//On click home button function

function home(){
    $("#DetailsForm").css("visibility", "hidden");
    $("#DisplayContent").css("visibility", "hidden");
}

//On click close, the form should close

function closeForm(){
    $("#DetailsForm").css("visibility", "hidden");
}

//Until the form is filled the add button and edit buttons are disabled

function disableButton(){
    var filledFormDetails = true;
    var nameField = $("#AddName").val();
    var mailField = $("#AddMail").val();
    var mobileField = $("#AddMobile").val();
    var landlineField = $("#AddLandline").val();
    var websiteField = $("#AddWebsite").val();
    var addressField = $("#AddAddress").val();
    if(nameField === "" || mailField === "" || mobileField === "" || landlineField === "" || websiteField === "" || addressField === ""){
        filledFormDetails = false;
        $("#AddButton").attr('Disabled', true);
        $("EditButton").attr('Disabled', true);
    }
    if(filledFormDetails){
        $("#AddButton").attr('Disabled', false);
        $("#EditButton").attr('Disabled', false);
    }
}

/*Dynamic Functionalities */

//Add details to contact container

function detailsAdd(){
    if (typeof(Storage) !== "undefined"){
        var formDetails = {
            inputName: $("#AddName").val(),
            inputMail: $("#AddMail").val(),
            inputMobile: $("#AddMobile").val(),
            inputLandline: $("#AddLandline").val(),
            inputWebsite: $("#AddWebsite").val(),
            inputAddress: $("#AddAddress").val()
        }
        details = JSON.parse(localStorage.getItem("formDetailsStore"));
        if(details){
            details.push(formDetails);
        }
        else{
            details = [formDetails];
        }
        // Store
        localStorage.setItem("formDetailsStore", JSON.stringify(details));
        console.log(details);

        //DisplayContactContainer function
        displayContactContainerAdd(formDetails);

    } 
    else {
        alert("Sorry, your browser does not support Web Storage");
    }
}

// Make contact container available with its details

function intialConfig(){
    details = JSON.parse(localStorage.getItem("formDetailsStore"));
    if(details){
        displayContactContainer(details);
    }
}

$(document).ready(function(){    
    intialConfig();
});

//After each addition of details. Add it in the contact container

function displayContactContainerAdd(formDetails){
    var arr= [];
    var formDetails = {
        inputName: $("#AddName").val(),
        inputMail: $("#AddMail").val(),
        inputMobile: $("#AddMobile").val(),
        inputLandline: $("#AddLandline").val(),
        inputWebsite: $("#AddWebsite").val(),
        inputAddress: $("#AddAddress").val()
    }
    arr.push(formDetails);
    console.log(arr);
    var display = `<div class="Display" id=${arr[0].inputName.replace(/\s/g, "")}>
                            <span id="ShowName"></span>
                            <span id="ShowMail"></span>
                            <span id="ShowMobile"></span>
                         </div>`;
            var displayContainer = $(display).appendTo(".GridContainer");
            displayContainer.find("#ShowName").html(formDetails.inputName)
            displayContainer.find("#ShowMail").html(formDetails.inputMail);
            displayContainer.find("#ShowMobile").html("+91 "+formDetails.inputMobile);

            displayContainer.click(function(e){     
                console.log(e);
                let id = e.target.parentNode.id;
                console.log(id);
                clickTile = arr.find(c => c.inputName.replace(/\s/g, "") === id);
                console.log(clickTile);  
                $(".Display.active").removeClass("active");
                $("#"+clickTile.inputName.replace(/\s/g, "")).addClass("active");
                displayContactTile(clickTile);
            });
            $("#DetailsForm").css("visibility", "hidden");
}

//Display contact container

function displayContactContainer(details){
        let i;
        for(i=0; i<details.length; i++){
            var display = `<div class="Display" id=${details[i].inputName.replace(/\s/g, "")}> 
                            <span id="ShowName"></span>
                            <span id="ShowMail"></span>
                            <span id="ShowMobile"></span>
                         </div>`;
            var displayContainer = $(display).appendTo(".GridContainer");
            displayContainer.find("#ShowName").html(details[i].inputName)
            displayContainer.find("#ShowMail").html(details[i].inputMail);
            displayContainer.find("#ShowMobile").html("+91 "+details[i].inputMobile);

            displayContainer.click(function(e){     
                let id = e.target.parentNode.id;
                console.log(id);
                console.log(clickTile);
                clickTile = details.find(c => c.inputName.replace(/\s/g, "") === id);
                console.log(clickTile);
                $(".Display.active").removeClass("active");
                $("#"+clickTile.inputName.replace(/\s/g, "")).addClass("active");
                displayContactTile(clickTile);
            });
        }
}


//Display particular form details from the container and display.

function displayContactTile(clickTile){
    $("#DetailsForm").css("visibility", "hidden");
    $("#DisplayContent").css("visibility", "visible");   
    var  displayOnce = `<div class = "ImageAnchor">
                            <img src="Edit.png" class="EditImage">
                            <a href="#" class="EditLink" onclick= openEditForm()>EDIT</a>
                            <img src="delete1.png" class="DeleteImage">
                            <a href="#" class="DeleteLink" onclick = deleteContactTile()>DELETE</a>
                            <span id="GetFormName"></span>
                            <span id="GetFormMail"></span>
                            <span id="GetFormMobile"></span>
                            <span id="GetFormLandline"></span>
                            <span id="GetFormWebsite"></span>
                            <span id="GetFormAddress"></span>
                        </div>`   
    $(".DisplayForm .ImageAnchor").remove();
    var displayDataTile = $(displayOnce).appendTo(".DisplayForm");
    displayDataTile.find(".DisplayForm");
    $("#GetFormName").html(clickTile.inputName);
    $("#GetFormMail").html("Mail: "+ clickTile.inputMail);
    $("#GetFormMobile").html("Mobile: "+ "+91 "+clickTile.inputMobile);
    $("#GetFormLandline").html("Landline: "+ "040 "+clickTile.inputLandline);
    $("#GetFormWebsite").html("Website: "+ clickTile.inputWebsite);
    $("#GetFormAddress").html("Address: "+ clickTile.inputAddress);
}

// Delete the selected contact tile

function deleteContactTile(){
    for(let i=0; i<details.length; i++)
    {
        if(details[i].inputName.replace(/\s/g, "") === clickTile.inputName.replace(/\s/g, "")){
            details.splice(i, 1);
            localStorage.setItem("formDetailsStore", JSON.stringify(details));
            location.reload();
            break;
        }
    }
}

//Open the edit form when edit button is clicked

function openEditForm(){
    $("#AddName").val(clickTile.inputName);
    $("#AddMail").val(clickTile.inputMail);
    $("#AddMobile").val(clickTile.inputMobile);
    $("#AddLandline").val(clickTile.inputLandline);
    $("#AddWebsite").val(clickTile.inputWebsite);
    $("#AddAddress").val(clickTile.inputAddress);

    $(".ButtonBox").css("display", "none");
    $("#EditButton").css("display", "unset");
    $("#DetailsForm").css("visibility", "visible");
    $("#DisplayContent").css("visibility", "hidden"); 
}

// On click Edit button, the details are updated in the local storage and contact container 

function updateDetails(){
     var editDetails = {
        inputName: $("#AddName").val(),
        inputMail: $("#AddMail").val(),
        inputMobile: $("#AddMobile").val(),
        inputLandline: $("#AddLandline").val(),
        inputWebsite: $("#AddWebsite").val(),
        inputAddress: $("#AddAddress").val()
    }

    for(let i=0; i<details.length; i++)
    {
        if(details[i].inputName.replace(/\s/g, "") === clickTile.inputName.replace(/\s/g, "")){
            details[i].inputName = editDetails.inputName;
            details[i].inputMail = editDetails.inputMail;
            details[i].inputMobile = editDetails.inputMobile;
            details[i].inputLandline = editDetails.inputLandline;
            details[i].inputWebsite = editDetails.inputWebsite;
            details[i].inputAddress = editDetails.inputAddress;
            localStorage.setItem("formDetailsStore", JSON.stringify(details));
            location.reload();//
            break;
        }
    }
}
