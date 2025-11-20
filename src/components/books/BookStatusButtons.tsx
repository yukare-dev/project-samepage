"use cliente";

import { useState } from "react";
import {
  Book,
  Bookmark,
  BookX,
  List,
  Loader2,
  Pause,
  Users,
} from "lucide-react";

type Status =
  | "READ"
  | "READING"
  | "WANT_TO_READ"
  | "DROPPED"
  | "PAUSED"
  | "NONE";

interface BookStatusProps {
  bookId: number;
  initialStatus: Status;
}

// mapeamento dos botoes para o usuario

const statusOptions = [
  {
    key: "WANT_TO_READ",
    label: "Quero ler",
    icon: List,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    key: "READING",
    label: "Lendo",
    icon: Bookmark,
    color: "bg-brand-indigo hover:bg-brand-indigo/90",
  },
  {
    key: "READ",
    label: "Lido",
    icon: Book,
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    key: "DROPPED",
    label: "Abandonado",
    icon: BookX,
    color: "bg-brand-ink hover:bg-brand-ink/90",
  },
  {
    key: "PAUSED",
    label: "Pausado",
    icon: Pause,
    color: "bg-amber-500 hover:bg-amber-600",
  },
];

export function BookStatusButtons({ bookId, initialStatus }: BookStatusProps) {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [loading, setLoading] = useState(false);

  // mutação do graphql

  const handleStatusChange = async (newStatus: Status) => {
    if (newStatus === status) return;

    setLoading(true);
    console.log(
      `[SIMULAÇÃO] Enviando mutação para definir o livro ${bookId} como: ${newStatus}`
    );

    // aqui entraria a chamada useMutation do Apollo
    await new Promise((resolve) => setTimeout(resolve, 800)); //simular delay da api

    // define o novo status
    setStatus(newStatus);
    setLoading(false);
  };

  const currentButton = statusOptions.find((opt) => opt.key === status);

  if (loading) {
    return (
      <div className="p-4 w-full text-center border border-gray-200 rounded-lg">
        <Loader2 className="animate-spin h-5 w-5 text-gray-500 inline-block" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {currentButton ? (
        <button
          onClick={() => handleStatusChange("NONE")}
          className={`p-4 w-full text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${currentButton.color}`}
        >
          {" "}
          <currentButton.icon size={20} />
          {currentButton.label}
        </button>
      ) : (
        <button
          onClick={() => handleStatusChange("WANT_TO_READ")}
          className="p-4 w-full bg-brand-indigo text-white rounded-lg font-bold hover:bg-brand-indigo/90 transition cursor-pointer"
        >
          Marcar como Quero Ler
        </button>
      )}

      <button
        className="p-4 w-full border border-brand-indigo/50 text-brand-indigo rounded-lg font-bold hover:bg-brand-indigo/10 transition flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => alert("Simulando Iniciar Buddy Read...")}
      >
        <Users size={20} />
        Iniciar Buddy Read
      </button>

      <div className="flex gap-2 justify-center">
        {statusOptions
          .filter((opt) => opt.key !== status)
          .map((opt) => (
            <button
              key={opt.key}
              onClick={() => handleStatusChange(opt.key as Status)}
              className="text-xs text-gray-500 hover:text-brand-indigo transition underline"
            >
              {opt.label}
            </button>
          ))}
      </div>
    </div>
  );
}
