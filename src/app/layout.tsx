import type {Metadata} from "next";
import {Ubuntu} from "next/font/google";
import "./globals.css";

const ubuntuSans = Ubuntu({
	weight: ["400", "700"],
	variable: "--font-ubuntu-sans",
	subsets: ["latin"],
	display: "swap",
});
export const metadata: Metadata = {
	title: "Nova Haven",
	description: "Property management throughout the solar system",
	icons: {
		icon: "../nova-haven-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${ubuntuSans.variable} antialiased`}>{children}</body>
		</html>
	);
}
