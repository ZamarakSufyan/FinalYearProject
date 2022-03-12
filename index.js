let arr=[];
function addtofunction(path){
if(!arr.includes(path)){
    const newimg =`<img src="${path}" style="margin:15px;" name="${path}" width="300" height="300" onclick="removepic(this)">`
    arr.push(path);
    document.getElementById("lower-container").innerHTML=document.getElementById("lower-container").innerHTML + newimg;
}
 




   
    
   

    }
 function removepic(a){
     debugger
     a.remove();
     const index = arr.indexOf(a.name); 
     arr.splice(index,1);
    
    }
 
  