	function init() {
		document.addEventListener("deviceready", onDeviceReady, true);
	}


  var config = {
     apiKey: "AIzaSyC2FllVmQgH-3yt7_SdW1N6ham_ubFYaPg",
    authDomain: "legislacaoutil.firebaseapp.com",
    databaseURL: "https://legislacaoutil.firebaseio.com",
    storageBucket: "legislacaoutil.appspot.com",
    messagingSenderId: "546399102928"
  };firebase.initializeApp(config);	


function refreshUI(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++) {
        lis+='<div class="direito" id="d' + list[i].key + '" onclick="$(\'#' + list[i].key + '\').toggle(500);">';
		lis+=list[i].titulo;
        lis+='<div class="direitoDescricao" id="' + list[i].key + '" style="display: none">';
        lis+=list[i].descricao;
        lis+='</div></div>';
	};    
    document.getElementById('list').innerHTML = lis;
};
 
firebase.database().ref('dls/').on("value", function(snapshot) {
    var data = snapshot.val();
    var list = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            categoria = data[key].categoria ? data[key].categoria : '';
            titulo = data[key].titulo ? data[key].titulo : '';
            dl = data[key].dl ? data[key].dl : '';
            descricao = data[key].descricao ? data[key].descricao : '';
			categoriaDaPagina=document.getElementById('categoria').innerHTML;
            if (((titulo.trim().length > 0) && categoria==categoriaDaPagina) || (titulo.trim().length > 0) && categoriaDaPagina=="Todos") {
                list.push({
					categoria: categoria,
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