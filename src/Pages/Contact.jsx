import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
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
        <section className="p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md p-6 rounded">
                {fields.map(({ id, label, type, value, error }) => (
                    <div key={id} className="mb-4">
                        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
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
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        ) : (
                            <input
                                type={type}
                                id={id}
                                name={id}
                                value={value}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        )}
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-gray-700"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;