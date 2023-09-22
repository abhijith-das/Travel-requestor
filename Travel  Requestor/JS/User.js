document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('frmUser');

    const idInput = document.getElementById('empId');
    const nameInput = document.getElementById('empName');
    const projectInput = document.getElementById('project');
    const causeInput = document.getElementById('cause');
    const sourceInput = document.getElementById('source');
    const destinationInput = document.getElementById('dstn');
    const travelModeInput = document.getElementById('mode');
    const frmInput = document.getElementById('frmDate');
    const toInput = document.getElementById('toDate');
    const daysInput = document.getElementById('numDays');
    const rdoPriority = document.querySelectorAll('input[name="priority"]');


    const nameError = document.getElementById('nameError');
    const empIdError = document.getElementById('empIdError');
    const projectError = document.getElementById('projectError');
    const causeError = document.getElementById('causeError');
    const sourceError = document.getElementById('sourceError');
    const dstnError = document.getElementById('dstnError');
    const frmDateError = document.getElementById('frmDateError');
    const daysError = document.getElementById('daysError');
    const priorityError = document.getElementById('priorityError');
    const modeError = document.getElementById('modeError');
    const toDateError = document.getElementById('toDateError');


    const today = new Date();
    const tmr = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    //setting minimum date for from date and to date to today and tomorrow respectively
    frmInput.min = formatDate(today);
    //toInput.min = formatDate(tmr);


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!idInput.value.trim()) {
            empIdError.textContent = 'Emp ID is required';
            idInput.classList.add('ipBoxError');
        } else {
            empIdError.textContent = '';
        }
        // if (nameInput.value === "") {
        //     nameError.textContent = 'Name is required';
        //     nameInput.classList.add('ipBoxError');
        // } else {
        //     nameError.textContent = '';
        // }
        if (!projectInput.value.trim()) {
            projectError.textContent = 'Project is required';
            projectInput.classList.add('ipBoxError');
        } else {
            projectError.textContent = '';
        }

        if (!causeInput.value.trim()) {
            causeError.textContent = 'Cause is required';
            causeInput.classList.add('ipBoxError');
        } else {
            causeError.textContent = '';
        }
        if (!sourceInput.value.trim()) {
            sourceError.textContent = 'Source is required';
            sourceInput.classList.add('ipBoxError');
        } else {
            sourceError.textContent = '';
        }
        if (!destinationInput.value.trim()) {
            dstnError.textContent = 'Source is required';
            destinationInput.classList.add('ipBoxError');
        } else {
            dstnError.textContent = '';
        }
        if (!frmInput.value.trim()) {
            frmDateError.textContent = 'From Date is required';
            frmInput.classList.add('ipBoxError');
        } else {
            frmDateError.textContent = '';
        }
        if (!toInput.value.trim()) {
            toDateError.textContent = 'To Date is required';
            toInput.classList.add('ipBoxError');
        } else {
            toDateError.textContent = '';
        }
        if (!daysInput.value.trim()) {
            daysError.textContent = 'No of days is required';
            daysInput.classList.add('ipBoxError');
        } else {
            daysError.textContent = '';
        }
        if (!travelModeInput.value.trim()) {
            modeError.textContent = 'Mode of travel is required';
            travelModeInput.classList.add('ipBoxError');
        } else {
            modeError.textContent = '';
        }


        let prioritySelected = false;
        for (const checkbox of rdoPriority) {
            if (checkbox.checked) {
                prioritySelected = true;
            }
        }
        if (!prioritySelected) {
            priorityError.textContent = '  Select Priority';

        }


    });


    // //function to calculate no of days
    // form.addEventListener('change', function(event) {

    //     var todayDate = new Date();
    //     //const todayDate = new Date().toISOString().split('T')[0];

    //     // dobInput.setAttribute("max", maxDate);

    //     // dobInput.setAttribute("min", minDate);

    //     // To calculate the time difference of two dates
    //     var Difference_In_Time = new Date(toInput).getTime() - new Date(frmInput).getTime();

    //     // To calculate the no. of days between two dates
    //     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    //     console.log(Difference_In_Days);
    //     daysInput.value = Difference_In_Days;
    //     // var birthDate = new Date(dobInput.value.trim());
    //     // var age = todayDate.getFullYear() - birthDate.getFullYear();
    //     // var m = todayDate.getMonth() - birthDate.getMonth();
    //     // if (m < 0 || (m === 0 && todayDate.getDate() < birthDate.getDate())) {
    //     //     age--;
    //     // }
    //     // console.log(age);
    //     // ageInput.value = age;
    // })




})

function calculateToDate() {
    const frmInput = document.getElementById('frmDate').value;
    const toInput = document.getElementById('toDate');
    const daysInput = document.getElementById('numDays');

    const frmDate = new Date(frmInput);


    frmDate.setDate(frmDate.getDate() + parseInt(daysInput.value, 10));

    // Set the value of the toDate 
    toInput.value = formatDate(frmDate);
}


function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function LogOut() {
    window.location = "Login.html";
}

function preventBack() {
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function() { null };