export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2025-01-01";

/** True once the Sanity project ID has been added to the environment. */
export const sanityConfigured = /^[a-z0-9-]+$/.test(projectId);
