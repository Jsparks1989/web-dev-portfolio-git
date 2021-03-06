import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });




const myExample = {
    
        'title': "Wedding",
        'href': "https://example.com",
        'desc': "This is filler text for Wedding. I will change it later.",
        'image': {
            'desc': "Wedding website I created with Wordpress",
            'src': "images/kimmie-milo-wedding-portfolio.png"
        }
};

describe('Example Work Modal Component', () => {
    //-- modalClass set to false.
    let component = shallow(<ExampleWorkModal example={myExample} open={false}/>);
    let anchors = component.find("a");
    //-- modalClass set to true.
    let openComponent = shallow(<ExampleWorkModal example={myExample} open={true}/>);

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        //-- The anchor element in ExampleWorkModal should have a property called 'href' and it is equal to the myExample.href.
        expect(anchors.prop('href')).toEqual(myExample.href);
    });

    //-- Checking to make sure that the class for modal is set to 'modal--closed'.
    //-- 'component' props.open = false, so will return 'modal--closed'.
    it("Should have the modal class set correctly", () => {
        expect(component.find('.background--skyBlue').hasClass('modal--closed')).toBe(true);
        expect(openComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
    });
})

