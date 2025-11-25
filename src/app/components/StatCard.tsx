'use client';

import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  desc?: string;
  icon?: React.ReactNode;
}

const StatCard = ({ label, value, desc, icon }: StatCardProps) => {
  return (
    <div className="stat bg-base-100 shadow-xl rounded-box border border-base-300">
      {icon && <div className="stat-figure text-secondary">{icon}</div>}
      <div className="stat-title">{label}</div>
      <div className="stat-value text-primary">{value}</div>
      {desc && <div className="stat-desc">{desc}</div>}
    </div>
  );
};

export default StatCard;

