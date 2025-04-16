
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// NeoPaper custom colors
				paper: {
					light: '#FEF7CD',
					DEFAULT: '#F1EFE2',
					dark: '#E5E1CF',
					aged: '#E0DBBA'
				},
				ink: {
					light: '#444444',
					DEFAULT: '#222222',
					dark: '#111111'
				},
				highlight: {
					red: '#D13B40',
					blue: '#1EAEDB',
					purple: '#8B5CF6'
				},
				sepia: {
					light: 'rgba(220, 195, 160, 0.3)',
					DEFAULT: 'rgba(220, 195, 160, 0.5)',
					dark: 'rgba(220, 195, 160, 0.7)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'serif': ['Playfair Display', 'Georgia', 'serif'],
				'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'type-in': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: '100%'
					}
				},
				'page-flip-right': {
					'0%': {
						transform: 'rotateY(0deg)',
						transformOrigin: 'left'
					},
					'100%': {
						transform: 'rotateY(-180deg)',
						transformOrigin: 'left'
					}
				},
				'page-flip-left': {
					'0%': {
						transform: 'rotateY(-180deg)',
						transformOrigin: 'right'
					},
					'100%': {
						transform: 'rotateY(0deg)',
						transformOrigin: 'right'
					}
				},
				'paper-grain': {
					'0%': { backgroundPosition: '0% 0%' },
					'50%': { backgroundPosition: '100% 100%' },
					'100%': { backgroundPosition: '0% 0%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'type-in': 'type-in 1.5s steps(40, end)',
				'page-flip-right': 'page-flip-right 0.6s ease-in-out',
				'page-flip-left': 'page-flip-left 0.6s ease-in-out',
				'paper-grain': 'paper-grain 8s ease infinite'
			},
			backgroundImage: {
				'paper-texture': "url('/paper-texture.png')",
				'grain-texture': "url('/grain-texture.png')"
			},
			dropShadow: {
				'paper': '0 4px 3px rgba(0, 0, 0, 0.07)',
				'ink': '0 1px 1px rgba(0, 0, 0, 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
