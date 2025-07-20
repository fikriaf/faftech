// LanguageIcon.tsx
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiC,
  SiGo,
  SiRust,
  SiPhp,
  SiRuby,
  SiKotlin,
  SiSwift,
  SiDart,
  SiPerl,
  SiScala,
  SiR,
  SiHaskell,
  SiLua,
  SiElixir,
  SiErlang,
  SiGnubash,
  SiFortran,
  SiGnu,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';

import type { IconType } from "react-icons/lib";

export type LanguageName =
  | "javascript"
  | "typescript"
  | "python"
  | "cplusplus"
  | "c"
  | "go"
  | "rust"
  | "php"
  | "ruby"
  | "kotlin"
  | "swift"
  | "dart"
  | "perl"
  | "scala"
  | "r"
  | "haskell"
  | "lua"
  | "elixir"
  | "erlang"
  | "gnubash"
  | "fortran"
  | "gnu"
  | "html"
  | "css";


const iconMap: Record<LanguageName, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  cplusplus: SiCplusplus,
  c: SiC,
  go: SiGo,
  rust: SiRust,
  php: SiPhp,
  ruby: SiRuby,
  kotlin: SiKotlin,
  swift: SiSwift,
  dart: SiDart,
  perl: SiPerl,
  scala: SiScala,
  r: SiR,
  haskell: SiHaskell,
  lua: SiLua,
  elixir: SiElixir,
  erlang: SiErlang,
  gnubash: SiGnubash,
  fortran: SiFortran,
  gnu: SiGnu,
  html: FaHtml5,
  css: FaCss3Alt
};

interface LanguageIconProps {
  language: LanguageName;
  size?: number | string;
  color?: string;
}

export const LanguageIcon: React.FC<LanguageIconProps> = ({
  language,
  size = 16,
  color = "inherit",
}) => {
  const IconComponent = iconMap[language];
  if (!IconComponent) return null;

  return <IconComponent size={size} color={color} />;
};
