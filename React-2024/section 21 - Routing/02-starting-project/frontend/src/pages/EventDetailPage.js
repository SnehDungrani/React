import { useParams, Link } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Events details page</h1>
      <h2>Event ID: {params.eventId}</h2>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
