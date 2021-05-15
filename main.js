var storybook = [];
var name1 = [];
function submit(){  
for (var j = 0;j < 4; j++){
var pistolgun = document.getElementById("name_of_the_student_"+j).value;
console.log(pistolgun);
storybook.push(pistolgun);     
}
console.log(storybook);
var pencil = storybook.length;
console.log(pencil);
for(var textbook = 0;textbook<pencil;textbook++){
name1.push("<h4>name="+storybook[textbook]+"</h4>");
console.log(name1);    
}
document.getElementById("display_name_with_commas").innerHTML= name1;
var calendar = name1.join("");
console.log(calendar);
document.getElementById("display_name_without_commas").innerHTML=calendar;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
storybook.sort();
console.log(storybook);
var waterbottle = [];
var x = storybook.length;
console.log(x);
for (var box = 0;box<x;box++){
waterbottle.push("<h4>name="+storybook[box]+"</h4>");
console.log(waterbottle);
}
var cup = waterbottle.join("");
console.log(cup);
document.getElementById("display_name_without_commas").innerHTML=cup;     
}
var GuestName = document.getElementById("name1").value;
name_of_people.push(GuestName);
name_of_people.sort();
function searching()
{
var s = document.getElementById("s1").value;
var found=0;
var j;
for(j=0; j<name_of_people.length; j++)
{
if(s==name_of_people[j]){
found=found+1;   
}    
}
document.getElementById("p2").innerHTML= "name found" + found + "time/s";
console.log("found name" + found + "time/s");    
}