// banking project

// alert("Please enter");

// deposite part start
function handleDeposite(){
    //var inputValue = document.getElementById("depositeInput").value;
    var converted_input_value = get_converted_value("depositeInput","value");
    //var converted_input_value = string_to_number(inputValue);

    //var deposite_amount = document.getElementById("depositeAmount").innerText;
    var converted_deposite_amount = get_converted_value("depositeAmount","innerText");
    //var converted_deposite_amount = string_to_number(deposite_amount);

    var deposite_currency = converted_input_value + converted_deposite_amount;

    //document.getElementById("depositeAmount").innerText = deposite_currency;
    setInnerText("depositeAmount", deposite_currency);

    // deposite part end


//  deposite to total save start

//var total_amount = document.getElementById("totalAmount").innerText;
var converted_total_amount = get_converted_value("totalAmount","innerText");
//var converted_total_amount = string_to_number(total_amount);
var total_currency = converted_total_amount + converted_input_value;
//document.getElementById("totalAmount").innerText= total_currency;
setInnerText("totalAmount", total_currency);

// deposite to total save end

    document.getElementById("depositeInput").value = ""; // proti input er por input box er lekha clear kore dibe

    console.log(deposite_currency);
}

function get_converted_value(id , element){

    if(element=="innerText")
    {
        var value = document.getElementById(id).innerText;
        return parseFloat(value);
    }
    else{
        var value = document.getElementById(id).value;
        return parseFloat(value);
    }
};



// withdraw part

function handleWithdraw(){
    //var inputValue = document.getElementById("withdrawInput").value;
    //var converted_input_value = string_to_number(inputValue);
    var converted_input_value = get_converted_value("withdrawInput","value");

    //var withdraw_amount = document.getElementById("withdrawAmount").innerText;
    //var converted_withdraw_amount = string_to_number(withdraw_amount);
    var converted_withdraw_amount = get_converted_value("withdrawAmount","innerText");

    var withdraw_currency = converted_input_value + converted_withdraw_amount;

    //document.getElementById("withdrawAmount").innerText = withdraw_currency;
    setInnerText("withdrawAmount", withdraw_currency);


// updating total amount for withdraw start

//var total_amount = document.getElementById("totalAmount").innerText;
//var converted_total_amount = string_to_number(total_amount);
var converted_total_amount = get_converted_value("totalAmount","innerText");
var total_currency = converted_total_amount - converted_input_value;
//document.getElementById("totalAmount").innerText= total_currency;
setInnerText("totalAmount",total_currency);

// updating total amount for withdraw end

    document.getElementById("withdrawInput").value = ""; // proti input er por input box er lekha clear kore dibe

    console.log(withdraw_currency);
}


//code short korar jonno

function setInnerText(id , value){
    document.getElementById(id).innerText = value;
}