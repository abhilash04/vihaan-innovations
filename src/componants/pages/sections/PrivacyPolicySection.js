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
const PrivacyPolicySection = () => {
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
              Privacy Policy
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
              Privacy Policy:
            </Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "#f5f7ef",
              p: 4,
              borderRadius: 1,
              boxShadow: 1,
              color: "#6a6a6dff",
            }}
          >
            <Typography paragraph>
              At Arjjit’s Recipe, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines
              how we collect, use, and handle your data. By using our services,
              you agree to the practices described here.
            </Typography>

            <Typography paragraph>
              Any personal information shared publicly in areas such as
              comments, forums, or recipe reviews on our website or social
              platforms is not considered confidential and may be accessed by
              others. Please exercise caution when sharing personal data in
              public sections.
            </Typography>

            <Typography paragraph>
              Arjjit’s Recipe is not responsible for any misuse of information
              shared by you in public spaces. You share such data at your own
              risk.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              What personal information do we collect?
            </Typography>

            <Typography paragraph>
              When registering, subscribing to our newsletter, or interacting
              with our content, we may collect your name, email, and optional
              information like cooking preferences or location.
            </Typography>

            <Typography paragraph>
              If you sign in via services like Google or Facebook, we may access
              your public profile and email address, as permitted by your
              settings on those platforms.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              When do we collect information?
            </Typography>

            <Typography paragraph>
              We collect information when you register on our site, sign up for
              recipes or updates, comment on blog posts, or contact us directly.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              How do we use your information?
            </Typography>

            <Typography paragraph>We may use your information to:</Typography>

            <List dense sx={{ pl: 2, mb: 2 }}>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Send recipe updates, newsletters, or content you’ve subscribed to." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Respond to comments, questions, or recipe suggestions." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Improve user experience by analyzing content engagement." />
              </ListItem>
            </List>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              How do we protect your information?
            </Typography>

            <Typography paragraph>
              We use secure systems and platforms to store and manage your data.
              Email addresses and sensitive data are stored in trusted
              third-party systems with encryption and limited access.
            </Typography>

            <Typography paragraph>
              We do not store credit card information, and all payments (if
              applicable) are processed securely by PCI-compliant services.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              Do we use cookies?
            </Typography>

            <Typography paragraph>
              Yes. Cookies help us understand your browsing behavior to provide
              a better user experience — like saving your favorite recipes or
              preferences.
            </Typography>

            <Typography paragraph>
              You can control cookies through your browser settings. Disabling
              cookies may affect the functionality of certain parts of our site.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              Third-party Disclosure
            </Typography>

            <Typography paragraph>
              We do not sell or trade your personal information. However, we may
              use trusted third-party services (like email or analytics tools)
              to help us operate the site efficiently.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Third-party links
            </Typography>

            <Typography paragraph>
              Occasionally, we may include third-party links (e.g., recommended
              products, ingredients) for your convenience. These sites have
              their own privacy policies.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              We collect your email to:
            </Typography>

            <List dense sx={{ pl: 2, mb: 2 }}>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Send weekly recipe inspiration and updates." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Respond to your inquiries or content suggestions." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Notify you of seasonal cooking challenges or new video content." />
              </ListItem>
            </List>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              Unsubscribing
            </Typography>

            <Typography paragraph>
              You may unsubscribe from our emails at any time using the link
              provided at the bottom of each message or by contacting us at
              support@arjjitsrecipe.com.
            </Typography>

            <Typography paragraph>
              If you have any questions about this policy or how we handle your
              data, please reach out to us at:
            </Typography>

            <Typography paragraph>
              📧 Email:{" "}
              <Link href="mailto:support@arjjitsrecipe.com">
                support@arjjitsrecipe.com
              </Link>
              <br />
              🌐 Website:{" "}
              <Link href="https://arjjitsrecipe.com" target="_blank">
                https://arjjitsrecipe.com
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PrivacyPolicySection;
