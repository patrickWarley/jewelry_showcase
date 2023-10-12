import Image from "next/image";
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_CNPJ } from "@/constants";
import LinksDisclousure from "./LinksDisclousure";

const linksEmpresa = [
	{ title: "Sobre nós", src: "#" },
	{ title: "Sustentabilidade", src: "#" },
	{ title: "Trabalhe conosco", src: "#'" },
	{ title: "Blog", src: "#" },
]

const linksAtendimento = [
	{ title: "Acompanhe seu pedido", src: "#" },
	{ title: "Whatsapp", src: "#" },
	{ title: "sac.ecommerce@jewel.com", src: "#'" },
]

const linksInformacoes = [
	{ title: "Politica de garantia", src: "#" },
	{ title: "Politica de privacidade", src: "#" },
	{ title: "Formas de pagamento", src: "#'" },
]

const Footer = () => {
	return (
		<footer>
			<div className="p-4 newsletter flex text-xs flex-col text-center">
				<form>
					<h2 className="font-bold text-white p-2 text-lg">Acompanhe nossas novidades</h2>
					<h3 className="text-slate-400 pb-5">Cadastre seu email e acompanhe nossas novidades</h3>
					<div className="email_form flex items-center justify-center w-full">
						<input type="text" className="p-3 w-full rounded-sm font-bold bg-slate-200" placeholder="Email" />
						<button type="submit" className="w-50 p-3 text-white bg-slate-800 text-md font-bold">Cadastrar</button>
					</div>
				</form>
				<p className="mt-2 policy-text text-gray-500 t">Tendo analisado e compreendido a Política de privacidade, declaro ter mais de 18 anos de idade e aceito receber comunicados de marketing da {COMPANY_NAME}.</p>
			</div >
			<div className="menu	bg-black p-5	">
				<LinksDisclousure title="Nossa empresa" links={linksEmpresa} />
				<LinksDisclousure title="Atendimento" links={linksAtendimento} />
				<LinksDisclousure title="Informações" links={linksInformacoes} />
			</div>

			<div className="redes-socias"></div>

			<div className="information relative bg-slate-900 flex flex-col justify-center items-center p-5 text-white w-screen">
				<div className="logo p-2">
					<Image
						className='border'
						src="/images/logo.png"
						alt={COMPANY_NAME}
						width={50}
						height={50}
					/>
				</div>
				<div className="copyright text-sm text-gray-500t">Copyright C 2023, todos os direitos reservados.</div>
				<div className="text-xs p-5">Desenvolvido por Patrick warley.</div>
				<div className="badges"></div>
				<div className="address text-center text-xs">
					<p>{COMPANY_ADDRESS}</p>
					<p>{COMPANY_CNPJ}</p>
				</div>
			</div>
		</footer >
	)
}

export default Footer;
