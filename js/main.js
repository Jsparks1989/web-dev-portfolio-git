import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

//-- Data structure for each work example: img description, img src file, and the title of the work example.
//-- This is the data that changes for each work example.
//-- Will be a list of object literals
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
    },{
        'title': "Ecommerce",
        'image': {
            'desc': "Mock ecommerce site I created",
            'src': "images/needs-n-likes-portfolio.png"
        }
    }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));





















