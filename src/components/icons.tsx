
import type { SVGProps } from 'react';

export const MadLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M2 20L12 4L22 20H17L12 10L7 20H2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4L7.5 13H16.5L12 4Z" fill="currentColor"/>
    </svg>
);
