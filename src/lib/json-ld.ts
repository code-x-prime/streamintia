/** Serialise structured data for a <script type="application/ld+json"> tag without allowing "</script>" injection. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).split("<").join("\\u003c");
}
