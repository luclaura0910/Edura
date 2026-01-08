import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedJobs from './components/FeaturedJobs';
import CompanyPartners from './components/CompanyPartners';
import ToolsSection from './components/ToolsSection';
import BlogSection from './components/BlogSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Header */}
      <Header />

      {/* Hero Section with Search */}
      <HeroSection />

      {/* Featured Jobs Section */}
      <FeaturedJobs />

      {/* Top Companies */}
      <CompanyPartners />

      {/* Tools Section */}
      <ToolsSection />

      {/* Blog/Career Tips */}
      <BlogSection />

      {/* CTA for Employers */}
      <CTABanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}