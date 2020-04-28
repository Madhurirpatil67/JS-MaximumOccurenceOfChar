var str="baadcab";
var strCount={};
var maxChar='';

for(var i=0;i<str.length;i++){
    var key=str[i];
    if(!strCount[key]){
        strCount[key]=0;
    }
    strCount[key]++;
    if(maxChar==''||strCount[key]>strCount[maxChar])
    {
        maxChar=key;
    }
}
console.log("Character Repeated :"+maxChar+"\n"+" Maximum Occurence :"+strCount[maxChar]);