var delPre = setTimeout(function deletePreloader() {
  var pre = document.getElementById('body');
  var del = document.getElementById('preloader');
  pre.removeChild(del);
}, 5000);

export { delPre };
