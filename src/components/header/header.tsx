import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Breadcrumbs from './breadcrumbs/breadcrumbs';
import Logo from './logo/logo';
import UserBlock from './user-block/user-block';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

export default function Header({ children, className }: HeaderProps) {
  return (
    <header className={classNames('page-header', className)}>
      {children}
    </header>
  );
}

Header.Logo = Logo;
Header.UserBlock = UserBlock;
Header.Breadcrumbs = Breadcrumbs;
