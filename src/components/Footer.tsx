import { FINAL_CTA, FOOTER, FORM_URLS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "./ui/Button";
import { TerminalIcon, ArrowRightIcon } from "./ui/Icons";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Final CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {FINAL_CTA.headline}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {FINAL_CTA.subheadline}
          </p>
          <Button
            href={FORM_URLS.enrollment}
            variant="primary"
            size="lg"
            className="group"
          >
            {FINAL_CTA.cta}
            <ArrowRightIcon
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center">
                <TerminalIcon className="text-cyber-green" size={16} />
              </div>
              <span className="text-lg font-bold text-white">
                HAKX<span className="text-cyber-green">.</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-gray-500 text-sm">{FOOTER.tagline}</p>

            {/* Copyright */}
            <p className="text-gray-600 text-sm">{FOOTER.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
