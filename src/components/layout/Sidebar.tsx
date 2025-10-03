'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard,
  Target,
  Inbox,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  CreditCard,
  Users,
  Shield,
  Database,
  HelpCircle,
  Activity
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const dashboardNavItems = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Campaigns',
    href: '/dashboard/campaigns',
    icon: Target,
  },
  {
    title: 'Leads Inbox',
    href: '/dashboard/leads',
    icon: Inbox,
  },
  {
    title: 'Templates',
    href: '/dashboard/templates',
    icon: FileText,
  },
  {
    title: 'Scheduling',
    href: '/dashboard/scheduling',
    icon: Calendar,
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    title: 'Integrations',
    href: '/dashboard/integrations',
    icon: Settings,
  },
  {
    title: 'Billing',
    href: '/dashboard/billing',
    icon: CreditCard,
  },
];

const adminNavItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: Users,
  },
  {
    title: 'Billing',
    href: '/admin/billing',
    icon: CreditCard,
  },
  {
    title: 'Content Moderation',
    href: '/admin/moderation',
    icon: Shield,
  },
  {
    title: 'Templates',
    href: '/admin/templates',
    icon: FileText,
  },
  {
    title: 'Integrations',
    href: '/admin/integrations',
    icon: Database,
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
  },
  {
    title: 'Support',
    href: '/admin/support',
    icon: HelpCircle,
  },
  {
    title: 'Audit Logs',
    href: '/admin/audit',
    icon: Activity,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');
  const navItems = isAdmin ? adminNavItems : dashboardNavItems;

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                    isActive 
                      ? "bg-gradient-primary text-white shadow-glow" 
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;