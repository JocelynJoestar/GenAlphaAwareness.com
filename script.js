document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('btn');
    let resetButton = document.getElementById('resetBtn');

    button.addEventListener('click', () => {
        const height = parseInt(document.getElementById('height').value);
        const weight = parseInt(document.getElementById('weight').value);
        const result = document.getElementById('output');
        const male = document.querySelector('input[name="gender"][value="Male"]').checked;
        const female = document.querySelector('input[name="gender"][value="Female"]').checked;

        let height_status = false, weight_status = false;

        // Validate height
        if (height === '' || isNaN(height) || (height <= 0)) {
            document.getElementById('height_error').innerHTML = 'Please provide a valid height';
        } else {
            document.getElementById('height_error').innerHTML = '';
            height_status = true;
        }

        // Validate weight
        if (weight === '' || isNaN(weight) || (weight <= 0)) {
            document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
        } else {
            document.getElementById('weight_error').innerHTML = '';
            weight_status = true;
        }

        // Calculate BMI if both height and weight are valid
        if (height_status && weight_status) {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);

            if (male) {
                // BMI interpretation for Male
                if (bmi < 18.6) {
                    result.innerHTML = 'Underweight: ' + bmi;
                } else if (bmi >= 18.6 && bmi < 24.9) {
                    result.innerHTML = 'Normal: ' + bmi;
                } else if (bmi >= 25.0 && bmi < 29.9){
                    result.innerHTML = 'Overweight: ' + bmi;
                } else {
                    result.innerHTML = 'Obese: ' + bmi;
                }
            
            } else if (female) {
                // BMI interpretation for Female
                if (bmi < 18.5) {
                    result.innerHTML = 'Underweight: ' + bmi;
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    result.innerHTML = 'Normal: ' + bmi;
                } else if (bmi >= 25.0 && bmi < 29.9){
                    result.innerHTML = 'Overweight: ' + bmi;
                } else {
                    result.innerHTML = 'Obese: ' + bmi;
                }
            } else {
                // No gender selected
                alert('Please select your gender');
            }
        } else {
            alert('The form has errors');
            result.innerHTML = '';
        }
    });
    resetButton.addEventListener('click', () => {
        // Clear all input fields
        document.getElementById('height').value = '';
        document.getElementById('weight').value = '';
        document.getElementById('age').value = '';

        // Clear gender selection
        document.querySelector('input[name="gender"][value="Male"]').checked = false;
        document.querySelector('input[name="gender"][value="Female"]').checked = false;

        // Clear error messages
        document.getElementById('height_error').innerHTML = '';
        document.getElementById('weight_error').innerHTML = '';

        // Clear the result
        document.getElementById('output').innerHTML = '';
    });
});

