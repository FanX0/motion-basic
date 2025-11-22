import { Link } from "react-router";

const Index = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/gestures/basic">Basic</Link>
        </li>
        <li>
          <Link to="/gestures/hover">Hover</Link>
        </li>
        <li>
          <Link to="/gestures/drag">Drag</Link>
        </li>
      </ul>
    </div>
  );
};
export default Index;
