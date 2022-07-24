// async function fetchText() {
//     let response = await fetch('https://api.genderize.io?name=joseph');
//     let data = await response.text();
//     console.log(data);
// }

async function getData() {
    var bruh = document.getElementById("name").value;
    const url = `https://api.genderize.io?name=${bruh}`;
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
    console.log(data.gender);

    if(data.gender=='male'){
        document.write('<img src="male.jpg" alt="Male"/>').style.height='200px';
    }else{
        document.write('<img src="female.jpg" alt="Female"/>');
    }
  }




