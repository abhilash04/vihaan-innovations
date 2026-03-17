import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const solutions = [
  {
    title: "CRM for Real Estate Agents",
    desc: "Our solutions better equip realtors to serve your customers with industry-grade Customer Relationship Management (CRM). It tracks your ..."
  },
  {
    title: "Real Estate ERP Solution",
    desc: "Our real estate ERP solution contains collection, property management, sales, billing, and asset management under a cloud ..."
  },
  {
    title: "Property Booking Management",
    desc: "Managing property booking requires relentless effort. We have to simplify this hassle with effective and reliable business solutions that ..."
  },
  {
    title: "Real Estate Valuation Engine",
    desc: "Determining the right value of your real-estate properties requires thorough compilation and evaluation. Let’s simplify this with an ideal ..."
  },
  {
    title: "Facility Management System",
    desc: "Real estate builders confront chores from many challenges with facility management. Let’s ensure these challenges do not hinder your growth ..."
  },
  {
    title: "Investment Software Development",
    desc: "With the right software, you will never miss crucial details about your investments. Let’s automate your specific needs and create the ideal ..."
  },
  {
    title: "Lease & Contract Management Software",
    desc: "Navigating through leases and contracts can be a nightmare. We help you address all the hassle from these managerial procedures with ..."
  },
  {
    title: "Rental Management Solution",
    desc: "Finding a hassle manager for your rental properties? Let’s simplify it with the correct rental management and tenant engagement software ..."
  },
  {
    title: "Real Estate Transaction Software (RETS)",
    desc: "The money-intensive nature of the real estate business needs it. Enabling you to lead estate transactions with convenient market ..."
  },
  {
    title: "Integrated Workplace Management System (IWMS)",
    desc: "Simplify workplace management with our integrated workplace management system (IWMS). Use this ideal solution to monitor every workplace aspect from ..."
  },
  {
    title: "Asset & Inventory Management Software",
    desc: "Use our custom inventory management software solution that manages your real estate and instantly notifies in real-time. Choose the ideal solution ..."
  },
  {
    title: "Real Estate Auction Software",
    desc: "Lead property sales with robust software that matches your individual needs: manage your properties seamlessly, easily, bulk, and auctions ..."
  }
];

function RealEstateSoftwareSolutions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        pt: isMobile ? 2 : 5,
        pb: isMobile ? 2 : 4,
        maxWidth:1200,
        mx:"auto"
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ maxWidth: 950, mx: "auto" }}
      >
        <Grid item xs={12} sx={{ mb: isMobile ? 2 : 3 }}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            fontWeight={700}
            align="center"
          >
            Our Real-Estate Software Solutions Expertise
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: isMobile ? 3 : 4 }}>
          <Typography
            variant="body2"
            color="#666"
            align="center"
            sx={{ lineHeight: 1.65 }}
          >
            Different real-estate businesses have unique needs. We are here to address them all with our extensive expertise. Let's drive results with our expertise and your reputation.
          </Typography>
        </Grid>
        <Grid
          container
          spacing={3}
          justifyContent="center"
        >
          {solutions.map((sol, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={idx}
              sx={{
                display: "flex"
              }}
            >
              <Grid
                container
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 1px 4px #f0f3f8",
                  background: "#fff",
                  p: isMobile ? 2 : 3,
                  minHeight: "125px",
                  alignItems: "flex-start"
                }}
              >
                <Grid item xs={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center", pt: 0.5 }}>
                  <FolderOutlinedIcon sx={{ color: "#3472ec", fontSize: 36 }} />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="#222"
                    sx={{ mb: 1, fontSize: isMobile ? "1rem" : "1.08rem" }}
                  >
                    {sol.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#555"
                    sx={{
                      fontSize: isMobile ? "0.9rem" : "0.98rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {sol.desc}
                  </Typography>
                  <Box sx={{ color: "#3472ec", fontWeight: 500, fontSize: "0.92rem", mt: 1, cursor: "pointer" }}>
                    Read More
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default RealEstateSoftwareSolutions;
