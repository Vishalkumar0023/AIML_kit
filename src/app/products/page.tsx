import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { FadeInSection, StaggerGrid } from "@/components/motion/MotionPrimitives";
import { products } from "@/lib/platform-content";

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <FadeInSection className="section-space">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Products"
            title="Choose between a free roadmap and a paid starter kit."
            description="This page lists every product in the platform with pricing, features, and action buttons."
            align="center"
          />

          <StaggerGrid className="mt-10 grid gap-6 lg:grid-cols-2">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} featured={index === 1} />
            ))}
          </StaggerGrid>
        </div>
      </FadeInSection>
      <Footer />
    </main>
  );
}
