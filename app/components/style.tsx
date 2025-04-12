import React from 'react';

export const Style = () => {
  return (
    <style jsx global>{`
      @media print {
        .no-print {
          display: none !important;
        }
        .card {
          box-shadow: none !important;
          border: none !important;
          margin: 0 !important;
          width: 100% !important;
          max-width: none !important;
        }
        .card-header {
          padding-bottom: 0 !important;
        }
        .card-content {
          padding: 0 !important;
        }
        .separator {
          margin: 8px 0 !important;
        }
        .table {
          width: 100% !important;
        }
        .table-footer {
          font-size: 12px !important;
        }
      }
    `}</style>
  );
};