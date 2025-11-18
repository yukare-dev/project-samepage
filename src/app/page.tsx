import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center p-12 gap-12">
      <section className="flex items-center">
        <div className="max-w-3xl flex flex-col">
          <h1 className="font-serif text-6xl font-extrabold text-brand-ink mb-6 leading-tight">
            Read Together &
          </h1>
          <h2 className="font-serif text-6xl text-brand-indigo">
            Stay on the SamePage.
          </h2>
          <p className="text-xl text-gray-600 font-sans py-8">
            A estante de livros que une estatísticas detalhadas com a melhor
            experiência de leitura conjunta. Encontre seu Buddy Read aqui e se
            aventurem no imenso universo da leitura!
          </p>

          <div className="flex">
            <Link
              href="/explore"
              className="bg-brand-indigo text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-indigo-600 transition flex items-center gap-2 shadow-lg shadow-brand-indigo/30"
            >
              Começar a Explorar <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12 pt-12 bg-gray-50/50 border-t border-gray-200">
        <h2 className="font-serif text-3xl font-bold text-brand-ink">
          Por que SamePage?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Sincronia Perfeita"
            description="Acompanhe o progresso do seu amigo em tempo real com o 'Sync Line', livre de spoilers."
          />
          <FeatureCard
            title="Estatísticas Visuais"
            description="Gere seu 'Leitor Wrapped' a qualquer momento: descubra seu humor, ritmo e gêneros dominantes."
          />
          <FeatureCard
            title="Dados da Comunidade"
            description="Avaliações e contagens de Buddy Reads vindas da comunidade Hardcover, mais limpas que o Google."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h3 className="font-bold text-xl text-brand-indigo mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
