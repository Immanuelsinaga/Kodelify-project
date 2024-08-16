import Logo from "@/assets/logo.png"
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer id="footer" className="border-t border-gray-200 bg-black">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="grid grid-cols-12 gap-4 gap-y-8 py-8 sm:gap-8 md:py-12">
					<div className="col-span-12 lg:col-span-4">
						<div className="mb-2">
							<a
								className="inline-block text-xl font-medium opacity-50 grayscale transition hover:opacity-100"
								href="/">
								<span
									className="flex items-center gap-2 self-center text-2xl font-bold text-slate-200 hover:text-primary-700 whitespace-nowrap cursor-default">
									<Image className="w-6 h-6" alt="Logo" src={Logo} />
									<span>Kodelify</span>
								</span>
							</a>
						</div>
						<div className="text-sm text-slate-300">
							<a className="footer-link" href="/">Terms</a>
							<span> · </span>
							<a className="footer-link" href="/">Privacy Policy</a>
						</div>
					</div>
					<div className="col-span-6 md:col-span-3 lg:col-span-2 text-slate-300">
						<div className="footer-title text-slate-100+">Product</div>
						<ul className="text-sm">
							<li className="mb-2">
								<a className="footer-link" href="/">Features</a>
							</li>
							<li className="mb-2">
								<a className="footer-link" href="/">Security</a>
							</li>
							<li className="mb-2">
								<a className="footer-link" href="/">Team</a>
							</li>
							<li className="mb-2">
								<a className="footer-link" href="/">Enterprise</a>
							</li>
						</ul>
					</div>
					<div className="col-span-6 md:col-span-3 lg:col-span-2">
						<div className="footer-title">Platform</div>
						<ul className="text-sm">
							<li className="mb-2">
								<a className="footer-link" href="/">Developer API</a>
							</li>
							<li className="mb-2">
								<a className="footer-link" href="/">GitHub Desktop</a>
							</li>
						</ul>
					</div>
					<div className="col-span-6 md:col-span-3 lg:col-span-2">
						<div className="footer-title :text-slate-200">Social Media</div>
						<ul className="text-sm">
							<li className="mb-2">
								<a className="footer-link" href="/">Instagram</a>
							</li>
							<li className="mb-2">
								<a className="footer-link" href="/">Twitter</a>
							</li>
							<li className="mb-2">
								<a className="footer-link" href="/">Github</a>
							</li>
						</ul>
					</div>
					<div className="col-span-6 md:col-span-3 lg:col-span-2">
						<div className="footer-title ">Company</div>
						<ul className="text-sm">
							<li className="mb-2">
								<a className="footer-link" href=""> About</a>
							</li>
							<li className="mb-2">
								<a className="footer-link" href="/"> Blog</a>
							</li>
							<li className="mb-2">
								<a className="footer-link" href="/"> Careers</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="py-6 md:flex md:items-center md:justify-between md:py-8">
					<div className="mr-4 text-sm text-gray-700">
						<span>© 2024 </span>
						<span className="font-medium">Kodelify</span>
						<span> 🚀 All rights reserved.</span>
					</div>
				</div>
			</div>
		</footer>
    </>
  );
}