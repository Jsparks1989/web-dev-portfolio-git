import React from 'react';
import ExampleWorkModal from './example-work-modal';

class ExampleWork extends React.Component{
    
    constructor(props){
        super(props);
        //-- Now need to add event handlers, click events, to dynamically change modalOpen and selectedExample when user clicks on work images.
        //-- Need two functions: 1st function to open modal window, 2nd to close window.
        this.state = {
            'modalOpen': false,
            'selectedExample': this.props.work[0] 
        };

        //-- Giving the openModal/closeModal functions access to the object
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    //-- Passing the event (evt), and the example clicked on (example).
    //-- When an event is invoked, it will be passed an event object as 
    //-- it's first argument. You can name evt whatever you like. Common names are e evt and event.
    openModal(evt, example){
        //-- setState() primary method you use to update the user interface in response to event handlers and server responses.
        this.setState({
            'modalOpen': true,
            'selectedExample': example
        })
    }

    closeModal(evt){
        this.setState({
            'modalOpen': false
        })
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
                {/* Can now pass state data from constructor to ExampleWorkModal */}
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