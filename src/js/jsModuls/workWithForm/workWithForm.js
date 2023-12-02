function getObjWithFormData(form) {
  const formFields = {};
  const formData = new FormData(form);
  for (const [name, value] of formData.entries()) {
    formFields[name] = value;    
  }
  return formFields
}

function clearForm(form) {
  const formElements = form.elements;
  
  for (const element of formElements) {
    if (element.type !== "submit") {
      element.value = '';
    }
  }
}
export { getObjWithFormData, clearForm };