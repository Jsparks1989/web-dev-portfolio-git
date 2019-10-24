import React from 'react';

/**
 * 
 *  map() does the same thing as foreach loop.
 *  But map() will return a new array, when foreach
 *  will only alter the original array.
 *  Must have return inside param function, that is what is added to the new
 *  mapped array (newNamesArray).
 *  takes in each 'item' in the array, the 'index' of each item, and the entire 'array' as params.
 * 
 *  Example of map():
 *  let names = [justin, matt, jared];
 * 
 *  let newNamesArray = names.map(function(item, index, array){
 *      return something;    
 *  });
 */




class ExampleWork extends React.Component{
    render(){
        return(
            <section className="section section--alignCentered section--description">

                {this.props.work.map( (example, idx) => {
                    console.log('example: '); 
                    console.log(example);
                    console.log('idx: '); 
                    console.log(idx);
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