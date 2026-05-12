import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import { FadeInSection } from "@/components/motion/MotionPrimitives";
import { getDirectBundleLink } from "@/lib/purchase-config";
import SuccessSummary from "@/components/SuccessSummary";

type SuccessPageProps = {
  searchParams?: {
    productId?: string;
    paymentId?: string;
    orderId?: string;
  };
};

export default function SuccessPage({ searchParams }: SuccessPageProps) {
  const directBundleLink = getDirectBundleLink();

  return (
    <main>
      <Navbar />
      <FadeInSection className="section-space">
        <div className="section-shell max-w-4xl">
          <div className="hero-surface rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-md">
            <SectionHeading
              eyebrow="Payment Success"
              title="Your Razorpay payment was completed successfully."
              description="This page confirms the payment, shows a success toast, and reads the latest payment summary from local storage."
            />
          </div>

          <div className="mt-8">
            <SuccessSummary
              productId={searchParams?.productId}
              paymentId={searchParams?.paymentId}
              orderId={searchParams?.orderId}
              accessLink={directBundleLink}
            />
          </div>
        </div>
      </FadeInSection>
      <Footer />
    </main>
  );
}
