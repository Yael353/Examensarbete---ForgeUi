function Footer() {
  return (
    <footer className=" text-foreground md:pt-20 pt-10 bg-primary">
      <div className="max-w-7xl mx-auto flex justify-evenly gap-8">
        {/* About Components */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-cinzel">
            About Components
          </h3>
          <p className="text-sm max-w-sm leading-relaxed">
            Our components library offers a comprehensive set of modern UI
            building blocks, crafted to boost your development speed and ensure
            consistency across your projects.
          </p>
        </div>

        {/* Documentation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-cinzel">
            Documentation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/docs/getting-started" className="hover:underline">
                Getting Started
              </a>
            </li>
            <li>
              <a href="/docs/api" className="hover:underline">
                API Reference
              </a>
            </li>
            <li>
              <a href="/docs/guides" className="hover:underline">
                Guides & Tutorials
              </a>
            </li>
            <li>
              <a href="/docs/changelog" className="hover:underline">
                Changelog
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright + Credits */}
      <div className="flex flex-col ">
        <div className="text-xs">
          <a
            href="https://www.vecteezy.com/free-videos/illuminated"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Illuminated Stock Videos by Vecteezy
          </a>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ForgeUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
