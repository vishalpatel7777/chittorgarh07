const ZerodhaComplaintsNote = () => {
  return (
    <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="w-full">
        <h3 className="section-title mb-2 text-lg font-semibold text-gray-800">
          Note:
        </h3>

        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>
            * Including against its sub brokers, authorised persons, employees,
            etc.
          </li>
          <li>
            ** Non actionable means the complaint that are incomplete / outside
            the scope of the Stock Exchange
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ZerodhaComplaintsNote;
