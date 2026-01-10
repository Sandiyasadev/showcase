tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
                "primary-hover": "#2563eb",
                secondary: "#14b8a6",
                accent: "#14b8a6",
                "dark-bg": "#050505",
                "dark-surface": "#0f0f11",
                "dark-border": "rgba(255,255,255,0.08)",
                "background-light": "#f7f7f8",
                "background-dark": "#050505",
                "surface-light": "#ffffff",
                "surface-dark": "#0f1115",
                "text-main": "#0f172a",
                "text-sub": "#64748b",
                "border-color": "#e5e7eb",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Space Grotesk", "sans-serif"],
                serif: ["Playfair Display", "serif"],
                body: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                "gradient-glow":
                    "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #14b8a6 180deg, #22d3ee 360deg)",
                "glass-gradient":
                    "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                "gradient-radial":
                    "radial-gradient(var(--tw-gradient-stops))",
            },
            boxShadow: {
                glow: "0 0 40px -10px rgba(59, 130, 246, 0.5)",
                glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                boutique:
                    "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.02)",
                "boutique-hover":
                    "0 20px 40px -4px rgba(0, 0, 0, 0.08), 0 8px 16px -4px rgba(0, 0, 0, 0.04)",
                button: "0 2px 8px rgba(0, 0, 0, 0.08)",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
};
