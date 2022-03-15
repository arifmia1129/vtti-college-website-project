const totalCGPA = document.getElementById("total-cgpa");


const inputValue = (id) => {
    const input = document.getElementById(id);
    let value = parseFloat(input.value);
    if (isNaN(value)) {
        value = 0;
    }
    else if (value > 4 || value < 0) {
        value = 0;
    }
    input.value = "";
    return value;
}

const calculate = () => {
    const first = inputValue("1st");
    const second = inputValue("2nd");
    const third = inputValue("3rd");
    const fourth = inputValue("4th");
    const fifth = inputValue("5th");
    const sixth = inputValue("6th");
    const seventh = inputValue("7th");
    const eighth = inputValue("8th");

    const calculateValue = ((first * (5 / 100)) + (second * (5 / 100)) + (third * (5 / 100)) + (fourth * (10 / 100)) + (fifth * (15 / 100)) + (sixth * (20 / 100)) + (seventh * (25 / 100)) + (eighth * (15 / 100)));
    totalCGPA.value = `আপনার সর্বমোট CGPA: ${calculateValue}`;
}