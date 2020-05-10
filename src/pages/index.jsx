import React from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'reactstrap';

const MainPage = () => {
    return (
        <div>
            <h2>Event Check-In System</h2>
            <br></br>
            <Link to="/events">events</Link>        </div>
    );
};
export default MainPage;