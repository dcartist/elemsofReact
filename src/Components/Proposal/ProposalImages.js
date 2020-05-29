import React, { Component } from 'react';
import Image2 from './images/book4a.jpg'
import Image3 from './images/covera.png'
import Image1 from './images/girl-office.png'
import Image4 from './images/girl-working.png'



class ProposalImages extends Component {
    
    render() {
   
        return (
            <div className="Images">
               <div> <img src={Image3}/></div>
               <div> <img src={Image2}/></div>
               <div> <img src={Image1}/></div>
               <div> <img src={Image4}/></div>
            </div>
        );
    }
}

export default ProposalImages;