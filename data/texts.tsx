import ptBr from "./languages/pt-br.json"
import es from "./languages/es.json"
import en from "./languages/en.json"

export const t = (text: string) => {
  if (typeof window !== 'undefined') {
    const language = window.navigator.language;
    switch (language.slice(0, 2)) {
      case "pt":
        return ptBr[text as keyof typeof ptBr]
      case "es":
        return es[text as keyof typeof es]
    }
    return en[text as keyof typeof en]
  }
  return ""
}
