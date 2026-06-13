import { isCmsConfigured } from '@/lib/cms/client';
import { mockHomepage } from '@/lib/cms/mock/homepage';
import type { Homepage } from '@/types/cms';

export async function getHomepage(): Promise<Homepage> {
  if (!isCmsConfigured()) {
    return mockHomepage;
  }

  // TODO: Replace with GraphQL query when CMS is connected
  // const data = await fetchGraphQL<{ page: Homepage }>(GET_HOMEPAGE);
  // return data.page;

  return mockHomepage;
}
