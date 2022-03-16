import React from 'react';

const Modal = ({onClose, currentPhoto}) => {
    const {name, category, decription, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img 
                    src={require(`../../assets/large/${category}/${index}.jpg`).default}
                    alt="current category"
                />
                <p>{decription}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
};

export default Modal;