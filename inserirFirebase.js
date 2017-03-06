// Initialize Firebase
  var config = {
     apiKey: "AIzaSyC2FllVmQgH-3yt7_SdW1N6ham_ubFYaPg",
    authDomain: "legislacaoutil.firebaseapp.com",
    databaseURL: "https://legislacaoutil.firebaseio.com",
    storageBucket: "legislacaoutil.appspot.com",
    messagingSenderId: "546399102928"
  };
  firebase.initializeApp(config);


function saveToList() {
   var dl = document.getElementById('dl').value.trim();
   var descricao = document.getElementById('descricao').value.trim();
   var titulo = document.getElementById('titulo').value.trim();
   saveToFB(titulo, dl, descricao);
   document.getElementById('dl').value = '';
   document.getElementById('descricao').value = '';
   document.getElementById('titulo').value = '';
   return false;
};
 
function saveToFB(titulo, dl, descricao) {
    // this will save data to Firebase
    firebase.database().ref('dls/').push({
        dl: dl,
        titulo: titulo,
        descricao: descricao
    });
};


function apagas(key){
	firebase.database().ref('dls/').child(key).remove();
};

function refreshUI(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++) {
        lis+='<br><br><span id="'+ list[i].key +'">';
        lis+=list[i].titulo + ' | ' + list[i].dl + ' | ' + list[i].descricao + ' <a href="" onclick="apagas(\''+list[i].key+'\');">DELETE</a></span>';
    };    
    document.getElementById('list').innerHTML = lis;
};
 
firebase.database().ref('dls/').on("value", function(snapshot) {
    var data = snapshot.val();
    var list = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            titulo = data[key].titulo ? data[key].titulo : '';
            dl = data[key].dl ? data[key].dl : '';
            descricao = data[key].descricao ? data[key].descricao : '';
            if ((titulo.trim().length > 0) /*&& day==descricao*/) {
                list.push({
                    titulo: titulo,	
      				  dl: dl,
       				  descricao: descricao,			
                    key: key
                })
            }
        }
    }
    // refresh the UI
    refreshUI(list);
});