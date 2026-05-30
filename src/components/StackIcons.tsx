import React from 'react';

// C# Language Logo - Custom high-fidelity purple gradient card
export const CsIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="28" fill="url(#cs-grad)" />
        <text x="64" y="88" fill="white" fontSize="68" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">C#</text>
        <defs>
            <linearGradient id="cs-grad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a15fb9" />
                <stop offset="1" stopColor="#5c2d91" />
            </linearGradient>
        </defs>
    </svg>
);

// .NET Core Logo - Custom deep violet .NET brand circle
export const NetIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="64" fill="url(#net-grad)" />
        <text x="64" y="82" fill="white" fontSize="42" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">.NET</text>
        <defs>
            <linearGradient id="net-grad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
                <stop stopColor="#68217a" />
                <stop offset="1" stopColor="#512bd4" />
            </linearGradient>
        </defs>
    </svg>
);

// Umbraco CMS Logo - Official Simple Icons path with brand orange color
export const UmbracoIcon = () => (
    <svg className="w-8 h-8" fill="#fc4d01" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Umbraco</title>
        <path d="M0 11.982A12 12 0 1 1 12 24 12 12 0 0 1 0 11.982zm11.756 4.11a11.856 11.856 0 0 1-2.773-.25 2.12 2.12 0 0 1-1.514-1.218q-.41-.943-.396-2.895a18.419 18.419 0 0 1 .127-2.04q.118-.988.236-1.629l.082-.425a.201.201 0 0 0 0-.038.244.244 0 0 0-.201-.236l-1.544-.246H5.74a.243.243 0 0 0-.235.189 6.517 6.517 0 0 0-.089.409c-.088.455-.17.9-.26 1.548a19.99 19.99 0 0 0-.176 2.12 11.165 11.165 0 0 0 0 1.486q.05 1.977.675 3.155.626 1.179 2.106 1.695 1.482.517 4.135.506h.22q2.655.01 4.134-.506 1.478-.518 2.1-1.695.623-1.178.678-3.147a11.165 11.165 0 0 0 0-1.485 19.99 19.99 0 0 0-.176-2.121 30.014 30.014 0 0 0-.26-1.548 6.724 6.724 0 0 0-.088-.41.243.243 0 0 0-.236-.188h-.04l-1.548.242a.236.236 0 0 0-.203.236.201.201 0 0 0 0 .037l.081.426q.118.643.236 1.63a18.709 18.709 0 0 1 .126 2.039q.019 1.95-.396 2.892a2.12 2.12 0 0 1-1.502 1.22 11.82 11.82 0 0 1-2.769.247Z"/>
    </svg>
);

// Azure Services Logo - Official Azure cloud geometry shape
export const AzureIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M82.3 14.5L50.4 56.4l-18.7 34.3L10.5 110h40.4l15-28.2L82.3 14.5z" fill="#0078d4" />
        <path d="M82.3 14.5L65.9 81.8l15 28.2H118L82.3 14.5z" fill="#50e4ff" />
        <path d="M65.9 81.8L50.4 56.4l15.5 25.4z" fill="#005a9e" />
    </svg>
);

// Microsoft SQL Server Logo - Official database cylinder shield representation
export const SqlIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="28" fill="#CC292B" />
        <path d="M30 40c0-6.627 15.222-12 34-12s34 5.373 34 12v12c0 6.627-15.222 12-34 12s-34-5.373-34-12V40z" fill="#E26D6F" />
        <path d="M98 40c0 6.627-15.222 12-34 12s-34-5.373-34-12 15.222-12 34-12 34 5.373 34 12z" fill="#F0B5B6" />
        <path d="M30 64c0 6.627 15.222 12 34 12s34-5.373 34-12v12c0 6.627-15.222 12-34 12s-34-5.373-34-12V64z" fill="#E26D6F" />
        <path d="M30 88c0 6.627 15.222 12 34 12s34-5.373 34-12v12c0 6.627-15.222 12-34 12s-34-5.373-34-12V88z" fill="#E26D6F" />
    </svg>
);

// React.js Logo - Official spinning React atom representation
export const ReactIcon = () => (
    <svg className="w-8 h-8 text-[#61dafb] animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
);

// TypeScript Logo - Official TS blue brand shield
export const TsIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="28" fill="#3178c6" />
        <text x="108" y="104" fill="white" fontSize="56" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">TS</text>
    </svg>
);

// Tailwind CSS Logo - Official twin wave brand mark
export const TailwindIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 36c-9.6 0-16.8 4.8-21.6 14.4C36 62.4 39.6 72 52.8 72c9.6 0 16.8-4.8 21.6-14.4C80.4 45.6 76.8 36 64 36zm-28 28c-9.6 0-16.8 4.8-21.6 14.4C8 90.4 11.6 100 24.8 100c9.6 0 16.8-4.8 21.6-14.4C52.4 73.6 48.8 64 36 64z" fill="#38bdf8" />
    </svg>
);
