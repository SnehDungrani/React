import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Tech Summit 2024",
  },
  {
    id: "e2",
    title: "Art Exhibition: Colors of Creativity",
  },
  {
    id: "e3",
    title: "Community Cleanup Day",
  },
  {
    id: "e4",
    title: "Fitness Challenge: Run for a Cause",
  },
  {
    id: "e5",
    title: "Cooking Class: Culinary Delights",
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events page</h1>
      <ul>
        {DUMMY_EVENTS.map((eve) => (
          <li key={eve.id}>
            <Link to={eve.id}>{eve.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
