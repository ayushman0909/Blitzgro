import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim())
      newErrors.message = "Please describe your project";

    setErrors(newErrors);

    if (Object.keys(newErrors).length) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyDFKAr-QQxHZ5DXp90GbZa99nJXCxduQ7HniQg9LynjcoaVCwVz4nN3-tnV-rWr9Q9_A/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
    <section className="relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-100 py-28">
      {/* Decorative blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
        {/* LEFT CONTENT */}
        <div className="space-y-7">
          <span className="inline-block text-black text-2xl font-extrabold uppercase tracking-[0.25em]">
            Contact Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight bg-linear-to-r from-green-800 to-green-500 bg-clip-text text-transparent">
            Let’s build something impactful together
          </h2>

          <p className="text-lg text-gray-600 max-w-xl">
            Share your business goals and our experts will guide you with a
            free, no-obligation consultation.
          </p>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">✅ Response within 24 hours</li>
            <li className="flex items-center gap-2">✅ Free expert consultation</li>
            <li className="flex items-center gap-2">✅ Your data stays confidential</li>
          </ul>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className={`relative bg-white/80 backdrop-blur-xl rounded-3xl
          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          border border-gray-100
          p-10 space-y-7 transition-all duration-300
          ${shake ? "animate-shake" : ""}`}
        >
          {success && (
            <div className="bg-green-50 text-green-700 p-4 rounded-xl text-sm border border-green-200 animate-fade-in shadow">
              ✅ Thanks! Our team will reach out shortly.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <Field
              label="Full Name *"
              name="name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
              placeholder="John Doe"
            />

            <Field
              label="Email Address *"
              name="email"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
              placeholder="john@email.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Field
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />

            <Field
              label="Business / Company"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Your Company"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Project Details *
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`mt-2 w-full rounded-xl border bg-white
              px-4 py-3 text-gray-800 shadow-sm outline-none
              transition-all duration-300
              focus:ring-2 focus:ring-yellow-400/60
              focus:border-yellow-400
              focus:shadow-[0_0_0_4px_rgba(250,204,21,0.15)]
              hover:border-gray-400
              ${
                errors.message
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300"
              }`}
              placeholder="Briefly describe your goals..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            disabled={loading}
            className="relative w-full overflow-hidden
            bg-linear-to-r from-black to-gray-800
            text-white py-4 rounded-xl font-semibold tracking-wide
            transition-all duration-300
            hover:scale-[1.03] hover:shadow-2xl
            active:scale-95 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Get Free Consultation"}
          </button>

          <p className="text-center text-sm text-gray-500">
            We usually respond within 24 hours.
          </p>
        </form>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes shake {
            0%,100% { transform: translateX(0); }
            25% { transform: translateX(-6px); }
            50% { transform: translateX(6px); }
            75% { transform: translateX(-4px); }
          }
          .animate-shake {
            animation: shake 0.4s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.4s ease-out;
          }
        `}
      </style>
    </section>
    </PageWrapper>
  );
}

/* ---------- Reusable Field ---------- */
function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-xl border bg-white
        px-4 py-3 text-gray-800 shadow-sm outline-none
        transition-all duration-300
        focus:ring-2 focus:ring-yellow-400/60
        focus:border-yellow-400
        focus:shadow-[0_0_0_4px_rgba(250,204,21,0.15)]
        hover:border-gray-400
        ${
          error
            ? "border-red-400 focus:ring-red-300"
            : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
