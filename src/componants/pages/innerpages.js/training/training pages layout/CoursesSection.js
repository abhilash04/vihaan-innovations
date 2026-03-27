import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Tabs,
  Tab,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

const CoursesSection = ({ data = {} }) => {
  const { courses = [] } = data;
  const [activeTab, setActiveTab] = useState(0);

  if (!courses.length) return null;

  const currentCourse = courses[activeTab] || courses[0];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            sx={{ color: "#00b4d8", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", mb: 2 }}
          >
            Course Curriculum
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "48px" }, color: "#1e293b", mb: 2 }}
          >
            Explore <Box component="span" sx={{ color: "#00b4d8" }}>What You'll Learn</Box>
          </Typography>
        </Box>

        <Paper elevation={0} sx={{ borderRadius: "24px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "#ffffff" }}>
            <Tabs
              value={activeTab}
              onChange={(e, v) => setActiveTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTab-root": {
                  py: 3,
                  px: 4,
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "none",
                  "&.Mui-selected": { color: "#00b4d8" }
                },
                "& .MuiTabs-indicator": { height: "3px", bgcolor: "#00b4d8" }
              }}
            >
              {courses.map((course, idx) => (
                <Tab key={idx} label={course.label} />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: "#ffffff" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Grid container spacing={6}>
                  <Grid item xs={12} md={7}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#1e293b", mb: 3 }}>
                      {currentCourse.label}
                    </Typography>
                    
                    <Box sx={{ display: "flex", gap: 3, mb: 5 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <AccessTimeIcon sx={{ color: "#00b4d8", fontSize: "20px" }} />
                        <Typography sx={{ color: "#64748b", fontWeight: 600 }}>{currentCourse.duration}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <SignalCellularAltIcon sx={{ color: "#00b4d8", fontSize: "20px" }} />
                        <Typography sx={{ color: "#64748b", fontWeight: 600 }}>{currentCourse.level}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <LaptopMacIcon sx={{ color: "#00b4d8", fontSize: "20px" }} />
                        <Typography sx={{ color: "#64748b", fontWeight: 600 }}>{currentCourse.mode}</Typography>
                      </Box>
                    </Box>

                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 2, color: "#0f172a" }}>Core Topics</Typography>
                        <List dense>
                          {(currentCourse.frontEnd || []).map((topic, i) => (
                            <ListItem key={i} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: "36px" }}>
                                <CheckCircleOutlineIcon sx={{ color: "#00b4d8", fontSize: "18px" }} />
                              </ListItemIcon>
                              <ListItemText primary={topic} sx={{ "& .MuiTypography-root": { color: "#475569", fontWeight: 500 } }} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 2, color: "#0f172a" }}>Advanced Modules</Typography>
                        <List dense>
                          {(currentCourse.backEnd || []).map((topic, i) => (
                            <ListItem key={i} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: "36px" }}>
                                <CheckCircleOutlineIcon sx={{ color: "#00b4d8", fontSize: "18px" }} />
                              </ListItemIcon>
                              <ListItemText primary={topic} sx={{ "& .MuiTypography-root": { color: "#475569", fontWeight: 500 } }} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <Paper 
                      elevation={0} 
                      sx={{ 
                        p: 4, 
                        bgcolor: "#f8fafc", 
                        borderRadius: "20px",
                        border: "1px solid #e2e8f0"
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: "#0f172a" }}>Tools & Technologies</Typography>
                      <Grid container spacing={1}>
                        {(currentCourse.tools || []).map((tool, i) => (
                          <Grid item key={i}>
                            <Box sx={{ 
                              px: 2, 
                              py: 1, 
                              bgcolor: "#ffffff", 
                              border: "1px solid #e2e8f0",
                              borderRadius: "8px",
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#475569"
                            }}>
                              {tool}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                      <Divider sx={{ my: 4 }} />
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          py: 2,
                          borderRadius: "12px",
                          bgcolor: "#00b4d8",
                          fontWeight: 800,
                          textTransform: "none",
                          fontSize: "16px",
                          "&:hover": { bgcolor: "#0077b6" }
                        }}
                      >
                        Download Syllabus
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CoursesSection;
