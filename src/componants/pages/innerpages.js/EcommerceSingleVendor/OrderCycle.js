import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";

// --- Animations ---
const pulseGlow = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 5px rgba(0, 210, 255, 0.2); }
  50% { transform: scale(1.05); box-shadow: 0 0 25px rgba(0, 210, 255, 0.6); }
  100% { transform: scale(1); box-shadow: 0 0 5px rgba(0, 210, 255, 0.2); }
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
  50% { transform: scale(1.2) translateY(-10px); color: #4caf50; }
  100% { transform: scale(1) translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
`;

// --- Styled Components ---
const StyledIconCircle = styled(Box)(({ bgcolor, active, animation }) => ({
    width: 80,
    height: 80,
    borderRadius: "24px",
    background: active ? `linear-gradient(135deg, ${bgcolor} 0%, #0a1930 100%)` : "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 5,
    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
    boxShadow: active
        ? "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(0, 210, 255, 0.4)"
        : "0 10px 25px rgba(0,0,0,0.05)",
    border: active ? "2px solid #00d2ff" : "1px solid #e0e0e0",
    ...(active && {
        animation: `${animation} 1.5s infinite ease-in-out`,
    }),
}));

const IconWrapper = ({ children, active }) => (
    <Box sx={{
        color: active ? "#00d2ff" : "#3f51b5",
        transition: "color 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        {children}
    </Box>
);

// Illustrative icons with refined SVG paths
const ConsultationIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,6h-4V4c0-1.11-0.89-2-2-2h-4C8.89,2,8,2.89,8,4v2H4C2.89,6,2.01,6.89,2.01,8L2,19c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V8 C22,6.89,21.11,6,20,6z M10,4h4v2h-4V4z M13,10h-2v3H8v2h3v3h2v-3h3v-2h-3V10z" />
        </svg>
    </IconWrapper>
);

const DesignIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9c0.83,0,1.5-0.67,1.5-1.5c0-0.39-0.15-0.74-0.39-1.01c-0.23-0.26-0.38-0.61-0.38-0.99 c0-0.83,0.67-1.5,1.5-1.5H16c2.76,0,5-2.24,5-5C21,7.05,16.97,3,12,3z M6.5,12C5.67,12,5,11.33,5,10.5S5.67,9,6.5,9S8,9.67,8,10.5 S7.33,12,6.5,12z M17.5,12c-0.83,0-1.5-0.67-1.5-1.5S16.67,9,17.5,9S19,9.67,19,10.5S18.33,12,17.5,12z" />
        </svg>
    </IconWrapper>
);

const DevIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.4,16.6L4.8,12l4.6-4.6L8,6l-6,6l6,6L9.4,16.6z M14.6,16.6l4.6-4.6l-4.6-4.6L16,6l6,6l-6,6L14.6,16.6z M12,2 c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z" />
        </svg>
    </IconWrapper>
);

const TestingIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5,14h-0.79l-0.28-0.27C15.41,12.59,16,11.11,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5S5.91,16,9.5,16 c1.61,0,3.09-0.59,4.23-1.57l0.27,0.28v0.79l5,4.99L20.49,19L15.5,14z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5 S11.99,14,9.5,14z" />
        </svg>
    </IconWrapper>
);

const LaunchIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.13,22.19L11.5,18.35c-0.12-0.28-0.34-0.5-0.62-0.62l-3.84-1.63L21,6L13.13,22.19z M12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z" />
        </svg>
    </IconWrapper>
);

const GrowthIcon = ({ active }) => (
    <IconWrapper active={active}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16,6l2.29,2.29l-4.88,4.88c-0.39,0.39-1.02,0.39-1.41,0l-2.88-2.83L3.71,15.71c-0.39,0.39-0.39,1.02,0,1.41l0,0 c0.39,0.39,1.02,0.39,1.41,0l4.71-4.71l2.88,2.83c0.39,0.39,1.02,0.39,1.41,0l5.59-5.58L22,12V6H16z" />
        </svg>
    </IconWrapper>
);

