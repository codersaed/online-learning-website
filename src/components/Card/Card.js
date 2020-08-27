import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, info, img, price } = props.course;
    return (
        <div  className="main">
            <div className="course-area mt-3 col-8">
                <div className="card-group">
                    <div className="card">
                        <img src={img} className="card-img-top" alt="course" />
                        <div className="card-body">
                            <h5 className="card-title name">{name}</h5>
                            <p className="card-text">{info}</p>
                            <h4 className="text-danger">${price}</h4>
                            <button onClick={()=> props.handleEnrollBtn(props.course)} className="btn btn-success">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;