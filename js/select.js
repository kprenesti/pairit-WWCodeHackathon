$(document).ready(function(){

  var skills = 5;
  var skillsArr = [];
  var interestArr =[];
  var interests = 5;
  $(".skill").click(function(){
    console.log($(this).css("color"))
  if(skillsArr.length < skills) {
    if(!$(this).hasClass('active')){
      $(this).addClass('active');
      skillsArr.push($(this).text());
      $(this).css("color","#095d9b");
  }

  if($(this).hasClass('active')){
    var txt = $(this).text();
    for(var i=0;i<skillsArr.length;i++){
      if(skillsArr[i] === txt){
        skillsArr.splice(i,1);
      }
    }
    $(this).removeClass("active");
  }
} else {
  if($(this).hasClass('active')){
    for(var i=0;i<skillsArr.length;i++){
      if(skillsArr[i] === txt){
        skillsArr.splice(i,1);
      }
  }
}
//     }else{
//       if($(this).css("color")==="rgb(9, 93, 155)"){
//     var txt = $(this).text();
//     for(var i=0;i<skillsArr.length;i++){
//       if(skillsArr[i] === txt){
//         skillsArr.splice(i,1);
//       }
//     }
//     $(this).css("color","#343436");
//     }
//     }
// })
//   $(".interests").click(function(){
//     if(interestArr.length <interests){
//       if($(this).css("color")==="rgb(52, 52, 54)"){
//     interestArr.push($(this).text());
//     $(this).css("color","#095d9b");
//     }
//   else if($(this).css("color")==="rgb(9, 93, 155)"){
//     var txt = $(this).text();
//     for(var i=0;i<interestArr.length;i++){
//       if(interestArr[i] === txt){
//         interestArr.splice(i,1);
//       }
//     }
//     $(this).css("color","#343436");
//   }
//     }else{
//       if($(this).css("color")==="rgb(9, 93, 155)"){
//     var txt = $(this).text();
//     for(var i=0;i<interestArr.length;i++){
//       if(interestArr[i] === txt){
//         interestArr.splice(i,1);
//       }
//     }
//     $(this).css("color","#343436");
//   }
//     }
  });
});
