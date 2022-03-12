let word=document.getElementById("word")
let meaning=document.getElementById("meaning")
let example=document.getElementById("example")
let btn=document.getElementById("button")
let input=document.getElementById("input")
let xhr= new XMLHttpRequest


btn.addEventListener('click',()=>{
word.innerHTML=""
meaning.innerHTML=""
example.innerHTML=""

xhr.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)


    xhr.onload=function(){
    let result= JSON.parse(xhr.responseText);

//    console.log(result);

//    console.log(result[0].word)
   word.innerHTML=result[0].word;

//    console.log(result[0].meanings[0].definitions[0].definition)
try{
     meaning.innerHTML=result[0].meanings[0].definitions[0].definition
   meaning.innerHTML +=`<br>${result[0].meanings[1].definitions[0].definition }`
}
catch(err)
{

}

  

   try{
      
    let str=result[0].meanings[0].definitions[0].example + result[0].meanings[1].definitions[0].example +result[0].meanings[2].definitions[0].example
  
str=str.replace("NaN","") 
console.log(str.length)

if(str.length=="")
{
    example.innerHTML=`Sorry We dont have example for  ${word.innerText}`
}
else
example.innerHTML=str
}
catch(err){
 example.innerHTML=`Sorry We dont have example for  ${word.innerText}`
}







   
}
xhr.send();
})

