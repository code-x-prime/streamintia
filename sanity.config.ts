"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "streamintia",
  title: "Streamintia Blog",
  basePath: "/studio",
  projectId: projectId || "missing-project-id",
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("post").title("Blog posts"),
            S.divider(),
            S.documentTypeListItem("category").title("Categories"),
            S.documentTypeListItem("author").title("Authors"),
          ]),
    }),
  ],
  apiVersion,
});
