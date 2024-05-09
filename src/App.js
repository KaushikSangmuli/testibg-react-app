
function handleClick(){
  console.log(" testing is clicked")
  const h1= document.querySelector(".test-heading")
  h1.classList.toggle("hidden")
  
}

function App() {
  return (
    
    <div> 
      
      <h2 > visit <a href="https://www.google.com/"> google</a></h2>
      <h2 > visit <span onClick={handleClick} > testing</span></h2>
    </div>
    
  );
}

export default App;
