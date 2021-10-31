import React from 'react';
import { useParams } from 'react-router';

const UpdateHotel = (props) => {
    console.log(props.hotel);
    const { id } = useParams();
 
    return (
        <div>
            <h2>update</h2>
        </div>
    );
};

export default UpdateHotel;<h2>update</h2>