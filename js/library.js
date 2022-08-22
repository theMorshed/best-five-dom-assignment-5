function getValue(fieldId) {
    const element = document.getElementById(fieldId);
    if (element.tagName.toLowerCase() === 'input') {
        const elementString = element.value;
        if (isNaN(elementString) || elementString === '') {
            alert('Please enter a valid number.');
            element.value = '';
            return undefined;
        }
        const elementValue = parseInt(elementString);
        // element.value = '';
        return elementValue;
    } else {
        const elementString = element.innerText;
        const elementValue = parseInt(elementString);
        return elementValue;
    }
}