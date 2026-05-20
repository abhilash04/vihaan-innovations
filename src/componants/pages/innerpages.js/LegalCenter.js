import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import HeaderSec from "../../common/HeaderSec";
import FooterAndPopup from "../../common/Footer";
import { motion } from "framer-motion";

const SIDEBAR_LINKS = [
  { title: "Terms & Conditions", path: "/terms-and-conditions", id: "terms" },
  { title: "Privacy Policy", path: "/privacy-policy", id: "privacy" },
  { title: "Refund Policy", path: "/refund-policy", id: "refund" },
  { title: "Cancellation Policy", path: "/cancellation-policy", id: "cancellation" }
];

// Reusable Highlight Box
const HighlightBox = ({ title, children }) => (
  <Box sx={{ bgcolor: "rgba(200, 68, 42, 0.05)", borderLeft: "4px solid #c8442a", p: { xs: 3, md: 4 }, my: 4, borderRadius: "0 8px 8px 0" }}>
    {title && <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "20px", color: "#c8442a", mb: 1 }}>{title}</Typography>}
    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#2d3748", lineHeight: 1.7, fontSize: "16px" }}>
      {children}
    </Typography>
  </Box>
);

const SectionHeading = ({ children }) => (
  <Typography variant="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: { xs: "24px", md: "28px" }, color: "#0f172a", mt: 6, mb: 3, display: "flex", alignItems: "center", gap: 2 }}>
    <Box component="span" sx={{ width: "24px", height: "2px", bgcolor: "#c8442a", display: "inline-block" }} />
    {children}
  </Typography>
);

const Paragraph = ({ children, bold }) => (
  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", lineHeight: 1.8, color: "#334155", mb: 2, fontWeight: bold ? 600 : 400 }}>
    {children}
  </Typography>
);

// Policy contents
const TermsContent = () => (
  <Box component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Typography sx={{ color: "#c8442a", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "13px", mb: 2, fontFamily: "'DM Sans', sans-serif" }}>COMPANY POLICIES</Typography>
    <Typography variant="h1" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: { xs: "40px", md: "56px" }, color: "#0f172a", lineHeight: 1.1, mb: 3 }}>
      Terms & Conditions
    </Typography>
    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: "15px", mb: 5, fontStyle: "italic" }}>
      Effective Date: January 1, 2025
    </Typography>

    <HighlightBox title="Agreement to Terms">
      By accessing or using the services provided by Vihan Innovations, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our services or technology platforms.
    </HighlightBox>

    <SectionHeading>Service Provision & Eligibility</SectionHeading>
    <Paragraph>
      Vihan Innovations provides IT consulting, custom software development, digital marketing, and enterprise solutions. Our services are intended for business entities and individuals legally capable of entering into binding contracts.
    </Paragraph>
    <Paragraph>
      We reserve the right to refuse service, terminate accounts, or cancel projects at our sole discretion if we believe that user conduct violates applicable laws or is harmful to our interests.
    </Paragraph>

    <SectionHeading>User Registration & Account Responsibility</SectionHeading>
    <Paragraph>
      Access to certain specialized services or client portals may require user registration. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
    </Paragraph>
    <Paragraph>
      Registration is currently ongoing for all users; however, Vihaan Innovations reserves the right to restrict registration, verify user identities, or terminate profiles at our sole discretion to maintain the platform's security and enterprise integrity.
    </Paragraph>

    <SectionHeading>Intellectual Property Rights</SectionHeading>
    <Paragraph>
      All content, software, code, designs, and materials created or provided by Vihan Innovations remain the exclusive intellectual property of the Company until all payment obligations are met as per the specific project agreement.
    </Paragraph>
    <Paragraph>
      Upon full payment, intellectual property rights for custom-developed software are transferred to the client, excluding any pre-existing proprietary frameworks, libraries, or third-party tools used in the development process.
    </Paragraph>

    <SectionHeading>Client Responsibilities</SectionHeading>
    <Paragraph>
      Clients are expected to provide timely feedback, necessary assets, and domain/server credentials required for project execution. Any delays caused by the client may result in project timeline extensions and potentially additional costs.
    </Paragraph>

    <SectionHeading>Limitation of Liability</SectionHeading>
    <Paragraph>
      In no event shall Vihan Innovations, nor its directors, employees, partners, or agents, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, arising out of your access to or use of our services.
    </Paragraph>
  </Box>
);

