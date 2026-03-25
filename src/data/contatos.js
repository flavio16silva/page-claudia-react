// 📁 src/data/contatos.js
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export const contatos = [
  {
    id: 1,
    icone: FaWhatsapp,
    href: "https://wa.me/5511999999999",
    cor: "hover:text-green-400",
    label: "WhatsApp"
  },
  {
    id: 2,
    icone: FaEnvelope,
    href: "mailto:contato@draclaudia.com.br",
    cor: "hover:text-green-400",
    label: "Email"
  }
]