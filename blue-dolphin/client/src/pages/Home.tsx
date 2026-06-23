import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Wine, UtensilsCrossed, Gift, Calendar } from 'lucide-react';
import { WaveDivider } from '@/components/WaveDivider';

/**
 * THE BLUE DOLPHIN — Home Page
 * Design: Modern Maryland Brasserie
 * Colors: Navy #0A1F44 | White | Amber Gold #F5A623
 * Fonts: Playfair Display (headings) | Source Sans 3 (body)
 * Layout: Editorial asymmetry, full-bleed imagery, offset text panels
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================
          STICKY NAVIGATION
          ============================================================ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-[oklch(0.18_0.06_250)] backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo & Wordmark */}
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779894012/MjfhFbQRAdKzLzfh2kMhw4/logo-blue-dolphin_30358fe6.png"
              alt="The Blue Dolphin"
              className="h-14 w-auto"
            />
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'About', href: '#about' },
              { label: 'Menu', href: '#menu' },
              { label: 'Bar', href: '#bar' },
              { label: 'Events', href: '#events' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  scrolled ? 'text-white' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[oklch(0.75_0.15_75)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href="tel:410-721-9081" className={`text-sm font-semibold transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
              410-721-9081
            </a>
          </div>
        </div>
      </header>

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779894012/MjfhFbQRAdKzLzfh2kMhw4/hero-restaurant-fqVCPdNJpC8t9P36C6g75M.webp"
          alt="The Blue Dolphin Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        {/* Hero content */}
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <p className="section-label mb-6">CROFTON, MARYLAND</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Blue Dolphin
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Seafood Bar & Grill
          </p>
          <div className="w-16 h-1 bg-[oklch(0.75_0.15_75)] mx-auto mb-8" />
          <p className="text-lg md:text-xl font-light opacity-95 max-w-2xl mx-auto leading-relaxed mb-12">
            Where Baltimore's culinary masters meet Chesapeake warmth. Celebrate life over fresh seafood, craft cocktails, and genuine hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://order.toasttab.com/online/blue-dolphin-seafood-bar-1166-route-3-south-201" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[oklch(0.75_0.15_75)] text-[oklch(0.18_0.06_250)] hover:bg-[oklch(0.65_0.14_75)] font-semibold px-8 transition-all duration-200 transform hover:scale-105"
              >
                Order Online
              </Button>
            </a>
            <a href="tel:410-721-9081">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                Reserve Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          ABOUT SECTION — Editorial Asymmetry
          ============================================================ */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image — Full bleed on mobile, offset on desktop */}
            <div className="fade-up order-2 md:order-1">
              <div className="relative">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779894012/MjfhFbQRAdKzLzfh2kMhw4/seafood-dish-YY6hWPFK7qVTsPASgTRnq8.webp"
                  alt="Fresh Maryland Crab Cake"
                  className="w-full rounded-lg shadow-2xl"
                />
                {/* Accent rule */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-[oklch(0.75_0.15_75)] rounded-lg" />
              </div>
            </div>

            {/* Right: Content — Navy text panel */}
            <div className="fade-up order-1 md:order-2">
              <p className="section-label mb-4">ABOUT US</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[oklch(0.18_0.06_250)] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Crofton's Culinary Anchor
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since opening, The Blue Dolphin has been recognized for great food, unsurpassed service, and the kind of genuine warmth that keeps neighbors coming back. Whether you're catching happy hour with friends or celebrating a milestone, this is where Crofton gathers.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Co-owners Pete & Penny Patiniotis and Brian & Karen McCann brought Baltimore's strongest culinary talents to Chesapeake Bay country. The result: creative, approachable modern American cuisine in an energetic, comfortable space that feels like home.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-[oklch(0.75_0.15_75)] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[oklch(0.18_0.06_250)] mb-1">Open for Lunch & Dinner</p>
                    <p className="text-gray-600">Seasonal ingredients, daily inspiration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-[oklch(0.75_0.15_75)] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[oklch(0.18_0.06_250)] mb-1">Weekly Specials</p>
                    <p className="text-gray-600">Chef's creativity meets market freshness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative -mb-px">
        <WaveDivider color="#EEF2F8" position="bottom" />
      </div>

      {/* ============================================================
          MENU SECTION — Navy background with editorial grid
          ============================================================ */}
      <section id="menu" className="py-24 bg-[oklch(0.96_0.01_250)]">
        <div className="container">
          <div className="mb-16 fade-up">
            <p className="section-label mb-4">CULINARY EXPERIENCE</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[oklch(0.18_0.06_250)] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              What We Serve
            </h2>
            <div className="w-16 h-1 bg-[oklch(0.75_0.15_75)] mb-8" />
            <p className="text-lg text-gray-700 max-w-2xl">
              Respectfully cultivated, seasonal ingredients transformed into dishes that honor both tradition and innovation. Every plate tells a story of the Chesapeake.
            </p>
          </div>

          {/* Asymmetric menu cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: UtensilsCrossed,
                title: 'Appetizers & Entrées',
                desc: 'Fresh seafood and modern American cuisine, prepared with care and respect for ingredients',
              },
              {
                icon: Wine,
                title: 'Wine Program',
                desc: 'Over 50 labels from major wine-producing regions, curated to complement every course',
              },
              {
                icon: Calendar,
                title: 'Weekly Specials',
                desc: 'Chef-inspired dishes that celebrate what the market offers this season',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="fade-up bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[oklch(0.75_0.15_75)]"
              >
                <item.icon className="w-10 h-10 text-[oklch(0.75_0.15_75)] mb-4" />
                <h3 className="text-xl font-bold text-[oklch(0.18_0.06_250)] mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block">
              <Button className="bg-[oklch(0.75_0.15_75)] text-[oklch(0.18_0.06_250)] hover:bg-[oklch(0.65_0.14_75)] font-semibold px-8">
                View Full Menu
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative -mb-px">
        <WaveDivider color="#FFFFFF" position="bottom" />
      </div>

      {/* ============================================================
          BAR & LOUNGE SECTION — Right-heavy asymmetry
          ============================================================ */}
      <section id="bar" className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="fade-up">
              <p className="section-label mb-4">THE BAR</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[oklch(0.18_0.06_250)] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Where Crofton Gathers
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The bar and lounge pulse with energy—sports on the screens, craft cocktails in hand, and the warmth of neighbors becoming friends. It's where happy hour becomes a ritual.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our wine program features over 50 labels from major wine-producing regions. For cocktails, we follow a "cooking approach"—we buy the best ingredients and let them shine in classic-style drinks that never go out of style.
              </p>

              <a href="#" className="inline-block">
                <Button className="bg-[oklch(0.75_0.15_75)] text-[oklch(0.18_0.06_250)] hover:bg-[oklch(0.65_0.14_75)] font-semibold px-8">
                  Happy Hour Specials
                </Button>
              </a>
            </div>

            {/* Right: Image */}
            <div className="fade-up relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779894012/MjfhFbQRAdKzLzfh2kMhw4/happy-hour-M5Lki8GeCpEcMsDtRcRkEX.webp"
                alt="Craft Cocktails at The Blue Dolphin"
                className="w-full rounded-lg shadow-2xl"
              />
              {/* Accent rule */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[oklch(0.75_0.15_75)] rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative -mb-px">
        <WaveDivider color="#EEF2F8" position="bottom" />
      </div>

      {/* ============================================================
          SPECIAL EVENTS SECTION — Navy panel
          ============================================================ */}
      <section id="events" className="py-24 bg-[oklch(0.96_0.01_250)]">
        <div className="container">
          <div className="mb-16 fade-up">
            <p className="section-label mb-4">CELEBRATIONS</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[oklch(0.18_0.06_250)] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Milestone Deserves This
            </h2>
            <div className="w-16 h-1 bg-[oklch(0.75_0.15_75)] mb-8" />
            <p className="text-lg text-gray-700 max-w-2xl">
              Weddings, corporate events, anniversaries, or just a night that needs to be special—we handle the details so you can focus on the moment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {[
              {
                title: 'Weddings',
                desc: 'Expertly coordinated celebrations in our vibrant dining space',
              },
              {
                title: 'Corporate Meetings',
                desc: 'Professional events with personalized service and cuisine',
              },
              {
                title: 'Private Dining',
                desc: 'Intimate gatherings with custom menus and atmosphere',
              },
              {
                title: 'Special Occasions',
                desc: 'Birthdays, anniversaries, and milestone celebrations',
              },
            ].map((item, idx) => (
              <div key={idx} className="fade-up bg-white p-8 rounded-lg shadow-md border-t-4 border-[oklch(0.75_0.15_75)]">
                <h3 className="text-xl font-bold text-[oklch(0.18_0.06_250)] mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="mailto:info@bluedolphingrill.com">
              <Button className="bg-[oklch(0.75_0.15_75)] text-[oklch(0.18_0.06_250)] hover:bg-[oklch(0.65_0.14_75)] font-semibold px-8">
                Plan Your Event
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative -mb-px">
        <WaveDivider color="#FFFFFF" position="bottom" />
      </div>

      {/* ============================================================
          QUICK LINKS SECTION
          ============================================================ */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: UtensilsCrossed, label: 'Carry Out', href: 'https://order.toasttab.com/online/blue-dolphin-seafood-bar-1166-route-3-south-201' },
              { icon: Gift, label: 'Gift Certificates', href: '#' },
              { icon: MapPin, label: 'Directions', href: '#contact' },
              { icon: Phone, label: 'Contact Us', href: '#contact' },
            ].map((item, idx) => (
              <a key={idx} href={item.href} className="fade-up group">
                <div className="flex justify-center mb-3">
                  <item.icon className="w-8 h-8 text-[oklch(0.75_0.15_75)] group-hover:scale-110 transition-transform" />
                </div>
                <p className="font-semibold text-[oklch(0.18_0.06_250)] group-hover:text-[oklch(0.75_0.15_75)] transition-colors">
                  {item.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT SECTION — Navy footer with brand presence
          ============================================================ */}
      <section id="contact" className="py-20 bg-[oklch(0.18_0.06_250)] text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Location */}
            <div className="fade-up">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Location
              </h3>
              <p className="text-gray-300 mb-2">1166 Route 3 South</p>
              <p className="text-gray-300">Crofton, MD 21114</p>
            </div>

            {/* Hours */}
            <div className="fade-up">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hours
              </h3>
              <p className="text-gray-300 mb-2">Open for Lunch & Dinner</p>
              <p className="text-gray-300 text-sm">Call for specific hours</p>
            </div>

            {/* Contact */}
            <div className="fade-up">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact
              </h3>
              <a href="tel:410-721-9081" className="text-[oklch(0.75_0.15_75)] font-semibold hover:text-white transition-colors block mb-2">
                410-721-9081
              </a>
              <a href="tel:410-721-9084" className="text-gray-300 hover:text-white transition-colors text-sm">
                Fax: 410-721-9084
              </a>
            </div>
          </div>

          {/* Footer divider */}
          <div className="w-16 h-1 bg-[oklch(0.75_0.15_75)] mb-8" />

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              © 2026 The Blue Dolphin Seafood Bar & Grill. All rights reserved. |{' '}
              <a href="https://www.BlueDolphinGrill.com" className="text-[oklch(0.75_0.15_75)] hover:text-white transition-colors">
                www.BlueDolphinGrill.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
