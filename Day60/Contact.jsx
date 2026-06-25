import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    function handleSubmit(e) {

        e.preventDefault();

        alert(
            `Thank you ${formData.name}! Your message has been received.`
        );

        setFormData({
            name: "",
            email: "",
            message: ""
        });

    }

    return (

        <div className="page">

            <h1>
                📩 Contact Me
            </h1>

            <p>
                Feel free to connect with me or
                send a message through the form below.
            </p>

            <div className="contact-info">

                <p>
                    📧 Email:
                    dewangandivyaansh@gmail.com
                </p>

                <p>
                    💻 GitHub:
                    dewangandivyaansh-hub
                </p>

            </div>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button type="submit">
                    Send Message
                </button>

            </form>

        </div>

    );

}

export default Contact;