import React from 'react';

class ExampleWork extends React.Component{
    render(){
        return(
            <section className="section section--alignCentered section--description">
                {/* Look into this line of code a little more to understand it. */}
                {this.props.work.map( (example, idx) => {
                    return(
                        <ExampleWorkBubble example={example} key={idx}/>
                    )
                })}
                

                
            </section>
        )
    }
}


class ExampleWorkBubble extends React.Component{
    render(){
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


//-- Exporting ExampleWork so it can be imported in main.js
export default ExampleWork;