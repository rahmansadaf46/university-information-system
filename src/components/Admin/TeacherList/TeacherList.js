import React, {
    useEffect,
    useState
} from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const TeacherList = () => {
    // const { register, handleSubmit, errors } = useForm();

    // const [loading, setLoading] = useState(false);
    // const [dept, setDept] = useState([]);
    // document.title = "Enroll A Student";
    const email = sessionStorage.getItem('email')

    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    // const [file, setFile] = useState(null);
    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }


    // const onSubmit = data => {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('title', data.title);
    //     formData.append('price', data.price);
    //     formData.append('description', data.description);
    //     formData.append('shortDescription', data.shortDescription);

    //      fetch('http://localhost:4200/addItem', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             window.alert('Item added successfully');
    //             window.location.reload();
    //         })

    //         .catch(error => {
    //             console.error(error)
    //         })


    // }

    // useEffect(() => {
    //     setDept(JSON.parse(localStorage.getItem("dept")) || {});
    // }, [])
    // const [allTeachers, setAllTeachers] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [query, setQuery] = useState("");
    const columns = [
        {
            name: 'Teacher Name',
            selector: row => row.teacherName,
            sortable: true,
        },
        {
            name: 'Department',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Subject',
            selector: row => row.subject,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            cell: row => <p style={{ color: row.status === "Active" ? 'green' :"red",position:'relative',top:'7px' }}><b>{row.status}</b></p>,
            sortable: true,
        },
        {
            name: "Action",
            // width: '75px',
            cell: (data) => (
                <div>
                    {" "}
                    <Link
                        className="btn btn-sm btn-info font-weight-bold"
                        to={`/admin/teacher/${data._id}`}
                    onClick={() => {
                            // console.log(data)
                            // setBook(data)
                            // openModal()

                    }}
                    >
                        Details

                    </Link>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: false,
        },
    ];
    useEffect(() => {
        fetch('http://localhost:4200/teachers')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // let tempArray = []; 
                // const teacherCollection = data.map(teacher => { return teacher.data })
                setTeachers(data);
                // setAllTeachers(data)
                // setAllItem(data);
                // localStorage.setItem('item', JSON.stringify(data));

            })
        // const items = fakeData.slice(0, 6);

    }, []);
    const search = (rows) => {
        if (rows) {
            const columns = rows[0] && Object?.keys(rows[0]);
            return rows?.filter((row) =>
                columns?.some(
                    (column) =>
                        row[column]
                            ?.toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                )
            );
        }
    };
    
    const customStyles = {
        rows: {
            style: {
                minHeight: "32px",
                width: "100%",
            },
        },
        headCells: {
            style: {
                padding: " 15px",
                background: 'blue',
                fontSize: "15px",
                color: 'white',
            },
        },
        cells: {
            style: {
                fontSize: "14px",
                padding: " 15px",
            },
        },
    };
    return (
        <div>
            <AdminHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#FEF78D', height: '100vh' }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>Teacher List</u></h2>
                    </div>
                    <div className="d-flex justify-content-start container">
                    <form className="form-group">
                    <div className="container">
                        <div className="form-inline d-flex justify-content-start">
                            <label style={{ position: 'relative', right: '15px' }} className="font-weight-bold text-dark " htmlFor="filter">Search</label>
                            <input
                                style={{}}
                                className="form-control"
                                type="text"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </form>
                    </div>
                    <div className="col-md-12">
                        <div>   <div style={{ marginBottom: '100px' }} className="container pb-5 ">


                            <DataTable
                                columns={columns}
                                data={search(teachers)}
                                customStyles={customStyles}
                                pagination
                                paginationPerPage={5}
                                paginationRowsPerPageOptions={[1,2,3,4,5]}
                            // selectableRows
                            />
                        </div></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeacherList;