'use client';

import React from 'react';

interface InfoPanelProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const InfoPanel = ({ title, children, actions }: InfoPanelProps) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 h-full">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">{title}</h2>
        <div className="flex-grow">
          {children}
        </div>
        {actions && (
          <div className="card-actions justify-end mt-6">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoPanel;

