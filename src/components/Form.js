import { useState } from 'react';
import Style from '../styles/components/Form.module.scss';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        enquiry: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const validateForm = () => {
        const { firstName, lastName, email, enquiry, message } = formData;

        if (!firstName.trim() || !lastName.trim() || !email.trim() || !enquiry || !message.trim()) {
            return 'Please fill in all required fields.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address.';
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            alert(validationError);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        const endpoint = 'https://script.google.com/macros/s/AKfycbzPxXnsBY_El3Zw8NMBiWrB4qI5gghOc1cIQ_sgGWWH8W-0_ydyBs5Zj5nhlrcCramf/exec';

        try {
            // Create FormData object
            const formDataToSend = new FormData();
            formDataToSend.append('firstName', formData.firstName);
            formDataToSend.append('lastName', formData.lastName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('enquiry', formData.enquiry);
            formDataToSend.append('message', formData.message);

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formDataToSend,
                mode: 'no-cors' // Use no-cors mode for Google Apps Script
            });

            // With no-cors, we can't read the response, so assume success
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                enquiry: '',
                message: ''
            });
            setTimeout(() => setSubmitStatus(null), 5000);

        } catch (error) {
            setSubmitStatus('error');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={Style["form"]}>
            <form className={Style["art-collector-form"]} onSubmit={handleSubmit}>
                <h4>Contact Us</h4>
                <p>You're an artist looking for space? Or an art collector? Contact us.</p>

                {submitStatus === 'success' && (
                    <div className={Style["success-message"]} style={{ color: 'green', marginBottom: '1rem' }}>
                        🎉 Form submitted successfully! We'll get back to you soon.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className={Style["error-message"]} style={{ color: 'red', marginBottom: '1rem' }}>
                        ❌ Something went wrong. Please try again or contact us directly.
                    </div>
                )}

                <div className={Style["input-row-1"]}>
                    <input
                        className={Style["firstname"]}
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        placeholder="First Name"
                        required
                        disabled={isSubmitting}
                    />
                    <input
                        className={Style["lastname"]}
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Last Name"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className={Style["input-row-2"]}>
                    <input
                        className={Style["email"]}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        required
                        disabled={isSubmitting}
                    />
                    <label htmlFor="enquiry" className={Style["enquiry"]}>
                        <select
                            name="enquiry"
                            id="enquiry"
                            value={formData.enquiry}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        >
                            <option value="">Select Enquiry:</option>
                            <option value="Art Collection">Art Collector</option>
                            <option value="Art Space">Art Space</option>
                            <option value="Events">Events</option>
                            <option value="Cafe">Cafe</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                </div>

                <div className={Style["input-row-3"]}>
                    <textarea
                        className={Style["message"]}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message..."
                        rows="4"
                        required
                        disabled={isSubmitting}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        opacity: isSubmitting ? 0.6 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
            </form>
        </div>
    );
};

export default Form;