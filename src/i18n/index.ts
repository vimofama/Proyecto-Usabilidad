import spanish from "./es.json";
import english from "./en.json";
import french from "./fr.json";
import chinese from "./zh.json";

const LANG = {
  SPANISH: "es",
  ENGLISH: "en",
  FRENCH: "fr",
  CHINESE: "zh",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english };
  if (currentLocale === LANG.FRENCH) return { ...spanish, ...french };
  if (currentLocale === LANG.CHINESE) return { ...spanish, ...chinese };
  return spanish;
};
