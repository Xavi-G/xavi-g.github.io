// function handleFormSubmission(event) {
//     event.preventDefault(); // Prevent the default form submission
    
//     // Get form values
//     var name = document.getElementById("name").value;
//     var doctor = document.getElementById("doctor").value;
//     var date = document.getElementById("date").value;
//     var time = document.getElementById("time").value;
//     var location = document.getElementById("location").value;

//     if (name.trim() === '' || doctor.trim() === '' || date.trim() === '' || time.trim() === '' || location.trim() === '') {
//         alert("Por favor, preencha todos os campos.");
//         return; 
//     }
    
//     // Create an object to store the form data
//     var formData = {
//         name: name,
//         doctor: doctor,
//         date: date,
//         time: time,
//         location: location
//     };
    
//     // Store the form data in localStorage
//     localStorage.setItem("appointmentFormData", JSON.stringify(formData));
    
//     // Display the stored form data
//     displayFormData(formData);
    
//     // Optionally, you can redirect to another page or display a success message
//     alert("Consulta marcada com sucesso!");
// }

// // Function to display the stored form data
// function displayFormData(formData) {
//     var trainingList = document.getElementById("appointmentsList");
//     var listItem = document.createElement("li");
//     listItem.classList.add("list-group-item");
//     listItem.innerHTML = `
//         <h4>Consulta - ${formData.name}<br></h4>
//         <strong>Médico:</strong> ${formData.doctor}<br>
//         <strong>Data:</strong> ${formData.date}<br>
//         <strong>Hora:</strong> ${formData.time}<br>
//         <strong>Local:</strong> ${formData.location}
//     `;
//     trainingList.appendChild(listItem);
// }

// var storedData = localStorage.getItem("appointmentFormData");
// if (storedData) {
//     displayFormData(JSON.parse(storedData));
// }

// function handleInfoClick(){
//     var displaySection = document.getElementById("displaySection");
//     if (displaySection.style.display === "none") {
//         displaySection.style.display = "block";
//     } else {
//         displaySection.style.display = "none";
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    loadAppointments();
});

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var doctor = document.getElementById("doctor").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var location = document.getElementById("location").value;

    if (name && doctor && date && time && location) {
        const appointment = { name, doctor, date, time, location };
        saveAppointment(appointment);
        addAppointmentToList(appointment);

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('doctor').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('location').value = '';

        alert("Consulta marcada com sucesso!");
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function saveAppointment(appointment) {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
}


// Function to display the stored form data
function addAppointmentToList(formData) {
    var appointmentList = document.getElementById("appointmentList");
    var listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `
        <h4>Consulta - ${formData.name}<br></h4>
        <strong>Médico:</strong> ${formData.doctor}<br>
        <strong>Data:</strong> ${formData.date}<br>
        <strong>Hora:</strong> ${formData.time}<br>
        <strong>Local:</strong> ${formData.location}
    `;
    appointmentList.appendChild(listItem);
}

function loadAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.forEach(appointment => {
        addAppointmentToList(appointment);
    });
}

function handleInfoClick(){
    var displaySection = document.getElementById("displaySection");
    const expandIcon = document.getElementById('expandIcon');
    if (displaySection.style.display === "none") {
        displaySection.style.display = "block";
        expandIcon.classList.remove('fa-chevron-down');
        expandIcon.classList.add('fa-chevron-up');
    } else {
        displaySection.style.display = "none";
        expandIcon.classList.remove('fa-chevron-up');
        expandIcon.classList.add('fa-chevron-down');
    }
}