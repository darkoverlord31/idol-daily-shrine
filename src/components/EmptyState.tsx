
import { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const EmptyState = ({ title, description, icon }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-white/50 backdrop-blur-sm rounded-xl border border-idol-lightpink/30 shadow-sm">
      {icon && <div className="text-5xl mb-6">{icon}</div>}
      <h2 className="text-2xl font-bold text-idol-pink mb-4">{title}</h2>
      <p className="text-idol-gray">{description}</p>
    </div>
  );
};

export default EmptyState;
