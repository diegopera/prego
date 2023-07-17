const url = "https://pokeapi.co/api/v2/pokemon/itto";

async function readAPI(){
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  catch (error){
  console.log("Error: ", error)
  }
};

readAPI();