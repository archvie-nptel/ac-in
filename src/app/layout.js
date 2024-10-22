export const metadata = {
  title: "archive.nptel.ac.in/noc/Ecertificate",
  description: "NPTEL Course Certificate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

