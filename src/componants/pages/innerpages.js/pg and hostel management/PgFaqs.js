import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is the PG Student Management System?",
    answer:
      "The PG Student Management System is a digital platform designed to manage and streamline administrative, academic, and personal data of postgraduate students efficiently.",
  },
  {
    question: "Who can use this system?",
    description: "This system is primarily used by",
    bullets: [
      "PG students",
      "Faculty members",
      "Department administrators",
      "College/university management",
    ],
  },
  {
    question: "What features are included in the system?",
    description: "Key features include:",
    bullets: [
      "Student registration and profile management",
      "Course enrollment and tracking",
      "Attendance management",
      "Internal marks and grades tracking",
      "Project/thesis submission tracking",
      "Timetable management",
      "Notifications and announcements",
      "Document uploads (ID, certificates, etc.)",
    ],
  },
  {
    question: "Is this system accessible online?",
    answer:
      "Yes, the PG Student Management System is accessible via a secure web portal. Some versions may also include mobile access through an app.",
  },
  {
    question: "How are students registered into the system?",
    description: "Students can be registered:",
    bullets: [
      "By the admin using administration interface",
      "Through student self-registration (if enabled)",
      "By importing student data from CSV/excel files",
    ],
  },
  {
    question: "Can I track my academic performance?",
    answer:
      "Yes, students can log in to their dashboard to view grades, attendance records, project status, and course progress.",
  },
  {
    question: "Can faculty enter marks and attendance?",
    answer:
      "Yes, authorized faculty members can log in to input internal marks, update attendance, and manage student academic records.",
  },
  {
    question: "How are notifications sent to students?",
    description: "Students receive system-generated notifications via:",
    bullets: [
      "Dashboard alerts",
      "Email",
      "SMS (if integrated)",
      "Mobile app notifications",
    ],
  },
  {
    question: "Is the data secure?",
    answer:
      "Yes. The system uses secure login credentials and encrypted databases to ensure the confidentiality and integrity of student data.",
  },
  {
    question: "Can I get a demo of SpaceBasic's PGmanagement software?",
    answer:
      "Get in touch with our team at +91 8884133362 and explore how the best PG management system in India can benefit you by creating a more interconnected institutional experience",
  },
];

function PgFaqs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingBottom: 4,
        px: isMobile ? 0.5 : 2,
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          size={{xs:12,md:8}}
          sx={{
            maxWidth: isMobile ? "100%" : 1200,
            margin: isMobile ? "0" : "0 auto",
            px: isMobile ? 1 : 0,
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h4"}
            align="center"
            gutterBottom
            sx={{ fontSize: isMobile ? "1.1rem" : "2rem" }}
          >
            FAQs for PG Management Software
          </Typography>
          {faqs.map((faq, idx) => (
            <Accordion key={idx} defaultExpanded={idx === 0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "0.98rem" : "1.08rem",
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                {faq.description && (
                  <Typography
                    sx={{
                      marginBottom: 2,
                      fontSize: isMobile ? "0.96rem" : "inherit",
                    }}
                  >
                    {faq.description}
                  </Typography>
                )}
                {faq.bullets && (
                  <List sx={{ pl: 3 }}>
                    {faq.bullets.map((item, i) => (
                      <ListItem
                        sx={{
                          display: "list-item",
                          py: 0,
                          fontSize: isMobile ? "0.96rem" : "inherit",
                        }}
                        key={i}
                      >
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                )}
                {faq.answer && (
                  <Typography
                    sx={{
                      marginTop: faq.bullets ? 1 : 0,
                      fontSize: isMobile ? "0.96rem" : "inherit",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PgFaqs;
