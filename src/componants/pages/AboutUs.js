import { useEffect, useRef, useState } from "react";
import {
  Box, Typography, Button, Grid, Card, CardContent, Avatar,
  Chip, Container, Divider, Rating, Paper, useTheme, useMediaQuery
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ApartmentIcon from "@mui/icons-material/Apartment";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import EmailIcon from "@mui/icons-material/Email";

// Fade-in hook
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeSection({ children, delay = 0, style = {} }) {
  const [ref, visible] = useFadeIn();
  return (
    <Box ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style
    }}>
      {children}
    </Box>
  );
}

function SectionLabel({ children }) {
  return (
    <Typography sx={{ fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#F59E0B", fontWeight: 700, mb: 1 }}>
      {children}
    </Typography>
  );
}

function SectionTitle({ children, center = false, light = false }) {
  return (
    <Typography variant="h2" sx={{
      fontFamily: "'Playfair Display', serif",
      fontSize: { xs: "26px", md: "32px" },
      fontWeight: 800,
      color: light ? "#fff" : "#0A1628",
      mb: 1.5,
      lineHeight: 1.22,
      textAlign: center ? "center" : "left"
    }}>
      {children}
    </Typography>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <Box sx={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(10,22,40,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      transition: "all 0.3s ease",
      py: scrolled ? 1 : 1.5, px: { xs: 2, md: 5 },
      display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "20px", color: "#fff", letterSpacing: 0.5 }}>
        ⬡ NexCore
      </Typography>
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3.5, alignItems: "center" }}>
        {["Home", "About Us", "Services", "Training", "Product", "Careers", "Contact"].map((l, i) => (
          <Typography key={l} sx={{ fontSize: "13px", color: i === 1 ? "#F59E0B" : "rgba(255,255,255,0.7)", cursor: "pointer", "&:hover": { color: "#F59E0B" }, transition: "color 0.2s" }}>
            {l}
          </Typography>
        ))}
        <Button size="small" sx={{ background: "#F59E0B", color: "#0A1628", fontWeight: 700, fontSize: "12px", px: 2.5, py: 0.9, borderRadius: "6px", "&:hover": { background: "#E08C00" }, textTransform: "none" }}>
          Get a Quote
        </Button>
      </Box>
    </Box>
  );
}

