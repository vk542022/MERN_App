import React,{useEffect,useState} from 'react'
import vivek from './images/vivek.png'
import newUser from './images/newuser.jpg'
import { Link ,useHistory } from 'react-router-dom'

export const About = () => {

    const history = useHistory()
    const [userData, setUserData] = useState({})
    const callProfilePage = async () =>{
        try {
            const res = await fetch('/about',{
                method:'GET',
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })
            const data = await res.json();
            console.log(data)
            setUserData(data)
            if(!res.status === 200 ){
                const error = new Error(res.error)
                throw error
            }
            else{
                console.log("success")
            }

        } catch (err) {
            console.log(err)
            history.push('/login')
        }
    }

    useEffect(() => {
        callProfilePage();
    }, [])

    return (
            <div className="container emp-profile mt-5">
    <form method="GET">
        <div className="row">
            <div className="col-md-4">
                <div className="profile-img">
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/> */}
                    <img style={{height:"157px"}} src={userData.name=== "vivek kumar"?vivek : newUser}  alt="My Pic"/>
                    {/* <div className="file btn btn-lg btn-primary">
                        Change Photo
                        <input type="file" name="file"/>
                        </div> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                                <h5>
                                {userData.name}
                                </h5>
                                <h6>
                                    Web and Android Developer
                                </h6>
                                <p className="proile-rating">RANKINGS : <span>10/10</span></p>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-work">
                        <p>WORK LINK</p>
                        <Link to="">Facebook</Link><br/>
                        <Link to="">Instagram</Link><br/>
                        <Link to="">Youtube</Link>
                        <p>SKILLS</p>
                        <Link to="">Web Designer</Link><br/>
                        <Link to="">Web Developer</Link><br/>
                        <Link to="">WordPress</Link><br/>
                        <Link to="">React Developer</Link><br/>
                        <Link to="">PHP, Node </Link><br/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData._id}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.work}</p>
                                        </div>
                                    </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>100$/hr</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>115</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>1 Year</p>
                                        </div>
                                    </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Your Bio</label>
                                    </div>
                                    <div className="col-md-6">
                                    <p>Your detail description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>           
    </div>
    )
}
