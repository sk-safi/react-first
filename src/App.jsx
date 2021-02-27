import React from 'react';

import Card from './Card';

import Sdata from './Sdata';


//console.log(Sdata[0]);

const App = () =>(
  <>
  
  <h1 className = "heading__style">List of Netflix Series</h1>

  {Sdata.map((val)=>{
  return(
    <Card 
        key = {val.id}
        imgsrc = {val.imgsrc}
        title = {val.title}
        catagory = {val.catagory} 
        link= {val.link}
        
        />

  )
}
)
}

</> 
 );

 export default App;
