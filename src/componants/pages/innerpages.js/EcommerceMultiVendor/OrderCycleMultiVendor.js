import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { keyframes, styled } from "@mui/system";

// --- Animations ---
const pulseGlow = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 5px rgba(0, 191, 255, 0.2); }
  50% { transform: scale(1.05); box-shadow: 0 0 25px rgba(0, 191, 255, 0.6); }
  100% { transform: scale(1); box-shadow: 0 0 5px rgba(0, 191, 255, 0.2); }
`;

const rotateSpark = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`;

const typing = keyframes`
  0%, 100% { opacity: 1; transform: scaleX(1); }
  50% { opacity: 0.3; transform: scaleX(1.1); }
`;

const scan = keyframes`
  0% { transform: translateY(-5px) scale(1); opacity: 0.5; }
  50% { transform: translateY(5px) scale(1.1); opacity: 1; }
  100% { transform: translateY(-5px) scale(1); opacity: 0.5; }
`;

const launch = keyframes`
  0% { transform: translateY(0) rotate(0); }
  10% { transform: translateY(2px); }
  30% { transform: translateY(-10px) rotate(-3deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const grow = keyframes`
  0% { transform: scale(1) translateY(0); }
  50% { transform: scale(1.2) translateY(-10px); color: #00bfff; }
  100% { transform: scale(1) translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
`;

// --- Styled Components ---
const StyledIconCircle = styled(Box)(({ bgcolor, active, animation }) => ({
    width: 80,
    height: 80,
    borderRadius: "24px",
    background: active ? `linear-gradient(135deg, ${bgcolor} 0%, #ffffff 100%)` : "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 5,
    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
    boxShadow: active
        ? "0 20px 40px rgba(0, 191, 255, 0.2), 0 0 30px rgba(0, 191, 255, 0.3)"
        : "0 10px 25px rgba(0,0,0,0.05)",
    border: active ? "2px solid #00bfff" : "1px solid #e0e0e0",
    ...(active && {
        animation: `${animation} 1.5s infinite ease-in-out`,
    }),
}));

const IconWrapper = ({ children, active }) => (
    <Box sx={{
        color: active ? "#00bfff" : "#1b25a8",
        transition: "color 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        {children}
    </Box>
);

// Illustrative icons based on the reference image
const OrderPlacedIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 2c-1.1 0-2 .9-2 2v1h-2V4c0-1.1-.9-2-2-2S13 2.9 13 4v1h-2V4c0-1.1-.9-2-2-2s-2 .9-2 2v1H5v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5h2V4c0-.55-.45-1-1-1z M17 5H7V5c0-.55.45-1 1-1s1 .45 1 1v1h2V5c0-.55.45-1 1-1s1 .45 1 1v1h2V5z" />
        </svg>
    </IconWrapper>
);

const PaymentsIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M20,18H4v-6h16V18z M20,8H4V6h16V8z" />
        </svg>
    </IconWrapper>
);

const InventoryIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5 C21,3.9,20.1,3,19,3z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10 V9z" />
        </svg>
    </IconWrapper>
);

const ShippedIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,8h-3V4H3c-1.1,0-2,0.9-2,2v11h2c0,1.66,1.34,3,3,3s3-1.34,3-3h6c0,1.66,1.34,3,3,3s3-1.34,3-3h2v-5L20,8z M6,18.5 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S6.83,18.5,6,18.5z M17,18.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5S17.83,18.5,17,18.5z M18,13H3V6h13V13z" />
        </svg>
    </IconWrapper>
);

const DeliveredIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,8l-8,5l-8-5V6l8,5l8-5V8z M20,18c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-7l8,5l8-5V18z" />
        </svg>
    </IconWrapper>
);

const HappyIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35 l-1.45 -1.32 C5.4 15.36 2 12.28 2 8.5 C2 5.42 4.42 3 7.5 3 c1.74 0 3.41 0.81 4.5 2.09 C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5 c0 3.78 -3.4 6.86 -8.55 11.54 L12 21.35 z" />
        </svg>
    </IconWrapper>
);

