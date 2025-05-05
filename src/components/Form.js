import Image from 'next/image';
import Style from '../styles/components/Form.module.scss';
import Link from 'next/link';

const Form = () => {

    return (
        <div className={Style["form"]}>
            <form className={Style["art-collector-form"]}>
                <h4>Contact Us</h4>
                <p>You're a artist looking for space? or a art collector? contact us.</p>
                <div className={Style["input-row-1"]}>
                    <input type="text" placeholder="First Name" className={Style["firstname"]} />
                    <input type="text" placeholder="Last Name" className={Style["lastname"]} />
                </div>
                <div className={Style["input-row-2"]}>
                    <input type="email" placeholder="Email" className={Style["placeholder"]} />
                    <label for="enquiry" className={Style["enquiry"]} > 
                        <select id='enquiry' name='enquiry'>
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
                    <textarea className={Style["message"]} name="message" placeholder="message.." rows="4" required></textarea>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>       
    );

}

export default Form;