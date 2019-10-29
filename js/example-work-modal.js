import React from 'react';


class ExampleWorkModal extends React.Component {
    render() {
      let example = this.props.example;
      let modalClass = this.props.open ? 'modal--open' : 'modal--closed';
        return(
            <div className={"background--skyBlue " + modalClass}>
              <span className="color--cloud modal__closeButton">
                <i className="fa fa-window-close-o"></i>
              </span>
              <img alt= { example.image.desc }
                  className="modal__image"
                  src="images/example1.png"/>
              <div className="color--cloud modal__text">
                <h2 className="modal__title">
                  { example.title }
                </h2>
                <a className="color--skyBlue modal__link"
                  href={ example.href }>
                  Check it out
                </a>
                <p className="modal__description">
                  { example.desc }
                </p>
              </div>
            </div>
        )
    };
};




export default ExampleWorkModal;



{/* 
  ====ORIGINAL HTML====
<div className="background--skyBlue modal--closed">
  <span className="color--cloud modal__closeButton">
    <i className="fa fa-window-close-o"></i>
  </span>
  <img alt="example screenshot of a project involving code"
      className="modal__image"
      src="images/example1.png"/>
  <div className="color--cloud modal__text">
    <h2 className="modal__title">
      Work Example Name
    </h2>
    <a className="color--skyBlue modal__link"
      href="#">
      Check it out
    </a>
    <p className="modal__description">
      A long description of the work in question.
    </p>
  </div>
</div> */}