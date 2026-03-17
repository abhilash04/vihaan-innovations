import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function AutomationComparisonTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const rows = [
    { feature: "Rent Collection", manual: <CheckCircleIcon sx={{ color: "green" }} />, automated: <CheckCircleIcon sx={{ color: "green" }} /> },
    { feature: "Tenant Records", manual: <CancelIcon sx={{ color: "red" }} />, automated: <CheckCircleIcon sx={{ color: "green" }} /> },
    { feature: "Occupancy Tracking", manual: <CancelIcon sx={{ color: "red" }} />, automated: <CheckCircleIcon sx={{ color: "green" }} /> },
    { feature: "Maintenance Requests", manual: <CancelIcon sx={{ color: "red" }} />, automated: <CheckCircleIcon sx={{ color: "green" }} /> },
    { feature: "Reporting & Analytics", manual: <Typography fontWeight="bold">Optional</Typography>, automated: <CheckCircleIcon sx={{ color: "green" }} /> },
    { feature: "Scalability", manual: <CancelIcon sx={{ color: "red" }} />, automated: <CheckCircleIcon sx={{ color: "green" }} /> },
    { feature: "Data Security", manual: <CancelIcon sx={{ color: "red" }} />, automated: <CheckCircleIcon sx={{ color: "green" }} /> },
  ];

  return (
    <Box
      sx={{
        my: isMobile ? 3 : 6,
        mx: "auto",
        maxWidth: 1000,
        transform: isMobile ? "scale(0.85)" : "scale(1)",
        transformOrigin: "top center",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align="center"
        sx={{ fontWeight: 700, mb: 0.5 }}
      >
        Why Smart PG Owners Are Switching to Automation
      </Typography>

      <Typography
        align="center"
        sx={{
          fontWeight: 400,
          color: "#555",
          mb: 4,
          fontSize: isMobile ? "1rem" : "1.2rem",
        }}
      >
        Not Just Records, Real Results – Automate Your PG Operations.
      </Typography>

      <TableContainer>
        <Table sx={{ minWidth: 400 }} aria-label="automation comparison table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 700,
                  fontSize: isMobile ? 14 : 18,
                  background: "#f9f9fa",
                }}
              >
                Feature
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 700,
                  fontSize: isMobile ? 14 : 18,
                  background: "#f1f7fa",
                }}
              >
                Manual Management
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 700,
                  fontSize: isMobile ? 14 : 18,
                  background: "#f9f9fa",
                }}
              >
                Automated PG Management
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={row.feature}
                sx={{
                  background: idx % 2 === 0 ? "#fff" : "#f7f8fb",
                }}
              >
                <TableCell
                  align="center"
                  sx={{ fontWeight: 600, fontSize: isMobile ? 13 : 17, py: isMobile ? 1 : 2 }}
                >
                  {row.feature}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    background: "#f1f7fa",
                    py: isMobile ? 1 : 2,
                  }}
                >
                  {row.manual}
                </TableCell>
                <TableCell align="center" sx={{ py: isMobile ? 1 : 2 }}>
                  {row.automated}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AutomationComparisonTable;
