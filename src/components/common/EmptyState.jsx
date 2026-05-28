import { Inbox } from "lucide-react";

export default function EmptyState({
  title,
  description
}) {

  return (

    <div className="flex flex-col items-center justify-center py-24 text-center bg-white border border-slate-200 rounded-3xl shadow-sm">

      <div className="bg-slate-100 p-5 rounded-3xl mb-6">

        <Inbox
          size={42}
          className="text-slate-500"
        />

      </div>

      <h2 className="text-2xl font-bold text-slate-800">

        {title}

      </h2>

      <p className="text-slate-500 mt-3 max-w-md leading-relaxed">

        {description}

      </p>

    </div>
  );
}