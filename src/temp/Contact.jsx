import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    // Dynamically fetch the backend URL from the .env file
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`,
            }));
        } else {
            setErrors((prevErrors) => {
                const updatedErrors = { ...prevErrors };
                delete updatedErrors[name];
                return updatedErrors;
            });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address.';
        }
        if (!formData.message) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.post(`${backendUrl}/send`, formData);
                if (response.status === 200) {
                    alert('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({});
                }
            } catch (error) {
                console.error('Error sending message:', error);
                alert('Failed to send the message. Please try again later.');
            }
        }
    };

    const fields = [
        {
            id: 'name',
            label: 'Name',
            type: 'text',
            value: formData.name,
            error: errors.name,
        },
        {
            id: 'email',
            label: 'Email',
            type: 'email',
            value: formData.email,
            error: errors.email,
        },
        {
            id: 'message',
            label: 'Message',
            type: 'textarea',
            value: formData.message,
            error: errors.message,
        },
    ];

    return (
        <section className="p-8 bg-gray-70 dark:bg-gray-900">
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6 text-center">Contact Me</h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-gray-500 dark:bg-gray-800 shadow-md p-6 rounded"
            >
                {fields.map(({ id, label, type, value, error }) => (
                    <div key={id} className="mb-4">
                        <label
                            htmlFor={id}
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            {label}
                        </label>
                        {type === 'textarea' ? (
                            <textarea
                                id={id}
                                name={id}
                                value={value}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                rows="4"
                                className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-md shadow-sm focus:ring-blue-500 dark:focus:ring-blue-300 focus:border-blue-500 dark:focus:border-blue-300"
                            ></textarea>
                        ) : (
                            <input
                                type={type}
                                id={id}
                                name={id}
                                value={value}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-md shadow-sm focus:ring-blue-500 dark:focus:ring-blue-300 focus:border-blue-500 dark:focus:border-blue-300"
                            />
                        )}
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded hover:bg-gray-700 dark:hover:bg-gray-600"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;

