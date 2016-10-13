
var player_titactoe =[];
var count =0;
var    jugadas={
    'jugador1':[],
    'jugador2':[]
};
var jugar = true;
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
    createElements:function(element,key){
      var element_li = document.createElement('li');
      element_li.setAttribute('class','tacbutom');
      element_li.setAttribute('id',key);
      element.appendChild(element_li);
      this.parent = element_li;

    },
    rulesPlay:function(){
      var jugador1 = jugadas.jugador1;
      var jugador2 = jugadas.jugador2;
      var x = 0;
      var o = 0;
      for(var key in rules)
      {
        regla = rules[key];

        for(var j in regla)
        {
          var i = regla[j];

          if(jugador1[i] === 'X'){
            x=x+1;

          }
          if(jugador2[i] === 'O'){
            o++;
          }

        }
        if(x < 3 && o<3)
        {
          x =0;
          o =0;
        }
      }

      return x>o?'X': x<o?'O':'';
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
      var position;
      var span = document.createElement('span');


      var i=0;
      while(i < 1){
        var key = Math.round(Math.random()*(8-1)+1);

          if(oponente[key] !=='X' ){
            if(maquina[key]!=='O')
            {
              position = document.getElementById(key);
              jugadas.jugador2[key]= 'O';
              span.style.color = '#FF4F00';
              span.innerHTML='O';
              span.style.position ='relative';
              span.style.float = 'right';
              span.style.marginTop ='30%';
              span.style.marginRight ='40%';
              var ganador = this.rulesPlay();

              if(ganador === ''){
                position.appendChild(span);
              }else{
                if(ganador ==='O')
                {
                    position.appendChild(span);
                }
                  user =  ganador ==='X'?this.jugador1:ganador==='O'?this.jugador2:'';
                  document.querySelector('section #ganador').innerHTML = 'Aganador: '+user +'<br>';
                  jugar=false;
              }
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

            if(jugar){

                jugadas.jugador1[position]= 'X';
                span.style.color = '#5C51E5';
                span.style.position ='relative';
                span.style.float = 'right';
                span.style.marginTop ='30%';
                span.style.marginRight ='40%';
                span.innerHTML='X';
                this.appendChild(span);
                count++;

                if(count <5){
                  self.getMachine(this);
                }else if(count === 5 && self.rulesPlay() === ''){
                  document.querySelector('section #ganador').innerHTML='Nadien gana';
                }else{
                  ganador = self.rulesPlay();

                  user =  ganador ==='X'?self.jugador1:ganador==='O'?self.jugador2:'';
                  document.querySelector('section #ganador').innerHTML = 'Aganador: '+user +'<br>';
                  jugar=false;

                }
              }
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

//reset
var reset = document.querySelector('#reset');
reset.addEventListener('click',function(){
   jugar= true;
   count =0;

   jugadas={
      'jugador1':[],
      'jugador2':[]
  };
  var reset = Tictactoe();
  var hijos = document.querySelectorAll('#tictactoe .tacbutom');

  var i =0;
  for( i;i< hijos.length;i++){
      document.querySelector('section #tictactoe').removeChild(hijos[i]);
  }
  document.querySelector('section #ganador').innerHTML ='';
  player_titactoe=[];
  reset.loadPlayer();

});




});
