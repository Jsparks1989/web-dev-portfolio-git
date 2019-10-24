import React from 'react';
import { shallow }from 'enzyme';
import ExampleWork from '../js/example-work';

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


describe('ExampleWork Component', () => {
    //-- shallow imported from enzyme. Taking JSX tag as parameter.
    let component = shallow(<ExampleWork work={myWork}/>);

    it("Should be a 'section' element", () => {
        expect(component.type()).toEqual('section');
    });

    //-- find() will find children(ExampleWorkBubble) of a component(ExampleWork); returns an array.
    //-- expecting the length of the component.find() array to be equal to the myWork array.
    it("Should contain as many children as there are work examples", () => {
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length)
    });
});