const OrderCycleMultiVendor = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [activeStep, setActiveStep] = useState(-1);

    // Refs for performance (Direct DOM manipulation)
    const voyagerRef = useRef();
    const trailRefs = useRef([]);
    const ringRefs = useRef([]);
    const requestRef = useRef();
    const startTimeRef = useRef();

    const steps = useMemo(() => [
        { id: 0, icon: <OrderPlacedIcon />, label: "Online order placed", pos: { x: 300, y: 50 }, color: "#00bfff", func: pulseGlow, labelPos: "top" },
        { id: 1, icon: <PaymentsIcon />, label: "Payments received", pos: { x: 700, y: 50 }, color: "#00bfff", func: rotateSpark, labelPos: "top" },
        { id: 2, icon: <InventoryIcon />, label: "Inventory levels updated", pos: { x: 900, y: 250 }, color: "#00bfff", func: typing, labelPos: "right" },
        { id: 3, icon: <ShippedIcon />, label: "Products shipped & tracked", pos: { x: 700, y: 450 }, color: "#00bfff", func: scan, labelPos: "bottom" },
        { id: 4, icon: <DeliveredIcon />, label: "Product delivered to the customer", pos: { x: 300, y: 450 }, color: "#00bfff", func: launch, labelPos: "bottom" },
        { id: 5, icon: <HappyIcon />, label: "Happy customer +1", pos: { x: 100, y: 250 }, color: "#00bfff", func: grow, labelPos: "left" },
    ], []);

    const historyRef = useRef([]);

    const animate = useCallback((time) => {
        if (!startTimeRef.current) startTimeRef.current = time;
        const elapsed = time - startTimeRef.current;
        const duration = 24000;
        const cycleProgress = (elapsed % duration) / duration;

        const sections = 6;
        const sectionTime = 1 / sections;
        const orbitRatio = 0.5;

        const sectionIdx = Math.floor(cycleProgress / sectionTime);
        const sectionProgress = (cycleProgress % sectionTime) / sectionTime;

        let x, y, active = -1;
        const currentStep = steps[sectionIdx];
        const nextStep = steps[(sectionIdx + 1) % sections];

        if (sectionProgress < orbitRatio) {
            active = sectionIdx;
            const orbitT = sectionProgress / orbitRatio;
            const angle = (orbitT * Math.PI * 2) - Math.PI / 2;
            const radius = 41;
            x = currentStep.pos.x + Math.cos(angle) * radius;
            y = currentStep.pos.y + Math.sin(angle) * radius;

            // Direct DOM update for the active ring
            if (ringRefs.current[sectionIdx]) {
                const offset = 339 - (339 * orbitT);
                ringRefs.current[sectionIdx].setAttribute("stroke-dashoffset", offset);
            }
        } else {
            active = -1;
            const travelT = (sectionProgress - orbitRatio) / (1 - orbitRatio);

            // Quadratic Easing for buttery smoothness
            const easeTravelT = travelT < 0.5 ? 2 * travelT * travelT : -1 + (4 - 2 * travelT) * travelT;

            if (sectionIdx === 1) { // Top Right Arc
                const angle = (easeTravelT * Math.PI / 2) - Math.PI / 2;
                x = 700 + Math.cos(angle) * 200; y = 250 + Math.sin(angle) * 200;
            } else if (sectionIdx === 2) { // Bottom Right Arc
                const angle = (easeTravelT * Math.PI / 2);
                x = 700 + Math.cos(angle) * 200; y = 250 + Math.sin(angle) * 200;
            } else if (sectionIdx === 4) { // Bottom Left Arc
                const angle = (easeTravelT * Math.PI / 2) + Math.PI / 2;
                x = 300 + Math.cos(angle) * 200; y = 250 + Math.sin(angle) * 200;
            } else if (sectionIdx === 5) { // Top Left Arc
                const angle = (easeTravelT * Math.PI / 2) + Math.PI;
                x = 300 + Math.cos(angle) * 200; y = 250 + Math.sin(angle) * 200;
            } else {
                x = currentStep.pos.x + (nextStep.pos.x - currentStep.pos.x) * easeTravelT;
                y = currentStep.pos.y + (nextStep.pos.y - currentStep.pos.y) * easeTravelT;
            }

            // Reset rings on travel
            if (ringRefs.current[sectionIdx]) {
                ringRefs.current[sectionIdx].setAttribute("stroke-dashoffset", 339);
            }
        }

        // Direct DOM update for main ball
        if (voyagerRef.current) {
            voyagerRef.current.setAttribute("cx", x);
            voyagerRef.current.setAttribute("cy", y);
        }

        // Direct DOM update for trail
        historyRef.current = [{ x, y }, ...historyRef.current.slice(0, 5)];
        historyRef.current.forEach((pos, i) => {
            if (trailRefs.current[i]) {
                trailRefs.current[i].setAttribute("cx", pos.x);
                trailRefs.current[i].setAttribute("cy", pos.y);
            }
        });

        // Only use state for activeStep to handle CSS/Icon changes (low frequency)
        if (active !== activeStep) {
            setActiveStep(active);
        }

        requestRef.current = requestAnimationFrame(animate);
    }, [activeStep, steps, setActiveStep]);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [animate]); // Dependency is now stable with useCallback

    return (
        <Box sx={{
            py: 4,
            px: 2,
            background: "linear-gradient(180deg, #f8faff 0%, #e0f2ff 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            position: "relative"
        }}>
            {/* Optimized Particles */}
            {[...Array(20)].map((_, i) => (
                <Box
                    key={i}
                    sx={{
                        position: "absolute",
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1,
                        borderRadius: "50%",
                        bgcolor: "rgba(27, 37, 168, 0.2)",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random(),
                        filter: "blur(0.5px)",
                        willChange: "transform",
                        animation: `${float} ${Math.random() * 10 + 15}s infinite linear`
                    }}
                />
            ))}

            {/* Header Content */}
            <Box sx={{ textAlign: "center", mb: 4, maxWidth: "800px", zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Typography sx={{
                    fontFamily: "'Dancing Script', cursive",
                    color: "#00bfff",
                    fontSize: "32px",
                    fontWeight: 700,
                    mb: 1
                }}>
                    Manage
                </Typography>
                <Typography sx={{ color: "rgba(29, 29, 31, 0.7)", fontSize: "18px", fontWeight: 600, mb: 1 }}>
                    From shopping carts to content customers
                </Typography>
                <Typography variant="h2" sx={{
                    fontSize: { xs: "28px", md: "42px" },
                    fontWeight: 900,
                    color: "#1d1d1f",
                    lineHeight: 1.2,
                    letterSpacing: "-1px",
                }}>
                    your entire order cycle, automated
                </Typography>
            </Box>

            {/* Desktop Animated Cycle */}
            {!isMobile ? (
                <Box sx={{ position: "relative", width: 1000, height: 550, transform: { xs: 'scale(0.6)', sm: 'scale(0.8)', md: 'scale(1)' } }}>

                    {/* Central Focus Area - Subtle Glow */}
                    <Box sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 450,
                        height: 450,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0, 191, 255, 0.05) 0%, transparent 60%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1
                    }}>
                        <Box sx={{
                            width: 150, height: 150,
                            bgcolor: "rgba(0, 191, 255, 0.05)",
                            borderRadius: "50%",
                            filter: "blur(40px)",
                            animation: `${float} 6s infinite ease-in-out`
                        }} />
                    </Box>

                    {/* Main Path Line */}
                    <svg width="1000" height="500" style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
                        <defs>
                            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#1b25a8" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#00bfff" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#1b25a8" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M300,50 L700,50 A200,200 0 0,1 900,250 A200,200 0 0,1 700,450 L300,450 A200,200 0 0,1 100,250 A200,200 0 0,1 300,50 Z"
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="3"
                            strokeDasharray="8 6"
                        />
                    </svg>

                    {/* Foreground Voyager Layer */}
                    <svg width="1000" height="500" style={{ position: "absolute", top: 0, left: 0, zIndex: 20, pointerEvents: "none" }}>
                        <defs>
                            <filter id="voyagerGlow">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="glow" />
                                <feMerge>
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {/* The Voyager Ball Trail */}
                        {[...Array(6)].map((_, i) => (
                            <circle
                                key={i}
                                ref={el => trailRefs.current[i] = el}
                                cx="-100" cy="-100"
                                r={6 - i}
                                fill="#00bfff"
                                opacity={0.5 / (i + 1)}
                                filter="url(#voyagerGlow)"
                            />
                        ))}
                        {/* Main Ball */}
                        <circle
                            ref={voyagerRef}
                            cx="-100" cy="-100"
                            r="8"
                            fill="#1b25a8"
                            filter="url(#voyagerGlow)"
                        />
                    </svg>

                    {/* Icon Steps */}
                    {steps.map((step, idx) => (
                        <Box key={step.id} sx={{
                            position: "absolute",
                            top: step.pos.y,
                            left: step.pos.x,
                            transform: "translate(-50%, -50%)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            zIndex: activeStep === idx ? 15 : 10
                        }}>
                            {/* Status Ring */}
                            <svg width="120" height="120" style={{ position: "absolute", top: -20, left: -20, zIndex: 4, transform: "rotate(-90deg)" }}>
                                <circle
                                    ref={el => ringRefs.current[idx] = el}
                                    cx="60" cy="60" r="54"
                                    fill="none"
                                    stroke="#1b25a8"
                                    strokeWidth="3"
                                    strokeDasharray="339"
                                    strokeDashoffset="339"
                                    opacity={activeStep === idx ? 0.8 : 0.05}
                                />
                            </svg>

                            <StyledIconCircle
                                bgcolor={step.color}
                                active={activeStep === idx}
                                animation={step.func}
                            >
                                {React.cloneElement(step.icon, { active: activeStep === idx })}
                            </StyledIconCircle>

                            {/* Labels */}
                            <Box sx={{
                                position: "absolute",
                                width: 220,
                                textAlign: "center",
                                opacity: activeStep === idx ? 1 : 0.6,
                                transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
                                transform: activeStep === idx ? "scale(1.05) translateY(-5px)" : "scale(1)",
                                ...(step.labelPos === "top" && { bottom: 100 }),
                                ...(step.labelPos === "bottom" && { top: 100 }),
                                ...(step.labelPos === "right" && { left: 120, textAlign: "left" }),
                                ...(step.labelPos === "left" && { right: 120, textAlign: "right" }),
                            }}>
                                <Typography sx={{
                                    color: "#1d1d1f",
                                    fontWeight: 800,
                                    fontSize: "14px",
                                    textTransform: "none",
                                    lineHeight: 1.2
                                }}>
                                    {step.label}
                                </Typography>
                            </Box>
                        </Box>
                    ))}

                </Box>
            ) : (
                <Box sx={{ width: "100%", px: 2, display: "flex", flexDirection: "column", gap: 3 }}>
                    {steps.map((step, idx) => (
                        <Box
                            key={step.id}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 3,
                                p: 3,
                                bgcolor: "#fff",
                                borderRadius: "20px",
                                border: "1px solid rgba(0, 191, 255, 0.1)",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                                position: "relative",
                                "&::before": idx !== steps.length - 1 ? {
                                    content: '""',
                                    position: "absolute",
                                    left: "48px",
                                    top: "80px",
                                    bottom: "-24px",
                                    width: "2px",
                                    background: "linear-gradient(to bottom, #00bfff 0%, transparent 100%)",
                                    zIndex: 1
                                } : {}
                            }}
                        >
                            <Box
                                sx={{
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "16px",
                                    bgcolor: "#f0f7ff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    zIndex: 2,
                                    border: "1px solid rgba(0, 191, 255, 0.2)"
                                }}
                            >
                                {React.cloneElement(step.icon, { active: true })}
                            </Box>
                            <Typography sx={{
                                color: "#1d1d1f",
                                fontWeight: 700,
                                fontSize: "16px",
                                lineHeight: 1.3
                            }}>
                                {step.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default OrderCycleMultiVendor;
