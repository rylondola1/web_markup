document.addEventListener('DOMContentLoaded', function() {
    createMealInputs();
});

function createMealInputs() {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var meals = ['Breakfast', 'Snack 1', 'Lunch', 'Snack 2', 'Dinner'];
    var mealInputs = document.getElementById('mealInputs');

    days.forEach(function(day) {
        var dayDiv = document.createElement('div');
        dayDiv.className = 'day-section';
        dayDiv.innerHTML = '<h3>' + day + '</h3>';
        meals.forEach(function(meal) {
            var label = document.createElement('label');
            label.textContent = meal + ': ';
            var input = document.createElement('input');
            input.type = 'text';
            input.name = day.toLowerCase() + '-' + meal.toLowerCase().replace(' ', '');
            dayDiv.appendChild(label);
            dayDiv.appendChild(input);
        });
        mealInputs.appendChild(dayDiv);
    });
}

function generateMealPlan() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    var mealPlanContent = '<h1>' + name + '\'s Weekly Meal Plan</h1><h2>Goal: ' + goal + '</h2><div style="font-family: monospace;">';
    
    days.forEach(function(day) {
        mealPlanContent += '<h3>' + day + '</h3>';
        meals.forEach(function(meal) {
            var mealValue = document.getElementsByName(day.toLowerCase() + '-' + meal.toLowerCase().replace(' ', ''))[0].value;
            mealPlanContent += '<p><strong>' + meal + ':</strong> ' + mealValue + '</p>';
        });
    });

    mealPlanContent += '</div>';

    document.write('<!DOCTYPE html><html><head><title>' + name + '\'s Meal Plan</title></head><body>');
    document.write(mealPlanContent);
    document.write('</body></html>');
}

function clearMealPlan() {
    document.getElementById('mealPlanForm').reset();
}

function printMealPlan() {
    window.print();
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
