import React, { Component } from 'react';
import Name from '../Names/Programlisting'
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div>
                 
        <header className="App-header-alt">
{/*      
         <p>The elements of ...</p> */}
         {/* <Name ></Name>  */}
         {/* <h2>The elements of Programming Language</h2>
         <hr width="40%"></hr> */}
       <Name></Name>
  
        </header>
              
            </div>
        );
    }
}

export default Home;