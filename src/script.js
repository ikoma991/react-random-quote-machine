// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
const {useState,useEffect} = React;

const App = () => {
  const [quotes,setQuotes] = useState([
    {
      quote:'To live is the rarest thing in the world. Most people exist, that is all.', 
      author:'Oscar Wilde'
    },
    {
      quote:'That it will never come again is what makes life so sweet', 
      author:'Emily Dickinson'
    },
    {
      quote:'It is never too late to be what you might have been.',
      author:'George Eliot'
    },
    {
      quote:'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
      author:'Ralph Waldo Emerson'
    },
    {
      quote:'Pain is inevitable. Suffering is optional.',
      author:'Haruki Murakami'
    }
  ]);
  
  const [colors,setColors] = useState(["#D500F9","#7C4DFF","#FF9100","#FFEA00","#B2FF59","#1DE9B6","#C6FF00"]);
  
  const [currentState,setcurrentState] = useState({});
  
  useEffect(
    ()=> {
      changeQuoteAndColor();
    }
  ,[]);
  
  const changeQuoteAndColor = () => {
      const quoteIndex = Math.floor(Math.random() * ((quotes.length-1) - 0 + 1) + 0);
      const colorIndex = Math.floor(Math.random() * ((colors.length-1) - 0 + 1) + 0);
      setcurrentState({
        ...currentState,
        quote:quotes[quoteIndex].quote,
        author:quotes[quoteIndex].author,
        color:colors[colorIndex]
      });
  }
  const dynamicStyle ={
    backgroundColor:currentState.color,
    transition:"all .3s"
                      };
  return (
  <div id="parent" style={dynamicStyle}>
      <div id="quote-box">
        <p id="text">{currentState.quote||"Quote"}</p>
        <p id="author">{currentState.author||"Author"}</p>
        <div id="action-wrapper">
          <a href="twitter.com/intent/tweet" id="tweet-quote" style={dynamicStyle}><i class="fa-brands fa-twitter"></i></a>
          <button style={dynamicStyle} id="new-quote" onClick={changeQuoteAndColor}>New Quote</button>
        </div>
      </div>
  </div>
  )
}

ReactDOM.render(<App/>,document.getElementById("root"));