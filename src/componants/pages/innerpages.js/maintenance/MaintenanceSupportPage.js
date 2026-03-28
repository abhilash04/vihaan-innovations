import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Clock,
  Settings,
  HelpCircle,
  MessageSquare,
  CheckCircle2,
  Lock,
  RefreshCcw,
  BarChart3,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Header from "../../../common/HeaderSec";
import Footer from "../../../common/Footer";

const MaintenanceSupportPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: <Lock size={32} />,
      title: "Security & Compliance",
      desc: "Proactive vulnerability scanning, firewall management, and regular security audits to keep your data safe.",
      color: "#2563eb",
    },
    {
      icon: <RefreshCcw size={32} />,
      title: "Updates & Backups",
      desc: "Daily automated backups and scheduled software updates to ensure your systems are always current and recoverable.",
      color: "#06b6d4",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Tuning",
      desc: "Resource optimization, database indexing, and speed enhancements for a seamless user experience.",
      color: "#10b981",
    },
    {
      icon: <Settings size={32} />,
      title: "Bug Fixing & Support",
      desc: "Fast resolution of technical issues and 24/7 technical support from our lead developers.",
      color: "#8b5cf6",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "SEO & Content Health",
      desc: "Regular checks for broken links, metadata optimization, and page speed monitoring for search visibility.",
      color: "#f59e0b",
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Dedicated Helpdesk",
      desc: "Access to our ticketing system with guaranteed response times based on your service level agreement.",
      color: "#ec4899",
    },
  ];

  const plans = [
    {
      name: "Essential",
      price: "Starter",
      features: [
        "Monthly Updates",
        "Weekly Backups",
        "Email Support",
        "48hr Response Time",
        "Security Monitoring",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "Most Popular",
      features: [
        "Bi-Weekly Updates",
        "Daily Backups",
        "Priority Email & Chat",
        "12hr Response Time",
        "Advanced Security",
        "Performance Reports",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Weekly Updates",
        "Real-time Backups",
        "Direct Call Support",
        "4hr Response Time",
        "Full Security Audit",
        "Dedicated Manager",
        "Custom Feature Dev",
      ],
      recommended: false,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fafcfe", minHeight: "100vh", overflow: "hidden" }}>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 18 },
          pb: { xs: 8, md: 10 },
          background: "linear-gradient(135deg, #f8faff 0%, #ebf4ff 100%)",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <motion.div {...fadeIn}>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#2563eb",
                  fontWeight: 700,
                  letterSpacing: 2,
                  mb: 2,
                  display: "block",
                }}
              >
                PROACTIVE SOLUTIONS
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "32px", md: "56px" },
                  fontWeight: 800,
                  color: "#1e293b",
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Premier Maintenance & <br />
                <Box component="span" sx={{ color: "#2563eb" }}>
                  Expert Support
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  color: "#64748b",
                  maxWidth: "700px",
                  mx: "auto",
                  mb: 5,
                }}
              >
                We handle the technical complexities so you can focus on growing your business.
                Experience zero downtime and peak performance with our dedicated expert team.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#2563eb",
                    color: "white",
                    px: 4,
                    py: 2,
                    borderRadius: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#1d4ed8" },
                  }}
                >
                  View Plans
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#2563eb",
                    borderColor: "#2563eb",
                    px: 4,
                    py: 2,
                    borderRadius: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Contact Support
                </Button>
              </Box>
            </Box>
          </motion.div>

          {/* Stats Bar */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              { icon: <ShieldCheck color="#2563eb" />, value: "99.9%", label: "Uptime Guaranteed" },
              { icon: <Clock color="#2563eb" />, value: "15 min", label: "Average Response" },
              { icon: <CheckCircle2 color="#2563eb" />, value: "24/7", label: "Expert Monitoring" },
            ].map((stat, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    border: "1px solid #e2e8f0",
                    bgcolor: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {stat.icon}
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: "#1e293b" }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: "36px", fontWeight: 800, color: "#1e293b", mb: 2 }}>
            Comprehensive Support Ecosystem
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748b", maxWidth: "600px", mx: "auto" }}>
            Our multi-layered approach ensures your digital assets are protected, optimized, and always available.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "24px",
                    border: "1px solid #e8f3ffff",
                    backgroundColor: '#e8f3ffff',
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                      borderColor: service.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      bgcolor: `${service.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: service.color,
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#1e293b" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.7 }}>
                    {service.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Tiers Section */}
      <Box sx={{ bgcolor: "#e8eeffff", py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: "36px", fontWeight: 800, color: "#1e293b", mb: 2 }}>
              Maintenance & Success Plans
            </Typography>
            <Typography variant="body1" sx={{ color: "#64748b" }}>
              Tailored solutions for businesses of all scales.
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="flex-end">
            {plans.map((plan, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  elevation={plan.recommended ? 20 : 0}
                  sx={{
                    p: 5,
                    borderRadius: "32px",
                    border: plan.recommended ? "none" : "1px solid #e2e8f0",
                    position: "relative",
                    bgcolor: "white",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                >
                  {plan.recommended && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 24,
                        right: 24,
                        bgcolor: "#2563eb",
                        color: "white",
                        px: 2,
                        py: 0.5,
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      RECOMMENDED
                    </Box>
                  )}
                  <Typography variant="h6" sx={{ color: "#64748b", fontWeight: 600, mb: 1 }}>
                    {plan.name}
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: "#1e293b", mb: 4 }}>
                    {plan.price}
                  </Typography>
                  <Box sx={{ mb: 4 }}>
                    {plan.features.map((feat, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                        <CheckCircle2 size={18} color="#2563eb" />
                        <Typography variant="body2" sx={{ color: "#475569", fontWeight: 500 }}>
                          {feat}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    fullWidth
                    variant={plan.recommended ? "contained" : "outlined"}
                    sx={{
                      borderRadius: "12px",
                      py: 1.5,
                      textTransform: "none",
                      fontWeight: 700,
                      bgcolor: plan.recommended ? "#2563eb" : "transparent",
                      color: plan.recommended ? "white" : "#2563eb",
                      borderColor: "#2563eb",
                      "&:hover": {
                        bgcolor: plan.recommended ? "#1d4ed8" : "rgba(37, 99, 235, 0.05)",
                        borderColor: "#1d4ed8",
                      },
                    }}
                  >
                    Select Plan
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Emergency Section */}
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Paper
          sx={{
            p: { xs: 4, md: 8 },
            borderRadius: "40px",
            background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <motion.div {...fadeIn}>
            <HelpCircle size={48} color="#fca311" style={{ marginBottom: "24px" }} />
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
              Emergency System Assistance?
            </Typography>
            <Typography variant="body1" sx={{ color: "#cbd5e1", mb: 4, fontSize: "18px" }}>
              Facing a critical system failure or a security breach? Our rapid response unit is ready to assist you immediately.
            </Typography>
            <Button
              sx={{
                bgcolor: "#fca311",
                color: "#1e293b",
                px: 5,
                py: 2,
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { bgcolor: "#e6950f" },
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              Call Emergency Support <ArrowRight size={20} />
            </Button>
          </motion.div>
        </Paper>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#e8f3ffff' }}>
        <Container maxWidth="lg" sx={{ py: 10, mb: 6, }}>
          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: "36px", fontWeight: 800, color: "#1e293b", mb: 2 }}>
              Common Questions;
            </Typography>
            <Typography variant="body1" sx={{ color: "#64748b" }}>
              Everything you need to know about our maintenance ecosystem.
            </Typography>
          </Box>

          {[
            { q: "Why do I need a maintenance plan?", a: "Software is an ever-evolving ecosystem. Regular maintenance prevents security breaches, ensures compatibility with new browser versions, and keeps performance optimal, saving you from costly emergency repairs later." },
            { q: "What is your typical response time?", a: "Standard response time is within 48 hours. For Professional plans, it's 12 hours, and for Enterprise customers, we guarantee a 4-hour response time for critical issues." },
            { q: "Do you provide support for third-party tools?", a: "Yes, we support a wide range of third-party integrations, APIs, and plugins. Our team will coordinate with other vendors if necessary to resolve conflicts." },
            { q: "Can I upgrade or downgrade my plan?", a: "Absolutely. You can change your plan at any time. Changes will be reflected in your next billing cycle." },
          ].map((faq, i) => (
            <Accordion
              key={i}
              elevation={0}
              sx={{
                mb: 2,
                borderRadius: "16px !important",
                border: "1px solid #e2e8f0",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ChevronDown />}>
                <Typography sx={{ fontWeight: 600, color: "#1e293b", py: 1 }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#64748b", lineHeight: 1.6 }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default MaintenanceSupportPage;
