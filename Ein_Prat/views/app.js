function addRow() {

    var myName = document.getElementById("name");
    var last_name = document.getElementById("last_name");
    var id = document.getElementById("id");
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;


    if (myName.value != "" && id.value != "" ){
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= myName.value;
        row.insertCell(1).innerHTML= last_name.value;
        row.insertCell(2).innerHTML= id.value;
        row.insertCell(3).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    }



}

function deleteRow(obj) {

    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);

}



function load() {

    console.log("Page load finished");

}