// components/ContactForm.js

import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'
import configData from "../config.json";

const ContactForm = () => {
    
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        firstName: '',
        phone: '',
        businessEmail: '',
        message: '',
    });
    const isBlank = (str) => {
        return !str.trim();
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
        setLoader(false);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // if (isBlank(formData.firstName)) {
        //     setError('Please enter your name.');
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (isBlank(formData.phone)) {
        //     setError('Please enter your phone number.');
        //     setIsSubmitting(false);
        //     return;
        // }
       

        // if (isBlank(formData.businessEmail)) {
        //     setError('Please enter a valid Email.');
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (isBlank(formData.message)) {
        //     setError('Please enter a message.');
        //     setIsSubmitting(false);
        //     return;
        // }

        try {
            const response = await axios.post(
                `${configData.SERVER_FROM}contact-form-7/v1/contact-forms/6491/feedback`,
                formData,
                 {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                    }
        
         
        });
            console.log(response.data.status);
            if (response.data.status === 'mail_sent') {
                setFormVisible(false); // Hide the form
                setSuccessMessage('Thank you for your submission!');
            } else {
                //setError('An error occurred. Please try again.');
                const fieldErrors = {};
                const { status, invalid_fields } = response.data;
                invalid_fields.forEach((field) => {
                    fieldErrors[field.field] = field.message;
                });
                setErrors(fieldErrors);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
<div className="form-bg">

  {formVisible ? (           

<form onSubmit={handleSubmit} encType='multipart/form-data'>
<Row>
<Col lg={4} sm={12}>
<div className="mb-3">   
<label class="label-style form-label">Full Name</label>                                
<input
type="text"
name="firstName"
className={`form-control ${errors && errors.firstName ? 'is-invalid' : ''}`}
id="firstName"
value={formData.firstName}
onChange={handleChange}
/>
</div>
</Col>                       
<Col lg={4} sm={12}>
                            <div className="mb-3">
                            <label class="label-style form-label">Mobile No.</label>
<input
type="text"
name="phone"
className={`form-control ${errors && errors.phone ? 'is-invalid' : ''}`}
id="phone"                                 
value={formData.phone}
onChange={handleChange}
/></div>                            
</Col>

<Col lg={4} sm={12}>
                            <div className="mb-3">
                            <label class="label-style form-label">Email ID</label>
<input
type="text"
name="businessEmail"
className={`form-control ${errors && errors.businessEmail ? 'is-invalid' : ''}`}
id="designation"                                
value={formData.businessEmail}
onChange={handleChange}
/></div>
</Col>
</Row>
<Row>
<Col lg={12} sm={12}>
                            <div className="mb-3">
                            <label class="label-style form-label">Message</label>
<textarea
type="text"
name="message"
className={`form-control ${errors && errors.message ? 'is-invalid' : ''}`}
id="message"                                 
value={formData.message}
onChange={handleChange}
rows="4" cols="50"                                 
/>                          
</div>                                
</Col>
</Row>
<Row><Col sm={12}>
<button type="submit" className="btn btn-form" disabled={isSubmitting}>
Send Message
                            { isSubmitting &&
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="3"
                                    animationDuration="1"
                                    width="20"
                                    visible={true}
                                />
                            }
</button>
                   
                    </Col></Row>
{error && <p className="error">{error}</p>}
</form>
            ) : (
<Container className="mt-5 main-color">
<h3 className="fs-4">Thank you.</h3>
<h3 className="fs-4">We will get in touch with you as soon as possible.</h3>
                        
</Container>
            )}
</div>
    );
};

export default ContactForm;
