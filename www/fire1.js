

// Setup Firebase
var config = {
   apiKey: "AIzaSyC2FllVmQgH-3yt7_SdW1N6ham_ubFYaPg",
    authDomain: "legislacaoutil.firebaseapp.com",
    databaseURL: "https://legislacaoutil.firebaseio.com"
  };
firebase.initializeApp(config)

var entrysRef = firebase.database().ref('entrys')
window.addEventListener('load', function () {
// create Vue app
var app = new Vue({
  // element to mount to
  el: '#index',
  
  
  firebase: {
    entrys: entrysRef
  },
  
  
  // methods
  methods: {
    addEntry: function () {
       alert(1);
        entrysRef.push(moment().format());
    }    
  }
})
})
