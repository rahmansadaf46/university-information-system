import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown, } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import './Header.css'
import logo from '../../../fakeData/images/Logo/ecelogo.png'
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { UserContext } from '../../../App';
import Container from 'react-bootstrap/Container';
const Header = ({ cart }) => {
  // const [item, setItem] = useState([]);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [loggedInUser] = useContext(UserContext);

  // useEffect(() => {
  //   fetch('http://localhost:4200/allOrder')
  //     .then(res => res.json())
  //     .then(data => {
  //       // if (data) {
  //       //     localStorage.setItem('student', JSON.stringify(data));

  //       // }
  //       // const email = sessionStorage.getItem('email')
  //       // const items = data.filter(item => item.finalData.email === email)
  //       // console.log(items,data)
  //       // setItem(items.reverse());
  //     })
  // }, [])
  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.assign("/");
  }
  // const handleWindow = () => {
  //   window.scrollTo(0, 0);
  // }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{ background: '#708119bb' }} variant="dark">
        <Container >
          <Navbar.Brand href="/"> <img src={logo} alt="" className="lp" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              
              <Nav.Link href="/" className="text-white my-auto">Home</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              <NavDropdown title={
                <span className="text-white my-auto">University List</span>
              } id="collasible-nav-dropdown">
                <NavDropdown.Item href="/publicList">Public University</NavDropdown.Item>
                <NavDropdown.Item href="/privateList">Private University</NavDropdown.Item>
                <NavDropdown.Item href="/nationalList">National University</NavDropdown.Item>

              </NavDropdown>
              {/* <NavDropdown className=' text-white' title={
                <span className="text-white my-auto">University Ranking</span>
              } id="collasible-nav-dropdown">
                <NavDropdown.Item href="/publicRanking">Public University</NavDropdown.Item>
                <NavDropdown.Item href="/privateRanking">Private University</NavDropdown.Item>
                <NavDropdown.Item href="/nationalRanking">National University</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown
                id="collasible-nav-dropdown"
                title={
                  <span className="text-white my-auto">Admission Time &amp; Date</span>
                }
              >
                <NavDropdown.Item href="/publicAdmission">Public University</NavDropdown.Item>
                <NavDropdown.Item href="/privateAdmission">Private University</NavDropdown.Item>
                <NavDropdown.Item href="/nationalAdmission">National University</NavDropdown.Item>
              </NavDropdown> */}
              
              {
                loggedInUser.email || sessionStorage.getItem('token') ? <>
                {loggedInUser.email === "admin@gmail.com" || sessionStorage.getItem('email') === "admin@gmail.com" ? <Nav.Link style={{ borderRadius: '50px' }} href='/admin/pending' className="text-white btn-warning my-auto">Admin Panel</Nav.Link> : <Nav.Link className=' text-white' href="/user/orderList">Profile</Nav.Link>}
                  
                  <Nav.Link href="/" className='btn-danger text-white ml-2' style={{ borderRadius: '50px' }} onClick={logout}>Log Out</Nav.Link>


                </> : <> <Nav.Link className='btn-success text-white' style={{ borderRadius: '50px' }} href="/login" >Log In</Nav.Link>
                  <Nav.Link href="/signup" className='btn-info ml-3 text-white' style={{ borderRadius: '50px' }}>Sign Up</Nav.Link>
                </>
              }

            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
              {/* <Navbar.Text style={{ color: 'orange' }}>
                {sessionStorage.getItem('name').split(" ").slice(0, 1)}
              </Navbar.Text> */}
              {
                loggedInUser.email || sessionStorage.getItem('token') ?
                  <div style={{ marginLeft: '10px' }}>
                    <Navbar.Text style={{ color: '#FFC107' }} >
                      {sessionStorage.getItem('name').split(" ").slice(0, 1)}
                    </Navbar.Text>
                  </div>
                  :
                  <></>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg bc">
        <div className="container-fluid">
          <img src={logo} alt="" className="lp" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
           
           
            <li className="nav-item">{loggedInUser.email === "admin@gmail.com" || sessionStorage.getItem('email') === "admin@gmail.com"  ?      <a href='/admin/pending'  className="nav-link active tc hv">Admin Panel</a> : <></>}</li>
        
             
              <li className="nav-item">
                <a href="/" className="nav-link active tc hv" aria-current="page" >Home</a>
              </li>

              <li style={{position: 'relative', top:'8px'}} className="nav-item dropdown ">
              <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={<a href="." className="drop-link">
                        University List
                      </a>}
                      menuVariant="white"
                    >
                      <NavDropdown.Item href="/publicList">Public University</NavDropdown.Item>
                      <NavDropdown.Item href="/privateList">Private University</NavDropdown.Item>
                      <NavDropdown.Item href="/nationalList">National University</NavDropdown.Item>
                     
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </li>
              <li style={{position: 'relative', top:'8px'}} className="nav-item dropdown">
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={<a href="."  className="drop-link">
                        University Ranking
                      </a>}
                      menuVariant="white"
                    >
                      <NavDropdown.Item href="/publicRanking">Public University</NavDropdown.Item>
                      <NavDropdown.Item href="/privateRanking">Private University</NavDropdown.Item>
                      <NavDropdown.Item href="/nationalRanking">National University</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
          
              </li>
              <li style={{position: 'relative', top:'8px'}} className="nav-item">
              <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={<a href="."  className="drop-link">
                      Admission Time &amp; Date
                      </a>}
                      menuVariant="white"
                    >
                      <NavDropdown.Item href="/publicAdmission">Public University</NavDropdown.Item>
                      <NavDropdown.Item href="/privateAdmission">Private University</NavDropdown.Item>
                      <NavDropdown.Item href="/nationalAdmission">National University</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </li>
              <li className="nav-item">
                <a href="/questionBank"  className="nav-link active tc hv " role="button">Question Bank</a>
              </li>
              {
                loggedInUser.email || sessionStorage.getItem('token') ? <>
           
                  <li className="nav-item">
                    <a href="/user/appointmentStatus" className="nav-link active tc hv" aria-current="page" >Profile</a>
                  </li>
                  <li className="nav-item">
                    <a href="/" onClick={logout} className="nav-link active tc hv" role="button">Log Out</a>
                  </li>
            
                </> : <> <li className="nav-item">
                  <a href="/login" className="nav-link active tc hv" role="button">Log In</a>
                </li>
                  <li className="nav-item">
                    <a href="/signup" className="nav-link active tc hv" role="button">Sign Up</a>
                  </li></>
              }

            </ul>
 
     
          </div>
        </div>
        {
                            loggedInUser.email || sessionStorage.getItem('token') ?
                            <p style={{ position: 'relative', left: '-45px', top: '10px', color: 'orange' }}><b>{sessionStorage.getItem('name').split(" ").slice(0, 1)}</b></p>
                                :
                                <></>
                        }
      </nav> */}
    </div>
  );
};

export default Header;