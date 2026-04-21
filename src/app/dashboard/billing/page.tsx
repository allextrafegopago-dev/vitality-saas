"use client";

import { CreditCard, ShieldCheck, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import styles from "./page.module.css";

export default function BillingModule() {
  // Mock data for current usage
  const currentInvites = 24;
  const currentLimit = 25;
  const percentage = (currentInvites / currentLimit) * 100;
  
  const currentMonthlyFee = 65.00;
  const nextTierFee = currentMonthlyFee + 50.00;

  // Determine progress bar color based on usage
  let progressClass = styles.progressFill;
  if (percentage >= 90) progressClass = styles.progressFillDanger;
  else if (percentage >= 70) progressClass = styles.progressFillWarning;

  const handleUpgrade = async () => {
    // In a real app, this would call the API route to create a Stripe Checkout Session
    alert("Iniciando integração com o Stripe Checkout...");
  };

  return (
    <div className="animate-fade-in">
      <div className={styles.header}>
        <h1 className={styles.title}>Faturamento e Assinatura</h1>
        <p className={styles.subtitle}>Gerencie seu plano, limite de pacientes e pagamentos via Stripe.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              <TrendingUp size={24} className="text-primary" />
              Uso do Plano Atual
            </h2>
          </div>

          <div className={styles.usageContainer}>
            <div className={styles.usageHeader}>
              <span className={styles.usageTitle}>Convites de Pacientes</span>
              <span className={styles.usageCount}>{currentInvites} / {currentLimit} utilizados</span>
            </div>
            
            <div className={styles.progressBar}>
              <div 
                className={progressClass} 
                style={{ width: `${percentage}%` }}
              />
            </div>
            
            {percentage >= 90 && (
              <p className={styles.infoText} style={{ color: 'var(--danger-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                <AlertTriangle size={16} />
                Atenção: Você está muito próximo do limite do seu plano atual.
              </p>
            )}
            
            <p className={styles.infoText}>
              Seu plano atual permite convidar até {currentLimit} pacientes simultâneos gratuitamente para eles.
              Ao enviar o convite número {currentLimit + 1}, será necessário fazer um upgrade de cota.
            </p>
          </div>

          <div className={styles.upgradeBox}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)' }}>Próximo Nível (Até {currentLimit + 25} Pacientes)</h3>
            <div className={styles.upgradePrice}>
              R$ {nextTierFee.toFixed(2).replace('.', ',')}<span>/mês</span>
            </div>
            <p className={styles.upgradeDesc}>
              Faça o upgrade antecipado para não interromper seus atendimentos. Cobrança segura via Stripe.
            </p>
            <button className="btn-primary" onClick={handleUpgrade} style={{ width: '100%', maxWidth: '300px' }}>
              <CreditCard size={18} />
              Aumentar Limite de Pacientes
            </button>
          </div>
        </div>

        <div>
          <div className={styles.planCard}>
            <div className={styles.planContent}>
              <div className={styles.badge}>Ativo no momento</div>
              <div className={styles.planTitle}>Plano Profissional Base</div>
              <div className={styles.planPrice}>
                R$ {currentMonthlyFee.toFixed(2).replace('.', ',')}
                <span>/mês</span>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <div className={styles.planFeature}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  Até 25 Pacientes Ativos
                </div>
                <div className={styles.planFeature}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  Dietas e Treinos Ilimitados
                </div>
                <div className={styles.planFeature}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  Conexões B2B com ID Vitality
                </div>
                <div className={styles.planFeature}>
                  <ShieldCheck size={18} className={styles.checkIcon} />
                  Suporte Prioritário
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
