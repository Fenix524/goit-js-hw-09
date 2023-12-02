import { getObjWithFormData, clearForm } from './jsModuls/workWithForm/workWithForm';
import { saveToLocalStorage, readFromLocalStorage, removeFromLocalStorage} from './jsModuls/webStorade/workWithData';
import throttle from 'lodash.throttle';

const myForm = document.querySelector('.feedback-form');
const dataKeyName = "feedback-form-state";

// myForm.
myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = getObjWithFormData(e.currentTarget)
  console.log("Відправлено наступні дані:");
  for (const key in formData) {
    console.log(key + ": " + formData[key]);
  }

  clearForm(e.currentTarget);
  removeFromLocalStorage(dataKeyName)
})

myForm.addEventListener('input', throttle(onMyFormInput, 500));

function onMyFormInput(e){
  saveToLocalStorage(dataKeyName, getObjWithFormData(e.currentTarget));
}

const loadLocalFormData = readFromLocalStorage(dataKeyName);
for (const key in loadLocalFormData) {
  if(myForm.elements[key]){
    myForm.elements[key].value = loadLocalFormData[key];
  }
}
