import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
	title: "Drag And Drop Main Page",
	description: "Generated by Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
