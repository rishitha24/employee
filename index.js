$(document).ready(function(){
    $("#exampleModal").on('hidden.bs.modal', function(){
        document.getElementById('Name').value = "";
        document.getElementById('EmployeeId').value = "";
        document.getElementById('Email').value = "";
        document.getElementById('dateOfJoining').value = "";

        document.getElementById('nameReqd').style.display = "none";
        document.getElementById('empIdReqd').style.display = "none";
        document.getElementById('mailReqd').style.display = "none";
        document.getElementById('dateReqd').style.display = "none";
       
    });

    document.getElementById('nameReqd').style.display = "none";
    document.getElementById('empIdReqd').style.display = "none";
    document.getElementById('mailReqd').style.display = "none";
    document.getElementById('dateReqd').style.display = "none";
});

function checkFields() {
    var empName = document.getElementById('Name').value;
    var empId = document.getElementById('EmployeeId').value;
    var empEmail = document.getElementById('Email').value;
    var empDept = document.getElementById('department').value;
    var empDate = document.getElementById('dateOfJoining').value;

    if (empName == "") {
        document.getElementById('nameReqd').style.display = "block";
    }

    if (empId == "") {
        document.getElementById('empIdReqd').style.display = "block";
    }

    if (empEmail == "") {
        document.getElementById('mailReqd').style.display = "block";
    }

    if (empDate == "") {
        document.getElementById('dateReqd').style.display = "block";
    }

    var count = 0;

    $('#addEmployeeForm input:required').each(function () {
        if ($(this).val() === '') {
            count = count + 1;
        }
    });

    console.log(count);
    if (count == 0) {
        var submitButton = document.getElementById('submitButton');
        submitButton.setAttribute('data-dismiss', 'modal');
        document.getElementById('empDetailTable').style.display = "block";
        createTable(empName, empId, empDept, empEmail, empDate);
    }
}

function createTable(name, id, dept, email, doj) {
    var tableBody = document.getElementById('tableBody');

    var tableRow = document.createElement('tr');
    tableRow.id = id;

    var tableData_name = document.createElement('td');
    var textnode_name = document.createTextNode(name);
    tableData_name.appendChild(textnode_name);
    tableRow.append(tableData_name);

    var tableData_id = document.createElement('td');
    var textnode_id = document.createTextNode(id);
    tableData_id.appendChild(textnode_id);
    tableRow.append(tableData_id);

    var tableData_dept = document.createElement('td');
    var textnode_dept = document.createTextNode(dept);
    tableData_dept.appendChild(textnode_dept);
    tableRow.append(tableData_dept);

    var tableData_email = document.createElement('td');
    var textnode_email = document.createTextNode(email);
    tableData_email.appendChild(textnode_email);
    tableRow.append(tableData_email);

    var tableData_doj = document.createElement('td');
    var textnode_doj = document.createTextNode(doj);
    tableData_doj.appendChild(textnode_doj);
    tableRow.append(tableData_doj);

    var tableData_action = document.createElement('td');
    var tableData_button = document.createElement('button');
    tableData_button.className = "btn";
    tableData_button.style.marginTop = "-0.5rem";
    tableData_button.id = "delbtn" + id;
    tableData_button.setAttribute('onclick', 'deleteRow(this.id)')
    tableData_action.append(tableData_button);
    tableData_span = document.createElement('i');
    tableData_span.className = "fa fa-times";
    tableData_span.style.color = "blue";
    tableData_button.append(tableData_span);
    tableRow.append(tableData_action);

    tableBody.append(tableRow);
}

function deleteRow(clicked_id) {
    var reqdId = clicked_id.substring(6)
    console.log(document.getElementById(reqdId));
    document.getElementById(reqdId).remove();
}