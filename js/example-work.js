import React from 'react';

class ExampleWork extends React.Component{
    render(){
        return(
            // 'class' is a reserved word in js, must use 'className' in React
            <section className="section section--alignCentered section--description">
                {/* Look into this line of code a little more to understand it. */}
                {/* 'this.props.work.map' is mapping out 'const myWork' list from main.js */}
                
                {/* Breaking down 'work'(myWork) array down to each individual object(example, idx). */}
                {this.props.work.map( (example, idx) => {
                    console.log('example: ' + example);
                    //-- 'example' is a props
                    //-- comment cant go in return()
                    return(
                        <ExampleWorkBubble example={example} key={idx}  />
                    )
                })}
            </section>
        )
    }
}


class ExampleWorkBubble extends React.Component{
    render(){
        {/* Assigning 'example' that was passed to ExampleWorkBubble from ExampleWork to let example. */}
        let example = this.props.example;

        return (
            <div className="section__exampleWrapper">
                <div className="section__example">
                <img alt={ example.image.desc }
                    className="section__exampleImage"
                    src={ example.image.src }/>
                <dl className="color--cloud">
                    {/* This is how you do a comment in JSX */}
                    <dt className="section__exampleTitle section__text--centered">
                    { example.title }
                    </dt>
                    <dd></dd>
                </dl>
                </div>
            </div>
        )
    }
}


//-- Exporting ExampleWork to be imported in main.js
export default ExampleWork;