const OrderCycle = () => {
    const [activeStep, setActiveStep] = useState(-1);

    // Refs for performance (Direct DOM manipulation)
    const voyagerRef = useRef();
    const trailRefs = useRef([]);
    const ringRefs = useRef([]);
    const requestRef = useRef();
    const startTimeRef = useRef();

    const steps = [
        { id: 0, icon: <ConsultationIcon />, label: "Business Consultation", pos: { x: 300, y: 50 }, color: "#3f51b5", func: pulseGlow, labelPos: "top" },
        { id: 1, icon: <DesignIcon />, label: "Creative Design", pos: { x: 700, y: 50 }, color: "#3f51b5", func: rotateSpark, labelPos: "top" },
        { id: 2, icon: <DevIcon />, label: "Development", pos: { x: 900, y: 250 }, color: "#3f51b5", func: typing, labelPos: "right" },
        { id: 3, icon: <TestingIcon />, label: "Quality Testing", pos: { x: 700, y: 450 }, color: "#3f51b5", func: scan, labelPos: "bottom" },
        { id: 4, icon: <LaunchIcon />, label: "Official Launch", pos: { x: 300, y: 450 }, color: "#3f51b5", func: launch, labelPos: "bottom" },
        { id: 5, icon: <GrowthIcon />, label: "Growth & Support", pos: { x: 100, y: 250 }, color: "#3f51b5", func: grow, labelPos: "left" },
    ];

    // Keep history in a ref for zero-latency updates
    const historyRef = useRef([]);

    const animate = (time) => {
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
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [activeStep]); // Dependency minimized to activeStep trigger

    return (
        <Box sx={{
            pt: 4,
            pb: 14,
            px: 2,
            background: "linear-gradient(to bottom, #112240 0%, #1a237e 70%, #112240 100%)",
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
                        bgcolor: "rgba(255,255,255,0.4)",
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
            <Box sx={{ textAlign: "center", mb: 10, maxWidth: "800px", zIndex: 10, alignItems: 'center', }}>
                <Typography sx={{
                    fontFamily: "'Dancing Script', cursive",
                    color: "#ffffff",
                    fontSize: "28px",
                    fontWeight: 700,
                    alignItems: 'center',
                    mb: 1
                }}>
                    The Future of Growth
                </Typography>
                <Typography variant="h2" sx={{
                    fontSize: { xs: "36px", md: "36px" },
                    fontWeight: 900,

                    color: "#fff",
                    lineHeight: 1,
                    mb: 1.5,
                    letterSpacing: "-2px",
                }}>
                    Endless Innovation
                    <span style={{ color: "#ffffff" }}> Seamless Development </span>
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "20px", fontWeight: 400, width: '800px' }}>
                    Experience a smooth cycle of strategy, creation, and expansion designed to grow<br />
                    your business with continuous single vendor ecommerce development.
                </Typography>
            </Box>
            <Box sx={{ position: "relative", width: 1000, height: 450 }}>

                {/* Central Focus Area - Neon Ring */}
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 450,
                    height: 450,
                    borderRadius: "50%",
                    border: "1px solid rgba(0, 210, 255, 0.08)",
                    background: "radial-gradient(circle, rgba(0, 210, 255, 0.03) 0%, transparent 60%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1
                }}>
                    <Box sx={{
                        width: 150, height: 150,
                        bgcolor: "rgba(0, 210, 255, 0.05)",
                        borderRadius: "50%",
                        filter: "blur(40px)",
                        animation: `${float} 6s infinite ease-in-out`
                    }} />
                </Box>

                {/* Main Path Line */}
                <svg width="1000" height="500" style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
                    <defs>
                        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                            <stop offset="100%" stopColor="#fff" stopOpacity="0.5" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M300,50 L700,50 A200,200 0 0,1 900,250 A200,200 0 0,1 700,450 L300,450 A200,200 0 0,1 100,250 A200,200 0 0,1 300,50 Z"
                        fill="none"
                        stroke="url(#pathGradient)"
                        strokeWidth="2.5"
                        strokeDasharray="8 6"
                        opacity="1"
                    />
                </svg>

                {/* Foreground Voyager Layer (Performance Refactored) */}
                <svg width="1000" height="500" style={{ position: "absolute", top: 0, left: 0, zIndex: 20, pointerEvents: "none" }}>
                    <defs>
                        <filter id="neonBallGlow">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="glow" />
                            <feMerge>
                                <feMergeNode in="glow" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {/* The Voyager Ball Trail - Updated via refs */}
                    {[...Array(6)].map((_, i) => (
                        <circle
                            key={i}
                            ref={el => trailRefs.current[i] = el}
                            cx="-100" cy="-100" // Initial offscreen
                            r={6 - i}
                            fill="#00d2ff"
                            opacity={0.7 / (i + 1)}
                            filter="url(#neonBallGlow)"
                        />
                    ))}
                    {/* Main Ball - Updated via ref */}
                    <circle
                        ref={voyagerRef}
                        cx="-100" cy="-100"
                        r="7"
                        fill="#fff"
                        filter="url(#neonBallGlow)"
                        style={{ boxShadow: "0 0 20px #00d2ff" }}
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
                        {/* Status Ring - Updated via refs */}
                        <svg width="120" height="120" style={{ position: "absolute", top: -20, left: -20, zIndex: 4, transform: "rotate(-90deg)" }}>
                            <circle
                                ref={el => ringRefs.current[idx] = el}
                                cx="60" cy="60" r="54"
                                fill="none"
                                stroke="#00d2ff"
                                strokeWidth="3"
                                strokeDasharray="339"
                                strokeDashoffset="339"
                                opacity={activeStep === idx ? 0.9 : 0.05}
                            />
                        </svg>

                        <StyledIconCircle
                            bgcolor={step.color}
                            active={activeStep === idx}
                            animation={step.func}
                        >
                            {React.cloneElement(step.icon, { active: activeStep === idx })}
                        </StyledIconCircle>

                        {/* Labels with Neon Effect */}
                        <Box sx={{
                            position: "absolute",
                            width: 220,
                            textAlign: "center",
                            opacity: activeStep === idx ? 1 : 0.4,
                            transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
                            transform: activeStep === idx ? "scale(1.1) translateY(-5px)" : "scale(1)",
                            textShadow: activeStep === idx ? "0 0 12px rgba(0, 210, 255, 0.6)" : "none",
                            ...(step.labelPos === "top" && { bottom: 100 }),
                            ...(step.labelPos === "bottom" && { top: 100 }),
                            ...(step.labelPos === "right" && { left: 110, textAlign: "left" }),
                            ...(step.labelPos === "left" && { right: 110, textAlign: "right" }),
                        }}>
                            <Typography sx={{
                                color: "#fff",
                                fontWeight: 900,
                                fontSize: "15px",
                                textTransform: "uppercase",
                                letterSpacing: "1.5px",
                                lineHeight: 1
                            }}>
                                {step.label}
                            </Typography>
                        </Box>
                    </Box>
                ))}

            </Box>
        </Box>
    );
};

export default OrderCycle;
