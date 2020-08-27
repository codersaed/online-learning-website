import React, { useState } from 'react';
import courseData from '../../courseData';
import Card from '../Card/Card'
import Cart from '../Cart/Cart'

const Course = () => {
    const course15 = courseData;
    const [courses, setCourses] = useState(course15);
    const [cart, setCart] = useState([])
    const handleEnrollBtn = (course) => {
        const newCart = [...cart, course];
        setCart(newCart)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="course-card col-md-8">
                    {
                        courses.map(course => <Card 
                            course={course}
                            handleEnrollBtn={handleEnrollBtn}></Card>)
                    }
                </div>
                <div className="course-cart mt-3 col-md-4">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Course;