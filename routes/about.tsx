import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Counter2 from "../islands/Counter2.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <a href='/'>index</a>
        <Counter start={3} />
        <Counter2 start={4} />
      </div>
    </>
  );
}
