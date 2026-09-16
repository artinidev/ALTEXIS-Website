import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeroRadarMesh } from './hero/HeroRadarMesh';

interface HeroSectionProps {
  onOpenContactModal: (topic?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContactModal,
}) => {
  const { i18n } = useTranslation(['home', 'common']);
  const isRtl = i18n.language === 'ar';

  return (
    <section className="relative w-full overflow-hidden bg-[#123C32]">
      <HeroRadarMesh onOpenContactModal={onOpenContactModal} isRtl={isRtl} />
    </section>
  );
};

