// components/ui/toaster.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ToastStatus = "success" | "error" | "info";

interface Toast {
  id: number;
  title: string;
  description?: string;
  status: ToastStatus;
}

interface ToastContextProps {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToasterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, "id">) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      { ...toast, id: Date.now() + Math.random() },
    ]);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToasterProvider");
  }
  return context;
};

export const Toaster: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`mb-2 rounded-md border bg-white p-4 shadow-md ${
            toast.status === "success" ? "border-green-500" : "border-red-500"
          }`}
        >
          <h2 className="text-lg font-semibold">{toast.title}</h2>
          {toast.description && <p className="mt-2">{toast.description}</p>}
          <button
            className="absolute right-2 top-2 cursor-pointer p-2"
            onClick={() => removeToast(toast.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
