(function () {
  var burger = document.querySelector('#hamburger');
  var side_bar = document.querySelector('#sidebar');
  var popup_warning =  document.querySelector('#popup_warning');
  var popup_warning_icon =  document.querySelector('#popup_warning_icon');
  var popup_warning_text =  document.querySelector('#popup_warning_text');

  burger.addEventListener('click', function (e) {
    e.preventDefault();
    burger.classList.toggle("is-active");
    side_bar.classList.toggle('sidebar--on');
  });


})();
