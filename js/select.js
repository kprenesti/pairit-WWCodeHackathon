$(document).ready(function(){
  var skills = 5;
  var skillsArr = [];
  $("#skill-select").text(skills);
  $("#professional_skills").change(function(){
    skillsArr= $(this).val();
    if(skillsArr.length === skills){
    alert("You've selected your maximum!")
  }else if(skillsArr.length >skills){
    $("#skill-select").text(skillsArr.length-skills).css("color","red");

  }else{
    $("#skill-select").text(skills-skillsArr.length).css("color", "black");
    }
  });
});
