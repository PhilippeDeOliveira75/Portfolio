
function ValidationForm (inputName, value)  {
    let errorMessage = '';
  
    if (inputName === 'name') {
      const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/;
  
      if (value.trim() === '') {
        errorMessage = 'Ce champ doit être rempli.';
      } else if (!nameRegex.test(value)) {
        errorMessage = 'Ce champ ne doit contenir que des caractères alphabétiques';
      } else if (value.length < 2) {
        errorMessage = 'Ce champ doit contenir au moins 2 caractères.';
      }
    } else if (inputName === 'user_email') {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if (!emailRegex.test(value)) {
        errorMessage = 'Veuillez entrer une adresse e-mail valide.';
      }
    } else if (inputName === 'subject') {
      if (value.trim() === '') {
        errorMessage = 'Ce champ doit être rempli.';
      } else if (value.length < 3) {
        errorMessage = 'Le sujet doit contenir au moins 3 caractères.';
      } else if (value.length > 100) {
        errorMessage = 'Le sujet ne doit pas dépasser 100 caractères.';
      }
    } else if (inputName === 'message') {
      if (value.trim() === '') {
        errorMessage = 'Ce champ doit être rempli.';
      } else if (value.length < 10) {  
        errorMessage = 'Le message doit contenir au moins 10 caractères.';
      } else if (value.length > 300) {
        errorMessage = 'Le message ne doit pas dépasser 300 caractères.';
      }
    }
  
    return errorMessage;
  };
  
  export default ValidationForm