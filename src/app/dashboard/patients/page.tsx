"use client";

import { Search, UserPlus, MoreVertical, ChevronRight } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

const MOCK_PATIENTS = [
  { id: "1", name: "Ana Beatriz", email: "ana.beatriz@email.com", status: "ACTIVE", lastVisit: "Ontem", goal: "Hipertrofia" },
  { id: "2", name: "Carlos Eduardo", email: "carlos.ed@email.com", status: "ACTIVE", lastVisit: "2 dias atrás", goal: "Emagrecimento" },
  { id: "3", name: "Mariana Silva", email: "mari.silva@email.com", status: "PENDING", lastVisit: "-", goal: "Reeducação Alimentar" },
  { id: "4", name: "Rafael Costa", email: "rafa.costa@email.com", status: "ACTIVE", lastVisit: "1 semana atrás", goal: "Condicionamento Físico" },
];

export default function PatientsList() {
  return (
    <div className="animate-fade-in">
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Meus Pacientes</h1>
          <p className={styles.subtitle}>Gerencie os 18 pacientes ativos vinculados à sua conta.</p>
        </div>
        
        <div className={styles.actions}>
          <div className={styles.searchBar}>
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Buscar paciente..." className={styles.searchInput} />
          </div>
          <button className="btn-primary" style={{ padding: '0.5rem 1rem' }}>
            <UserPlus size={18} />
            Convidar
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Paciente</th>
              <th className={styles.th}>Objetivo</th>
              <th className={styles.th}>Última Visita</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PATIENTS.map((patient) => (
              <tr key={patient.id} className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.patientCell}>
                    <div className={styles.avatar}>
                      {patient.name.charAt(0)}{patient.name.split(' ')[1]?.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.patientName}>{patient.name}</div>
                      <div className={styles.patientEmail}>{patient.email}</div>
                    </div>
                  </div>
                </td>
                <td className={styles.td} style={{ color: 'var(--text-muted)' }}>
                  {patient.goal}
                </td>
                <td className={styles.td} style={{ color: 'var(--text-muted)' }}>
                  {patient.lastVisit}
                </td>
                <td className={styles.td}>
                  <span className={patient.status === 'ACTIVE' ? styles.statusActive : styles.statusPending}>
                    {patient.status === 'ACTIVE' ? 'Ativo' : 'Pendente'}
                  </span>
                </td>
                <td className={styles.td}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link href={`/dashboard/patients/${patient.id}`} className={styles.actionBtn} title="Ver Prontuário">
                      <ChevronRight size={18} />
                    </Link>
                    <button className={styles.actionBtn} title="Mais opções">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