// ─── HERO ─────────────────────────────────────────────────
function Hero() {
  return (
    <Box sx={{
      background: "linear-gradient(135deg, #060D1A 0%, #0A1628 45%, #0E2952 100%)",
      pt: { xs: 14, md: 14 }, pb: 0, position: "relative", overflow: "hidden", minHeight: "92vh"
    }}>
      {/* decorative circles */}
      <Box sx={{ position: "absolute", right: -80, top: -80, opacity: 0.05, pointerEvents: "none" }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
          {[220, 170, 120, 70, 30].map((r, i) => (
            <circle key={i} cx="250" cy="250" r={r} stroke="white" strokeWidth={i === 4 ? 0 : 1.5} fill={i === 4 ? "white" : "none"} fillOpacity="0.4" />
          ))}
        </svg>
      </Box>
      {/* dot grid */}
      <Box sx={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center" sx={{ minHeight: "70vh" }}>
          <Grid item xs={12} md={6}>
            <FadeSection>
              <Chip label="✦  Who We Are" sx={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.35)", color: "#F59E0B", fontSize: "10px", letterSpacing: "1.5px", mb: 2.5, fontWeight: 600 }} />
              <Typography variant="h1" sx={{
                fontFamily: "'Playfair Display', serif", fontWeight: 800,
                fontSize: { xs: "38px", md: "52px" }, color: "#fff", lineHeight: 1.12, mb: 2.5
              }}>
                We{" "}
                <Box component="span" sx={{ color: "#F59E0B" }}>Build, Train</Box>
                {" "}&amp;{" "}Transform Businesses
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.62)", fontSize: "14.5px", lineHeight: 1.78, mb: 3.5, maxWidth: 460 }}>
                Delivering end-to-end services, professional training programmes, and cutting-edge software products that empower organisations to grow with confidence and clarity.
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                <Button endIcon={<ArrowForwardIcon />} sx={{ background: "#F59E0B", color: "#0A1628", fontWeight: 700, fontSize: "13px", px: 3, py: 1.4, borderRadius: "7px", textTransform: "none", "&:hover": { background: "#E08C00", transform: "translateY(-2px)" }, transition: "all 0.2s" }}>
                  Explore Our Work
                </Button>
                <Button variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff", fontWeight: 500, fontSize: "13px", px: 3, py: 1.4, borderRadius: "7px", textTransform: "none", "&:hover": { borderColor: "#F59E0B", color: "#F59E0B", background: "transparent" }, transition: "all 0.2s" }}>
                  Get In Touch →
                </Button>
              </Box>
            </FadeSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <FadeSection delay={0.2}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, position: "relative" }}>
                <Chip label="✦ ISO Certified" sx={{ position: "absolute", top: -14, right: 0, zIndex: 1, background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.35)", color: "#F59E0B", fontSize: "11px", fontWeight: 600 }} />
                {[
                  { icon: "💼", title: "End-to-End Services", desc: "Consulting · Implementation · Managed Support" },
                  { icon: "🎓", title: "Training Programmes", desc: "Certifications · Workshops · E-Learning Platforms" },
                  { icon: "🚀", title: "Our Flagship Product", desc: "SaaS Platform · Built In-House · 500+ Clients" },
                ].map((item, i) => (
                  <Box key={i} sx={{
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px", p: 2.2, backdropFilter: "blur(10px)",
                    "&:hover": { background: "rgba(255,255,255,0.08)", borderColor: "rgba(245,158,11,0.3)", transform: "translateX(4px)" },
                    transition: "all 0.25s"
                  }}>
                    <Typography sx={{ fontSize: "20px", mb: 0.4 }}>{item.icon}</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "14px", mb: 0.3 }}>{item.title}</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>{item.desc}</Typography>
                  </Box>
                ))}
              </Box>
            </FadeSection>
          </Grid>
        </Grid>

        {/* Stats strip */}
        <FadeSection delay={0.3}>
          <Box sx={{
            mt: 6, borderTop: "1px solid rgba(255,255,255,0.08)", pt: 0,
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)"
          }}>
            {[{ n: "12+", l: "Years of Excellence" }, { n: "600+", l: "Clients Served" }, { n: "1", l: "Flagship Product" }, { n: "15K+", l: "Training Hours" }].map((s, i) => (
              <Box key={i} sx={{
                textAlign: "center", py: 3,
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                "&:hover .stat-num": { transform: "scale(1.08)" }
              }}>
                <Typography className="stat-num" sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: "26px", md: "34px" }, color: "#F59E0B", fontWeight: 800, transition: "transform 0.2s" }}>{s.n}</Typography>
                <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", mt: 0.5, letterSpacing: "0.5px" }}>{s.l}</Typography>
              </Box>
            ))}
          </Box>
        </FadeSection>
      </Container>
    </Box>
  );
}

