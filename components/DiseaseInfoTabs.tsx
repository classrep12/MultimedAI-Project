
import React, { useState } from 'react';
import { InfoTabContent } from '../types';

interface DiseaseInfoTabsProps {
  info?: Record<string, InfoTabContent>;
}

const DiseaseInfoTabs: React.FC<DiseaseInfoTabsProps> = ({ info }) => {
  if (!info || Object.keys(info).length === 0) return null;

  const tabNames = Object.keys(info);
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  const renderContent = (content: InfoTabContent) => {
    if (content.type === 'table') {
      const headers = content.columns || content.headers || [];
      return (
        <div className="space-y-4">
          {content.rows?.map((row, rowIdx) => (
            <div key={rowIdx} className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-center space-x-2 mb-3 border-b border-slate-50 dark:border-slate-800/50 pb-2">
                <div className="w-1 h-3 bg-blue-600 rounded-full"></div>
                <h5 className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Institutional Record #{rowIdx + 1}
                </h5>
              </div>
              <div className="grid grid-cols-1 gap-y-2">
                {row.map((cell, cellIdx) => {
                  const label = headers[cellIdx] || `Field ${cellIdx + 1}`;
                  const valStr = String(cell || '');
                  const isLong = valStr.length > 60 || label.toUpperCase().includes('DESCRIPTION');
                  
                  return (
                    <div key={cellIdx} className={`flex flex-col ${isLong ? 'space-y-1' : 'sm:flex-row sm:items-baseline sm:space-x-4 border-b border-slate-50/50 dark:border-slate-800/20 pb-1.5 last:border-0'}`}>
                      <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider min-w-[120px] shrink-0">
                        {label}
                      </span>
                      <span className={`text-[12px] text-slate-800 dark:text-slate-200 leading-snug ${isLong ? 'bg-slate-50/50 dark:bg-slate-800/30 p-3 rounded-lg border border-slate-50 dark:border-slate-700/50 block font-normal text-slate-600 dark:text-slate-400' : 'font-semibold'}`}>
                        {cell || '—'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="p-6 bg-slate-50/50 dark:bg-slate-800/10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-inner">
        <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed text-[13px] font-medium">
          {content.content}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="px-4 pt-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-950/10">
        <div className="flex overflow-x-auto no-scrollbar gap-1">
          {tabNames.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-[9px] font-black uppercase tracking-wider transition-all relative whitespace-nowrap rounded-t-xl ${
                activeTab === tab 
                ? 'text-blue-700 dark:text-blue-400 bg-white dark:bg-slate-900 border-x border-t border-slate-100 dark:border-slate-800' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 lg:p-7 animate-in fade-in duration-300 min-h-[250px]">
        {renderContent(info[activeTab])}
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default DiseaseInfoTabs;
