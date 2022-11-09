import React, { useEffect, useState } from 'react';
import '../Admission.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PublicAdmission = () => {
  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4200/admissionDetails`)
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
      <div>
        <div className="admissionh">
          <h1> Public Universities Admission Date</h1>
        </div>
        <div className="admissionTable">
        {
                    universities.length>0 ? 
          <table>
            <tbody>
              <tr className="first head ">
                <td className="head">University Name</td>
                <td className="head">Admission Circular</td>
                <td className="head">Application Starts</td>
                <td className="head">Application Ends</td>
                <td className="head">Admission Date</td>
              </tr>
              
              {universities.map((data, index) =>
                <tr>
                  <td>{data.data.universityName}</td>
                  <td>{data.data.circular}	</td>
                  <td>{data.data.start}</td>
                  <td>{data.data.end}</td>
                  <td>{data.data.admission}</td>
                </tr>

              )}
            </tbody></table> : <><h2 style={{padding:'100px 0px'}} className='text-center text-warning'>Loading...</h2></>}

        </div>
      </div>

      <br />
      <br />
      <Footer></Footer>
    </div>

  );
};

export default PublicAdmission;