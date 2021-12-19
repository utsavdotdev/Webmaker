  import React,{useState} from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  const Contact = () =>{
    const [user,setUser] = useState({
      name:"",
      email:"",
      subject:"",
      message:"",
    });

    let name,value;
    const getUserData = (event) => {
      name=event.target.name;
      value=event.target.value;
      setUser({...user,[name]:value});

    };

    

    const postData = async (e) => 
    {
  e.preventDefault();
  const { name , email , subject , message} = user;
  if(name && email && subject && message)
  {

  const res = await fetch("https://webmaker-c8226-default-rtdb.firebaseio.com/database.json",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(
      {
        name,
        email,
        subject,
        message,
      }
    ),
  });
  if(res)
  {
    setUser(
      {
      name:"",
      email:"",
      subject:"",
      message:"",
      }
    );
    toast.success("Successfully Sent!");
  }
  else{
    toast("Network Connection problem!");
  }
}
else{
  toast.warn("Fill the Data!");
}
    };
      return(
          <>
          <section id="contact" className="contact section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>
          
          </div>

          <div className="row">

            <div className="col-lg-4">
              <div className="info d-flex flex-column justify-content-center">
                <div className="address">
                  <i className="bi bi-geo-alt"/>
                  <h4>Location:</h4>
                  <p>Devinagar,<br/>Nepal, Butwal</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+977 9876543210</p>
                </div>

              </div>

            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">

              <form  className="email-form" method="POST">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" value={user.name}  placeholder="Your Name" onChange={getUserData} autoComplete="off" required/>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" value={user.email} placeholder="Your Email" onChange={getUserData}  autoComplete="off" required/>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" value={user.subject} placeholder="Subject" onChange={getUserData}  autoComplete="off" required/>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" value={user.message} placeholder="Message" onChange={getUserData} required></textarea>
                </div>
                <div className="text-center"><button type="submit" onClick={postData}>Send Message</button></div>
              </form>

            </div>

          </div>

        </div>
      </section>
      <ToastContainer
      position="top-center"
      autoClose={2500}
      rtl={false}

      


      />
          </>
      );
  }
  export default Contact;