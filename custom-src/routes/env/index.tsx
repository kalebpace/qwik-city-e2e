import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useGetEnv = routeLoader$(({ env }) => {
  return {
    platform: env.get("FASTLY_HOSTNAME"),
    importMetaEnv: import.meta.env.VITE_HELLO_WORLD,
  };
});

export default component$(() => {
  const env = useGetEnv();
  const importMeta = import.meta.env.VITE_HELLO_WORLD;
  return (
    <>
      <h1>Environment variables</h1>
      <ul>
        <li>
          env.value.platform:{" "}
          <span id="env-value-platform">{env.value.platform}</span>
        </li>
        <li>
          env.value.importMetaEnv:{" "}
          <span id="env-value-importMetaEnv">{env.value.importMetaEnv}</span>
        </li>
        <li>
          importmeta.env.VITE_HELLO_WORLD:{" "}
          <span id="importmeta-env-VITE_HELLO_WORLD">{importMeta}</span>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
