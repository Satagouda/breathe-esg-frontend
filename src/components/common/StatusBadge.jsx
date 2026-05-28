export default function StatusBadge({
  status
}) {

  const styles = {

    APPROVED:
      "bg-emerald-100 text-emerald-700",

    REJECTED:
      "bg-red-100 text-red-700",

    LOCKED:
      "bg-blue-100 text-blue-700",

    PENDING:
      "bg-amber-100 text-amber-700",
  };

  return (

    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status] ||
        "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}