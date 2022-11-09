import { useForm } from "react-hook-form";
import React, { useEffect,  } from 'react';
// import Select from 'react-select';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
    }
};
const UpdateUniversityDetail = ({ modalIsOpen, closeModal, university }) => {
    const { register, handleSubmit, errors } = useForm();
    // const [universities, setUniversities] = useState([]);
    // const [worldRanking, setWorldRanking] = useState(false)
    // const [subject, setSubject] = useState([]);
    // const handleSubject = (e) => {
    //     setSubject(e)
    // }



    useEffect(() => {
        if (university?.data?.subject) {
            let tempArray = [];
            university?.data?.subject.forEach(data => {
                let subject = { value: data, label: data }
                tempArray.push(subject)
            })
            // setSubject(tempArray)
            // data.subject = tempArray;
        }
    }, [university?.data?.subject])
    const email = sessionStorage.getItem('email')

    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    const onSubmit = data => {
        // console.log(data)

        fetch(`http://localhost:4200/updateUniversityDetail/${university._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                window.alert('University updated successfully');
                window.location.reload();
                window.scrollTo(0, 0);
            })

            .catch(error => {
                console.error(error)
            })



    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >


            <h4 className="text-center text-primary"><u>Update University</u> </h4>

            <br />
            <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>University Name:</b></label>
                        <textarea defaultValue={university?.data?.universityName} type="text" ref={register({ required: true })} name="universityName" placeholder="Enter University Name" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Category:</b></label>
                        <div><select required style={{ padding: '6px 50px', border: '1px solid lightGray', position: 'relative', left: '15px' }} ref={register({ required: true })} name="category"
                            // onChange={(e) => handleChange(e)}
                            defaultValue={university?.data?.category}
                        >
                            <option value="">Select</option>
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                            <option value="National">National</option>

                        </select></div>

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Acronym:</b></label>
                        <textarea defaultValue={university?.data?.acronym} type="text" ref={register({ required: true })} name="acronym" placeholder="Enter acronym" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Established:</b></label>
                        <textarea defaultValue={university?.data?.established} type="text" ref={register({ required: true })} name="established" placeholder="Enter established" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Location:</b></label>
                        <textarea defaultValue={university?.data?.location} type="text" ref={register({ required: true })} name="location" placeholder="Enter location" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Division:</b></label>
                        <textarea defaultValue={university?.data?.division} type="text" ref={register({ required: true })} name="division" placeholder="Enter division" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>PHD Granting:</b></label>
                        <div><select required style={{ padding: '6px 50px', border: '1px solid lightGray', position: 'relative', left: '15px' }} ref={register({ required: true })} name="phd"
                            // onChange={(e) => handleChange(e)}
                            defaultValue={university?.data?.phd}
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select></div>

                    </div>

                </div>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-warning mt-4 "><b>Update University</b></button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateUniversityDetail;