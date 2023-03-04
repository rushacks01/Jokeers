const btnEl = document.getElementById("btn")

const jokeEl = document.getElementById("joke")

const apiKey = "Tazdtgq6f9DyzJgImiG2gw==Wwx8Df14UR7vxr8q";
const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit="
async function getJoke(){
    try {
        jokeEl.innerText = "Updating...";
  
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
      
        const response = await fetch(apiURL,options);
       const data = await response.json();
    
       btnEl.disabled = false;
       btnEl.innerText = "Tell Me a Joke";
    
       jokeEl.innerText = data[0].joke;
    
    } catch (error) {
        jokeEl.innerText = "An error happened try again..!";
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Joke"; 
    }
   
}
btnEl.addEventListener("click",getJoke)