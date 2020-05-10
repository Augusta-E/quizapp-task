var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');

   var quizApp={
     questions:[
   {q:'Which Country did the Corona Virus pandemic break out from?',
   options:['United State of America (USA)','Italy', 'China', 'Nigeria'],
   answer:3},

   {q:'Which of this is not a symptom of Corona Virus?',
   options:['High fever','Cough', 'Sore throat', 'Non of the above'],
   answer:4},
   
   {q:'Who is more at risk of developing severe symptoms of Corona Virus?',
   options:['Those with underlying health issues','Elderly people', 'none of the above', 'l & ll'],
   answer:4},
   
   {q:'Which of these is not a way to prevent Corona Virus?',
   options:['Avoid the use of nose mask','Observing social distance', 'Wash your hands often', 'Stay at home'],
   answer:1},
   
   {q:'What is the full meaning of NCDC?',
   options:['National Central for Disease Control','Nigeria Center for Disease Control', 
   'Nigeria Center for Drug Control', 'National Center for Drug Control'],
   answer:2}  
],
index:0,
load:function(){
   if(this.index<=this.questions.length-1){
   quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
   op1.innerHTML=this.questions[this.index].options[0];
   op2.innerHTML=this.questions[this.index].options[1];
   op3.innerHTML=this.questions[this.index].options[2];
   op4.innerHTML=this.questions[this.index].options[3];
   scoreCard.innerHTML=this.score+"/"+this.questions.length;
   }
   else{
      
   quizBox.innerHTML="Quiz over ..."
   op1.style.display="none";
   op2.style.display="none";
   op3.style.display="none";
   op4.style.display="none";
   btn.style.display="none";
  }
},
   next:function(){
      this.index++;
      this.load();

   },
   check:function(net){
      var id = net.id.split('');
      if (id[id.length-1]==this.questions[this.index].answer){
      this.score++;
      net.className="correct";
      net.innerHTML="Correct";
      this.scoreCard();
      }
     else{

         net.className="wrong";
         net.innerHTML="Wrong";
      }
   },
      notClickAble:function(){
         for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";

      }
   },

   clickAble:function(){
   for(let i=0; i<ul.children.length; i++){
      ul.children[i].style.pointerEvents="auto";
      ul.children[i].className="";

}
},
   score:0,
   scoreCard:function(){
      scoreCard.innerHTML=this.questions.length+"/"+this.score;
   
   }

   }
window.onload=quizApp.load();
function button(net){
   quizApp.check(net);
   quizApp.notClickAble();
}
function next(){
   quizApp.next();
   quizApp.clickAble();

}
