const StatusLegend = () => {
  return (
    <div className="flex gap-4 text-sm text-secondary">
      <span className="flex items-center gap-2">
        <span className="h-3 w-3 rounded bg-green-400" />
        Issue open
      </span>
      <span className="flex items-center gap-2">
        <span className="h-3 w-3 rounded bg-yellow-300" />
        Yet to list
      </span>
      <span className="flex items-center gap-2">
        <span className="h-3 w-3 rounded bg-cyan-300" />
        Listing today
      </span>
    </div>
  );
};

export default StatusLegend;
