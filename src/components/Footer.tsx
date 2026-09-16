import Image from "next/image";

const socialLinks = [["Facebook", "https://web.facebook.com/iehsunicen/?_rdc=1&_rdr#"], ["X", "https://x.com/iehs_tandil"], ["Instagram", "https://www.instagram.com/iehsunicen?igsh=MTE3enNhMHkxcHVudQ=="], ["YouTube", "https://www.youtube.com/channel/UCZe7s2gBuiVT5melN0Pc-bw/feed"]];
const institutionalLogos = [["IGEHCS", "/igesfooter.png", "https://igehcs.conicet.gov.ar/"], ["Facultad de Ciencias Humanas", "/facufooter.png", "https://www.fch.unicen.edu.ar/"], ["Universidad Nacional del Centro", "/unifooter.png", "https://www.unicen.edu.ar/"]];

export default function Footer() {
  return <footer className="site-footer">
    <div className="site-shell site-footer__top"><div className="site-footer__identity"><Image src="/Logo IEHS 40 años 2.jpg" alt="Logo del Instituto de Estudios Histórico-Sociales - 40 años" width={3780} height={4288} className="site-footer__logo" /><p>Instituto de Estudios Histórico-Sociales,<br />Prof. Juan Carlos Grosso.<br />Pinto 348-C.P 7000, Tandil, Buenos Aires, Argentina.</p></div><div className="site-footer__socials"><p>Seguinos en nuestras redes:</p><nav aria-label="Redes sociales">{socialLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</nav></div></div>
    <div className="site-shell site-footer__bottom"><nav className="site-footer__institutional" aria-label="Instituciones">{institutionalLogos.map(([alt, src, href]) => <a key={alt} href={href} target="_blank" rel="noreferrer" title={alt}><Image src={src} alt={alt} width={116} height={114} /></a>)}</nav><p>© 2026 IEHS – UNICEN. Todos los derechos reservados.</p></div>
  </footer>;
}
