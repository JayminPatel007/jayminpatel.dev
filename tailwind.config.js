module.exports = {
  purge: ['/src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		primary: {
    			100: '#111',
					200: '#191919'
				},
				secondary: '#fff',
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
