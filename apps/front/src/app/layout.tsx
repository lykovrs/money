import './global.css';
import Header from "../shared/ui/Header";
import Footer from "../shared/ui/Footer";

export const metadata = {
  title: 'My Dreams and Achievements',
  description: 'Personal platform for motivation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='h-dvh flex flex-col'>
        <Header />
        <main className='grow pr-16 pl-16'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
