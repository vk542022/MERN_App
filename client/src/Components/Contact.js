import React,{ useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export const Contact = () => {
    const [userData, setUserData] = useState({name:"",email:"",phone:""})
    const callProfilePage = async () =>{
        try {
            const res = await fetch('/getdata',{
                method:'GET',
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data = await res.json();
            console.log(data)
            setUserData({...userData,name:data.name,email:data.email,phone:data.phone})
            if(!res.status === 200 ){
                const error = new Error(res.error)
                throw error
            }
            else{
                console.log("success")
            }

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        callProfilePage();
    }, [])

	const handleInputs = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUserData({...userData,[name]:value})
	}

	const contactForm = async (e)=>{
		e.preventDefault();
		const { name,email,phone,message } = userData;

		const res = await fetch('/contact' , {
			method:'POST',
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({ name,email,phone,message })
		})

		const data = await res.json()
		if(!data){
			console.log("Message Not Send")
		}
		else{
			alert("Message Send")
			setUserData({...userData,message:""})
		}
	}

    return (
        <div>
            <section className="my-5">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Contact Us</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-10 col-md-12">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="col-md-7 d-flex align-items-stretch">
								<div className="contact-wrap w-100 p-md-5 p-4" style={{marginTop: "-62px"}}>
									<h3 className="mb-4">Get in touch</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<input type="text" className="form-control mb-3" name="name" id="name" value={userData.name} onChange={handleInputs} placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<input type="phone" className="form-control" name="phone" id="phone" value={userData.phone} style={{marginBottom:"20px"}} onChange={handleInputs} placeholder="Phone"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="email" className="form-control mb-3" name="email" id="email" value={userData.email} onChange={handleInputs}  placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<textarea name="message" className="form-control mb-3" id="message" cols="30" rows="7" 
													value={userData.message} onChange={handleInputs} 
													placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Send Message"
													onClick={contactForm} className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-5 d-flex align-items-stretch">
								<div className="info-wrap bg-primary w-100 p-lg-5 p-4" style={{height: "460px"}}>
									<h3 className="mb-4 mt-md-4">Contact us</h3>
				        	<div className="dbox w-100 d-flex align-items-start mb-5">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-map-marker"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Address: Bissau( Jhujhunu), Rajasthan </span></p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center mb-5">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-paper-plane"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Email:</span> <Link to="/">codewithvivek.net@gmail.com</Link></p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-globe"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Website</span> <Link to="/">codewithvivek.com</Link></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}
