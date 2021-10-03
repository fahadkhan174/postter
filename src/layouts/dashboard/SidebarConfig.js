import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
// import lockFill from '@iconify/icons-eva/lock-fill';
// import personAddFill from '@iconify/icons-eva/person-add-fill';
// import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'home',
    path: '/home',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'user',
    path: '/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'product',
    path: '/products',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'blog',
    path: '/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'admin user',
    path: '/admin/user',
    icon: getIcon(fileTextFill),
    roles: ['ROLE_MODERATOR', 'ROLE_ADMIN']
  }
];

export default sidebarConfig;
