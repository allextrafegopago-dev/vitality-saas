"use client";

import { Save, Plus, Clock, Search } from "lucide-react";
import styles from "./page.module.css";
import { useState } from "react";

export default function PlansModule() {
  const [activeTab, setActiveTab] = useState("DIETA");

  return (
    <div className="animate-fade-in">
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Criador de Planos</h1>
          <p className={styles.subtitle}>Monte dietas ou treinos e atribua aos seus pacientes.</p>
        </div>

        <div className={styles.tabs}>
          <div 
            className={`${styles.tab} ${activeTab === "DIETA" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("DIETA")}
          >
            Dieta (Nutrição)
          </div>
          <div 
            className={`${styles.tab} ${activeTab === "TREINO" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("TREINO")}
          >
            Treino (Físico)
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.editorCard}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Título do Plano</label>
            <input type="text" className={styles.input} placeholder="Ex: Dieta de Hipertrofia Agressiva" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Paciente Alvo (Opcional - Salvar como Modelo)</label>
            <select className={styles.input}>
              <option value="">Nenhum (Salvar como Modelo Base)</option>
              <option value="1">Ana Beatriz</option>
              <option value="2">Carlos Eduardo</option>
            </select>
          </div>

          {activeTab === "DIETA" && (
            <div style={{ marginTop: '2rem' }}>
              <div className={styles.mealCard}>
                <div className={styles.mealHeader}>
                  <div className={styles.mealTitle}>Refeição 1: Café da Manhã</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <Clock size={16} /> 08:00
                  </div>
                </div>

                <div className={styles.foodItem}>
                  <input type="text" className={styles.foodInput} placeholder="Alimento (Ex: Pão Integral)" defaultValue="Pão de forma integral" />
                  <input type="text" className={styles.qtyInput} placeholder="Qtd (Ex: 2 fatias)" defaultValue="2 fatias (50g)" />
                </div>
                <div className={styles.foodItem}>
                  <input type="text" className={styles.foodInput} placeholder="Alimento" defaultValue="Ovo mexido" />
                  <input type="text" className={styles.qtyInput} placeholder="Qtd" defaultValue="3 unidades" />
                </div>

                <button className={styles.addBtn}>
                  <Plus size={16} /> Adicionar Alimento
                </button>
              </div>

              <div className={styles.mealCard}>
                <div className={styles.mealHeader}>
                  <div className={styles.mealTitle}>Refeição 2: Almoço</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <Clock size={16} /> 13:00
                  </div>
                </div>

                <div className={styles.foodItem}>
                  <input type="text" className={styles.foodInput} placeholder="Alimento" />
                  <input type="text" className={styles.qtyInput} placeholder="Qtd" />
                </div>

                <button className={styles.addBtn}>
                  <Plus size={16} /> Adicionar Alimento
                </button>
              </div>

              <button className="btn-secondary" style={{ width: '100%', marginBottom: '2rem' }}>
                + Adicionar Nova Refeição
              </button>
            </div>
          )}

          {activeTab === "TREINO" && (
            <div style={{ marginTop: '2rem' }}>
              <div className={styles.mealCard}>
                <div className={styles.mealHeader}>
                  <div className={styles.mealTitle}>Treino A: Peito e Tríceps</div>
                </div>

                <div className={styles.foodItem} style={{ gap: '0.5rem' }}>
                  <input type="text" className={styles.foodInput} placeholder="Exercício" defaultValue="Supino Reto com Barra" style={{ flex: 3 }} />
                  <input type="text" className={styles.qtyInput} placeholder="Séries" defaultValue="4" style={{ flex: 1 }} />
                  <input type="text" className={styles.qtyInput} placeholder="Reps" defaultValue="10-12" style={{ flex: 1 }} />
                </div>

                <button className={styles.addBtn}>
                  <Plus size={16} /> Adicionar Exercício
                </button>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <button className="btn-secondary">Cancelar</button>
            <button className="btn-primary">
              <Save size={18} /> Salvar e Atribuir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
