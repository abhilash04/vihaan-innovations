import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import StorageIcon from '@mui/icons-material/Storage';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';

const hrmValues = [
  { icon: AutoFixHighIcon, title: "Automate HR Processes", color: "#f97316" },
  { icon: StorageIcon, title: "Improve Data Accuracy", color: "#3b82f6" },
  { icon: PointOfSaleIcon, title: "Enhance Payroll Management", color: "#10b981" },
  { icon: PeopleIcon, title: "Optimize Workforce Management", color: "#8b5cf6" },
  { icon: AssessmentIcon, title: "Generate Insightful Reports", color: "#ec4899" },
];

const HRMAbout = () => (
  <Box sx={{ background: "#F8FAFC", py: 8, position: "relative", overflow: "hidden" }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 6, px: 2 }}>
        <Typography sx={{ color: "#f97316", fontWeight: 700, fontSize: "13px", mb: 1, letterSpacing: "1px" }}>ABOUT HR MANAGEMENT SOFTWARE</Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Fira Sans" }}>
          What is HRM Software?
        </Typography>
        <Typography sx={{ color: "rgba(11, 32, 70, 0.7)", fontSize: "15px", maxWidth: "650px", mx: "auto", lineHeight: 1.6 }}>
          HR management software helps manage employees, payroll, and recruitment in one platform, making HR processes easier and more efficient.
        </Typography>
      </Box>

      <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "18px", textAlign: "center", mb: 4 }}>
        Benefits of Using HR Management Software
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          px: 2
        }}
      >
        {hrmValues.map((val, i) => {
          const Icon = val.icon;
          return (
            <Box
              key={i}
              sx={{
                flex: "1 1 18%",
                minWidth: "160px",
                maxWidth: "200px",
                display: "flex"
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ width: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: "16px",
                    bgcolor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.04)",
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                    "&:hover": {
                      borderColor: val.color,
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      bgcolor: `${val.color}15`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: val.color,
                      mb: 2
                    }}
                  >
                    <Icon sx={{ fontSize: 22 }} />
                  </Box>

                  <Typography
                    sx={{
                      color: "#1A202C",
                      fontWeight: 700,
                      fontSize: "12px",
                      lineHeight: 1.3
                    }}
                  >
                    {val.title}
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          );
        })}
      </Box>
    </Container>
  </Box>
);

export default HRMAbout;
