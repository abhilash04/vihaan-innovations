import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import bgImage from "../../../assets/breadcrumb-bg.webp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const TermsandConditionSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <Box
      component="main"
      sx={{ backgroundColor: "#f5f5f5" }}
      className="innerpage-bg"
    >
      {/* Page Title & Breadcrumbs */}
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              sx={{ fontSize: "35px", fontWeight: 600, color: "#27272f " }}
            >
              Terms and conditions
            </Typography>
          </Box>

          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <Link
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#c24300",
                fontSize: "24px",
              }}
            >
              Home
            </Link>
            <Typography sx={{ color: "#00584b", fontSize: "24px" }}>
              Terms & conditions:
            </Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "#f9faf7",
              p: 4,
              borderRadius: 1,
              color: "#4a4a4a",
              maxWidth: "900px",
              margin: "auto",
            }}
          >
            <Typography paragraph>
              Welcome to <b style={{ color: "green" }}>Arjjit’s Recipe</b>.
              These Terms &amp; Conditions (“Terms”) govern your use of the
              arjjitsrecipe.com website (“Site”). By using, viewing, or
              contributing content, you confirm you’ve read and agree to these
              Terms, along with applicable laws and future updates.
            </Typography>

            <Typography paragraph>
              Arjjit’s Recipe may update these Terms at any time by posting the
              revised version on the Site.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Registration & Profile
            </Typography>
            <Typography paragraph>
              To access features like saving favorite recipes, commenting, or
              using personalized tools, you may register for an account. You’re
              responsible for maintaining the confidentiality of your login
              credentials.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Authentication via Third‑Party Services
            </Typography>
            <Typography paragraph>
              You may register using third‑party services such as Google or
              Facebook (“Authentication Services”). By doing so, you allow
              Arjjit’s Recipe to access permitted account information (like your
              profile and email). Your use of any Authentication Service is
              subject to its independent terms.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Public Contributions
            </Typography>
            <Typography paragraph>
              Any content you post publicly—such as comments, recipe tips, or
              forum posts—is not covered by our Privacy Policy and may be
              visible to others. Please exercise caution before sharing
              sensitive or personal data in these public spaces.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Content Standards & Moderation
            </Typography>
            <Typography paragraph>
              Arjjit’s Recipe reserves the right—but does not guarantee—to
              review, modify, or remove user-generated content that violates
              these Terms or our community guidelines. Offensive, illegal,
              plagiarized, irrelevant, or abusive content may be removed at our
              discretion.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Prohibited Behavior
            </Typography>
            <Typography paragraph>You agree not to:</Typography>
            <List dense sx={{ pl: 2 }}>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Use bots, scraping tools, or unauthorized automation on the Site." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Access or distribute content without permission, except for your own personal, non-commercial use." />
              </ListItem>
            </List>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Disclaimer & Limitation of Liability
            </Typography>
            <Typography paragraph>
              Arjjit’s Recipe provides content on an “as-is” basis. We do not
              guarantee that the Site will be error-free or uninterrupted. We
              disclaim all warranties—express or implied—including
              merchantability or fitness for any purpose. We are not liable for
              any damages arising from your use of the Site, even if informed of
              potential issues.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Indemnification
            </Typography>
            <Typography paragraph>
              You agree to indemnify and hold harmless Arjjit’s Recipe from any
              claims, damages, or liabilities arising from your use of the Site
              or violation of these Terms.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Governing Law & Jurisdiction
            </Typography>
            <Typography paragraph>
              These Terms are governed by the laws of the Republic of India. You
              agree that any disputes will be subject to the jurisdiction of
              courts in Bangalore, Karnataka.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Intellectual Property
            </Typography>
            <Typography paragraph>
              All user‑generated content remains the property of its author. By
              posting content on the Site, you grant Arjjit’s Recipe a
              perpetual, royalty‑free, worldwide, sublicensable license to use,
              adapt, publish, translate, and distribute it.
            </Typography>
            <Typography paragraph>
              All other trademarks, logos, and copyrighted material on the Site
              are owned by their respective holders and are protected by
              applicable intellectual property laws.
            </Typography>

            <Typography paragraph>
              Your use of the Site does not grant you any license to any
              trademarks or content not owned by you.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
              Questions or Concerns?
            </Typography>
            <Typography paragraph>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:support@arjjitsrecipe.com">
                support@arjjitsrecipe.com
              </a>
              .
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TermsandConditionSection;
