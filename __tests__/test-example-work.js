import React from 'react';
import { shallow }from 'enzyme';
import ExampleWork from '../js/example-work';


/**
 * ERROR occured when running test.... Error description below:
 *
 * Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none. 
 * To configure an adapter, you should call 'Enzyme.configure({ adapter: new Adapter() })'
 * before using any of Enzyme's top level APIs, where 'Adapter' is the adapter
 * corresponding to the library currently being tested. For example:
 * import Adapter from 'enzyme-adapter-react-15';
 * 
 * To find out more about this, see http://airbnb.io/enzyme/docs/installation/index.html
 */

// This fixed the error:
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


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

/*
 * shallow() will only render one layer of components,
 * not the components inside the one you are testing.
 * This is good bc you want to test each component  
 *  independently of each other.
 * 
 * 
 */

describe('ExampleWork Component', () => {
    //-- shallow imported from enzyme. Taking JSX tag as parameter.
    let component = shallow(<ExampleWork work={myWork}/>);

    it("Should be a 'section' element", () => {
        console.log(component.debug());
    });
});