import React from 'react';

const Card = (props) => {

    const AddReadLaterHandler= (id) =>{
        props.addData(id);
    }
    return (
        <div  className = "col-md-4">
            <div data-testid="card" className="card mb-3" style={{ width: '18rem' }}>
                <div className="card-body">

                    <img src={props.image} data-testid="cardImage" className="card-img-top" alt="..." />
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.description}</p>
                    <button id="readLaterDash" data-testid="readLater" onClick={AddReadLaterHandler.bind(this,props.id)} className="btn btn-secondary float-right">Read Later</button>
                </div>
            </div>
        </div>
    )
}

export default Card;