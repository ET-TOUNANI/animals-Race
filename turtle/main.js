
let cnt = document.querySelector("section");
k=200;
i=1;
var intervalId = null;

intervalId =setInterval (()=>{
    if(i <= 10) {
        
        cnt.innerHTML +=`<p style='margin:100px 0px 0px ${k=k+50}px; position: absolute;'>${i}</p>
              <div>
                  <div style='height: 400px;border-left:2px solid white;margin:150px 0px 0px ${k=k+50}px;position: absolute;'>
                  </div>
              </div>`;
              i++;
   } else {
        clearInterval(intervalId);
   }
},200)

var answr =prompt("choose who is the winner 3=>ane 2=>turtle 1=>rabit : ");
var f=Math.floor(Math.random() * (1200 - 500 + 1) + 500);
var s=Math.floor(Math.random() * (1200 - 500 + 1) + 500);
var t=Math.floor(Math.random() * (1200 - 500 + 1) + 500);
setTimeout(()=>{
    cnt.innerHTML +=`<div id="first">
                    <img src="red.png" alt="">
                    </div>
                    <div id="second">
                    <img src="green.png" alt="">
                    </div>
                    <div id="third">
                    <img src="blue.png" alt="">
                    </div>`;
                    first =document.querySelector("#first");
                    second=document.querySelector("#second");
                    third=document.querySelector("#third");
                    document.addEventListener('keyup', function(){
                        first.style=`margin-left:${f}px`;
                        second.style=`margin-left:${s}px`;
                        third.style=`margin-left:${t}px`;
                    },true);

},2200)

setTimeout(()=>{
    array =[f,s,t]
    var largest = Math.max.apply(Math, array);
    if(largest ==f){
        if(answr==1){
            alert("waaaw bravo !!!! ")
        }else alert("Oooops !");
    }
    else if(largest ==s){
        if(answr ==2){

            alert("waaaw bravo !!!! ")
        }else alert("Oooops !");
    }
    else {
        if(answr==3){

            alert("waaaw bravo !!!! ")
        }else alert("Oooops !");
    }
},12000)







