import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import type { Session } from "@auth/core/types";

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get('session');
  console.log("index - session ",session)
  if (!session || new Date(session.expires) < new Date()) {
    // throw event.redirect(302, `/login/`);
    throw event.redirect(302, `/auth/signin/`);
  }
};

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
