/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
  		primary: '#8A2BE2',
  		secondary: '#BA55D3',
  		mainBg: '#06092B',
  		white: '#FAFAFA',
  		black: '#030517',
  		lightGray: '#EAEAEA',
  		gray: '#8F8F8F',
  		darkGray: '#2E2F42'
  	},
  	fontFamily: {
  		poppins: ["Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"],
  	},
  	fontSize: {
  		xsmall: '1.2rem',
  		small: '1.4rem',
  		medium: '1.6rem',
  		large: '1.8rem',
  		xlarge: '2.0rem',
  		xxlarge: '2.8rem'
  	},
  	fontWeight: {
  		light: '300',
  		normal: '400',
  		bold: '600'
  	},
  	extend: {
  		zIndex: {
  			base: '10',
  			menu: '20',
  			overlay: '30',
  			modal: '40',
  			alwaysOnTop: '50'
  		},
  		spacing: {
  			xxsmall: '0.8rem',
  			xsmall: '1.6rem',
  			small: '2.4rem',
  			medium: '3.2rem',
  			large: '4.0rem',
  			xlarge: '4.8rem',
  			xxlarge: '5.6rem'
  		},
  		borderRadius: {
  			radius: '0.4rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'var(--sidebar-background)',
  				foreground: 'var(--sidebar-foreground)',
  				primary: 'var(--sidebar-primary)',
  				'primary-foreground': 'var(--sidebar-primary-foreground)',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

