function Header() {
	return (
		<header className="text-white px-6 py-4 flex justify-between items-center shadow-md">
			<h1 className="text-2xl font-bold text-blue-400">Eduardo Cortes</h1>

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
