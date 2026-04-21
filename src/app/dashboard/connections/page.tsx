"use client";

import { Share2, UserPlus, Copy, Check, Users } from "lucide-react";
import styles from "./page.module.css";
import { useState } from "react";

export default function ConnectionsModule() {
  const [copied, setCopied] = useState(false);
  const myId = "VIT-982-A4X";

  const handleCopy = () => {
    navigator.clipboard.writeText(myId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-fade-in">
      <div className={styles.header}>
        <h1 className={styles.title}>Meu ID Vitality (B2B)</h1>
        <p className={styles.subtitle}>Conecte-se com outros profissionais para compartilhar dados de pacientes em comum.</p>
      </div>

      <div className={styles.grid}>
        {/* Card: Meu ID */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <Share2 size={24} />
            </div>
            <div>
              <h2 className={styles.cardTitle}>Seu Código de Conexão</h2>
              <p className={styles.cardDesc}>Compartilhe este código com o Personal Trainer ou Nutricionista do seu paciente.</p>
            </div>
          </div>

          <div className={styles.idBox}>
            <div className={styles.idLabel}>ID VITALITY</div>
            <div className={styles.idCode}>{myId}</div>
            
            <button 
              className="btn-secondary" 
              style={{ marginTop: '1rem' }}
              onClick={handleCopy}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copiado!" : "Copiar ID"}
            </button>
          </div>
        </div>

        {/* Card: Adicionar Profissional */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper} style={{ background: 'rgba(250, 204, 21, 0.1)', color: '#FACC15' }}>
              <UserPlus size={24} />
            </div>
            <div>
              <h2 className={styles.cardTitle}>Conectar-se a um Profissional</h2>
              <p className={styles.cardDesc}>Insira o ID Vitality do profissional que deseja adicionar à sua rede.</p>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>ID Vitality do Parceiro</label>
            <div className={styles.inputWrapper}>
              <input type="text" className={styles.input} placeholder="VIT-XXX-XXX" />
              <button className="btn-primary" style={{ padding: '0 1.5rem' }}>Conectar</button>
            </div>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-color)' }}>
              Suas Conexões Ativas
            </h3>
            <div className={styles.connectionsList}>
              <div className={styles.connectionItem}>
                <div className={styles.connectionInfo}>
                  <div className={styles.avatar}>
                    <Users size={20} />
                  </div>
                  <div>
                    <div className={styles.connectionName}>Marcos Personal</div>
                    <div className={styles.connectionRole}>ID: VIT-112-ZZ9 • Personal Trainer</div>
                  </div>
                </div>
                <button className={styles.btnDanger}>Desconectar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
