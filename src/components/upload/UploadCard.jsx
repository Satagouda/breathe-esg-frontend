export default function UploadCard({
  title,
  description,
  active,
  onClick,
}) {

  return (

    <button
      onClick={onClick}
      className={`w-full text-left border rounded-2xl p-5 transition-all ${
        active
          ? "border-slate-900 bg-slate-900 text-white shadow-lg"
          : "border-slate-200 bg-white hover:border-slate-400"
      }`}
    >

      <h2 className="font-bold text-lg">
        {title}
      </h2>

      <p
        className={`text-sm mt-2 ${
          active
            ? "text-slate-300"
            : "text-slate-500"
        }`}
      >
        {description}
      </p>

    </button>
  );
}