import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../fakeData/images/Logo/ecelogo.png';


const UserHeader = () => {
    return (
        <section style={{height: '70px'}} className='d-flex'>
        <div className="col-md-2 mb-4">
            <Link className="ml-4" to="/">
            <img style={{ width: '110px'}} src={logo} alt="" />
            </Link>
        </div>
        <div className="col-md-10 d-flex justify-content-end pr-5 pt-4">
            <h5 style={{color: 'blue'}}><b>User</b></h5>&nbsp;&nbsp;<h5 ><b>Dashboard</b></h5>
        </div>
        {/* <div className="col-md-2 mt-2">
            <div style={{ margin: '20px 10px 0px 100px', color: 'black' }}>
                <b> {loggedInUser.name && loggedInUser.name.split(" ").slice(0, 1)}{" "}</b>
            </div>
        </div> */}
    </section>
    );
};

export default UserHeader;