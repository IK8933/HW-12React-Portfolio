import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    title: "New Message from Portfolio",
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`,
      }));
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email address.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate() || sending) return;
    setSending(true);

    try {
      await emailjs.send(
        "service_p3oh4wi",
        "template_686ct5j",
        {
          title: "New Message from Portfolio",
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
        },
        "9KVgY7TsGJPL2NUoz",
      );

      setSent(true);
      setFormData({
        title: "New Message from Portfolio",
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const fields = [
    {
      id: "name",
      label: "YOUR NAME",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      label: "YOUR EMAIL",
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      id: "subject",
      label: "SUBJECT",
      type: "text",
      placeholder: "What would you like to discuss?",
    },
    {
      id: "message",
      label: "MESSAGE",
      type: "textarea",
      placeholder: "Type your message here...",
    },
  ];

  // 🚩 Shared Light Mode and Dark Mode styling
  const cardStyle =
    "bg-cyan-50 dark:bg-[#172B38]/95 border border-cyan-400 dark:border-cyan-700/40 rounded-xl shadow-[0_0_22px_rgba(34,211,238,0.22)] dark:shadow-xl p-6 md:p-8";
  const inputStyle =
    "w-full bg-white dark:bg-[#0B1017] text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 border border-cyan-300 dark:border-slate-700 rounded-md px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-colors";
  const iconStyle =
    "bg-cyan-200/70 dark:bg-cyan-400/10 text-cyan-700 dark:text-cyan-400 p-3 rounded-lg";
  const smallHeadingStyle =
    "text-sm font-bold mb-1 text-cyan-900 dark:text-slate-200";
  const linkStyle =
    "text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors";

  return (
    <section className="min-h-screen bg-slate-100 dark:bg-[#0B1017] text-slate-900 dark:text-slate-100 px-4 py-12 md:px-8">
      {/* 🚩 Page heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-[0.15em] text-slate-900 dark:text-white">
          GET IN <span className="text-cyan-500 dark:text-cyan-400">TOUCH</span>
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Interested in working together? I'd love to hear from you.
        </p>
      </div>

      {/* 🚩 Two-column layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT: Contact form */}
        <div className={cardStyle}>
          <h2 className="text-xl font-bold tracking-wide mb-6 text-cyan-800 dark:text-white">
            SEND ME A MESSAGE
          </h2>

          {sent ? (
            <div role="status" className="text-center py-12">
              <p className="text-green-700 dark:text-green-400 font-semibold text-lg mb-6">
                Message sent! Thanks for reaching out.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="bg-cyan-400 hover:bg-cyan-300 text-[#0B1017] font-bold py-3 px-6 rounded-md transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {fields.map(({ id, label, type, placeholder }) => (
                <div key={id} className="mb-5">
                  <label
                    htmlFor={id}
                    className="block text-xs font-bold tracking-wider text-cyan-900 dark:text-slate-200 mb-2"
                  >
                    {label}
                  </label>

                  {type === "textarea" ? (
                    <textarea
                      id={id}
                      name={id}
                      value={formData[id]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={placeholder}
                      rows={5}
                      aria-invalid={Boolean(errors[id])}
                      aria-describedby={errors[id] ? `${id}-error` : undefined}
                      className={`${inputStyle} resize-y`}
                    />
                  ) : (
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={placeholder}
                      aria-invalid={Boolean(errors[id])}
                      aria-describedby={errors[id] ? `${id}-error` : undefined}
                      className={inputStyle}
                    />
                  )}

                  {errors[id] && (
                    <p
                      id={`${id}-error`}
                      className="text-red-600 dark:text-red-400 text-sm mt-2"
                    >
                      {errors[id]}
                    </p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-[#0B1017] font-bold py-3 px-4 rounded-md transition-colors shadow-[0_0_14px_rgba(34,211,238,0.25)]"
              >
                {sending ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: Contact information */}
        <div className="space-y-6">
          <div className={cardStyle}>
            <h2 className="text-xl font-bold tracking-wide mb-7 text-cyan-800 dark:text-white">
              CONTACT INFO
            </h2>

            <div className="space-y-7">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className={iconStyle}>
                  <FaEnvelope size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className={smallHeadingStyle}>EMAIL</h3>
                  <a
                    href="mailto:Iankessack1989@gmail.com"
                    className={`${linkStyle} break-all`}
                  >
                    Iankessack1989@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className={iconStyle}>
                  <FaGithub size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className={smallHeadingStyle}>GITHUB</h3>
                  <a
                    href="https://github.com/IK8933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkStyle} break-all`}
                  >
                    github.com/IK8933
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className={iconStyle}>
                  <FaLinkedin size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className={smallHeadingStyle}>LINKEDIN</h3>
                  <a
                    href="https://www.linkedin.com/in/ian-kessack/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyle}
                  >
                    View my LinkedIn profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 🚩 Availability section */}
          <div className={cardStyle}>
            <h2 className="text-xl font-bold tracking-wide mb-5 text-cyan-800 dark:text-white">
              AVAILABILITY
            </h2>

            <div className="flex items-start gap-4">
              <div className={iconStyle}>
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2 text-cyan-900 dark:text-slate-200">
                  LOCATION & OPPORTUNITIES
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Based in Florida. Open to entry-level software development
                  opportunities and relocation nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
