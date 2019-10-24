import React from 'react';
import { shallow }from 'enzyme';
import ExampleWork from '../js/example-work';


// Borrowing a subset of myWork data for testing.
const myWork = [
    {
        'title': "Wedding",
        'image': {
            'desc': "Wedding website I created with Wordpress",
            'src': "images/kimmie-milo-wedding-portfolio.png"
        }
    },
    {
        'title': "Buy AC",
        'image': {
            'desc': "Ecommerce site I created for an HVAC company",
            'src': "images/buy_ac_thumb_portfolio.png"
        }
    }
];



describe('ExampleWork Component', () => {
    //-- shallow imported from enzyme. Taking JSX tag as parameter.
    let component = shallow(<ExampleWork work={myWork}/>);

    it("Should be a 'section' element", () => {
        
    });
});