import './global.css';
import Providers from './providers';
import { Outlet } from 'react-router-dom';
import { Vortex } from '../shared/ui/Vortex';
import { Navbar } from '../shared/ui/NavBar';

export default function RootLayout() {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
    >
      <Providers>
        <Navbar className="top-2" />
        <main className="flex flex-col pt-52">
          <section className="grow pr-16 pl-16">
            <Outlet />
          </section>
        </main>
      </Providers>
    </Vortex>
  );
}
