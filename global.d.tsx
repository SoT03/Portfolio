declare namespace JSX {
	interface IntrinsicElements {
		'swiper-container': React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLElement>,
			HTMLElement
		> & {
			navigation: string;
			pagination: string;
			// Add more properties
		};
		'swiper-slide': React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLElement>,
			HTMLElement
		> & {
			lazy: string;
			children: JSX.Element;
			// Add more properties
		};
	}
}
