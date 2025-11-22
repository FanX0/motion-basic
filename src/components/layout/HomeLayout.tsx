import { Link } from "react-router";
import type { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex flex-row gap-4 bg-gray-400">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <article>{children}</article>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
