import React from 'react';
import '../VarsityList.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const NationalList = () => {
    return (
        <div>
            <Header></Header>
            <div className="list mb-5">
                <div className="publiclist">
                    <h1>National University List</h1>
                    <p>National University of Bangladesh is the most popular university in our country. The university plays a vital role in our higher level Honours, Degree and Masters course. Every year a large number of students have admitted in this university. On the other hand a large number of student have graduated under this university.There we provide colleges list which is affiliated with National University.
                    </p>
                </div>
                <table className="tableplist">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>Institute of Science and Technology</td>
                            <td>1993</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Institute of Science Trade & Technology (ISTT)</td>
                            <td>2015</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Bangladesh Institute of Science and Technology</td>
                            <td>2010</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>IDEAL INSTITUTE OF SCIENCE & TECHNOLOGY</td>
                            <td>2013</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>National Institute of Science and Technology</td>
                            <td>2019</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>No</td>
                        </tr>
                    </tbody></table>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default NationalList;