const PrivacyContent = () => (
  <Box component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Typography sx={{ color: "#c8442a", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "13px", mb: 2, fontFamily: "'DM Sans', sans-serif" }}>DATA PROTECTION</Typography>
    <Typography variant="h1" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: { xs: "40px", md: "56px" }, color: "#0f172a", lineHeight: 1.1, mb: 3 }}>
      Privacy Policy
    </Typography>
    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: "15px", mb: 5, fontStyle: "italic" }}>
      Effective Date: January 1, 2025
    </Typography>

    <HighlightBox title="Our Commitment to Privacy">
      Vihan Innovations respects your right to privacy. We strictly adhere to data protection regulations (including the DPDP Act of India) to ensure your personal and business information is securely handled and never sold to third parties.
    </HighlightBox>

    <SectionHeading>Information We Collect</SectionHeading>
    <Paragraph>
      We may collect personal identification information (Name, Email, Phone Number, Company Details) when you voluntarily submit it through our website forms, subscribe to our newsletter, or engage in a project with us.
    </Paragraph>
    <Paragraph>
      We also collect non-personal identification information automatically, such as browser names, IP addresses, and technical data about your connection to our site, through the use of cookies and analytics tools.
    </Paragraph>

    <SectionHeading>How We Use Your Information</SectionHeading>
    <Paragraph>
      The data we collect is utilized for specific business purposes:
    </Paragraph>
    <Box component="ul" sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#334155", lineHeight: 1.8, pl: 3, mb: 3 }}>
      <li>To deliver and maintain our IT consulting and software development services.</li>
      <li>To personalize user experience and improve our digital offerings.</li>
      <li>To process payments and manage project billing securely.</li>
      <li>To send periodic communications regarding project updates, system alerts, or promotional content (you may opt-out at any time).</li>
    </Box>

    <SectionHeading>Data Security Protocols</SectionHeading>
    <Paragraph>
      We adopt enterprise-grade data collection, storage, and processing practices. Our servers feature SSL encryption, multi-factor authentication, and strict access controls to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
    </Paragraph>

    <SectionHeading>Third-Party Sharing</SectionHeading>
    <Paragraph>
      Vihan Innovations does not sell, trade, or rent your personal identification information. We may share generic aggregated demographic information with our trusted business partners, or employ third-party service providers (such as payment gateways or cloud hosting like AWS/Google Cloud) solely to help us operate our business.
    </Paragraph>
  </Box>
);

const RefundContent = () => (
  <Box component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Typography sx={{ color: "#c8442a", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "13px", mb: 2, fontFamily: "'DM Sans', sans-serif" }}>FINANCIAL TERMS</Typography>
    <Typography variant="h1" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: { xs: "40px", md: "56px" }, color: "#0f172a", lineHeight: 1.1, mb: 3 }}>
      Refund Policy
    </Typography>
    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: "15px", mb: 5, fontStyle: "italic" }}>
      Effective Date: January 1, 2025
    </Typography>

    <HighlightBox title="Important Notice">
      Due to the custom nature of software development and IT services, full refunds are generally not accommodated once active development or service execution has commenced. Please review the detailed parameters below.
    </HighlightBox>

    <SectionHeading>Software & Web Development Projects</SectionHeading>
    <Paragraph>
      Payments for custom web development, mobile app development, and ERP/CRM solutions are divided into milestones. An initial advance payment is required to initiate the project.
    </Paragraph>
    <Paragraph bold>
      - Advance payments are non-refundable once the initial discovery & design phase has been completed and approved by the client.
    </Paragraph>
    <Paragraph>
      If a project is cancelled by the client during the development phase, no refund will be issued for the milestones already completed and delivered. The client will retain ownership of the work completed up to the point of cancellation, provided it is paid for.
    </Paragraph>

    <SectionHeading>Digital Marketing & Maintenance Contracts</SectionHeading>
    <Paragraph>
      Services such as SEO, Digital Marketing, and App/Website Maintenance are billed on a monthly or quarterly retainer basis.
    </Paragraph>
    <Paragraph>
      These retainers are non-refundable. However, if a client is dissatisfied, they may request a cancellation of the service for the upcoming billing cycle by providing a 15-day written notice.
    </Paragraph>

    <SectionHeading>Ready Products & SaaS Licenses</SectionHeading>
    <Paragraph>
      For off-the-shelf software, CRM platforms, or SaaS subscriptions purchased from Vihan Innovations, we offer a 7-day money-back guarantee if the software fails to function as advertised and our technical team is unable to resolve the issue. Refunds will not be granted for changes of mind or mismatched expectations after the trial/demonstration phase.
    </Paragraph>

    <SectionHeading>Processing Refunds</SectionHeading>
    <Paragraph>
      Approved refunds will be processed and credited back to the original method of payment within 10-15 business days. Bank charges or payment gateway transaction fees may be deducted from the final refund amount.
    </Paragraph>
  </Box>
);

