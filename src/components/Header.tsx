function Header() {
    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-zinc-950/75 text-white px-8 py-6 flex justify-between items-center border-b border-zinc-800/40">
            <a href="#home" className="text-2xl font-bold hover:text-zinc-300 transition-colors">
                Eduardo Cortes
            </a>

            <nav>
                <ul className="flex gap-6">
                    <li>
                        <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
                    </li>
                    <li>
                        <a href="#contacts" className="hover:text-zinc-300 transition-colors">Contacts</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
