import { Link } from "react-router";

const ComponentsIndex = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/components/motion-component">Motion Component</Link>
        </li>
        <li>
          <Link to="/components/animate-activity">Animate Activity</Link>
        </li>
        <li>
          <Link to="/components/animate-presence">Animate Presence</Link>
        </li>
        <li>
          <Link to="/components/layout-group">Layout Group</Link>
        </li>
        <li>
          <Link to="/components/lazy-motion">Lazy Motion</Link>
        </li>
        <li>
          <Link to="/components/motion-config">Motion Config</Link>
        </li>
        <li>
          <Link to="/components/reorder">Reorder</Link>
        </li>
      </ul>
    </div>
  );
};

export default ComponentsIndex;