// ─── WHO WE ARE ───────────────────────────────────────────
function WhoWeAre() {
  const values = [
    { icon: <CheckCircleOutlineIcon sx={{ color: "#1D4ED8", fontSize: 20 }} />, bg: "#EFF6FF", title: "Integrity First", desc: "Transparent, honest, and accountable in every interaction with clients, partners, and our team." },
    { icon: <StarIcon sx={{ color: "#D97706", fontSize: 20 }} />, bg: "#FFFBEB", title: "Excellence in Delivery", desc: "We raise the bar on every service, training session, and product release — no exceptions." },
    { icon: <PeopleIcon sx={{ color: "#059669", fontSize: 20 }} />, bg: "#F0FDF4", title: "People-Centred Culture", desc: "Clients, trainees, and team members all belong at the core of every decision we make." },
  ];
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <FadeSection>
              <SectionLabel>Our Story</SectionLabel>
              <SectionTitle>More Than a Company — A Growth Partner</SectionTitle>
              <Typography sx={{ color: "#4A5568", fontSize: "14px", lineHeight: 1.82, mb: 2 }}>
                Founded with a singular belief that technology and knowledge together drive lasting transformation, NexCore has grown into a full-spectrum organisation. We don't just deliver projects — we align with your goals, equip your people, and build tools that outlast engagements.
              </Typography>
              <Typography sx={{ color: "#4A5568", fontSize: "14px", lineHeight: 1.82 }}>
                Our work spans consulting services, structured training programmes, and a proprietary SaaS product trusted across industries. Every engagement is built on transparency, accountability, and a relentless drive to deliver measurable outcomes.
              </Typography>
            </FadeSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <FadeSection delay={0.15}>
              {values.map((v, i) => (
                <Box key={i} sx={{ display: "flex", gap: 2, mb: i < 2 ? 3 : 0, alignItems: "flex-start" }}>
                  <Box sx={{ width: 42, height: 42, borderRadius: "10px", background: v.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {v.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#1a202c", mb: 0.3 }}>{v.title}</Typography>
                    <Typography sx={{ fontSize: "13px", color: "#718096", lineHeight: 1.55 }}>{v.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </FadeSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ─── THREE PILLARS ────────────────────────────────────────
function ThreePillars() {
  const pillars = [
    { icon: <BusinessCenterIcon sx={{ fontSize: 26, color: "#1D4ED8" }} />, iconBg: "#EFF6FF", accentBg: "#EFF6FF", title: "Services", desc: "End-to-end consulting, implementation, and managed services tailored to your industry, scale, and specific business challenges.", featured: false },
    { icon: <SchoolIcon sx={{ fontSize: 26, color: "#D97706" }} />, iconBg: "#FFFBEB", accentBg: "#FFFBEB", title: "Training", desc: "Structured learning programmes, workshops, and certifications designed to upskill teams at every level and role.", featured: true },
    { icon: <CodeIcon sx={{ fontSize: 26, color: "#059669" }} />, iconBg: "#F0FDF4", accentBg: "#F0FDF4", title: "Product", desc: "A flagship SaaS platform engineered for operational efficiency — built on years of domain expertise and client feedback.", featured: false },
  ];
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#F8FAFC" }}>
      <Container maxWidth="lg">
        <FadeSection>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <SectionLabel>What We Do</SectionLabel>
            <SectionTitle center>Three Pillars. One Vision.</SectionTitle>
            <Typography sx={{ color: "#718096", fontSize: "14px", maxWidth: 560, mx: "auto", lineHeight: 1.7 }}>
              Everything we do falls under one of three core areas — each designed to complement the others and deliver complete value.
            </Typography>
          </Box>
        </FadeSection>
        <Grid container spacing={3}>
          {pillars.map((p, i) => (
            <Grid item xs={12} md={4} key={i}>
              <FadeSection delay={i * 0.12}>
                <Card sx={{
                  borderRadius: "14px", border: p.featured ? "2px solid #F59E0B" : "1px solid #E8EDF2",
                  boxShadow: p.featured ? "0 8px 32px rgba(245,158,11,0.14)" : "0 2px 12px rgba(0,0,0,0.04)",
                  position: "relative", overflow: "hidden", height: "100%",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: p.featured ? "0 16px 40px rgba(245,158,11,0.2)" : "0 12px 32px rgba(0,0,0,0.1)" },
                  transition: "all 0.3s ease"
                }}>
                  {p.featured && (
                    <Chip label="POPULAR" sx={{ position: "absolute", top: 14, left: 14, background: "#F59E0B", color: "#0A1628", fontSize: "9px", fontWeight: 800, letterSpacing: "1px", height: "22px" }} />
                  )}
                  <Box sx={{ position: "absolute", top: 0, right: 0, width: 70, height: 70, borderRadius: "0 14px 0 70px", background: p.accentBg }} />
                  <CardContent sx={{ p: 3.5, pt: p.featured ? 5 : 3.5 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: "12px", background: p.iconBg, display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                      {p.icon}
                    </Box>
                    <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#1a202c", mb: 1 }}>{p.title}</Typography>
                    <Typography sx={{ fontSize: "13px", color: "#718096", lineHeight: 1.65, mb: 2.5 }}>{p.desc}</Typography>
                    <Typography sx={{ fontSize: "13px", color: "#F59E0B", fontWeight: 700, cursor: "pointer", "&:hover": { color: "#E08C00" } }}>
                      Learn more →
                    </Typography>
                  </CardContent>
                </Card>
              </FadeSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ─── MISSION & VISION ─────────────────────────────────────
function MissionVision() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
      {[
        { label: "Our Mission", text: "To deliver transformative services, knowledge, and technology that help organisations achieve more — faster, smarter, and sustainably — without compromising on quality or integrity.", bg: "#060D1A" },
        { label: "Our Vision", text: "To be the most trusted growth partner for businesses across South Asia, recognised for integrity, innovation, and the measurable impact we create in every engagement.", bg: "#0E2952" },
      ].map((item, i) => (
        <FadeSection key={i} delay={i * 0.1}>
          <Box sx={{ background: item.bg, p: { xs: 5, md: 7 }, height: "100%" }}>
            <FormatQuoteIcon sx={{ fontSize: 80, color: "rgba(245,158,11,0.2)", mb: 1, display: "block" }} />
            <Typography sx={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#F59E0B", fontWeight: 700, mb: 1.5 }}>{item.label}</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: "14.5px", lineHeight: 1.8 }}>{item.text}</Typography>
          </Box>
        </FadeSection>
      ))}
    </Box>
  );
}

// ─── TEAM ─────────────────────────────────────────────────
function Team() {
  const members = [
    { initials: "AR", name: "Arjun Reddy", role: "CEO & Founder", dept: "Leadership", bg: "#DBEAFE", color: "#1D4ED8" },
    { initials: "SK", name: "Sneha Kumar", role: "Head of Services", dept: "Delivery", bg: "#D1FAE5", color: "#065F46" },
    { initials: "RM", name: "Rahul Menon", role: "Training Director", dept: "Learning & Dev", bg: "#FEF3C7", color: "#92400E" },
    { initials: "PJ", name: "Priya Joshi", role: "Product Lead", dept: "Engineering", bg: "#FCE7F3", color: "#9D174D" },
  ];
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#fff" }}>
      <Container maxWidth="lg">
        <FadeSection>
          <SectionLabel>Our People</SectionLabel>
          <SectionTitle>The Minds Behind the Work</SectionTitle>
          <Typography sx={{ color: "#718096", fontSize: "14px", mb: 5, maxWidth: 520, lineHeight: 1.7 }}>
            A diverse team of strategists, engineers, educators, and product thinkers — united by a shared commitment to excellence.
          </Typography>
        </FadeSection>
        <Grid container spacing={3}>
          {members.map((m, i) => (
            <Grid item xs={6} md={3} key={i}>
              <FadeSection delay={i * 0.1}>
                <Card sx={{
                  borderRadius: "14px", border: "1px solid #E8EDF2", textAlign: "center", p: 3,
                  "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 32px rgba(0,0,0,0.1)", borderColor: "#F59E0B" },
                  transition: "all 0.3s ease"
                }}>
                  <Avatar sx={{ width: 72, height: 72, background: m.bg, color: m.color, fontSize: "22px", fontWeight: 700, mx: "auto", mb: 1.5 }}>
                    {m.initials}
                  </Avatar>
                  <Typography sx={{ fontWeight: 700, fontSize: "14px", color: "#1a202c" }}>{m.name}</Typography>
                  <Typography sx={{ fontSize: "12px", color: "#718096", mt: 0.3 }}>{m.role}</Typography>
                  <Chip label={m.dept} size="small" sx={{ mt: 1, background: "rgba(245,158,11,0.1)", color: "#D97706", fontSize: "10px", fontWeight: 700, height: "20px" }} />
                </Card>
              </FadeSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ─── WHY US ───────────────────────────────────────────────
function WhyUs() {
  const items = [
    { icon: <SecurityIcon sx={{ color: "#F59E0B", fontSize: 20 }} />, title: "Proven Track Record", desc: "12+ years of successful delivery across diverse sectors and geographies." },
    { icon: <AccessTimeIcon sx={{ color: "#F59E0B", fontSize: 20 }} />, title: "On-Time Delivery", desc: "Rigorous project governance with zero tolerance for missed deadlines." },
    { icon: <EmojiEventsIcon sx={{ color: "#F59E0B", fontSize: 20 }} />, title: "Expert Certified Team", desc: "Industry-certified professionals with real-world delivery experience." },
    { icon: <BarChartIcon sx={{ color: "#F59E0B", fontSize: 20 }} />, title: "Data-Driven Approach", desc: "Every recommendation is backed by metrics and measurable outcomes." },
    { icon: <SupportAgentIcon sx={{ color: "#F59E0B", fontSize: 20 }} />, title: "End-to-End Support", desc: "From initial scoping to go-live, deployment, and ongoing optimisation." },
    { icon: <StarIcon sx={{ color: "#F59E0B", fontSize: 20 }} />, title: "Client-First Culture", desc: "Your success is the only metric that defines our performance." },
  ];
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#F8FAFC" }}>
      <Container maxWidth="lg">
        <FadeSection>
          <SectionLabel>Why NexCore</SectionLabel>
          <SectionTitle>What Sets Us Apart</SectionTitle>
          <Typography sx={{ color: "#718096", fontSize: "14px", mb: 5, maxWidth: 500, lineHeight: 1.7 }}>
            Six reasons why over 600 organisations choose to work with us.
          </Typography>
        </FadeSection>
        <Grid container spacing={2.5}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <FadeSection delay={(i % 3) * 0.1}>
                <Box sx={{
                  display: "flex", gap: 1.8, alignItems: "flex-start", p: 2.5,
                  background: "#fff", borderRadius: "12px", border: "1px solid #E8EDF2",
                  "&:hover": { borderColor: "#F59E0B", boxShadow: "0 4px 20px rgba(245,158,11,0.1)", transform: "translateY(-3px)" },
                  transition: "all 0.25s"
                }}>
                  <Box sx={{ width: 38, height: 38, borderRadius: "9px", background: "#0A1628", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "13px", color: "#1a202c", mb: 0.4 }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#718096", lineHeight: 1.55 }}>{item.desc}</Typography>
                  </Box>
                </Box>
              </FadeSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ─── TIMELINE ─────────────────────────────────────────────
function Timeline() {
  const milestones = [
    { year: "2012", title: "Founded in Bengaluru", desc: "Started as a boutique IT consulting firm with a passionate 5-person founding team.", side: "left" },
    { year: "2016", title: "Training Division Launched", desc: "Introduced structured workforce training programmes across 3 core domains.", side: "right" },
    { year: "2019", title: "Flagship Product v1.0", desc: "SaaS platform launched after 2 years of R&D, beta testing, and client co-creation.", side: "left" },
    { year: "2022", title: "500+ Clients Milestone", desc: "Crossed 500 active client accounts across services, training, and product verticals.", side: "right" },
    { year: "2025", title: "Regional Expansion", desc: "Opened new offices in Chennai and Hyderabad to better serve South India markets.", side: "left" },
  ];
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#fff" }}>
      <Container maxWidth="lg">
        <FadeSection>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <SectionLabel>Our Journey</SectionLabel>
            <SectionTitle center>Milestones That Define Us</SectionTitle>
          </Box>
        </FadeSection>
        <Box sx={{ position: "relative", maxWidth: 720, mx: "auto" }}>
          {/* center line */}
          <Box sx={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, #F59E0B 0%, #E8EDF2 100%)", transform: "translateX(-50%)" }} />
          {milestones.map((m, i) => (
            <FadeSection key={i} delay={i * 0.1}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4, gap: 0 }}>
                {m.side === "left" ? (
                  <>
                    <Box sx={{ flex: 1, pr: 4, textAlign: "right" }}>
                      <Paper elevation={0} sx={{ display: "inline-block", textAlign: "left", p: 2.5, borderRadius: "12px", border: "1px solid #E8EDF2", maxWidth: 280, "&:hover": { borderColor: "#F59E0B", boxShadow: "0 4px 20px rgba(245,158,11,0.1)" }, transition: "all 0.25s" }}>
                        <Typography sx={{ fontSize: "10px", color: "#F59E0B", fontWeight: 700, letterSpacing: "1px", mb: 0.5 }}>{m.year}</Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#1a202c", mb: 0.5 }}>{m.title}</Typography>
                        <Typography sx={{ fontSize: "12px", color: "#718096", lineHeight: 1.6 }}>{m.desc}</Typography>
                      </Paper>
                    </Box>
                    <Box sx={{ width: 36, height: 36, borderRadius: "50%", background: "#F59E0B", display: "flex", alignItems: "center", justifyContent: "center", color: "#0A1628", fontSize: "11px", fontWeight: 800, flexShrink: 0, zIndex: 1, mt: 0.5 }}>{m.year.slice(2)}</Box>
                    <Box sx={{ flex: 1 }} />
                  </>
                ) : (
                  <>
                    <Box sx={{ flex: 1 }} />
                    <Box sx={{ width: 36, height: 36, borderRadius: "50%", background: "#F59E0B", display: "flex", alignItems: "center", justifyContent: "center", color: "#0A1628", fontSize: "11px", fontWeight: 800, flexShrink: 0, zIndex: 1, mt: 0.5 }}>{m.year.slice(2)}</Box>
                    <Box sx={{ flex: 1, pl: 4 }}>
                      <Paper elevation={0} sx={{ p: 2.5, borderRadius: "12px", border: "1px solid #E8EDF2", maxWidth: 280, "&:hover": { borderColor: "#F59E0B", boxShadow: "0 4px 20px rgba(245,158,11,0.1)" }, transition: "all 0.25s" }}>
                        <Typography sx={{ fontSize: "10px", color: "#F59E0B", fontWeight: 700, letterSpacing: "1px", mb: 0.5 }}>{m.year}</Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#1a202c", mb: 0.5 }}>{m.title}</Typography>
                        <Typography sx={{ fontSize: "12px", color: "#718096", lineHeight: 1.6 }}>{m.desc}</Typography>
                      </Paper>
                    </Box>
                  </>
                )}
              </Box>
            </FadeSection>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ─── INDUSTRIES ───────────────────────────────────────────
function Industries() {
  const items = [
    { icon: <LocalHospitalIcon sx={{ fontSize: 28, color: "#DC2626" }} />, name: "Healthcare", sub: "Hospitals & Clinics", bg: "#FEF2F2" },
    { icon: <AccountBalanceIcon sx={{ fontSize: 28, color: "#1D4ED8" }} />, name: "Finance & BFSI", sub: "Banking & Insurance", bg: "#EFF6FF" },
    { icon: <ShoppingCartIcon sx={{ fontSize: 28, color: "#7C3AED" }} />, name: "E-Commerce", sub: "Retail & Marketplaces", bg: "#F5F3FF" },
    { icon: <CastForEducationIcon sx={{ fontSize: 28, color: "#059669" }} />, name: "Education", sub: "EdTech & Institutes", bg: "#F0FDF4" },
    { icon: <PrecisionManufacturingIcon sx={{ fontSize: 28, color: "#D97706" }} />, name: "Manufacturing", sub: "Industry 4.0", bg: "#FFFBEB" },
    { icon: <LocalShippingIcon sx={{ fontSize: 28, color: "#0891B2" }} />, name: "Logistics", sub: "Supply Chain", bg: "#ECFEFF" },
    { icon: <ApartmentIcon sx={{ fontSize: 28, color: "#BE185D" }} />, name: "Real Estate", sub: "PropTech Solutions", bg: "#FDF2F8" },
    { icon: <OndemandVideoIcon sx={{ fontSize: 28, color: "#9333EA" }} />, name: "Media & OTT", sub: "Content Platforms", bg: "#FAF5FF" },
  ];
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#F8FAFC" }}>
      <Container maxWidth="lg">
        <FadeSection>
          <SectionLabel>Industries We Serve</SectionLabel>
          <SectionTitle>Across Every Sector</SectionTitle>
          <Typography sx={{ color: "#718096", fontSize: "14px", mb: 5, maxWidth: 500, lineHeight: 1.7 }}>
            From healthcare to fintech, we bring deep domain expertise to every engagement.
          </Typography>
        </FadeSection>
        <Grid container spacing={2}>
          {items.map((item, i) => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <FadeSection delay={(i % 4) * 0.08}>
                <Card sx={{
                  borderRadius: "12px", border: "1px solid #E8EDF2", textAlign: "center", p: 2.5,
                  "&:hover": { transform: "translateY(-5px)", boxShadow: "0 10px 28px rgba(0,0,0,0.09)", borderColor: "#F59E0B" },
                  transition: "all 0.28s"
                }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: "14px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 1.5 }}>
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "13px", color: "#1a202c" }}>{item.name}</Typography>
                  <Typography sx={{ fontSize: "11px", color: "#718096", mt: 0.3 }}>{item.sub}</Typography>
                </Card>
              </FadeSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ─── TECH STACK ───────────────────────────────────────────
function TechStack() {
  const techs = ["⚛️ React", "🟨 JavaScript", "🐍 Python", "☕ Java", "🟦 TypeScript", "🐘 PostgreSQL", "🍃 MongoDB", "☁️ AWS", "🐳 Docker", "⚙️ Node.js", "📱 React Native", "🔷 Next.js", "🎨 MUI", "🔥 Firebase", "📊 Power BI", "🤖 TensorFlow"];
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#fff" }}>
      <Container maxWidth="lg">
        <FadeSection>
          <SectionLabel>Technologies We Use</SectionLabel>
          <SectionTitle>Our Tech Stack</SectionTitle>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4 }}>
            {techs.map((t, i) => (
              <Chip key={i} label={t} sx={{
                background: "#F8FAFC", border: "1px solid #E8EDF2", color: "#4A5568", fontSize: "13px", fontWeight: 500, height: "36px",
                "&:hover": { background: "#FEF3C7", borderColor: "#F59E0B", color: "#92400E", transform: "translateY(-2px)" },
                transition: "all 0.2s"
              }} />
            ))}
          </Box>
        </FadeSection>
      </Container>
    </Box>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────
function Testimonials() {
  const reviews = [
    { quote: "NexCore's training programme transformed how our engineering team approaches problem-solving. The ROI was visible within weeks of completion.", name: "Vikram Kapoor", company: "CTO, FinScale Technologies", initials: "VK" },
    { quote: "Their consulting team understood our operations better than most internal stakeholders. Implementation was seamless and delivered on-budget.", name: "Lakshmi Nair", company: "Operations Head, BuildRight Group", initials: "LN" },
    { quote: "The SaaS product NexCore built reduced our manual workload by 60%. Their after-sales support is second to none in the industry.", name: "Ravi Shankar", company: "Director, MediCare Solutions", initials: "RS" },
  ];
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#F8FAFC" }}>
      <Container maxWidth="lg">
        <FadeSection>
          <SectionLabel>What Clients Say</SectionLabel>
          <SectionTitle>Trusted by Industry Leaders</SectionTitle>
          <Typography sx={{ color: "#718096", fontSize: "14px", mb: 5, maxWidth: 500, lineHeight: 1.7 }}>
            Don't take our word for it — here's what our clients across sectors have to say.
          </Typography>
        </FadeSection>
        <Grid container spacing={3}>
          {reviews.map((r, i) => (
            <Grid item xs={12} md={4} key={i}>
              <FadeSection delay={i * 0.12}>
                <Card sx={{
                  borderRadius: "14px", border: "1px solid #E8EDF2", p: 3, height: "100%",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: "0 12px 32px rgba(0,0,0,0.09)", borderColor: "#F59E0B" },
                  transition: "all 0.3s"
                }}>
                  <Rating value={5} readOnly size="small" sx={{ color: "#F59E0B", mb: 1.5 }} />
                  <Typography sx={{ fontSize: "13.5px", color: "#4A5568", lineHeight: 1.75, fontStyle: "italic", mb: 2.5 }}>
                    "{r.quote}"
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar sx={{ width: 38, height: 38, background: "#0A1628", color: "#F59E0B", fontSize: "13px", fontWeight: 700 }}>{r.initials}</Avatar>
                    <Box>
                      <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#1a202c" }}>{r.name}</Typography>
                      <Typography sx={{ fontSize: "11px", color: "#718096" }}>{r.company}</Typography>
                    </Box>
                  </Box>
                </Card>
              </FadeSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ─── CTA ──────────────────────────────────────────────────
function CTA() {
  return (
    <FadeSection>
      <Box sx={{
        background: "linear-gradient(135deg, #F59E0B 0%, #F0820A 100%)",
        py: { xs: 7, md: 8 }, px: { xs: 4, md: 10 },
        display: "flex", flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between", alignItems: "center", gap: 3
      }}>
        <Typography variant="h2" sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: "26px", md: "32px" }, fontWeight: 800, color: "#0A1628", maxWidth: 480, lineHeight: 1.22 }}>
          Ready to Grow With a Partner Who Truly Delivers?
        </Typography>
        <Button startIcon={<EmailIcon />} sx={{
          background: "#0A1628", color: "#fff", fontWeight: 700, fontSize: "14px",
          px: 4.5, py: 1.8, borderRadius: "9px", textTransform: "none", whiteSpace: "nowrap",
          "&:hover": { background: "#0E2952", transform: "translateY(-3px)", boxShadow: "0 8px 24px rgba(10,22,40,0.35)" },
          transition: "all 0.25s"
        }}>
          Contact Us Today
        </Button>
      </Box>
    </FadeSection>
  );
}

// ─── ROOT ─────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <Box sx={{ fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <Hero />
      <WhoWeAre />
      <ThreePillars />
      <MissionVision />
      <Team />
      <WhyUs />
      <Timeline />
      <Industries />
      <TechStack />
      <Testimonials />
      <CTA />
    </Box>
  );
}