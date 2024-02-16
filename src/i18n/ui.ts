import SpainFlag from "../components/flags/Spain.svg";
import UnitedStatesFlag from "../components/flags/English.svg";
import FranceFlag from "../components/flags/France.svg";
import ChinaFlag from "../components/flags/China.svg";

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
  fr: {
    code: "fr",
    name: "Français",
    flag: FranceFlag,
  },
  zh: {
    code: "zh",
    name: "中文",
    flag: ChinaFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.viaje": "Planifica tu viaje",
    "nav.servicio": "Servicio",
    "nav.info": "Información actualizada",
    "nav.help": "Ayuda",
  },
  en: {
    "nav.inicio": "Home",
    "nav.viaje": "Plan your trip",
    "nav.servicio": "Service",
    "nav.info": "Updated information",
    "nav.help": "Help",
  },
  fr: {
    "nav.inicio": "Accueil",
    "nav.viaje": "Planifiez votre voyage",
    "nav.servicio": "Service",
    "nav.info": "Informations mises à jour",
    "nav.help": "Aide",
  },
  zh: {
    "nav.inicio": "首页",
    "nav.viaje": "计划您的旅行",
    "nav.servicio": "服务",
    "nav.info": "最新信息",
    "nav.help": "帮助",
  },
} as const;

export const routes = {
  es: {
    inicio: "index",
    info: "informacion",
    servicio: "factura",
  },
  en: {
    inicio: "index",
    info: "information",
    servicio: "bill",
  },
  fr: {
    inicio: "index",
    info: "information",
    servicio: "facture",
  },
  zh: {
    inicio: "index",
    info: "信息",
    servicio: "账单",
  },
};
