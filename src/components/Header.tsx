function Header() {
	return (
		<header className="text-white px-8 py-6 flex justify-between items-center shadow-md">
			<a href="#home" className="text-2xl font-bold">Eduardo Cortes</a>

			<nav>
				<ul className="flex gap-6">
					<li>
						<a href="#about" className="hover:text-blue-300 transition">About</a>
					</li>
					<li>
						<a href="#projects" className="hover:text-blue-300 transition">Projects</a>
					</li>
					<li>
						<a href="#contacts" className="hover:text-blue-300 transition">Contacts</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
