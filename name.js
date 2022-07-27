// async function fetchText() {
//     let response = await fetch('https://api.genderize.io?name=joseph');
//     let data = await response.text();
//     console.log(data);
// }



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
async function getData() {
    var getname = document.getElementById("name").value;
    const url = `https://api.genderize.io?name=${getname}`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
    console.log(data.gender);
    const noteInput = document.getElementById("name");

    if(data.gender=='male'){
    
        document.getElementById("male").style.visibility = "visible";
        document.getElementById("MaleText").style.visibility = "visible";

        localStorage.setItem(makekey(5), noteInput.value); 
        document.getElementById("test").innerHTML = localStorage.getItem(key);


    }else{
        document.getElementById("female").style.visibility = "visible";
        document.getElementById("FemaleText").style.visibility = "visible";
        localStorage.setItem(makekey(5), noteInput.value); 

    }


  }


  function savePlan() {
    localStorage.setItem('plan', input.value);
  }

