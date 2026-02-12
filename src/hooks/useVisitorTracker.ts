import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { api } from "@/lib/api";

const useVisitorTracker = () => {
    const location = useLocation();

    useEffect(() => {
        const trackVisitor = async () => {
            try {
                // Simple browser/OS detection
                const userAgent = navigator.userAgent;
                let browser = "Unknown";
                if (userAgent.indexOf("Firefox") > -1) {
                    browser = "Mozilla Firefox";
                } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
                    browser = "Opera";
                } else if (userAgent.indexOf("Trident") > -1) {
                    browser = "Microsoft Internet Explorer";
                } else if (userAgent.indexOf("Edge") > -1) {
                    browser = "Microsoft Edge";
                } else if (userAgent.indexOf("Chrome") > -1) {
                    browser = "Google Chrome";
                } else if (userAgent.indexOf("Safari") > -1) {
                    browser = "Apple Safari";
                }

                let os = "Unknown";
                if (userAgent.indexOf("Win") !== -1) os = "Windows";
                if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
                if (userAgent.indexOf("X11") !== -1) os = "UNIX";
                if (userAgent.indexOf("Linux") !== -1) os = "Linux";
                if (userAgent.indexOf("Android") !== -1) os = "Android";
                if (userAgent.indexOf("like Mac") !== -1) os = "iOS";

                let device = "Desktop";
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
                    device = "Mobile";
                }

                // Get location (optional, relying on backend IP lookup is better usually, but here is a placeholder or basic client side if needed, currently sending empty location to let backend handle IP based loc if implemented later, or user can input manually)
                // Actually, backend controller expects 'location' input.
                // For now, we'll send a placeholder or try to get it if we had an API.
                // Let's just send "Unknown" and let backend IP lookup handle it if we add that later.
                // Or if we want to be fancy, we could query a free geoip service here, but that might be blocked or slow.
                // Let's stick to basic info.

                await api.post("/visitors/store", {
                    page_url: window.location.href,
                    os: os,
                    browser: browser,
                    device: device,
                    location: "Unknown", // You might want to use a service like ipapi.co here if allowed
                });
            } catch (error) {
                console.error("Failed to track visitor", error);
            }
        };

        trackVisitor();
    }, [location]); // Run on route change
};

export default useVisitorTracker;
