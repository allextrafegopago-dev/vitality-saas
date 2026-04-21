"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={`${styles.authCard} glass animate-fade-in`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Crie sua Conta</h1>
          <p className={styles.subtitle}>Junte-se à plataforma VitalitySaaS e transforme seus atendimentos.</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="name">Nome Completo</label>
            <input className={styles.input} type="text" id="name" placeholder="Ex: João da Silva" required />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">E-mail Profissional</label>
            <input className={styles.input} type="email" id="email" placeholder="contato@joaosilva.com" required />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="profession">Sua Profissão</label>
            <select className={styles.select} id="profession" required>
              <option value="" disabled selected>Selecione uma opção</option>
              <option value="NUTRITIONIST">Nutricionista</option>
              <option value="PERSONAL_TRAINER">Personal Trainer</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">Senha</label>
            <input className={styles.input} type="password" id="password" placeholder="Mínimo 8 caracteres" required />
          </div>

          <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
            Criar Conta Profissional
            <ArrowRight size={18} />
          </button>
        </form>

        <div className={styles.footer}>
          Já tem uma conta? <Link href="/auth/login" className={styles.link}>Faça login aqui</Link>
        </div>
      </div>
    </div>
  );
}
