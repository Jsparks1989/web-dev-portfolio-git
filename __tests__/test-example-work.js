import React from 'react';
import { shallow }from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

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

//-- ExampleWork Component
describe('ExampleWork Component', () => {
    //-- shallow imported from enzyme. Taking JSX tag as parameter.
    let component = shallow(<ExampleWork work={myWork}/>);

    it("Should be a 'span' element", () => {
        expect(component.type()).toEqual('span');
    });

    it("Should contain as many children as there are work examples", () => {
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length)
    });

    it("Should allow the modal to open and close", () => {
        component.instance().openModal();
        expect(component.instance().state.modalOpen).toBe(true);
        component.instance().closeModal();
        expect(component.instance().state.modalOpen).toBe(false);
    });
});






//-- ExampleWorkBubble Component
describe('ExampleWorkBubble Component', () => {
    let mockOpenModalFn = jest.fn();
    let component = shallow(<ExampleWorkBubble example={myWork[1]} openModal={mockOpenModalFn} />);
    let images = component.find("img");

    it("Should be a 'div' element", () => {
        expect(component.type()).toEqual('div');
    });

    it('Should contain a single image element', () => {
        expect(images.length).toEqual(1);
    });


    //-- Throwing error in Jest
    it("Should call the openModal handler when clicked", () => {
        //-- simulate a click on the onclick.
        component.find(".section_exampleWrapper").simulate('click');
        //-- Expecting the simulated click to call mockOpenModalFn.
        expect(mockOpenModalFn).toHaveBeenCalled();
    });
});