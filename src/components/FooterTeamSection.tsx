import React from 'react';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import contentData from '../data/contentData.json';
import { AssetMedia } from './AssetMedia';

export const FooterTeamSection: React.FC = () => {
  const { footer } = contentData;
  const { brandInfo, teamMembers } = footer;

  return (
    <footer
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-between pt-20 pb-10 px-6 md:px-12 lg:px-16 bg-[#F5F1EA] border-t border-[rgba(218,185,114,0.3)]"
    >
      <div className="max-w-7xl w-full mx-auto space-y-16 flex-1 flex flex-col justify-center">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(218,185,114,0.25)] pb-6">
          <div className="flex items-center gap-3">
            <img
              src={brandInfo.logo}
              alt="Logo TĨNH"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-2xl font-extrabold tracking-tight text-[#23211E] font-display">
              {brandInfo.brandName}
            </span>
          </div>
          <div className="text-xs font-mono text-[#B38528] flex items-center gap-2 font-bold">
            <Award className="w-4 h-4 text-[#ECC850]" />
            <span>ĐỘI NGŨ SÁNG TẠO · NHÓM 05</span>
          </div>
        </div>

        {/* 40 / 60 Inverted Split Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (40% ~ 5 cols): Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#B38528] uppercase tracking-wider block mb-1 font-bold">
                06. KẾT NỐI VỚI CHÚNG TÔI
              </span>
              <h3 className="text-2xl font-bold text-[#23211E] font-display">
                Trải nghiệm mùi hương trực tiếp
              </h3>
              <p className="text-sm text-[#78716C] mt-2">
                Không gian trưng bày nghệ thuật nến thơm, hỗ trợ thử mùi và khắc thông điệp bí mật tại chỗ.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#23211E]">
                <div className="w-8 h-8 rounded-lg bg-white border border-[rgba(218,185,114,0.35)] flex items-center justify-center text-[#B38528] shrink-0 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#78716C] block">Hotline tư vấn</span>
                  <span className="font-mono font-bold text-[#B38528]">{brandInfo.hotline}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#23211E]">
                <div className="w-8 h-8 rounded-lg bg-white border border-[rgba(218,185,114,0.35)] flex items-center justify-center text-[#B38528] shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#78716C] block">Email đặt hàng & B2B</span>
                  <span className="font-mono text-[#23211E] font-medium">{brandInfo.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#23211E]">
                <div className="w-8 h-8 rounded-lg bg-white border border-[rgba(218,185,114,0.35)] flex items-center justify-center text-[#B38528] shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#78716C] block">Địa chỉ xưởng làm nến</span>
                  <span className="font-medium">{brandInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-2 flex items-center gap-3">
              {brandInfo.socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#FFF9E6] border border-[rgba(218,185,114,0.35)] text-xs font-mono text-[#B38528] font-bold hover:border-[#ECC850] transition-colors shadow-xs"
                >
                  {soc.name}: {soc.handle}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column (60% ~ 7 cols): Team Members Profile Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#B38528] uppercase tracking-wider block mb-1 font-bold">
                THÀNH VIÊN ĐỀ TÀI
              </span>
              <h3 className="text-xl font-bold text-[#23211E] font-display">
                {footer.subtitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white hover:bg-[#FFFDF7] rounded-xl border border-[rgba(218,185,114,0.3)] hover:border-[#ECC850] p-4 space-y-3 transition-all duration-300 shadow-pastel-card group"
                >
                  <div className="flex items-center gap-3">
                    <AssetMedia
                      src={member.avatar}
                      alt={member.name}
                      aspectRatio="1:1"
                      className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#ECC850]"
                    />
                    <div>
                      <div className="text-[11px] font-mono text-[#B38528] font-bold">
                        0{idx + 1}
                      </div>
                      <h4 className="text-sm font-bold text-[#23211E] font-display group-hover:text-[#B38528] transition-colors">
                        {member.name}
                      </h4>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[rgba(218,185,114,0.2)] space-y-1">
                    <div className="text-[11px] font-mono text-[#927129] font-bold">
                      MSSV: {member.mssv}
                    </div>
                    <div className="text-xs text-[#78716C] leading-tight">
                      {member.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Affiliated Partners */}
      <div className="max-w-7xl w-full mx-auto pt-8 mt-12 border-t border-[rgba(218,185,114,0.25)] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#78716C]">
        <div>{footer.copyright}</div>

        {/* Right side container: Bộ Công Thương on top, Đơn vị liên kết below */}
        <div className="flex flex-col items-center sm:items-end gap-3.5">
          {/* Logo Đã Đăng Ký Bộ Công Thương */}
          {footer.govRegistration && (
            <a
              href={footer.govRegistration.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block transition-transform hover:scale-105"
              title={footer.govRegistration.title}
            >
              <img
                src={footer.govRegistration.logo}
                alt={footer.govRegistration.title}
                className="h-10 sm:h-11 w-auto object-contain rounded drop-shadow-xs"
              />
            </a>
          )}

          {/* Đơn vị liên kết */}
          {footer.partners && footer.partners.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#927129] font-bold uppercase tracking-wider">
                {footer.partnersTitle || 'Đơn vị liên kết:'}
              </span>
              <div className="flex items-center gap-2.5">
                {footer.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="h-8 px-2.5 bg-white rounded-lg border border-[rgba(218,185,114,0.35)] shadow-xs flex items-center justify-center hover:border-[#ECC850] transition-all group"
                    title={partner.name}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-4 max-w-[60px] object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
