(function () {
  var burger = document.querySelector('#hamburger');
  var side_bar = document.querySelector('#sidebar');
  var popup_warning = document.querySelector('#popup_warning');
  var popup_warning_icon_close = document.querySelector('#popup_warning_icon_close');
  var help_page = document.querySelector('#help');
  var help_btn = document.querySelectorAll('.help__btn');
  var help_list = document.querySelectorAll('.help__list');
  var clsBtn = 'help__btn--active';
  var clsList = 'help__list--active';


  burger.addEventListener('click', function (e) {
    e.preventDefault();
    burger.classList.toggle("is-active");
    side_bar.classList.toggle('sidebar--on');
  });
  popup_warning_icon_close.addEventListener('click', function (e) {
    e.preventDefault();
    popup_warning.classList.add('popup-warning--off');
  });


    function cleanList(arr, arrClass) {
      for (var i = 0; i < arr.length; i++) {
        arr[i].classList.remove(arrClass);
      }
    }

    function resizeList(btn, list, classBtn, classList) {
      if (window.innerWidth >= 992) {
        cleanList(btn, classBtn);
        cleanList(list, classList);
        btn[0].classList.add(classBtn);
        list[0].classList.add(classList);
      } else {
        cleanList(btn, classBtn);
        cleanList(list, classList);
      }
    }

    function listListiner(elem, elem2, i) {

    if (window.innerWidth < 992) {
      elem.addEventListener('touch', function (e) {
        e.preventDefault();
        elem.classList.toggle(clsBtn);
        elem2[i].classList.toggle(clsList);
      });
    }else{
      elem.addEventListener('click', function (e) {
        e.preventDefault();
        cleanList(help_btn, clsBtn);
        cleanList(help_list, clsList);
        elem.classList.add(clsBtn);
        elem2[i].classList.add(clsList);
      }
}

}

function editlist(btn, list, classBtn, classList) {
  resizeList(help_btn, help_list, classBtn, classList);
  for (var j = 0; j < btn.length; j++) {
    listListiner(btn[j], list, j);
  }
}

editlist(help_btn, help_list, clsBtn, clsList);

window.addEventListener('resize', function () {
  resizeList(help_btn, help_list, clsBtn, clsList);
});

})
();

