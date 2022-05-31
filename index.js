var a = prompt('Vui lòng nhập a:');
var b = prompt('Vui lòng nhập b:');
var na=Number(a);
var nb=Number(b);
var max;
var min;
if(na>nb){max=na;min=nb;}else{max=nb;min=na}
for(var i=min;i<=max;i++)
{
    var flag=true;
  for(var j=2;j<i;j++)
    {
        if(i%j==0){
            flag=false;
            break;
        }
    } 
    if(flag==true){console.log(i);} 
}
function tamgiac(thamso)
{
    var dausao="";
for(var i=0;i<thamso;i++){
    dausao=dausao+"*";
    console.log(dausao);
}    
}
var so=prompt('vui lòng nhập số trong khoảng 1-10:');
if (so>10){alert("Nhập sai");}else {tamgiac(so);}
