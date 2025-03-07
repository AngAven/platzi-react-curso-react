import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Index = ({children}) => {
    return ReactDOM.createPortal(
        <div className={"ModalBackground"}>
            {children}
        </div>, document.getElementById("modal")
    );
};

export {Index};