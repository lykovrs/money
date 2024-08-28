import { Link } from 'react-router-dom';
import { navigationItems } from '../config/navigation';

export default function Footer() {
  return (
    <footer className="bg-purple-100 text-white h-[82px] flex align-middle items-center font-medium text-lg gap-x-1 pr-16 pl-16">
      {navigationItems.map(({ id, title, path }) => {
        return (
          <Link key={id} to={path}>
            {title}
          </Link>
        );
      })}
    </footer>
  );
}
