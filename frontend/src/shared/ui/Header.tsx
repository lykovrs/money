import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../config/navigation';
import clsx from 'clsx';
import { useUsersServiceUsersControllerMe } from '../api/queries';

export default function Header() {
  const { data: currentUser } = useUsersServiceUsersControllerMe();
  const { pathname } = useLocation();

  return (
    <header className="sticky flex align-middle items-center bg-purple-100 text-white h-[82px] font-medium text-lg pr-16 pl-16">
      <nav className="">
        <ul className="flex align-middle items-center gap-x-1">
          {navigationItems.map(({ id, title, path }) => {
            return (
              <li
                key={id}
                className={clsx(
                  'hover:text-purple-60 text-purple-20',
                  pathname === path ? 'text-purple-60' : ''
                )}
              >
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes('/profile') ? 'active' : ''
              }`}
              to={`/profile`}
            >
              {currentUser?.avatar && (
                <img
                  width={25}
                  height={25}
                  src={currentUser.avatar}
                  className="user-pic"
                  alt=""
                />
              )}
              {currentUser?.username}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
