const CMS_GRAPHQL_URL = process.env.CMS_GRAPHQL_URL;

interface FetchOptions {
  revalidate?: number | false;
  tags?: string[];
}

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: FetchOptions,
): Promise<T> {
  if (!CMS_GRAPHQL_URL) {
    throw new Error('CMS_GRAPHQL_URL is not configured');
  }

  const response = await fetch(CMS_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CMS_API_TOKEN ?? ''}`,
    },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: options?.revalidate ?? 3600,
      tags: options?.tags,
    },
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status}`);
  }

  const json = (await response.json()) as {
    data?: T;
    errors?: { message: string }[];
  };

  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }

  if (!json.data) {
    throw new Error('GraphQL response missing data');
  }

  return json.data;
}

export function isCmsConfigured(): boolean {
  return Boolean(CMS_GRAPHQL_URL && process.env.CMS_API_TOKEN);
}
