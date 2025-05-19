
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dealershipName: "",
    isExistingCustomer: "no",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would normally send the data to your PHP script
      // const response = await fetch('process-form.php', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      
      // if (!response.ok) throw new Error('Form submission failed');

      console.log("Form submitted successfully:", formData);
      toast({
        title: "Success!",
        description: "Your information has been submitted. We'll be in touch soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        dealershipName: "",
        isExistingCustomer: "no",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "There was a problem with your submission. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            * Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            * Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            * Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="dealershipName" className="block text-sm font-medium text-gray-700 mb-1">
            * Dealership Name
          </label>
          <input
            id="dealershipName"
            name="dealershipName"
            type="text"
            required
            value={formData.dealershipName}
            onChange={handleChange}
            placeholder="Your dealership name"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="isExistingCustomer" className="block text-sm font-medium text-gray-700 mb-1">
            Are you an existing customer?
          </label>
          <select
            id="isExistingCustomer"
            name="isExistingCustomer"
            value={formData.isExistingCustomer}
            onChange={handleChange}
            className="input-field"
          >
            <option value="no">I'm NOT an existing Nexacore Customer</option>
            <option value="yes">Yes, I'm an existing Nexacore Customer</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary mt-2 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "LEARN WHY"}
        </button>

        <p className="text-xs text-gray-500 mt-4">
          By submitting this form, you agree to our <Link to="/privacy-policy" className="text-orange-500 hover:underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-orange-500 hover:underline">Terms of Service</Link>.
          Your information will be used to contact you about our services.
        </p>
      </div>
    </form>
  );
};

export default LeadForm;
