
function myFunction() {
    var x = document.getElementById("male");
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  
}
function makekey(length) {
    var result           = '';
    var characters       = 'MohabBassamAbulubbad';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

var storedItem = localStorage.getItem("storedItem");




async function getData() {
    var getname = document.getElementById("name").value;
    const label = document.getElementById('age');

    const getGender = `https://api.genderize.io?name=${getname}`;
    const getAge=`https://api.agify.io/?name=${getname}`;
    const getNational=`https://api.nationalize.io/?name=${getname}`;

    const response = await fetch(getGender);
    const response_age = await fetch(getAge);
    const response_nat = await fetch(getNational);

    const data = await response.json();
    const data_age = await response_age.json();
    const data_nat = await response_nat.json();

    console.log(data);
    console.log(data_age);
    console.log(data_nat);

    console.log(data.gender);
    label.textContent = "Age :" + data_age.age;

    const noteInput = document.getElementById("name");

    if(data.gender=='male'){
    
        document.getElementById("male").style.visibility = "visible";
        document.getElementById("MaleText").style.visibility = "visible";
        var Item = document.getElementById("name").value;
        localStorage.setItem("storedItem", Item); 
        document.getElementById("savedText").innerHTML = Item + " Saved"
        


    }else{
        document.getElementById("female").style.visibility = "visible";
        document.getElementById("FemaleText").style.visibility = "visible";
      //  localStorage.setItem(makekey(5), noteInput.value); 
      var Item = document.getElementById("name").value;
      localStorage.setItem("storedItem", Item); 
      document.getElementById("savedText").innerHTML = Item + "Saved"

    }
 
  }
  function get(){

    localStorage.getItem("storedItem");
    document.getElementById("openedText").innerHTML = storedItem + " Added";
  }



  


  function savePlan() {
    localStorage.setItem('plan', input.value);
  }

//   function loadNames(){
//     const names=JSON.parse(localStorage.getItem("names"));
//     names && namesContainer.replaceChildren([]);
//     names && names.forEach(name=>{
//         const nameElem=document.createElement("h3");
//         nameElem.textContent=name;
//         setAttribute(nameElem,{class:"SavedName",id:name});
//         nameElem.addEventListener("click",deleteName);
//         namesContainer.append(nameElem);
//     });
// }
// loadNames();



  
