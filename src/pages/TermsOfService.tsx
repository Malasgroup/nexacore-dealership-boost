
import React from "react";
import { Helmet } from "react-helmet";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Nexacore Marketing Agency</title>
        <meta 
          name="description" 
          content="Terms of Service for Nexacore Marketing Agency - Read our terms and conditions for using our marketing services." 
        />
      </Helmet>
      
      <div className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services offered by Nexacore Marketing Agency ("we," "our," or "us"), including our website at nexacoreagency.com, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, you may not access or use our services.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
              <p>
                Nexacore Marketing Agency provides marketing services specifically designed for automotive dealerships, including but not limited to digital marketing, lead generation, social media management, SEO optimization, and content strategy.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Fees and Payment</h2>
              <p>
                We offer a one-week free trial period for new clients. After the trial period, you agree to pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. Payment for our services must be made by the methods specified by us. You are responsible for providing accurate and complete billing information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property Rights</h2>
              <p>
                All content included on our website, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Nexacore Marketing Agency or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Nexacore Marketing Agency and protected by international copyright laws.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Content</h2>
              <p>
                You retain all your ownership rights in any content you submit, post, or display on or through our services. By submitting content to us, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with providing our services to you.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
              <p>
                Nexacore Marketing Agency will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services; (ii) any conduct or content of any third party on the services; or (iii) unauthorized access, use, or alteration of your transmissions or content.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: info@nexacoreagency.com<br />
                Nexacore Marketing Agency<br />
                123 Marketing Ave<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
