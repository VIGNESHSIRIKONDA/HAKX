import { CERTIFICATION } from "@/lib/constants";
import { CertificateIcon } from "./ui/Icons";

export function Certification() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyber-green/10 via-cyber-cyan/10 to-cyber-green/10 rounded-3xl blur-2xl" />
          
          <div className="relative text-center p-8 md:p-12 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black border border-white/10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center">
              <CertificateIcon className="text-cyber-green" size={40} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {CERTIFICATION.title}
              <span className="text-cyber-green">.</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {CERTIFICATION.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
