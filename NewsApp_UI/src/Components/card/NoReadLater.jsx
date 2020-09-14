import React from 'react';

const Card = (props) => {

    return (
        <div  className = "col-md-4">
            <div data-testid="card" className="card mb-3" style={{ width: '18rem' }}>
                <div className="card-body">
                    <img src={props.image} data-testid="cardImage" className="card-img-top" alt="..." />
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;