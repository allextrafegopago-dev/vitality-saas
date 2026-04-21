"use client";

import { ArrowLeft, Mail, Phone, Calendar, Activity, Weight, FileText, Share2, Plus } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import styles from "./page.module.css";

// This is a workaround for Next.js 15 App Router dynamic params in client components
export default function PatientProfile({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  return (
    <div className="animate-fade-in">
      <div className={styles.header}>
        <Link href="/dashboard/patients" className={styles.backBtn}>
          <ArrowLeft size={20} />
        </Link>
        
        <div className={styles.patientProfile}>
          <div className={styles.avatarLg}>
            AB
          </div>
          <div className={styles.patientInfo}>
            <h1>Ana Beatriz (ID: {resolvedParams.id})</h1>
            <div className={styles.patientMeta}>
              <span className={styles.metaItem}><Mail size={16} /> ana.beatriz@email.com</span>
              <span className={styles.metaItem}><Phone size={16} /> (11) 98765-4321</span>
              <span className={styles.metaItem}><Calendar size={16} /> 28 anos</span>
            </div>
          </div>
        </div>

        <div className={styles.sharedBadge}>
          <Share2 size={16} />
          Acompanhada com Personal
        </div>
      </div>

      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.tabActive}`}>Visão Geral & Evolução</div>
        <div className={styles.tab}>Dietas Prescritas</div>
        <div className={styles.tab}>Treinos (Integrado)</div>
      </div>

      <div className={styles.grid}>
        {/* Coluna Esquerda - Prontuário / Evolução */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>
                <Activity size={20} className="text-primary" />
                Histórico de Evolução
              </h3>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                <Plus size={16} /> Registrar Medidas
              </button>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineDate}>15 de Abril de 2026</div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Avaliação Mensal</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    Paciente relatou melhora na disposição. Redução de 2kg de gordura e ganho de 500g de massa magra.
                    Mantivemos a dieta base, ajustando apenas o pré-treino devido à nova ficha passada pelo personal.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineDate}>10 de Março de 2026</div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Consulta Inicial</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    Coleta de anamnese. Objetivo principal: Hipertrofia com leve déficit calórico no início.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita - Métricas e Arquivos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle} style={{ marginBottom: '1.5rem' }}>
              <Weight size={20} />
              Métricas Atuais
            </h3>
            
            <div className={styles.metricGrid}>
              <div className={styles.metricItem}>
                <div className={styles.metricValue}>65.5</div>
                <div className={styles.metricLabel}>Peso (kg)</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricValue}>22.4</div>
                <div className={styles.metricLabel}>IMC</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricValue}>18%</div>
                <div className={styles.metricLabel}>BF</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricValue}>1.68</div>
                <div className={styles.metricLabel}>Altura (m)</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>
                <FileText size={20} />
                Últimos Planos
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 500 }}>Dieta Hipertrofia v2</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Prescrito há 5 dias</div>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-light)', background: 'rgba(20, 184, 166, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>Nutricionista</span>
              </div>

              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 500 }}>Treino ABC - Força</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Prescrito há 12 dias</div>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FACC15', background: 'rgba(250, 204, 21, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>Personal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
