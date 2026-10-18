import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFileDownload } from "react-icons/fa";

function Info() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 text-newbrown font-poppins">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-newbeige/60 bg-newwhite flex items-center justify-center p-3">
        <Image
          src="/logo-nobg.webp"
          alt="Reister Ruedas Logo"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col space-y-4 w-full text-left">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-newmaroon text-lg mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-newmaroon">Location</p>
            <p className="text-sm font-light">Antipolo City, Rizal, Philippines, 1870</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaEnvelope className="text-newmaroon text-lg mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-newmaroon">Email</p>
            <a
              href="mailto:reister.ruedas@gmail.com"
              className="text-sm font-medium hover:text-newmaroon transition-colors"
            >
              reister.ruedas@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaPhoneAlt className="text-newmaroon text-lg mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-newmaroon">Phone</p>
            <p className="text-sm font-light">(+63) 976 656 9472</p>
          </div>
        </div>

        <div className="pt-2">
          <a
            href="/Resume_Reister_Ruedas.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-newmaroon text-newwhite text-xs sm:text-sm font-medium hover:bg-newbrown transition-colors shadow-sm"
          >
            <FaFileDownload /> Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
