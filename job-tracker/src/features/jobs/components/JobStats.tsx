import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { Card, CardContent } from "../../../components/ui";
import { useTheme } from "../../../shared/context/ThemeContext";

interface StatItem {
  label: string;
  value: number;
  colorClass: string;
  lightColorClass: string;
}

export default function JobStats() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const items = useSelector((state: RootState) => state.jobs.items);

  const stats = {
    total: items.length,
    applied: items.filter((j) => j.status === "applied").length,
    interview: items.filter((j) => j.status === "interview").length,
    offer: items.filter((j) => j.status === "offer").length,
    rejected: items.filter((j) => j.status === "rejected").length,
  };

  const statItems: StatItem[] = [
    {
      label: "Total",
      value: stats.total,
      colorClass: isDark ? "text-slate-400" : "text-slate-600",
      lightColorClass: isDark ? "text-slate-100" : "text-slate-900",
    },
    {
      label: "Applied",
      value: stats.applied,
      colorClass: isDark ? "text-blue-300" : "text-blue-700",
      lightColorClass: isDark ? "text-blue-100" : "text-blue-900",
    },
    {
      label: "Interview",
      value: stats.interview,
      colorClass: isDark ? "text-amber-300" : "text-amber-700",
      lightColorClass: isDark ? "text-amber-100" : "text-amber-900",
    },
    {
      label: "Offer",
      value: stats.offer,
      colorClass: isDark ? "text-emerald-300" : "text-emerald-700",
      lightColorClass: isDark ? "text-emerald-100" : "text-emerald-900",
    },
    {
      label: "Rejected",
      value: stats.rejected,
      colorClass: isDark ? "text-rose-300" : "text-rose-700",
      lightColorClass: isDark ? "text-rose-100" : "text-rose-900",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {statItems.map((stat) => (
        <Card
          key={stat.label}
          className={`
            transition-colors
            ${
              isDark
                ? "border-slate-700 bg-slate-900/50"
                : "border-slate-200 bg-white/50"
            }
          `}
        >
          <CardContent className="p-4">
            <p
              className={`text-xs font-semibold uppercase tracking-widest ${stat.colorClass}`}
            >
              {stat.label}
            </p>
            <p className={`mt-3 text-2xl font-bold ${stat.lightColorClass}`}>
              {stat.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
