import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 29, 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Hootly. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our email outreach platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Account information (name, email address, password)</li>
                <li>Contact lists and email content you create</li>
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
                <li>Payment information (processed securely by third-party providers)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide and maintain our email outreach services</li>
                <li>Process your transactions and manage your account</li>
                <li>Send you important updates about our service</li>
                <li>Improve our platform and develop new features</li>
                <li>Ensure compliance with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information. 
                This includes encryption, secure servers, and regular security audits. However, no method 
                of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share data with trusted third-party 
                service providers who assist us in operating our platform, conducting our business, 
                or servicing you, as long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our platform. 
                You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy, please contact us through our 
                LinkedIn page or email support.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
