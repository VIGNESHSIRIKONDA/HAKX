import Link from "next/link";
import { FOOTER, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">{SITE_CONFIG.name}</h4>
            <p className="mt-2 text-sm text-slate-500">{FOOTER.tagline}</p>
            <p className="mt-4 text-xs text-slate-400">{SITE_CONFIG.email} · {SITE_CONFIG.phone}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:col-span-2">
            <div>
              <h5 className="text-sm font-semibold text-slate-700 mb-3">Programs</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                {FOOTER.links.programs.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-red-600">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-700 mb-3">Company</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                {FOOTER.links.company.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-red-600">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:hidden" />

            <div>
              <h5 className="text-sm font-semibold text-slate-700 mb-3">Resources</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                {FOOTER.links.resources.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-red-600">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">{FOOTER.copyright}</p>
          <p className="text-xs text-slate-400">Made with ❤️ — {SITE_CONFIG.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
