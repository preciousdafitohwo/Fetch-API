// async function getMyStuffFromOverThere() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log("HTTP Response:", response);
//     const json = await response.json();
//     console.log("JSON Data:", json);
//   }
  
//   getMyStuffFromOverThere();

  async function fetchGit() {
    const response = await fetch("https://api.github.com/repos/preciousdafitohwo/conditionals");
    const data = await response.json();
    const wrangledData = data.stargazers_count;
    return wrangledData;

  }
async function add(){
    const update = await fetchGit();
    displayStargazerCount(update);
}

  function displayStargazerCount(wrangledData){
    const button = document.getElementById("fetch-btn");
    button.textContent = wrangledData;

  }
  add();
  

