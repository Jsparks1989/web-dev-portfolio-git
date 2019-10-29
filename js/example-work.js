import React from 'react';
import ExampleWorkModal from './example-work-modal';


class ExampleWork extends React.Component{
    constructor(props){
        super(props);

        // Value of state is always an object
        this.state = {
            'modalOpen': false,
            'selectedExample': this.props.work[0]
        }
    }
    render(){
        return(
            // Need to wrap both JSX elements in span tag so test will pass
            <span>
                <section className="section section--alignCentered section--description">

                    {this.props.work.map( (example, idx) => {
                        return(
                            <ExampleWorkBubble example={example} key={idx}  />
                        )
                    })}
                </section>

                <ExampleWorkModal example={this.state.selectedExample} open={this.state.modalOpen}/>
            </span>
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



export default ExampleWork;
export { ExampleWorkBubble };