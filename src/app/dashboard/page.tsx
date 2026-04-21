"use client";

import { Users, Mail, DollarSign, PlusCircle, Link as LinkIcon } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      <div className={styles.header}>
        <h1 className={styles.title}>Visão Geral</h1>
        <p className={styles.subtitle}>Acompanhe o desempenho e gestão dos seus pacientes.</p>
      </div>

      {/* Stats Row */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconPrimary}`}>
            <Users size={28} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>18</span>
            <span className={styles.statLabel}>Pacientes Ativos</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconWarning}`}>
            <Mail size={28} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>22 / 25</span>
            <span className={styles.statLabel}>Convites Utilizados</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconSuccess}`}>
            <DollarSign size={28} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>R$ 65,00</span>
            <span className={styles.statLabel}>Plano Atual/Mês</span>
          </div>
        </div>
      </div>

      <div className={styles.dashboardGrid}>
        {/* Pacientes Recentes */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Pacientes Recentes</h3>
            <Link href="/dashboard/patients" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              Ver Todos
            </Link>
          </div>

          <div className={styles.patientList}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.patientItem}>
                <div className={styles.patientInfo}>
                  <div className={styles.patientAvatar}>
                    P{i}
                  </div>
                  <div className={styles.patientDetails}>
                    <h4>Paciente Exemplo {i}</h4>
                    <p>Atualizado há {i} dia(s)</p>
                  </div>
                </div>
                <div className={styles.statusBadge}>
                  Ativo
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Ações Rápidas</h3>
          </div>
          <div className={styles.quickActions}>
            <button className={`btn-primary ${styles.actionBtn}`}>
              <PlusCircle size={20} />
              Enviar Novo Convite
            </button>
            <button className={`btn-secondary ${styles.actionBtn}`}>
              <LinkIcon size={20} />
              Compartilhar ID Vitality
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
