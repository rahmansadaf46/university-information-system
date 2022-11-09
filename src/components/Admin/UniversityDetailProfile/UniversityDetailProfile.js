import React, {
    useEffect,
    useState
} from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useHistory, useParams } from 'react-router';
import UpdateUniversityDetail from '../UpdateUniversityDetail/UpdateUniversityDetail';
// import Updateuniversity from '../Updateuniversity/Updateuniversity';
const UniversityDetailProfile = () => {
    const { id } = useParams();
    const [university, setUniversity] =useState([])
    const email = sessionStorage.getItem('email')
    let history = useHistory();
    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    useEffect(() => {
        fetch(`http://localhost:4200/universityDetail/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.scrollTo(0, 0);
                setUniversity(data);
      
            })
    }, [id])
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(data) {

        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:4200/deleteUniversityDetail/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                
                alert('Deleted')
                if (result) {
                    history.goBack()
                }

            })
    }
    return (
        <div>
            <AdminHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#FEF78D', height: '140vh' }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>University Details</u></h2>
                    </div>
                    <div className="d-flex justify-content-center">
                            <div style={{border: '1px solid lightGray', background:'white', boxShadow: '5px 5px 20px gray',padding: '30px'}}>
                                 <p style={{fontSize: '18px' }}><b>University Name:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.universityName}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Category:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.category}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Acronym:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.acronym}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Division:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.division}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Location:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.location}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Established:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.established}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Phd:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.phd}</span></p>
                            </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button  onClick={openModal}  className="btn btn-warning mx-2 font-weight-bold" >Update University</button>
                        <UpdateUniversityDetail modalIsOpen={modalIsOpen} university={university} closeModal={closeModal}></UpdateUniversityDetail>
                        <button onClick={() => { if (window.confirm('Are You Sure?')) { handleDelete(university._id) }; }} className="btn btn-danger mx-2 font-weight-bold" >Delete University</button>
                    </div>
                  
                </div>
            </div>

        </div>
    );
};

export default UniversityDetailProfile;