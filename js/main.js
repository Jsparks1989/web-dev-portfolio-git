import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

//-- Data structure for each work example: img description, img src file, and the title of the work example.
//-- This is the data that changes for each work example.
//-- Will be a list of object literals
const myWork = [
    {
        'title': "Wedding",
        'href': "http://52.203.64.139",
        'desc': "Wedding website created in Wordpress. Site is hosted in AWS on an EC2 instance.",
        'image': {
            'desc': "Wedding website I created with Wordpress",
            'src': "images/kimmie-milo-wedding-portfolio.png"
        }
    },
    {
        'title': "Buy AC",
        'href': "http://www.buyac.com/",
        'desc': "HVAC website created in Wordpress. The website's purpose is to deliver product information to customers.",
        'image': {
            'desc': "Ecommerce site I created for an HVAC company",
            'src': "images/buy_ac_thumb_portfolio.png"
        }
    }
    // {
    //     'title': "Ecommerce",
    //     'href': "52.203.64.139",
    //     'desc': "This is filler text for Ecommerce. I will change it later.",
    //     'image': {
    //         'desc': "Mock ecommerce site I created",
    //         'src': "images/needs-n-likes-portfolio.png"
    //     }
    // }
    ,{
        'title': "NHCEF",
        'href': "http://nhcef.org/",
        'desc': "North Hall Community Education Foundation website.",
        'image': {
            'desc': "North Hall Community Education Foundation image description",
            'src': "images/nhcef_logo.png"
        }
    },{
        'title': "PHP Blog",
        'href': "http://justin-cms.com",
        'desc': "Blog website created using PHP running on a LAMP Stack. The website is hosted in AWS on an EC2 instance. Pages are dynamically filled with data from a MySQL database. The website allows users to create/edit/delete their own posts and allows for the Admin to determine which posts can be displayed.",
        'image': {
            'desc': "Image of Justin PHP blog site",
            'src': "images/php_cms_image.png"
        }
        
    },{
        
        'title': "Consultants-Lab",
        'href': "https://consultants-lab.com/",
        'desc': "Website for Consultants-Lab, created with Wordpress. The website's purpose is to deliver product information to customers.",
        'image': {
            'desc': "Image of Consultants-Lab image",
            'src': "images/medical_source_thumb.png"
        }

    }
]

//-- Goes in index.html div#id example-work; work is a props
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));





















