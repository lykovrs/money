import './global.css';
import Header from "../shared/ui/Header";
import Footer from "../shared/ui/Footer";
import Providers from "./providers";
import { Outlet } from 'react-router-dom';

export const metadata = {
  title: 'My Dreams and Achievements',
  description: 'Personal platform for motivation',
};

export default function RootLayout() {
  return (
        <Providers>
          <Header />
          <main className='h-dvh flex flex-col' >
            <section className='grow pr-16 pl-16'>
              <Outlet />
            </section>
           </main>
          <Footer />
        </Providers>
  );
}
