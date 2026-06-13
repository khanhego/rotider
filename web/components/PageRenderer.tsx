import type { ContentBlock } from '@/types/cms';
import { BLOCK_COMPONENT_MAP } from '@/lib/cms/block-map';

interface PageRendererProps {
  sections: ContentBlock[];
}

export function PageRenderer({ sections }: PageRendererProps) {
  return (
    <>
      {sections.map((block) => {
        const Component = BLOCK_COMPONENT_MAP[block.__typename];
        if (!Component) return null;
        return <Component key={block.id} data={block} />;
      })}
    </>
  );
}
