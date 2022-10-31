import React, { useEffect, useState } from 'react';
import '../VarsityList.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const NationalList = () => {
    const [universities, setUniversities] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4200/universitiesDetails`)
            .then(res => res.json())
            .then(response => {
                let categoryWise = response.filter(data => data.data.category === "National");
                setUniversities(categoryWise)
                // setAllUniversities(ranking)
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="list mb-5">
                <div className="publiclist">
                    <h1>National University List</h1>
                    <p>National University of Bangladesh is the most popular university in our country. The university plays a vital role in our higher level Honours, Degree and Masters course. Every year a large number of students have admitted in this university. On the other hand a large number of student have graduated under this university.There we provide colleges list which is affiliated with National University.
                    </p>
                </div>
                {
                    universities.length>0?<table className="tableplist my-4">
                    <tbody><tr className="toptable">
                    <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Ph.D Granting</th>
                    </tr>
                    {universities.map((data, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{data.data.universityName}</td>
                                <td>{data.data.acronym}	</td>
                                <td>{data.data.established}</td>
                                <td>{data.data.location}</td>
                                <td>{data.data.division}</td>
                                <td>{data.data.phd}</td>
                            </tr>

                        )}
                    </tbody></table>:<><h2 style={{padding:'110px 0px'}} className='text-center text-warning'>Loading...</h2></>
                }
            </div>

            <Footer></Footer>
        </div>

    );
};

export default NationalList;