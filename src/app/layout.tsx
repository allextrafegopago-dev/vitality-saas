import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VitalitySaaS - Saúde e Qualidade de Vida",
  description: "A plataforma completa para nutricionistas e personal trainers gerenciarem seus alunos e pacientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
