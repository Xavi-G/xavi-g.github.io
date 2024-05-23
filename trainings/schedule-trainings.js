document.addEventListener('DOMContentLoaded', function() {
    loadTrainings();
});

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var location = document.getElementById("location").value;

    if (name && date && time && location) {
        const training = { name, date, time, location };
        saveTraining(training);
        addTrainingToList(training);

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('location').value = '';

        alert("Formação marcada com sucesso!");
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function saveTraining(training) {
    const trainings = JSON.parse(localStorage.getItem('trainings')) || [];
    trainings.push(training);
    localStorage.setItem('trainings', JSON.stringify(trainings));
}


// Function to display the stored form data
function addTrainingToList(formData) {
    var trainingList = document.getElementById("trainingList");
    var listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `
        <h4>${formData.name}<br></h4>
        <strong>Data:</strong> ${formData.date}<br>
        <strong>Hora:</strong> ${formData.time}<br>
        <strong>Local:</strong> ${formData.location}
    `;
    trainingList.appendChild(listItem);
}

function loadTrainings() {
    const trainings = JSON.parse(localStorage.getItem('trainings')) || [];
    trainings.forEach(training => {
        addTrainingToList(training);
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