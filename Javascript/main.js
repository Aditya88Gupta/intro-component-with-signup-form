const inputs = document.querySelectorAll('.right-col form input');
const btn = document.querySelector('.submit-btn');
const error_img = document.querySelectorAll('.right-col form img');
const error_txt = document.querySelectorAll('.right-col form p');

btn.addEventListener('click', function(event){
  count=0;
  flag=true;
  inputs.forEach(input => {
    if(!input.value){
      if(input.type=='email'){
        input.placeholder="email@example/com";
        input.style.setProperty("--c", "hsl(0, 100%, 74%)");
      }
      else
        input.placeholder="";
      error_img[count].classList.remove('hide-error');
      error_txt[count].classList.remove('hide-error');
      flag=false;
    }
    else{
      if(input.type=='email' && !validateEmail(input.value)){
        error_img[count].classList.remove('hide-error');
        error_txt[count].classList.remove('hide-error');
        flag=false;
      }
      else{
        error_img[count].classList.add('hide-error');
        error_txt[count].classList.add('hide-error');
      }
    }
    count+=1;
  })
  if(flag){
    displayAlert();
  }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function displayAlert(){
  alert("Done!!");
  location.reload();
  return false;
}
