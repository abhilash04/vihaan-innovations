import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Container,
  Breadcrumbs,
  Link,
} from "@mui/material";

// Dummy images - replace with actual assets if needed
import phone1 from "../../../../assets/c.jpg";

const JobSection = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          py: 6,
        }}
      >
        {/* Left Section: Mobile App Images */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src={phone1}
            alt="Mobile App 1"
            sx={{
              height: { xs: "250px", md: "350px" },
              position: "relative",
              zIndex: 2,
            }}
          />
        </Box>

        {/* Right Section: Text Content */}
        <Box sx={{ flex: 1, pl: { md: 4 } }}>
          {/* Heading */}
          <Typography
            sx={{ color: "#121212", fontWeight: 700, fontSize: "1.5rem" }}
          >
            MERN Stack Developer
          </Typography>

          <Typography
            sx={{ color: "#3f3e3e", fontWeight: 600, fontSize: "1rem", mt: 2 }}
          >
            Skills & Responsibilities :
          </Typography>

          {/* Bullet Points */}
          <Box
            component="ul"
            sx={{
              mt: 2,
              pl: 3,
              color: "#435963",
              fontSize: "1rem",
              lineHeight: 1.8,
              "& li": { mb: 1 },
            }}
          >
            <li>
              Experience with the MERN stack (MongoDB, Express.js, React.js, and
              Node.js) is required.
            </li>
            <li>
              Multitasking and working in a fast-paced atmosphere are required
              skills.
            </li>
            <li>Write maintainable / scalable / efficient code.</li>
            <li>Should be able to document their code.</li>
            <li>
              Ability to wear many hats and learn new technologies quickly.
            </li>
            <li>Strong debugging and troubleshooting skills.</li>
          </Box>

          {/* Extra Details */}
          <Box
            sx={{
              mt: 3,
              color: "#435963",
              fontSize: "1rem",
              lineHeight: 1.8,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            <Box>
              <Typography>
                <strong>Experience:</strong> 1–2 years
              </Typography>
            </Box>

            <Box>
              <Typography>
                <strong>Location:</strong> Bangalore
              </Typography>
            </Box>

            <Box>
              <Typography>
                <strong>Job Type:</strong> Full-time
              </Typography>
            </Box>

            <Box>
              <Typography>
                <strong>Salary:</strong> Based on experience
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          mb: 2.5,
        }}
      >
        <Typography sx={{ mt: 3, color: "#435963", fontSize: "1rem" }}>
          Interested and eligible candidates are requested to send their CV
          together with personal details to e-mail address : vihaaninnovations@gmail.com
        </Typography>
      </Box>
    </>
  );
};

export default JobSection;
