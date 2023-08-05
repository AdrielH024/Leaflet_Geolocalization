var isopen = false;
let pop = document.getElementById("cad");
let forme = '<div><button onclick="opened()">close</button></br><label>nome</label></br><input type="text" id="name"></br><label>descrição</label></br><input type="text" id="desc"></br><button onclick="cad()">submite</button></br></div>';


//open and close the pop-up
function opened(){
    isopen = !isopen;
    if(isopen == true){
        pop.innerHTML +=forme;
    }else{
        pop.innerHTML ="";
    }
}


//send to api
async function cad(){
   const name = document.getElementById("name").value;
   const authorname = document.getElementById("desc").value;

    const data = {
        name: name,
        authorname: authorname,
        logi: x,
        lati: y
    };

    console.log(JSON.stringify(data));
    try{
        fetch("/api",{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
        body: JSON.stringify(data)
        }).then(res=>{console.log(res.status)})
    }catch(err){
        console.log(err);
    
  }
}
