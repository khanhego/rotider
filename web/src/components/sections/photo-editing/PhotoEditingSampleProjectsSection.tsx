import { ProjectCarousel } from '@/components/ui/ProjectCarousel';
import { Container } from '@/components/layout/Container';

const projects = [
  {
    id: 'p1',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=450&fit=crop',
    address: '121 Mapleview Drive',
    location: 'Naples, FL',
  },
  {
    id: 'p2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop',
    address: '88 Ocean Breeze Lane',
    location: 'San Diego, CA',
  },
  {
    id: 'p3',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=450&fit=crop',
    address: '450 Highland Park Ct',
    location: 'Austin, TX',
  },
  {
    id: 'p4',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop',
    address: '902 Riverside Blvd',
    location: 'Denver, CO',
  },
  {
    id: 'p5',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop',
    address: '15 Willow Creek Rd',
    location: 'Portland, OR',
  },
] as const;

export function PhotoEditingSampleProjectsSection() {
  return (
    <section className="bg-dark py-16 md:py-20 lg:py-24" data-section="photo-samples">
      <Container as="section">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">Sample Project</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-dark-muted">
          Browse recent edits delivered for agents and photographers nationwide.
        </p>
        <div className="mt-10">
          <ProjectCarousel projects={[...projects]} />
        </div>
      </Container>
    </section>
  );
}
