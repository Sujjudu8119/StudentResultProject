function calculate(){

let s1=parseInt(document.getElementById("sub1").value);

let s2=parseInt(document.getElementById("sub2").value);

let s3=parseInt(document.getElementById("sub3").value);

let total=s1+s2+s3;

let avg=total/3;

let grade="";

if(avg>=90){
grade="A";
}
else if(avg>=75){
grade="B";
}
else if(avg>=60){
grade="C";
}
else{
grade="Fail";
}

document.getElementById("result").innerHTML=
"Total = "+total+"<br>Average = "+avg.toFixed(2)+"<br>Grade = "+grade;

}