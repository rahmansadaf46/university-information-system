import React, { useEffect, useState } from 'react';
import '../VarsityList.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PrivateList = () => {
    const [universities, setUniversities] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4200/universitiesDetails`)
            .then(res => res.json())
            .then(response => {
                let categoryWise = response.filter(data => data.data.category === "Private");
                setUniversities(categoryWise)
                // setAllUniversities(ranking)
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="list">
                <div className="publiclist">
                    <h1>Private University List</h1>
                    <p>Establishment of private universities in Bangladesh was initiated after the institution of the Private University Act 1992.There are 108 private universities in Bangladesh.The establishment of a private university is relatively a new phenomenon in this country. In the early 1990s, the private sector came forward to establish universities. Since then the country experienced spectacular growth in private universities.Most of the private universities are in Dhaka Division.
                    </p>
                </div>
                <table className="tableplist">
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

                    </tbody></table>
                <br />
                <br />
            </div>


            <Footer></Footer>
        </div>

    );
};

export default PrivateList;