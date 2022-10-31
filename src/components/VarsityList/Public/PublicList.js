import React, { useEffect, useState } from 'react';
import '../VarsityList.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PublicList = () => {
    const [universities, setUniversities] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4200/universitiesDetails`)
            .then(res => res.json())
            .then(response => {
                let categoryWise = response.filter(data => data.data.category === "Public");
                setUniversities(categoryWise)
                // setAllUniversities(ranking)
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="list">
                <div className="publiclist">
                    <h1>Public University List</h1>
                    <p>Bangladesh has 53 public universities to the bulk of higher studies students. These universities are funded by the government while managed as self-governed organizations.
                        Dhaka division is home to thirteen public universities, among which eight are in Dhaka City. There are seven public universities in Chittagong division, six in Rajshahi division five in Khulna division, four in Mymensingh Division. Each of Rangpur division, Sylhet division &amp; Barisal division has two. as of 2020 the University Grants Commission of Bangladesh has introduce the cluster system for students enrollment.</p>
                </div>
                {
                    universities.length>0 ? <table className="tableplist">
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

                    </tbody></table> :<><h2 style={{padding:'100px 0px'}} className='text-center text-warning'>Loading...</h2></>
                }
          
             
             
                {/* <div className="secondtable">
                    <h2>Agricultural Universities</h2>
                </div>
                <table className="tableplist ">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Specialization</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>Bangladesh Agricultural University</td>
                            <td>BAU</td>
                            <td>1961</td>
                            <td>Mymensingh</td>
                            <td>Mymensingh</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Bangabandhu Sheikh Mujibur Rahman Agricultural University</td>
                            <td>BSMRAU</td>
                            <td>1998</td>
                            <td>Gazipur</td>
                            <td>Dhaka</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Sher-e-Bangla Agricultural  University</td>
                            <td>SAU		</td>
                            <td>2001</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Sylhet Agricultural University</td>
                            <td>SyAU		</td>
                            <td>2006</td>
                            <td>Sylhet</td>
                            <td>Sylhet</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>Habiganj Agricultural</td>
                            <td>HAU			</td>
                            <td>2020</td>
                            <td>Habiganj</td>
                            <td>Sylhet</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>06</td>
                            <td>Khulna Agricultural University</td>
                            <td>KAU	</td>
                            <td>2019</td>
                            <td>Khulna</td>
                            <td>Khulna</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                    </tbody></table> */}
               
                {/* <div className="secondtable">
                    <h2>Off Campus Universities</h2>
                </div>
                <table className="tableplist lasttable ">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Specialization</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>Bangladesh Open University</td>
                            <td>OUB			</td>
                            <td>1992</td>
                            <td>Gazipur</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>National University</td>
                            <td>NUB			</td>
                            <td>1992</td>
                            <td>Gazipur</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Islamic Arabic University</td>
                            <td>IAU			</td>
                            <td>2013</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Islamic</td>
                            <td>Yes</td>
                        </tr>
                    </tbody></table> */}
                    <br/>
                    <br/>
            </div>


            <Footer></Footer>
        </div>

    );
};

export default PublicList;