"use client";

import { ArrowRight, Activity, Users, ShieldCheck } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      
      <section className={styles.hero}>
        <div className={`${styles.heroContent} animate-fade-in`}>
          <div className={styles.badge}>O Futuro do Acompanhamento</div>
          <h1 className={styles.title}>
            Transforme a Saúde dos Seus Pacientes
          </h1>
          <p className={styles.description}>
            A plataforma definitiva para Nutricionistas e Personal Trainers. 
            Crie planos, acompanhe a evolução e compartilhe dados integrados em um só lugar.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="/auth/register" className="btn-primary">
              Começar Gratuitamente
              <ArrowRight size={20} />
            </Link>
            <Link href="#features" className="btn-secondary">
              Conhecer a Plataforma
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className={styles.featuresGrid}>
        <div className={`${styles.featureCard} glass`}>
          <div className={styles.featureIcon}>
            <Users size={28} />
          </div>
          <h3 className={styles.featureTitle}>Gestão Unificada</h3>
          <p className={styles.featureDesc}>
            Conecte-se com outros profissionais usando um ID único. O Nutricionista e o Personal Trainer acessando os mesmos dados do paciente.
          </p>
        </div>

        <div className={`${styles.featureCard} glass`}>
          <div className={styles.featureIcon}>
            <Activity size={28} />
          </div>
          <h3 className={styles.featureTitle}>Acompanhamento Real</h3>
          <p className={styles.featureDesc}>
            Métricas precisas de evolução, gráficos dinâmicos de peso e medidas, além de feedbacks diários dos alunos.
          </p>
        </div>

        <div className={`${styles.featureCard} glass`}>
          <div className={styles.featureIcon}>
            <ShieldCheck size={28} />
          </div>
          <h3 className={styles.featureTitle}>Escalabilidade Justa</h3>
          <p className={styles.featureDesc}>
            Você paga um valor base que só aumenta quando a sua base de pacientes cresce. Convites iniciais a partir de R$ 65/mês.
          </p>
        </div>
      </section>
    </div>
  );
}
