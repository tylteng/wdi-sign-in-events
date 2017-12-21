document.addEventListener('DOMContentLoaded', function(){
var signIn = document.querySelector('.signin');
var modal = document.querySelector('.modal');
var exit = document.querySelector('.close');
var submit = document.querySelector('.submit')
var form = document.querySelectorAll('input')


signIn.addEventListener('click', function(){
  modal.style.display = 'block';
  exit.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  submit.addEventListener('click', function(){
    form.forEach(function(label){
      label.classList.add('error')
      label.addEventListener('click', function(){
        label.classList.remove('error')
      });
    });
  });

});
});
