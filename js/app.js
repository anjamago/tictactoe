
var player_titactoe =[];

var    jugadas={
    'jugador1':[],
    'jugador2':[]
};
var rules = [
  //horizontales
            [0,3,6],
            [1,4,7],
            [2,5,8],
  //verticales
            [0,1,2],
            [3,4,5],
            [6,7,8],
  //trasversales
            [0,4,8],
            [2,4,6]
         ];
var Tictactoe = function(){
  return {
    //attibutos
     jugador1:null,
     jugador2:"maquina",
     parent:null,
    //metodos
    createElements:function(element){
      var element_li = document.createElement('li');
      element_li.setAttribute('class','tacbutom');
      element.appendChild(element_li);
      this.parent = element_li;

    },
    loadPlayer:function(){
      var name_user  = document.querySelector('#name_user');

      if(this.jugador1 === null){
        if(name_user.value !== ""){
            this.jugador1= name_user.value;
            this.loadSetting(this);

        }
      }
    },
    getMachine:function(){

      var oponente = jugadas.jugador1;
      var maquina = jugadas.jugador2;
      var span = document.createElement('span');


      var i=0;
      while(i < 1){
        var key = Math.round(Math.random()*(8-1)+1);
        console.log(key);
          if(oponente[key] !=='X' ){
            if(maquina[key]!=='O')
            {
              jugadas.jugador2[key]= 'O';
              span.style.color = '#FF4F00';
              span.innerHTML='O';
              html=player_titactoe[key].parent;
              html.appendChild(span);
              //.appendChild(span);
              return ;


            }
          }

      }
    i=false;


    },
    getPlay:function(key,constuct){
      var position =key;
      var self =constuct;
      var span = document.createElement('span');
      this.parent.addEventListener('click',function(){

          console.log(self.jugador1);
          jugadas.jugador1[position]= 'X';
          span.style.color = '#5C51E5';
          span.innerHTML='X';

            self.getMachine(this);



        this.appendChild(span);



      });

    },
    loadSetting:function(constuct){

      var i=0;
      while(i++ < 9){
        player_titactoe.push(constuct);
      }

      var id_tictactoe = document.querySelector('section #tictactoe');

      for(var key in player_titactoe){
          player_titactoe[key].createElements(id_tictactoe,key);
          player_titactoe[key].getPlay(key,constuct);

      }

    },
  };
};
//eventos
document.addEventListener('DOMContentLoaded',function(event){

  var player = document.querySelector('#load_player');
player.addEventListener('click',function(){
  var user_name = Tictactoe();
  user_name.loadPlayer();
});



});
