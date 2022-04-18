import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["./index.html", "./src/**/*.tsx"],
  },
  theme: {
    extend: {
      colors: {},
    },
  },
});
