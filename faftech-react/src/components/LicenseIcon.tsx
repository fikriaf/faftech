import {
  SiGnu,
  SiApache,
  SiCreativecommons,
  SiOpenaccess,
  SiReadthedocs,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa"; // Ikon dokumen kontrak (alternatif MIT)


import type { IconType } from "react-icons";

interface LicenseIconProps {
  licenseText: string;
  size?: number | string;
  color?: string;
}

export const LicenseIcon: React.FC<LicenseIconProps> = ({
  licenseText,
  size = 16,
  color = "inherit",
}) => {
  const lower = licenseText.toLowerCase();

  const getIcon = (): IconType | null => {
    if (lower.includes("gpl") || lower.includes("gnu")) return SiGnu;
    if (lower.includes("apache")) return SiApache;
    if (lower.includes("mit")) return FaFileContract;
    if (lower.includes("microsoft")) return FaMicrosoft;
    if (lower.includes("creative")) return SiCreativecommons;
    if (lower.includes("open")) return SiOpenaccess;
    if (lower.includes("doc")) return SiReadthedocs;
    return null;
  };

  const Icon = getIcon();
  if (!Icon) return null;

  return <Icon size={size} color={color} />;
};
