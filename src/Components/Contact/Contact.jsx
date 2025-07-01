import React from 'react';
import './Contact.css';
import img_icon from '../../assets/img_icon.png';
import mail_icon from '../../assets/mail_icon.png';
import phone_icon from '../../assets/phone_icon.png';
import location_icon from '../../assets/location_icon.png';
import white_arrow from '../../assets/white_arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d815e88e-0cb4-4ecc-a92c-5bc8c6030bcd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success", data);
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Let's Work Together <img src={img_icon} alt="Icon" /></h3>
        <p>
          Have a project in mind or just want to say hello? We're always ready to discuss your ideas and help turn them into reality.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Email" /> jahirulislam1110005@gmail.com</li>
          <li><img src={phone_icon} alt="Phone" /> +8801324-880851</li>
          <li><img src={location_icon} alt="Location" /> Mymensingh, Dhaka, Bangladesh</li>
        </ul>
      </div>

      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          <label>Phone Number</label>
          <input type="text" name='phone' placeholder='Enter your mobile number' required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

          <button type='submit' className='btn dark-btn'>
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
