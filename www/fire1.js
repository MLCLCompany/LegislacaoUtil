

// Setup Firebase
var config = {
   apiKey: "AIzaSyC2FllVmQgH-3yt7_SdW1N6ham_ubFYaPg",
    authDomain: "legislacaoutil.firebaseapp.com",
    databaseURL: "https://legislacaoutil.firebaseio.com"
  };
firebase.initializeApp(config)

var entrysIndexRef = firebase.database().ref('entrys/index');
var entrysTransportesRef = firebase.database().ref('entrys/transportes');
var entrysLojasRef = firebase.database().ref('entrys/lojas');
var entrysAnimaisRef = firebase.database().ref('entrys/animais');
var entrysAcessibilidadeRef = firebase.database().ref('entrys/acessibilidade');
var entrysComunicacoesRef = firebase.database().ref('entrys/comunicacoes');
var entrysTodosRef = firebase.database().ref('entrys/todos');

window.addEventListener('load', function () {
// create Vue app
var app = new Vue({
  // element to mount to
  el: 'div',
  
  
  
  firebase: {
    entrysIndex: entrysIndexRef
  },
  
  
  // methods
  methods: {
    addEntryIndex: function () {
        entrysIndexRef.push(moment().format());
    },    
    addEntryTransportes: function () {
        entrysTransportesRef.push(moment().format());
    }   ,    
    addEntryLojas: function () {
        entrysLojasRef.push(moment().format());
    }   ,    
    addEntryAnimais: function () {
        entrysAnimaisRef.push(moment().format());
    }   ,    
    addEntryAcessibilidade: function () {
        entrysAcessibilidadeRef.push(moment().format());
    }   ,    
    addEntryComunicacoes: function () {
        entrysComunicacoesRef.push(moment().format());
    }   ,    
    addEntryTodos: function () {
        entrysTodosRef.push(moment().format());
    }   
  }
})
})
