import React, {
    useEffect
    // useState 
} from 'react';
import { useForm } from 'react-hook-form';
// import Select from 'react-select';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';



const AddAdmissionDetails = () => {
    const { register, handleSubmit, errors } = useForm();

    const email = sessionStorage.getItem('email')
    // const [universities, setUniversities] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:4200/universities`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setUniversities(data)

    //         })
    // }, [])
    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    // const [subject, setSubject] = useState([]);
    // const handleSubject = (e) => {
    //     setSubject(e)
    // }
  

    const onSubmit = data => {
        console.log(data)
        // console.log(data?.publicUniversity)

        fetch('http://localhost:4200/addAdmissionDetails', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    window.alert('Admission Details added successfully');
                    window.location.reload();
                    window.scrollTo(0, 0);
                })

                .catch(error => {
                    console.error(error)
                })




    }
    // const customStyles = {
    //     control: (provided, state) => ({
    //         ...provided,
    //         border: "2px solid blue",
    //         borderRadius: "20px",
    //         boxShadow: state.isFocused ? null : null,
    //     }),

    // };
    // const options = [
    //     { value: 'CSE', label: 'CSE' },
    //     { value: 'EEE', label: 'EEE' },
    //     { value: 'Software Engineering', label: 'Software Engineering' },
    //     { value: 'Pharmacy', label: 'Pharmacy' },
    //     { value: 'BBA', label: 'BBA' },
    //     { value: 'English', label: 'English' },
    //     { value: 'Marketing', label: 'Marketing' },
    //     { value: 'Psychology', label: 'Psychology' },
    //     { value: 'Accounting', label: 'Accounting' },
    //     { value: 'Political Science', label: 'Political Science' },
    // ]
    return (
        <div>
            <AdminHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#FEF78D', minHeight: '130vh' }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>Add Admission Details</u></h2>
                    </div>
                    <div className="col-md-12">
                        <div><form className="p-3 container col-6" 
                        onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="form-group text-primary text-center container">
                                <label for=""><b>Enter University Name</b></label>
                                <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} required type="text" ref={register({ required: true })} name="universityName" placeholder="Enter University Name" className="form-control" />
                                {errors.name && <span className="text-primary">This field is required</span>}
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter University Category</b></label>
                                    <div><select required style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} ref={register({ required: true })} name="category"
                                        
                                    >
                                        <option value="">Select</option>
                                        <option value="Public">Public</option>
                                        <option value="Private">Private</option>
                                        <option value="National">National</option>

                                    </select></div>
                                </div>
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Admission Circular</b></label>
                                    <input required style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" placeholder="YYYY-YYYY"  ref={register({ required: true })} name="circular"  className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Application Start</b></label>
                                    <input required style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="date" ref={register({ required: true })} name="start" placeholder="Enter Established Year" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Application End</b></label>
                                    <input required style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="date" ref={register({ required: true })} name="end" placeholder="Enter Location" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Admission Date</b></label>
                                    <input required style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="date" ref={register({ required: true })} name="admission" placeholder="Enter Division" className="form-control" />
                                </div>
                            </div>
                          
                        

                            <div className="form-group row">
                                
                                <div className="form-group col-md-12  pt-1 d-flex justify-content-center">
                                    <button type="submit" style={{ padding: '10px 90px', borderRadius: '40px' }} className="btn btn-primary font-weight-bold">Submit</button>
                                </div>
                            </div>

                        </form></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddAdmissionDetails;