window.onload = function () {

// Setup Firebase
var config = {
   apiKey: "AIzaSyC2FllVmQgH-3yt7_SdW1N6ham_ubFYaPg",
    authDomain: "legislacaoutil.firebaseapp.com",
    databaseURL: "https://legislacaoutil.firebaseio.com"
  };

firebase.initializeApp(config)

var dlsRef = firebase.database().ref('dls')

// create Vue app
var app = new Vue({
  // element to mount to
  el: '#list',
  firebase: {
    dls: dlsRef
  },
  
  methods: {
  theIdValue: function (id) {
    var value = ['d' + id]
    return value
  }
}
})

document.getElementById("imgBack").style.height = document.getElementById("topBar").clientHeight-8 + 'px';
		document.getElementById("imgBack").style.width = document.getElementById("imgBack").clientWidth + 'px';
}