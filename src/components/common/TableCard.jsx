const TableCard = ({ title, subtitle, children }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-6 py-5">
      
      <div>
        <h3 className="text-base font-semibold text-gray-900">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-500 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mt-5">
        {children}
      </div>
    </div>
  );
};

export default TableCard;
