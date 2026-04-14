import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const opdSteps = [
  { id: 1, label: "Online Registration", desc: "Quick digital onboarding" },
  { id: 2, label: "Vital Check & Triage", desc: "Instant patient assessment" },
  { id: 3, label: "Doctor Consulting", desc: "Smart EMR-driven care" },
  { id: 4, label: "Lab Diagnostics", desc: "Automated test processing" },
  { id: 5, label: "Pharmacy Clearance", desc: "Integrated billing & meds" },
  { id: 6, label: "Checkout & Summary", desc: "Fast discharge with reports" }
];

const ipdSteps = [
  { id: 1, label: "Admission Trigger", desc: "Smooth patient admission" },
  { id: 2, label: "Ward Management", desc: "Smart bed allocation" },
  { id: 3, label: "Diagnostics", desc: "Seamless test integration" },
  { id: 4, label: "Continuous Vitals", desc: "Real-time patient monitoring" },
  { id: 5, label: "TPA Clearance", desc: "Faster insurance approvals" },
  { id: 6, label: "Discharge Desk", desc: "Hassle-free discharge process" }
];

const JourneyNode = ({ step, color }) => (
  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: step.id * 0.1 }}>
    <Paper elevation={0} sx={{ p: 2, borderRadius: "16px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.03)", width: "160px", textAlign: "center", position: "relative", cursor: "pointer", transition: "all 0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 8px 25px ${color}15`, "& .node-circle": { scale: 1.1, filter: `drop-shadow(0 0 8px ${color}30)` } } }}>
      <Box className="node-circle" sx={{ width: 36, height: 36, borderRadius: "50%", bgcolor: `${color}10`, color: color, display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 800, fontSize: "14px", mx: "auto", mb: 1.5, transition: "all 0.3s" }}>
        {step.id}
      </Box>
      <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "13px", mb: 0.5 }}>{step.label}</Typography>
      <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: "10px", lineHeight: 1.4 }}>{step.desc}</Typography>
    </Paper>
  </motion.div>
);

const HMSPatientJourney = () => {
  return (
    <Box sx={{ background: "#F5F7FA", py: 6, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography sx={{ color: "#0A2D6E", fontWeight: 800, fontSize: "12px", mb: 1, letterSpacing: "1px" }}>PATIENT JOURNEY</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            End-to-End Hospital Management System
          </Typography>
          <Typography sx={{ color: "#4A5568", fontSize: "15px", maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}>
            Provide seamless patient care with hospital software that unifies OPD and IPD workflows.
          </Typography>
        </Box>

        {/* OPD Track */}
        <Box sx={{ mb: 8 }}>
          <Typography sx={{ color: "#0A2D6E", fontWeight: 800, fontSize: "16px", mb: 4, textAlign: "center" }}>
            <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
              OPD (Outpatient) Flow
              <Box sx={{ position: "absolute", bottom: -2, left: 0, width: "100%", height: "2px", bgcolor: "#0A2D6E" }} />
            </Box>
          </Typography>

          <Box sx={{ display: "flex", flexWrap: { xs: "wrap", md: "nowrap" }, justifyContent: "center", gap: { xs: 2, md: 3 }, position: "relative" }}>
            {/* SVG Track Connection for Desktop */}
            <Box component="svg" sx={{ position: "absolute", top: "40px", left: "5%", width: "90%", height: "4px", zIndex: 0, display: { xs: "none", md: "block" } }}>
              <motion.path d="M 0 2 L 1000 2" fill="none" stroke="#0A2D6E" strokeWidth="2" strokeDasharray="6 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
            </Box>

            {opdSteps.map((step) => (
              <Box key={step.id} sx={{ zIndex: 1 }}>
                <JourneyNode step={step} color="#0A2D6E" />
              </Box>
            ))}
          </Box>
        </Box>

        {/* IPD Track */}
        <Box>
          <Typography sx={{ color: "#10B981", fontWeight: 800, fontSize: "16px", mb: 4, textAlign: "center" }}>
            <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
              IPD (Inpatient) Flow
              <Box sx={{ position: "absolute", bottom: -2, left: 0, width: "100%", height: "2px", bgcolor: "#10B981" }} />
            </Box>
          </Typography>

          <Box sx={{ display: "flex", flexWrap: { xs: "wrap", md: "nowrap" }, justifyContent: "center", gap: { xs: 2, md: 3 }, position: "relative" }}>
            {/* SVG Track Connection for Desktop */}
            <Box component="svg" sx={{ position: "absolute", top: "40px", left: "5%", width: "90%", height: "4px", zIndex: 0, display: { xs: "none", md: "block" } }}>
              <motion.path d="M 0 2 L 1000 2" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="6 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
            </Box>

            {ipdSteps.map((step) => (
              <Box key={step.id} sx={{ zIndex: 1 }}>
                <JourneyNode step={step} color="#10B981" />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HMSPatientJourney;
