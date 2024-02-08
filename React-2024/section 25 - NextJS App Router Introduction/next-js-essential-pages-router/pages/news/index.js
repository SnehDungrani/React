import Link from "next/link";
import { Fragment } from "react";

export default function NewsPage() {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="news/nextJS-is-a-great-framework">
            NextJS is a great framework.
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}
