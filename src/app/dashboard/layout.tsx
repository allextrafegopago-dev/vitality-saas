"use client";

import { LayoutDashboard, Users, UserPlus, FileText, Settings, Activity } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Pacientes", href: "/dashboard/patients", icon: <Users size={20} /> },
    { label: "Dietas & Treinos", href: "/dashboard/plans", icon: <FileText size={20} /> },
    { label: "Meu ID Vitality", href: "/dashboard/connections", icon: <Activity size={20} /> },
    { label: "Convites & Faturamento", href: "/dashboard/billing", icon: <UserPlus size={20} /> },
    { label: "Configurações", href: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <Activity size={28} />
          VitalitySaaS
        </div>
        
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`${styles.navItem} ${pathname === item.href ? styles.navItemActive : ''}`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Area */}
      <div className={styles.mainContent}>
        {/* Topbar */}
        <header className={styles.topbar}>
          <div className={styles.userProfile}>
            <div>
              <div className={styles.userName}>Dr. João da Silva</div>
              <div className={styles.userRole}>Nutricionista</div>
            </div>
            <div className={styles.avatar}>JS</div>
          </div>
        </header>

        {/* Content */}
        <main className={styles.contentWrapper}>
          {children}
        </main>
      </div>
    </div>
  );
}