const CancellationContent = () => (
  <Box component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Typography sx={{ color: "#c8442a", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "13px", mb: 2, fontFamily: "'DM Sans', sans-serif" }}>ENGAGEMENT TERMS</Typography>
    <Typography variant="h1" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: { xs: "40px", md: "56px" }, color: "#0f172a", lineHeight: 1.1, mb: 3 }}>
      Cancellation Policy
    </Typography>
    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: "15px", mb: 5, fontStyle: "italic" }}>
      Effective Date: January 1, 2025
    </Typography>

    <HighlightBox title="Cancellation Protocol">
      To ensure smooth operational transitions, all project and service cancellations must be submitted in formally written communication formats. Verbal cancellations will not be recognized.
    </HighlightBox>

    <SectionHeading>Project Cancellations</SectionHeading>
    <Paragraph>
      Clients may cancel ongoing IT projects (Web, App, Software Development) by providing a formal written notice to their designated account manager or directly to our billing department at contact@vihaaninnovations.com.
    </Paragraph>
    <Paragraph>
      Upon cancellation, all work will immediately halt. The client is obligated to pay for all hours logged and resources utilized up to the cancellation date, regardless of whether a milestone is fully complete.
    </Paragraph>

    <SectionHeading>Service Retainer Cancellations</SectionHeading>
    <Paragraph>
      Monthly retainer services (such as Server Management, SEO, Maintenance) require a designated notice period prior to the next billing cycle.
    </Paragraph>
    <Paragraph bold>
      - Standard Notice Period: 15 Days
    </Paragraph>
    <Paragraph>
      Failure to provide the 15-day notice will result in the client being billed for the subsequent month of service.
    </Paragraph>

    <SectionHeading>Cancellations by Vihan Innovations</SectionHeading>
    <Paragraph>
      We reserve the right to cancel or pause any project or service if a client breaches the Terms and Conditions, engages in abusive behavior toward our staff, or fails to fulfill payment obligations for more than 30 consecutive days. In such events, the client will be notified in writing, and any outstanding balances will become immediately due.
    </Paragraph>
  </Box>
);

const LegalCenter = () => {
  const location = useLocation();
  const theme = useTheme();

  // Check current path against specific policy paths
  const currentPath = location.pathname;
  let activePolicy = "terms";
  if (currentPath.includes("privacy")) activePolicy = "privacy";
  if (currentPath.includes("refund")) activePolicy = "refund";
  if (currentPath.includes("cancellation")) activePolicy = "cancellation";

  return (
    <Box sx={{ bgcolor: "#faf8f4", minHeight: "100vh" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        `}
      </style>
      <HeaderSec />

      {/* Main Content Layout */}
      <Container maxWidth="lg" sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 12 }, px: { xs: 3, md: 6 } }}>
        <Grid container spacing={{ xs: 6, md: 10 }}>

          {/* Left Sticky Sidebar */}
          <Grid item xs={12} md={3.5} sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={{
              position: { md: "sticky" },
              top: { md: "120px" },
              bgcolor: "#ffffff",
              borderRadius: "16px",
              p: { xs: 3, md: 4 },
              boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
              mb: { xs: 2, md: 0 }
            }}>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "22px", color: "#0f172a", mb: 3 }}>
                Legal Hub
              </Typography>

              <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {SIDEBAR_LINKS.map((link) => {
                  const isActive = activePolicy === link.id;
                  return (
                    <RouterLink
                      to={link.path}
                      key={link.id}
                      style={{ textDecoration: "none" }}
                    >
                      <Box sx={{
                        py: 1.5,
                        px: 2,
                        borderRadius: "8px",
                        bgcolor: isActive ? "rgba(200, 68, 42, 0.08)" : "transparent",
                        color: isActive ? "#c8442a" : "#64748b",
                        fontWeight: isActive ? 600 : 500,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        transition: "all 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        "&:hover": {
                          bgcolor: isActive ? "rgba(200, 68, 42, 0.08)" : "rgba(0,0,0,0.02)",
                          color: isActive ? "#c8442a" : "#0f172a"
                        }
                      }}>
                        {link.title}
                      </Box>
                    </RouterLink>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* Right Content Area */}
          <Grid item xs={12} md={8.5}>
            {activePolicy === "terms" && <TermsContent />}
            {activePolicy === "privacy" && <PrivacyContent />}
            {activePolicy === "refund" && <RefundContent />}
            {activePolicy === "cancellation" && <CancellationContent />}

            {/* Contact Block */}
            <Box sx={{ mt: 8, pt: 8, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              <Box sx={{ bgcolor: "#0f172a", borderRadius: "16px", p: { xs: 4, md: 6 }, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "center" }, gap: 4 }}>
                <Box>
                  <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "28px", color: "#ffffff", mb: 1 }}>
                    Have legal questions?
                  </Typography>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#94a3b8", fontSize: "16px", maxWidth: "400px" }}>
                    Reach out to our compliance and legal team for clarifications regarding our enterprise policies.
                  </Typography>
                </Box>
                <Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#ffffff", fontWeight: 600, fontSize: "16px", display: "flex", alignItems: "center", gap: 2 }}>
                      <span style={{ color: "#c8442a" }}>E.</span> contact@vihaaninnovations.com
                    </Typography>
                    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#ffffff", fontWeight: 600, fontSize: "16px", display: "flex", alignItems: "center", gap: 2 }}>
                      <span style={{ color: "#c8442a" }}>T.</span> +91 99648 48414
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>

      <FooterAndPopup />
    </Box>
  );
};

export default LegalCenter;
