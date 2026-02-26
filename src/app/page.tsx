"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

/* ───────── Nav ───────── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[86px] z-50 bg-[#f9f5f2]/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto h-full relative px-[120px] max-lg:px-8 max-sm:px-4">
        {/* Logo */}
        <div className="absolute left-[120px] max-lg:left-8 max-sm:left-4 top-1/2 -translate-y-1/2">
          <Image src="/assets/storefront-skills-logo.svg" alt="Storefront Skills" width={175} height={24} className="max-sm:w-[140px] max-sm:h-auto" />
        </div>

        {/* Center Nav — absolutely centered on page */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(186,186,186,0.2)] rounded-[40px] px-1 py-[3px] max-lg:hidden">
          <div className="flex gap-0.5 items-center">
            {["What You Get", "See It Work", "How to Start", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="px-[10px] py-[10px] text-[#303030] text-[16px] tracking-[-0.32px] hover:opacity-70 transition-opacity"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#pricing"
          className="absolute right-[120px] max-lg:right-8 max-sm:right-4 top-1/2 -translate-y-1/2 bg-[#171717] text-[#f9f5f2] rounded-[30px] px-[14px] py-[8px] max-[420px]:px-[10px] max-[420px]:py-[6px] text-[16px] max-[420px]:text-[14px] tracking-[-0.32px] font-[family-name:var(--font-heading)] font-medium hover:bg-[#333] transition-colors"
        >
          <span className="max-[420px]:hidden">Get Your Team</span>
          <span className="hidden max-[420px]:inline">Get Team</span>
        </a>
      </div>
    </nav>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="pt-[138px] pb-[60px] relative overflow-hidden">
      {/* Background warm glow — two corner glows matching Figma */}
      <div
        className="absolute bottom-0 left-0 w-full h-[924px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 50% at 0% 100%, rgba(232, 125, 45, 1) 0%, rgba(232, 140, 65, 0.55) 30%, rgba(232, 140, 65, 0.15) 55%, transparent 75%), radial-gradient(ellipse 55% 50% at 100% 100%, rgba(232, 125, 45, 1) 0%, rgba(232, 140, 65, 0.55) 30%, rgba(232, 140, 65, 0.15) 55%, transparent 75%)",
        }}
      />

      <div className="max-w-[890px] max-sm:max-w-full mx-auto flex flex-col items-center gap-[40px] relative z-10 max-lg:px-8 max-sm:px-4">
        {/* Badge */}
        <div className="bg-[#f9f5f2] border border-[#ddd] rounded-[40px] px-3 py-2 shadow-[inset_0px_-3px_12px_0px_rgba(137,86,53,0.12)]">
          <p className="text-[#666] text-[17px] leading-[1.2] tracking-[-0.34px] text-center">
            Built by the team behind $50M+ in DTC revenue
          </p>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-[#303030] text-[64px] max-lg:text-[48px] max-sm:text-[36px] leading-[1.2] tracking-[-2.56px] font-medium">
            Turn Claude into an eCommerce team that drives results.
          </h1>
          <p className="text-[#303030] text-[25px] max-sm:text-[20px] leading-[1.2] tracking-[-0.5px] font-[family-name:var(--font-heading)] font-medium">
            14 Claude Skills built around your business.
          </p>
          <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px] max-w-[680px] max-sm:max-w-full">
            Your brand. Your products. Your numbers. Write emails, plan launches, analyze your P&L, and research competitor ads without starting from scratch every time. Install once, use forever.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 items-center">
          <a
            href="#pricing"
            className="bg-[#171717] rounded-[500px] px-[34px] py-[12px] flex items-center gap-3 hover:bg-[#333] transition-colors"
          >
            <span className="font-[family-name:var(--font-heading)] text-[#f9f5f2] text-[16px] tracking-[-0.32px] font-medium">
              Get Your Team
            </span>
            <Image src="/assets/arrow-right.svg" alt="" width={30} height={30} className="invert" />
          </a>
          <p className="text-[#7b7b7b] text-[14px] leading-[1.2] tracking-[-0.28px]">
            One-time purchase · Works in 5 minutes · No coding required
          </p>
        </div>
      </div>

      {/* Demo composition: Claude chat + floating specialist cards */}
      <div className="mt-[60px] max-w-[1440px] mx-auto px-[120px] max-lg:px-8 max-sm:px-4">
        <div className="relative flex justify-center">
          {/* Floating specialist mini cards - positioned relative to the centered demo */}
          {/* Email Strategist - left side, upper */}
          <div className="absolute left-0 top-[20px] z-20 -translate-x-[10px] max-lg:hidden">
            <div className="bg-[rgba(235,230,225,0.6)] border border-[#e9e9e9] rounded-[12px] overflow-hidden w-[310px] h-[100px] flex items-center backdrop-blur-sm">
              <div className="bg-white rounded-[5px] w-[72px] h-[72px] ml-[14px] shrink-0 flex items-center justify-center">
                <Image src="/assets/icon-email-card.svg" alt="" width={22} height={24} />
              </div>
              <div className="flex flex-col gap-[11px] ml-[16px]">
                <p className="font-medium text-[#303030] text-[18px] leading-[1.2] tracking-[-0.72px]">Email Strategist</p>
                <div className="flex flex-col gap-px text-[#7b7b7b] text-[12px] leading-[1.2] tracking-[-0.24px]">
                  <p className="font-bold uppercase">Welcome flow drafted</p>
                  <p>5 emails, ready to review</p>
                </div>
              </div>
            </div>
          </div>
          {/* Fractional CFO - left side, lower */}
          <div className="absolute left-0 bottom-[40px] z-20 -translate-x-[10px] max-lg:hidden">
            <div className="bg-[rgba(235,230,225,0.6)] border border-[#e9e9e9] rounded-[12px] overflow-hidden w-[310px] h-[100px] flex items-center backdrop-blur-sm">
              <div className="bg-white rounded-[5px] w-[72px] h-[72px] ml-[14px] shrink-0 flex items-center justify-center">
                <Image src="/assets/icon-cfo-card.svg" alt="" width={28} height={28} />
              </div>
              <div className="flex flex-col gap-[11px] ml-[16px]">
                <p className="font-medium text-[#303030] text-[18px] leading-[1.2] tracking-[-0.72px]">Fractional CFO</p>
                <div className="flex flex-col gap-px text-[#7b7b7b] text-[12px] leading-[1.2] tracking-[-0.24px]">
                  <p className="font-bold uppercase">Margin check complete</p>
                  <p>3 quick wins found</p>
                </div>
              </div>
            </div>
          </div>
          {/* Ad Copywriter - right side, upper */}
          <div className="absolute right-0 top-[20px] z-20 translate-x-[10px] max-lg:hidden">
            <div className="bg-[rgba(235,230,225,0.6)] border border-[#e9e9e9] rounded-[12px] overflow-hidden w-[310px] h-[100px] flex items-center backdrop-blur-sm">
              <div className="bg-white rounded-[5px] w-[72px] h-[72px] ml-[14px] shrink-0 flex items-center justify-center">
                <Image src="/assets/icon-ad-card.svg" alt="" width={28} height={28} />
              </div>
              <div className="flex flex-col gap-[11px] ml-[16px]">
                <p className="font-medium text-[#303030] text-[18px] leading-[1.2] tracking-[-0.72px]">Ad Copywriter</p>
                <div className="flex flex-col gap-px text-[#7b7b7b] text-[12px] leading-[1.2] tracking-[-0.24px]">
                  <p className="font-bold uppercase">6 ad hooks drafted</p>
                  <p>for your spring launch</p>
                </div>
              </div>
            </div>
          </div>
          {/* Product Page Expert - right side, lower */}
          <div className="absolute right-0 bottom-[40px] z-20 translate-x-[10px] max-lg:hidden">
            <div className="bg-[rgba(235,230,225,0.6)] border border-[#e9e9e9] rounded-[12px] overflow-hidden w-[310px] h-[100px] flex items-center backdrop-blur-sm">
              <div className="bg-white rounded-[5px] w-[72px] h-[72px] ml-[14px] shrink-0 flex items-center justify-center">
                <Image src="/assets/icon-pdp-card.svg" alt="" width={28} height={20} />
              </div>
              <div className="flex flex-col gap-[11px] ml-[16px]">
                <p className="font-medium text-[#303030] text-[18px] leading-[1.2] tracking-[-0.72px]">Product Page Expert</p>
                <div className="flex flex-col gap-px text-[#7b7b7b] text-[12px] leading-[1.2] tracking-[-0.24px]">
                  <p className="font-bold uppercase">Page audit done</p>
                  <p>4 easy fixes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Claude demo card */}
          <div className="overflow-hidden rounded-[28px] border-[15px] border-[#e6e3e1] w-[754px] max-lg:w-full max-lg:max-w-[600px] max-sm:max-w-full shrink-0">
            <div className="bg-[#faf9f4] rounded-[13px] overflow-hidden relative">
              <div className="flex min-h-[420px] max-sm:min-h-[300px]">
                {/* Claude Sidebar */}
                <div className="w-[172px] max-sm:hidden bg-[#faf9f4] border-r border-[#e6e3e1] shrink-0 p-4 pt-5">
                  <p className="font-[family-name:var(--font-mono)] font-semibold text-[#303030] text-[16px] tracking-[-0.32px] mb-6">Claude</p>
                  <div className="flex flex-col gap-1">
                    {[
                      { icon: "M12 4v16m-8-8h16", label: "New chat" },
                      { icon: "M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z", label: "Search" },
                      { icon: "M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4", label: "Customize" },
                      { icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5z", label: "Chats" },
                      { icon: "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z", label: "Projects" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 py-1.5 px-1 rounded text-[#73726c]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.icon} />
                        </svg>
                        <span className="text-[13px] font-[family-name:var(--font-mono)]">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main content area */}
                <div className="flex-1 flex flex-col">
                  {/* Top right: Brand Guide mini card */}
                  <div className="flex justify-end p-4 pb-0">
                    <div className="bg-[#fffefa] border border-[rgba(156,154,146,0.6)] rounded-[3px] w-[77px] h-[68px] relative overflow-hidden">
                      <p className="font-[family-name:var(--font-mono)] font-medium text-[#c4beb8] text-[9px] tracking-[-0.46px] absolute top-[10px] left-[6px]">Brand Guide</p>
                      <div className="absolute left-1/2 -translate-x-1/2 top-[27px] flex flex-col gap-[3px]">
                        <div className="bg-[#d9d9d9] h-[4px] w-[54px] rounded-[3px]" />
                        <div className="bg-[#d9d9d9] h-[4px] w-[46px] rounded-[3px]" />
                      </div>
                      <div className="absolute bottom-[4px] left-[4px] bg-[#f3f3f3] border border-[rgba(115,114,108,0.3)] rounded-[3px] px-[2px] py-[2px] z-10 text-[9px] leading-none">
                        <span className="font-[family-name:var(--font-mono)] text-[#73726c] text-[9px] leading-none tracking-[-0.28px]">PDF</span>
                      </div>
                    </div>
                  </div>

                  {/* User prompt bubble */}
                  <div className="px-4 flex justify-end">
                    <div className="bg-[#f0eee5] rounded-[8px] px-[15px] py-[12px] max-w-[384px]">
                      <p className="font-[family-name:var(--font-mono)] text-[#141413] text-[12px] leading-[1.2] tracking-[-0.36px]">
                        /ecommerce-skills:ecommerce-email write an email onboarding series for my candle brand. focus on selling our hero product (Gibraltar Candle, $39). details in our brand guide.
                      </p>
                    </div>
                  </div>

                  {/* Response area */}
                  <div className="px-4 pt-6 flex-1 flex flex-col gap-4">
                    {/* Thought Process */}
                    <div className="flex items-center gap-[6px]">
                      <span className="font-[family-name:var(--font-mono)] font-medium text-[#c4beb8] text-[9px] tracking-[-0.27px]">Thought Process</span>
                      <Image src="/assets/chevron-right-sm.svg" alt="" width={4} height={11} />
                    </div>

                    {/* Claude response text */}
                    <p className="font-[family-name:var(--font-serif)] text-[#3d3d3a] text-[14px] leading-[1.2] tracking-[-0.28px] max-w-[335px]">
                      Let me start by checking for your brand guide and reading the relevant reference files for email flows.
                    </p>

                    {/* Reading file */}
                    <div className="flex items-center gap-[6px]">
                      <span className="font-[family-name:var(--font-mono)] font-medium text-[#c4beb8] text-[9px] tracking-[-0.27px]">Reading file</span>
                      <Image src="/assets/chevron-right-sm.svg" alt="" width={4} height={11} />
                    </div>
                  </div>

                  {/* Bottom input bar */}
                  <div className="p-4 pt-2">
                    {/* Notify bar */}
                    <div className="bg-white border border-[#e6e3e1] rounded-[8px] px-3 py-2 flex items-center justify-between mb-2">
                      <span className="text-[#7b7b7b] text-[11px]">Want to be notified when Claude responds?</span>
                      <div className="flex items-center gap-2">
                        <span className="bg-[#171717] text-white text-[10px] px-2.5 py-1 rounded-[4px] font-medium">Notify</span>
                        <span className="text-[#c4beb8] text-[11px]">&times;</span>
                      </div>
                    </div>
                    {/* Reply input */}
                    <div className="bg-white border border-[#e6e3e1] rounded-[12px] px-4 py-3">
                      <span className="text-[#c4beb8] text-[13px]">Reply...</span>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[#c4beb8] text-[16px]">+</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[#7b7b7b] text-[11px]">Sonnet 4.6</span>
                          <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1l3 3 3-3" stroke="#7b7b7b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <div className="w-5 h-5 rounded-full border border-[#e6e3e1] flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7b7b7b" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Disclaimer */}
                    <p className="text-center text-[#c4beb8] text-[10px] mt-2">Claude is AI and can make mistakes. Please double-check responses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration logos */}
      <div className="mt-[60px] flex flex-col items-center gap-3">
        <p className="text-[#7b7b7b] text-[17px] leading-[1.2] tracking-[-0.34px] text-center">
          Translates your store data into action
        </p>
        <div className="flex items-center gap-16 max-sm:gap-6 flex-wrap justify-center">
          <Image src="/assets/shopify.svg" alt="Shopify" width={42} height={48} />
          <Image src="/assets/klaviyo.svg" alt="Klaviyo" width={101} height={30} />
          <Image src="/assets/meta.svg" alt="Meta" width={38} height={25} />
          <Image src="/assets/google-ads.svg" alt="Google Ads" width={37} height={34} />
          <Image src="/assets/tiktok.svg" alt="TikTok" width={40} height={40} />
        </div>
      </div>
    </section>
  );
}

/* ───────── Brand Guide Comparison ───────── */
function BrandGuideComparison() {
  const brandGuideItems = [
    { label: "Brand identity", subtitle: "Logo, colors, typography & voice", status: "done" as const },
    { label: "Customer personas", subtitle: "2 of 3 personas complete", status: "progress" as const },
    { label: "Product catalog", subtitle: "12 products loaded", status: "done" as const },
    { label: "Competitive landscape", subtitle: "Market analysis & positioning", status: "pending" as const },
    { label: "Key dates & calendar", subtitle: "Launch milestones & campaigns", status: "pending" as const },
  ];

  return (
    <section className="py-[80px] px-[126px] max-lg:px-8 max-sm:px-4 max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center gap-[48px]">
        {/* Header */}
        <div className="text-center max-w-[567px] flex flex-col gap-6">
          <h2 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[45px] max-sm:text-[32px] leading-[1.2] tracking-[-1.8px]">
            You didn&apos;t start a brand to sound like everyone else.
          </h2>
          <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px] mx-auto">
            Every other AI tool starts from zero. Storefront&apos;s Claude Skills are trained on your brand — your voice, your products, your margins, your customers. Build your Brand Guide, and every specialist uses that context forever.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="flex gap-6 w-full max-md:flex-col">
          {/* Before Card */}
          <div className="flex-1 bg-[#f7f7f7] border border-[#dedede] rounded-lg overflow-hidden p-[43px] max-sm:p-6 min-h-[590px] max-md:min-h-[400px] max-sm:min-h-[350px] relative">
            <h3 className="text-[#666] text-[32px] max-sm:text-[24px] leading-[1.2] tracking-[-1.28px]">
              Before Storefront Team Pack
            </h3>
            <div className="flex items-center gap-1.5 mt-[16px]">
              <div className="w-2 h-2 rounded-full bg-[#ccc]" />
              <p className="text-[#7b7b7b] text-[17px] leading-[1.2] tracking-[-0.34px]">
                Generic output that sounds like every other brand
              </p>
            </div>
            <div className="mt-8 bg-[#ebebeb] rounded-tr-[14px] border-8 border-[#ebebeb] overflow-hidden h-[400px] relative">
              <Image
                src="/assets/demo-chat.png"
                alt="Generic AI chat"
                fill
                className="object-cover object-top opacity-50"
              />
              <div className="absolute inset-0 bg-[#f3f3f3]/50" />
            </div>
          </div>

          {/* After Card */}
          <div className="flex-1 bg-[#faf9f6] border border-[#c8bfb3] rounded-lg overflow-hidden p-[43px] max-sm:p-6 min-h-[590px] max-md:min-h-[400px] max-sm:min-h-[350px] relative">
            <h3 className="text-[#141413] text-[32px] max-sm:text-[24px] leading-[1.2] tracking-[-1.28px]">
              With Storefront Team Pack
            </h3>
            <div className="flex items-center gap-1.5 mt-[16px]">
              <div className="w-2 h-2 rounded-full bg-[#d97757]" />
              <p className="text-[#30302e] text-[17px] leading-[1.2] tracking-[-0.34px]">
                Knows your brand, voice, products, and customers
              </p>
            </div>
            {/* Brand Guide Builder UI */}
            <div className="mt-8 bg-[#faf9f4] rounded-tr-[14px] border-8 border-[#e6e3e1] overflow-hidden shadow-[0px_1.6px_3.2px_0px_rgba(0,0,0,0.04),0px_9.7px_38.9px_0px_rgba(0,0,0,0.1)]">
              {/* Mac title bar */}
              <div className="bg-[#f0ede6] border-b border-[#e8e5de] px-3 py-2.5 flex items-center gap-[6.5px]">
                <div className="flex gap-1.5">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
                  <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
                  <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
                </div>
                <p className="text-[#8a8680] text-[10.5px] tracking-[0.1px] ml-1.5 font-medium font-[family-name:var(--font-mono)]">Storefront Skills — Brand Guide Builder</p>
              </div>
              {/* Chat content */}
              <div className="px-[19px] pt-[22px] pb-0 flex flex-col gap-[10.5px]">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#f0eee5] rounded-tl-[14.5px] rounded-tr-[14.5px] rounded-bl-[14.5px] rounded-br-[3px] px-[13px] py-[8px] max-w-[85%]">
                    <p className="font-[family-name:var(--font-mono)] text-[#1a1916] text-[11.7px] leading-[1.5]">
                      Build a brand guide for our new product line. Include identity, personas, product catalog, competitive landscape, and key dates.
                    </p>
                  </div>
                </div>
                {/* Claude response */}
                <div className="flex items-start gap-[10px]">
                  <div className="w-[26px] h-[26px] rounded-full shrink-0 flex items-center justify-center mt-[1.6px]" style={{ background: "linear-gradient(135deg, #d97757 0%, #c96442 100%)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" fill="white" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[10.5px] flex-1">
                    {/* Building status pill */}
                    <div className="flex items-center gap-[3.5px] bg-[#ebe6e1] border border-[#e8e5de] rounded-full px-[10.5px] py-[3px] w-fit">
                      <div className="w-[15.5px] h-[15.5px] border-[1.6px] border-[#d97757] border-t-transparent rounded-full animate-spin" />
                      <p className="font-medium font-[family-name:var(--font-mono)] text-[#8a8680] text-[9.7px] leading-[1.65]">Building your brand guide…</p>
                    </div>
                    {/* Description paragraph */}
                    <p className="font-[family-name:var(--font-serif)] text-[#3a3830] text-[11px] leading-[1.76]">
                      Here&apos;s your brand guide in progress. I&apos;ve completed most of the foundational sections — still working through the competitive landscape and calendar.
                    </p>
                    {/* Brand Guide progress card */}
                    <div className="bg-[#f9f8f5] border border-[#e8e5de] rounded-[10px] overflow-hidden w-full">
                      {/* Card header */}
                      <div className="bg-white border-b border-[#e8e5de] px-[16px] py-[13px] flex items-center justify-between">
                        <div className="flex items-center gap-[8px]">
                          <div className="w-[26px] h-[26px] rounded-[6.5px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #d97757 0%, #c96442 100%)" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="font-[family-name:var(--font-serif)] text-[#1a1916] text-[13.8px] tracking-[-0.14px]">Brand Guide</span>
                        </div>
                        <span className="bg-[#e8f2ec] text-[#3d6b4f] text-[8.9px] font-semibold uppercase tracking-[0.27px] rounded-full px-[7.3px] py-[2px]">82% complete</span>
                      </div>
                      {/* Overall progress section */}
                      <div className="bg-white border-b border-[#e8e5de] px-[16px] py-[11px] flex flex-col gap-[6.5px]">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-[#8a8680] text-[10.1px]">Overall progress</span>
                          <span className="font-bold text-[#3d6b4f] text-[10.5px]">82%</span>
                        </div>
                        <div className="w-full h-[5px] bg-[#e8e5de] rounded-full">
                          <div className="h-full rounded-full" style={{ width: "82%", background: "linear-gradient(90deg, #3d6b4f 0%, #5a9470 100%)" }} />
                        </div>
                      </div>
                      {/* Section items */}
                      <div className="bg-white py-[6.5px] flex flex-col">
                        {brandGuideItems.map((item, idx) => (
                          <div key={item.label} className={`flex items-center gap-[10px] px-[16px] py-[7.3px] ${idx < brandGuideItems.length - 1 ? "border-b border-[#f0ede6]" : ""}`}>
                            {/* Status icon */}
                            {item.status === "done" ? (
                              <div className="w-[16px] h-[16px] rounded-[8px] bg-[#3d6b4f] flex items-center justify-center shrink-0">
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M2 4.5l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </div>
                            ) : item.status === "progress" ? (
                              <div className="w-[16px] h-[16px] rounded-[8px] bg-[#e8a83a] flex items-center justify-center shrink-0">
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><circle cx="4.5" cy="4.5" r="2" fill="white"/></svg>
                              </div>
                            ) : (
                              <div className="w-[16px] h-[16px] rounded-[8px] border-[1.6px] border-[#d4cfc7] shrink-0" />
                            )}
                            {/* Title + subtitle */}
                            <div className="flex-1 min-w-0">
                              <p className={`font-medium text-[10.9px] leading-[1.65] ${item.status === "pending" ? "text-[#8a8680]" : "text-[#1a1916]"}`}>{item.label}</p>
                              <p className={`text-[9.7px] leading-[1.65] ${item.status === "done" ? "text-[#3d6b4f]" : item.status === "progress" ? "text-[#c07a20]" : "text-[#8a8680]"}`}>{item.subtitle}</p>
                            </div>
                            {/* Status badge */}
                            {item.status === "done" ? (
                              <span className="bg-[#e8f2ec] text-[#3d6b4f] text-[8.9px] font-semibold uppercase tracking-[0.18px] rounded-full px-[6.5px] py-[1.2px] shrink-0">Done</span>
                            ) : item.status === "progress" ? (
                              <span className="bg-[#fef3e2] text-[#b8721a] text-[8.9px] font-semibold uppercase tracking-[0.18px] rounded-full px-[6.5px] py-[1.2px] shrink-0">In progress</span>
                            ) : (
                              <span className="bg-[#f0ede6] text-[#8a8680] text-[8.9px] font-semibold uppercase tracking-[0.18px] rounded-full px-[6.5px] py-[1.2px] shrink-0">Pending</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Follow-up Claude message */}
                    <p className="text-[#5a5750] text-[11.3px] leading-[1.6]">
                      I&apos;ll finish the third persona and then move on to competitive research. Want me to prioritize any section, or should I continue in order?
                    </p>
                  </div>
                </div>
              </div>
              {/* Input row */}
              <div className="bg-[#faf9f6] border-t border-[#e8e5de] px-[16px] py-[12px] flex items-center gap-[8px] mt-0">
                <div className="flex-1 bg-white border border-[#e8e5de] rounded-lg px-[12px] py-[9px]">
                  <p className="text-[#757575] text-[11.3px]">Reply to Claude…</p>
                </div>
                <div className="w-[27.5px] h-[27.5px] bg-[#d97757] rounded-[6.5px] flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Team Specialists Cards ───────── */
const specialists = [
  {
    icon: "/assets/icon-email.svg",
    name: "Email Strategist",
    screenshot: "/assets/email-specialist@2x.png",
  },
  {
    icon: "/assets/icon-ad.svg",
    name: "Ad Copywriter",
    screenshot: "/assets/ad-specialist@2x.png",
  },
  {
    icon: "/assets/icon-cfo.svg",
    name: "Fractional CFO",
    screenshot: "/assets/CFO-specialist@2x.png",
  },
  {
    icon: "/assets/icon-launch.svg",
    name: "Product Launch Director",
    screenshot: "/assets/launch-specialist@2x.png",
  },
  {
    icon: "/assets/icon-pricing.svg",
    name: "Pricing Strategist",
    screenshot: "/assets/Pricing-specialist@2x.png",
  },
  {
    icon: "/assets/icon-competitor.svg",
    name: "Competitive Intelligence",
    screenshot: "/assets/Competitive-specialist@2x.png",
  },
];

function TeamSpecialists() {
  return (
    <section id="see-it-work" className="py-[80px] px-[120px] max-lg:px-8 max-sm:px-4 max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center gap-[46px]">
        <div className="text-center max-w-[567px] flex flex-col gap-6">
          <h2 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[45px] max-sm:text-[32px] leading-[1.2] tracking-[-1.8px]">
            Talk to our Claude Skills like you&apos;d talk to a coworker.
          </h2>
          <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px]">
            No prompt engineering. No re-explaining your brand. Just say what you need.
          </p>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-[46px] w-full">
          {specialists.map((spec) => (
            <div key={spec.name} className="bg-[#faf9f6] border border-[#c8bfb3] rounded-lg overflow-hidden h-[480px] max-sm:h-[400px] relative flex flex-col">
              {/* Subtle grid background */}
              <div
                className="absolute inset-0 top-[129px] opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 38.5px, #9c9a92 38.5px, #9c9a92 39px), repeating-linear-gradient(90deg, transparent, transparent 38.5px, #9c9a92 38.5px, #9c9a92 39px)`,
                }}
              />
              <div className="p-[32px] pb-0 flex flex-col gap-[12px]">
                <Image src={spec.icon} alt="" width={32} height={32} />
                <h3 className="text-black text-[25px] leading-[1.2] tracking-[-0.5px]">{spec.name}</h3>
              </div>
              <div className="h-[1px] bg-[#c8bfb3] mt-[23px]" />
              {/* Screenshot */}
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={spec.screenshot}
                  alt={`${spec.name} example`}
                  fill
                  className="object-contain object-left-top pl-[16px] max-sm:object-cover max-sm:object-top max-sm:pl-0"
                />
              </div>
              {/* Bottom fade gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-[164px] bg-gradient-to-b from-transparent to-[#faf9f6] pointer-events-none" />
              {/* CTA link at bottom */}
              <div className="absolute bottom-[19px] left-1/2 -translate-x-1/2 z-10">
                <a href="#pricing" className="text-[#3d3d3a] text-[14px] leading-[1.2] tracking-[-0.28px] border-b-[0.6px] border-[#3d3d3a] pb-px cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap">
                  Try this yourself →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── What You Get (Carousel) ───────── */
const teamGroups = [
  {
    name: "The Revenue Skills",
    description: "Your Email Strategist, Conversion Copywriter, Product Page Expert, and Popup Specialist — working together across your entire on-site experience.",
    items: [
      "Email sequences that sound like your brand — welcome, abandoned cart, post-purchase, win-back, and promos",
      "Product page copy that answers the 5 questions every buyer has before they click \"Add to Cart\"",
      "Landing pages and popups that capture emails without killing the browsing experience",
      "Launch sequences that turn a new product into a first-week revenue spike",
    ],
  },
  {
    name: "The Growth Team",
    description: "Your Ad Copywriter, Media Strategist, Social Content Writer, and Launch Director — handling acquisition across every channel your customers use.",
    items: [
      "Meta and Instagram ad copy that stops the scroll — hooks, headlines, descriptions, and UGC briefs",
      "Google Shopping and Performance Max strategy built around your actual product feed",
      "TikTok ad scripts that feel native, not corporate",
      "Full product launch plans from 6-week seeding to post-launch sustain",
      "Social content calendars with actual post ideas — not \"post something inspirational on Monday\"",
    ],
  },
  {
    name: "The Strategy Team",
    description: "Your Fractional CFO, Pricing Strategist, Marketing Analyst, Competitor Researcher, and Investor Advisor — making sure every decision is backed by your real numbers.",
    items: [
      "P&L analysis that tells you where money is leaking — in plain English",
      "Pricing and bundle strategy based on your actual margins, not guesswork",
      "Marketing channel analysis that shows what's really driving revenue (not what Meta claims is driving revenue)",
      "Competitor intelligence that finds gaps in their positioning you can own",
      "Investor-readiness assessments and pitch deck guidance when you're ready to raise",
    ],
  },
];

function WhatYouGet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="what-you-get" className="py-[80px] max-w-[1440px] mx-auto relative overflow-hidden">
      {/* Warm cream background layer */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ backgroundColor: "#FFF6E4" }}
      />
      {/* Vivid gradient disk with blur */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[1636px] h-[1636px] top-[198px] pointer-events-none -z-10 rounded-full"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, #FF2200 0%, #FF7300 45%, #FFCB5C 67%, #FFCBAC 100%)",
          filter: "blur(196px)",
        }}
      />
      <div className="px-[120px] max-lg:px-8 max-sm:px-4">
        <div className="text-center flex flex-col gap-6 items-center mb-[48px]">
          <p className="text-[#666] text-[17px] tracking-[0.68px] font-[family-name:var(--font-heading)] font-semibold uppercase">WHAT YOU GET</p>
          <h2 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[45px] max-sm:text-[32px] leading-[1.2] tracking-[-1.8px] max-w-[795px]">
            A full marketing and operations team — for less than the price of one freelancer for one hour.
          </h2>
          <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px] max-w-[795px]">
            14 Claude Skills, each built on real DTC playbooks. Your Brand Guide connects them all so every specialist already knows your brand before they start working.
          </p>
        </div>
      </div>

      {!isMobile ? (
        <>
          <div className="relative">
            <div
              className="flex gap-[19px] pl-[222px]"
              style={{
                transform: `translateX(-${activeIndex * 1015}px)`,
                transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {teamGroups.map((group) => (
                <div key={group.name} className="bg-[#faf9f6] border border-[#c8bfb3] rounded-lg overflow-hidden min-w-[996px] h-[361px] flex shrink-0">
                  <div className="w-[397px] pl-[39px] pr-0 pt-[59px] pb-[39px] flex flex-col gap-[16px]">
                    <h3 className="text-[#333] text-[36px] leading-[1.2] tracking-[-1.44px]">{group.name}</h3>
                    <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px] max-w-[357px]">{group.description}</p>
                  </div>
                  <div className="bg-[#f8f2e9] rounded-lg m-[16px] ml-auto w-[518px] px-[40px] py-[28px] flex flex-col justify-center">
                    <p className="text-[#666] text-[17px] tracking-[-0.34px] font-[family-name:var(--font-heading)] font-medium mb-[24px]">They handle:</p>
                    <div className="flex flex-col gap-[11px]">
                      {group.items.map((item) => (
                        <div key={item} className="flex gap-[8px] items-start">
                          <Image src="/assets/check.svg" alt="" width={18} height={18} className="shrink-0 mt-[2px]" />
                          <p className="text-[#666] text-[17px] leading-[1.2] tracking-[-0.34px]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              className={`absolute left-[38px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-opacity ${activeIndex === 0 ? "opacity-30 cursor-default" : "hover:opacity-70 cursor-pointer"}`}
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => setActiveIndex(Math.min(teamGroups.length - 1, activeIndex + 1))}
              className={`absolute right-[38px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-opacity ${activeIndex === teamGroups.length - 1 ? "opacity-30 cursor-default" : "hover:opacity-70 cursor-pointer"}`}
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-[20px]">
            {teamGroups.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="w-[73px] h-1 rounded-full transition-all duration-400"
                style={{ backgroundColor: i === activeIndex ? "#303030" : "#d4d4d4" }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-6 px-4">
          {teamGroups.map((group) => (
            <div key={group.name} className="bg-[#faf9f6] border border-[#c8bfb3] rounded-lg overflow-hidden w-full flex-col">
              <div className="pl-[24px] pr-[24px] pt-[32px] pb-[24px] flex flex-col gap-[16px]">
                <h3 className="text-[#333] text-[28px] leading-[1.2] tracking-[-1.12px]">{group.name}</h3>
                <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px]">{group.description}</p>
              </div>
              <div className="bg-[#f8f2e9] rounded-lg m-[12px] px-[24px] py-[24px] flex flex-col justify-center">
                <p className="text-[#666] text-[17px] tracking-[-0.34px] font-[family-name:var(--font-heading)] font-medium mb-[20px]">They handle:</p>
                <div className="flex flex-col gap-[11px]">
                  {group.items.map((item) => (
                    <div key={item} className="flex gap-[8px] items-start">
                      <Image src="/assets/check.svg" alt="" width={18} height={18} className="shrink-0 mt-[2px]" />
                      <p className="text-[#666] text-[17px] leading-[1.2] tracking-[-0.34px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer badges */}
      <div className="flex justify-center gap-[12px] mt-[80px] max-sm:flex-col max-sm:items-center">
        {["Built by Real DTC Operators", "No Coding Required", "Your Brand Voice, Every Time"].map((text) => (
          <div key={text} className="flex items-center gap-[4px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.3 4.7L6.3 11.7L2.7 8.1" stroke="#f9f5f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#f9f5f2] text-[17px] leading-[1.2] tracking-[-0.34px]">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── Three Steps ───────── */
function ThreeSteps() {
  return (
    <section id="how-to-start" className="py-[80px] max-w-[1440px] mx-auto">
      <h2 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[45px] max-sm:text-[32px] leading-[1.2] tracking-[-1.8px] text-center max-w-[795px] mx-auto mb-[56px] px-[120px] max-lg:px-8 max-sm:px-4">
        Three Steps. Five Minutes.<br />Your Team Is Ready.
      </h2>

      <div className="flex flex-col gap-[58px] px-[120px] max-lg:px-8 max-sm:px-4">
        {/* Step 1 — Install */}
        <div className="flex items-start max-lg:flex-col max-lg:gap-8">
          <div className="w-[419px] max-lg:w-full shrink-0 pt-[79px]">
            <div className="flex items-center gap-3 opacity-80 mb-[24px]">
              <div className="w-[49px] h-[49px] rounded-full border-2 border-[#e9e9e9] bg-[rgba(200,200,200,0.1)] flex items-center justify-center">
                <span className="text-[#7b7b7b] text-[25px] leading-[1.2] tracking-[-0.5px]">1</span>
              </div>
              <span className="text-[#d97757] text-[25px] leading-[1.2] tracking-[-0.5px]">Install</span>
            </div>
            <h3 className="text-[#333] text-[36px] max-sm:text-[28px] leading-[1.2] tracking-[-1.44px] mb-4">Download and drop into Claude</h3>
            <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px]">
              Purchase your team, download the pack, and add it to Claude (Anthropic&apos;s AI assistant). All 14 specialists activate instantly. If you can drag and drop a file, you can do this. No terminal. No code. No configuration screens.
            </p>
          </div>
          <div className="flex-1 max-lg:hidden" />
          <div className="w-[487px] max-lg:w-full h-[410px] max-lg:h-[300px] max-sm:h-[250px] rounded-lg bg-gradient-to-b from-[#c2ceff] to-[#ffa35d] border border-[#c8bfb3] overflow-hidden relative shrink-0">
            {/* Claude homepage screenshot */}
            <div className="absolute left-[93px] max-sm:left-[40px] top-[112px] max-sm:top-[80px] w-[393px] max-sm:w-[calc(100%-40px)] h-[297px] max-sm:h-[200px] rounded-tr-[14px] overflow-hidden">
              <Image src="/assets/step1-install.png" alt="Claude.ai homepage" fill className="object-cover object-top" />
            </div>
            {/* Floating file download pill */}
            <div className="absolute left-[calc(50%-34px)] top-[calc(50%-87px)] max-sm:left-[50%] max-sm:top-[35%] -translate-x-1/2 -translate-y-1/2 bg-[rgba(235,230,225,0.6)] border-[1.2px] border-[#e9e9e9] rounded-[14px] px-[18px] max-sm:px-[12px] py-[14px] max-sm:py-[10px] w-[363px] max-sm:w-[calc(100%-32px)] max-sm:max-w-[320px] flex items-end gap-3 backdrop-blur-sm z-10">
              <div className="w-[52px] max-sm:w-[40px] h-[52px] max-sm:h-[40px] bg-white rounded-[6px] flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>
              </div>
              <div>
                <p className="text-[#303030] text-[21px] max-sm:text-[16px] leading-[1.2] tracking-[-0.86px] font-medium">Storefront Skills Team Pack</p>
                <p className="text-[#7b7b7b] text-[14px] max-sm:text-[12px] leading-[1.2] tracking-[-0.29px]">12.2MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 — Describe Your Brand */}
        <div className="flex items-start max-lg:flex-col max-lg:gap-8">
          <div className="w-[419px] max-lg:w-full shrink-0 pt-[46px]">
            <div className="flex items-center gap-3 opacity-80 mb-[24px]">
              <div className="w-[49px] h-[49px] rounded-full border-2 border-[#e9e9e9] bg-[rgba(200,200,200,0.1)] flex items-center justify-center">
                <span className="text-[#7b7b7b] text-[25px] leading-[1.2] tracking-[-0.5px]">2</span>
              </div>
              <span className="text-[#d97757] text-[25px] leading-[1.2] tracking-[-0.5px]">Describe Your Brand</span>
            </div>
            <h3 className="text-[#333] text-[36px] max-sm:text-[28px] leading-[1.2] tracking-[-1.44px] mb-4">Teach your team who you are (just once)</h3>
            <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px]">
              Your Brand Strategist walks you through a 15-minute conversation to capture your voice, products, customers, and competitive landscape. It feels like the intake call with a new agency — except this one remembers everything permanently.
            </p>
          </div>
          <div className="flex-1 max-lg:hidden" />
          <div className="w-[487px] max-lg:w-full h-[410px] max-lg:h-[300px] max-sm:h-[250px] rounded-lg bg-gradient-to-b from-[#ffffa1] to-[#63aaed] border border-[#c8bfb3] overflow-hidden relative shrink-0">
            {/* Brand guide conversation screenshot */}
            <div className="absolute left-0 top-[62px] max-sm:top-[40px] w-[412px] max-sm:w-full h-[347px] max-sm:h-[240px] rounded-[14px] overflow-hidden">
              <Image src="/assets/step2-brand.png" alt="Brand guide conversation" fill className="object-cover object-top" />
            </div>
            {/* Bottom fade */}
            <div className="absolute bottom-[-1px] left-1/2 -translate-x-[calc(50%+40.5px)] max-sm:-translate-x-1/2 w-[404px] max-sm:w-full h-[78px] bg-gradient-to-b from-transparent to-[#faf9f6]" />
          </div>
        </div>

        {/* Step 3 — Start Asking */}
        <div className="flex items-start max-lg:flex-col max-lg:gap-8">
          <div className="w-[419px] max-lg:w-full shrink-0 pt-[46px]">
            <div className="flex items-center gap-3 opacity-80 mb-[24px]">
              <div className="w-[49px] h-[49px] rounded-full border-2 border-[#e9e9e9] bg-[rgba(200,200,200,0.1)] flex items-center justify-center">
                <span className="text-[#7b7b7b] text-[25px] leading-[1.2] tracking-[-0.5px]">3</span>
              </div>
              <span className="text-[#d97757] text-[25px] leading-[1.2] tracking-[-0.5px]">Start Asking</span>
            </div>
            <h3 className="text-[#333] text-[36px] max-sm:text-[28px] leading-[1.2] tracking-[-1.44px] mb-4">Talk to your team like you&apos;d talk to a coworker</h3>
            <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px]">
              &ldquo;Write me a Black Friday email sequence.&rdquo; &ldquo;Audit my product page.&rdquo; &ldquo;What&apos;s my real cost per customer?&rdquo; &ldquo;Plan my spring launch.&rdquo; Your team delivers production-ready work, personalized to your brand, in minutes.
            </p>
          </div>
          <div className="flex-1 max-lg:hidden" />
          <div className="w-[487px] max-lg:w-full h-[410px] max-lg:h-[300px] max-sm:h-[250px] rounded-lg bg-gradient-to-b from-[#e5acf8] to-[#ffe391] border border-[#c8bfb3] overflow-hidden relative shrink-0">
            {/* Cart abandonment email screenshot */}
            <div className="absolute left-[48px] max-sm:left-[16px] top-[50px] max-sm:top-[30px] w-[439px] max-sm:w-[calc(100%-16px)] h-[359px] max-sm:h-[240px] rounded-[14px] overflow-hidden">
              <Image src="/assets/step3-email.png" alt="Cart abandonment email" fill className="object-cover object-top" />
            </div>
            {/* Bottom fade */}
            <div className="absolute bottom-[-1px] right-[-2px] max-sm:right-0 w-[439px] max-sm:w-full h-[92px] bg-gradient-to-b from-transparent to-[#faf9f6]" />
          </div>
        </div>
      </div>
    </section>
  );
}


/* ───────── Pricing ───────── */
function Pricing() {
  return (
    <section id="pricing" className="py-[80px] px-[120px] max-lg:px-8 max-sm:px-4 max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center gap-[48px]">
        <div className="text-center flex flex-col gap-6 items-center">
          <p className="text-[#666] text-[17px] tracking-[0.68px] font-[family-name:var(--font-heading)] font-semibold uppercase">Unlimited Use, One Price</p>
          <h2 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[45px] max-sm:text-[32px] leading-[1.2] tracking-[-1.8px]">One Price. Your Whole Team. Forever.</h2>
          <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px] max-w-[843px]">No subscriptions. No hidden fees. Pay once, use your team forever.</p>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-[453px] max-sm:w-full border border-[#c8bfb3] rounded-lg p-8 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(31.23deg, rgb(242,228,211) 0.82%, rgba(248,243,235,0) 31.54%), radial-gradient(ellipse at 87% 11%, rgba(242,228,211,1) 0%, rgba(248,243,235,0) 100%), linear-gradient(90deg, #faf9f6 0%, #faf9f6 100%)`,
            }}>
            <div className="relative z-10">
              <h3 className="text-[#303030] text-[25px] leading-[1.2] tracking-[-0.5px]">The Full Team</h3>
              <p className="text-[#666] text-[17px] leading-[1.2] tracking-[-0.34px] mt-2 w-[310px]">All 14 Claude Skills trained to be eCommerce specialists.</p>
              <div className="mt-6">
                <span className="text-[#303030] text-[45px] max-sm:text-[36px] leading-[1.2] tracking-[-1.8px]">$97</span>
              </div>
              <p className="text-[#7b7b7b] text-[14px] leading-[1.2] tracking-[-0.28px]">Less than $7 per skill · Launch Price</p>
              <div className="h-px bg-[#c8bfb3] my-6" />
              <p className="text-[#666] text-[14px] leading-[1.2] tracking-[-0.28px] font-medium mb-2">What&apos;s included:</p>
              <div className="space-y-4">
                {["All 14 AI specialists — email, ads, CFO, pricing, launches, and more", "Brand Guide Builder so every answer is unique to your business", "Works inside Claude (Anthropic's AI) via Cowork or Claude Code", "Every future update and new team member included free", "Lifetime access — buy once, use forever"].map((f) => (
                  <div key={f} className="flex gap-[7px] items-start">
                    <Image src="/assets/check.svg" alt="" width={18} height={18} className="shrink-0" />
                    <p className="text-[#666] text-[14px] leading-[1.2] tracking-[-0.28px]">{f}</p>
                  </div>
                ))}
              </div>
              <button className="w-full bg-[#171717] text-[#f9f5f2] rounded-[30px] py-[14px] mt-6 font-[family-name:var(--font-heading)] font-medium text-[16px] tracking-[-0.32px] hover:bg-[#333] transition-colors cursor-pointer">Get The Full Team</button>
              <p className="text-[#666] text-[14px] leading-[1.2] tracking-[-0.28px] text-center mt-4">One new winning ad idea, email sequence that converts, or landing page with an increased conversion rate pays for it 100x.</p>
            </div>
          </div>
        </div>

        <p className="text-[#666] text-[14px] leading-[1.2] tracking-[-0.28px] text-center max-w-[843px]">
          30-day money-back guarantee. Try your team — if they don&apos;t deliver, full refund. No questions asked.
        </p>
      </div>
    </section>
  );
}

/* ───────── Credibility ───────── */
function Credibility() {
  return (
    <section className="py-[40px] px-[120px] max-lg:px-8 max-sm:px-4 max-w-[1440px] mx-auto">
      <div className="flex gap-[26px] max-md:flex-col">
        <div className="flex-1 bg-[#faf9f6] border border-[#c8bfb3] rounded-lg overflow-hidden p-[47px] max-sm:p-6 min-h-[428px]">
          <h3 className="text-[#303030] text-[36px] max-sm:text-[28px] leading-[1.2] tracking-[-1.44px] max-w-[687px]">Built by People Who Run Stores, Not People Who Build Software</h3>
          <p className="text-[#666] text-[17px] leading-[1.2] tracking-[-0.34px] mt-3 max-w-[687px]">
            Every team member was designed by eCommerce operators who&apos;ve actually scaled DTC brands. The email frameworks come from people managing real Klaviyo accounts. The ad playbooks come from people spending real budgets. The financial models come from founders who&apos;ve raised real money.
          </p>
          <div className="flex gap-10 mt-[40px] max-sm:flex-col max-sm:gap-6">
            {[
              { icon: "/assets/icon-email-cred.svg", text: "Email playbooks from operators managing $2M+ in Klaviyo revenue" },
              { icon: "/assets/icon-ad-cred.svg", text: "Ad strategies tested across $500K+ in monthly ad spend" },
              { icon: "/assets/icon-money-cred.svg", text: "Financial models used in real investor due diligence" },
            ].map((cred) => (
              <div key={cred.text} className="flex flex-col gap-3 w-[201px] max-sm:w-full">
                <Image src={cred.icon} alt="" width={28} height={28} />
                <p className="text-[#7a7670] text-[17px] leading-[1.2] tracking-[-0.34px] font-[family-name:var(--font-heading)] font-medium">{cred.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[355px] max-md:w-full border border-[#c8bfb3] rounded-lg overflow-hidden p-[31px] min-h-[428px] relative bg-gradient-to-br from-[#faf9f6] via-[#f7deb4] to-[#e38e4d]">
          <div className="relative z-10">
            <h3 className="text-[#303030] text-[36px] max-sm:text-[28px] leading-[1.2] tracking-[-1.44px]">Level Up Results From AI</h3>
            <p className="text-[#666] text-[17px] leading-[1.2] tracking-[-0.34px] mt-4 max-w-[278px]">
              Along with the 14 eCommerce Claude Skills, you&apos;re getting everything we learned along the way, including how to build your own skills, guides on getting the most out of each skill, and tips on how to use Claude across your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials ───────── */
const testimonials = [
  { quote: "The Pricing Strategist helped me redesign my bundles. Average order value went up 18% in the first month.", brand: "Home goods brand", metric: "$120K/mo" },
  { quote: "I asked the Email Strategist to look at my Klaviyo flows. It found $4K/month in revenue I was leaving on the table with a missing post-purchase sequence.", brand: "Skincare founder", metric: "25K email subscribers" },
  { quote: "The CFO told me I was losing $8 per customer on Meta and I didn't even know it. I restructured my budget that same day.", brand: "Supplement brand", metric: "$80K/mo revenue" },
  { quote: "I used the Launch Director to plan our new product drop. Complete plan, emails, social calendar, and ad strategy — done in one afternoon instead of two weeks.", brand: "Food & beverage founder", metric: "Launching Q2" },
  { quote: "The Pricing Strategist helped me redesign my bundles. Average order value went up 18% in the first month.", brand: "Home goods brand", metric: "$120K/mo" },
];

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      // Pre-scroll so the first card is partially off-screen, matching Figma
      scrollRef.current.scrollLeft = 240;
    }
  }, []);

  return (
    <section className="py-[80px] max-w-[1440px] mx-auto">
      <div className="text-center flex flex-col gap-6 items-center mb-[48px] px-[120px] max-lg:px-8 max-sm:px-4">
        <p className="text-[#666] text-[17px] tracking-[0.68px] font-[family-name:var(--font-heading)] font-semibold uppercase">TESTIMONIALS</p>
        <h2 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[45px] leading-[1.2] tracking-[-1.8px] max-w-[745px]">What Your Team Can Do This Week</h2>
      </div>
      <div className="relative">
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#faf9f6] border border-[#c8bfb3] rounded-[8px] p-8 shadow-[0px_11px_16px_0px_rgba(0,0,0,0.04)] min-w-[384px] max-sm:min-w-[300px] w-[384px] max-sm:w-[300px] flex flex-col gap-8 shrink-0">
              <Image src="/assets/quote.svg" alt="" width={23} height={18} />
              <p className="text-black text-[22px] leading-[1.2] tracking-[-0.44px] h-[156px]">{t.quote}</p>
              <div>
                <p className="text-[#666] text-[17px] leading-[1.2] tracking-[-0.34px]">{t.brand}</p>
                <p className="text-[#d97757] text-[17px] leading-[1.2] tracking-[-0.34px]">{t.metric}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-[120px] max-sm:w-[40px] h-full bg-gradient-to-r from-[#f9f5f2] to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-[120px] max-sm:w-[40px] h-full bg-gradient-to-l from-[#f9f5f2] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

/* ───────── Mission ───────── */
function Mission() {
  return (
    <section className="py-[80px] px-[120px] max-lg:px-8 max-sm:px-4 max-w-[1440px] mx-auto relative">
      {/* Warm gradient glow on the left */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 700,
          height: 500,
          left: -180,
          top: 0,
          zIndex: 0,
          background: "radial-gradient(50% 50% at 50% 50%, #e0c8b4 0%, #EAD5C6 35%, rgba(245,230,207,0) 100%)",
          filter: "blur(100px)",
        }}
      />

      <div className="flex gap-[100px] max-lg:flex-col max-lg:gap-10 relative z-[1]">
        <h2 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[45px] max-sm:text-[32px] leading-[1.2] tracking-[-1.8px] max-w-[559px] max-lg:max-w-full shrink-0">Every DTC Founder Deserves a World-Class Team</h2>
        <div className="flex flex-col gap-10 max-w-[580px] max-lg:max-w-full">
          <p className="text-[#666] text-[25px] max-sm:text-[20px] leading-[1.2] tracking-[-0.5px]">
            We built this because we&apos;ve been the founder at midnight, typing into ChatGPT, getting generic garbage, re-explaining our brand for the fifth time that week.
          </p>
          <p className="text-[#666] text-[25px] max-sm:text-[20px] leading-[1.2] tracking-[-0.5px]">
            The gap between a solo founder and a brand with a full team shouldn&apos;t be a $15K/month payroll. It should be a 5-minute install.
          </p>
          <div className="bg-[#f8f2e9] border-l-8 border-[#d97757] pl-8 py-4">
            <p className="text-[#303030] text-[32px] max-sm:text-[24px] leading-[1.2] tracking-[-1.28px]">Describe your brand once.<br />Get expert-level work every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
const faqs = [
  { question: "Wait, what is Claude?", answer: "Storefront Skills is an AI assistant made by Anthropic — think of it like ChatGPT, but many people find it smarter and better at long, detailed work. The Claude Team Pack works inside Claude and gives it specialized eCommerce expertise it doesn't have on its own." },
  { question: "Do I need to know how to code?", answer: "Not at all. If you can drag and drop a file and type a sentence, you can use Storefront Skills. There's no terminal, no code, no configuration. You just talk to your team in plain English like you'd talk to a coworker." },
  { question: "How is this different from just using ChatGPT?", answer: "ChatGPT starts from zero every time. It doesn't know your brand, your products, your margins, or your customers. Storefront Skills gives Claude deep eCommerce expertise plus your Brand Guide — so every answer is specific to your business, not generic advice you could find in a blog post." },
  { question: "What exactly do I get when I purchase?", answer: "You get 14 AI specialist files that you add to Claude, plus a Brand Guide Builder that captures everything about your business. Once installed, you can talk to any specialist — email strategist, CFO, ad copywriter, launch director, and more — and they all know your brand." },
  { question: "Is this a subscription?", answer: "No. It's a one-time purchase. You pay once and use your team forever. Every future update and new team member is included at no extra cost." },
  { question: "How long does it take to set up?", answer: "About 5 minutes to install, plus 10–15 minutes to build your Brand Guide. The Brand Strategist walks you through a conversation to capture your voice, products, and goals. After that, you're ready to go." },
  { question: "Can my team actually see my Shopify and ad data?", answer: "Yes. Claude can connect to Shopify, Klaviyo, Meta Ads, Google Ads, GA4, Search Console, and TikTok through its built-in integrations. Your team pulls real data before giving advice — no copy-pasting screenshots or exporting CSVs." },
  { question: "What if Claude updates — will this break?", answer: "Storefront Skills is built to work with Claude's architecture, not against it. When Claude improves, your team gets smarter automatically. We also push updates to the pack as needed, and every update is free." },
  { question: "What if it doesn't work for me?", answer: "You're covered by a 30-day money-back guarantee. Try your full team, run real tasks, and if you're not getting value — full refund, no questions asked." },
  { question: "Does this work with all Claude plans?", answer: "Our Claude Skills work best with Claude Cowork and Claude Code — both of which are available on all paid Claude Plans (our team uses Claude Pro Max)." },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className={`bg-[#faf9f6] rounded-tr-[8px] rounded-br-[8px] transition-all duration-300 ease-in-out ${isOpen ? "border-l-4 border-l-[#d97757] border border-[#c8bfb3]" : "border border-[rgba(200,191,179,0.5)]"}`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-2.5 text-left cursor-pointer transition-all duration-300 ${isOpen ? "p-8 pb-4" : "px-8 py-6"}`}
      >
        <div className="p-[7px] rounded-full shrink-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M5 8L10 13L15 8" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className={`text-[22px] max-sm:text-[18px] leading-[1.2] tracking-[-0.44px] flex-1 transition-colors duration-300 ${isOpen ? "text-[#d97757] font-[family-name:var(--font-heading)] font-semibold" : "text-[#303030]"}`}>
          {faq.question}
        </p>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={contentRef} className="px-8 pb-8 pl-[76px] max-sm:pl-12">
          <p className="text-[#666] text-[17px] leading-[1.2] tracking-[-0.34px]">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-[80px] px-[120px] max-lg:px-8 max-sm:px-4 max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center gap-[48px]">
        <div className="text-center flex flex-col gap-6 items-center">
          <p className="text-[#666] text-[17px] tracking-[0.68px] font-[family-name:var(--font-heading)] font-semibold uppercase">FAQ</p>
          <h2 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[45px] max-sm:text-[32px] leading-[1.2] tracking-[-1.8px] max-w-[745px]">Questions? Answered</h2>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
          {[faqs.slice(0, 5), faqs.slice(5)].map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3">
              {column.map((faq, idx) => {
                const globalIdx = colIdx * 5 + idx;
                return (
                  <FAQItem
                    key={globalIdx}
                    faq={faq}
                    isOpen={globalIdx === openIndex}
                    onToggle={() => setOpenIndex(globalIdx === openIndex ? -1 : globalIdx)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Final CTA ───────── */
function FinalCTA() {
  return (
    <section className="bg-[#f9f5f2] relative overflow-hidden h-[616px] max-sm:h-[500px]">
      {/* Gradient disk at bottom */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: 1039,
          height: 1039,
          bottom: -520,
          background: "radial-gradient(50% 50% at 50% 50%, #FF2200 0%, #FF7300 45%, #FFCB5C 67%, #FFCBAC 100%)",
          filter: "blur(125px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center pt-[190px] max-sm:pt-[120px] gap-[40px] px-[120px] max-lg:px-8 max-sm:px-4">
        <div className="flex flex-col items-center gap-[20px] text-center">
          <h2 className="text-[#303030] text-[64px] max-lg:text-[48px] max-sm:text-[36px] leading-[1.2] tracking-[-2.56px] font-[family-name:var(--font-heading)] font-medium max-w-[890px]">
            Your Team Is Ready. Are You?
          </h2>
          <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px] max-w-[572px]">
            14 specialists who know your brand. Production-ready work in minutes. One price, forever.
          </p>
        </div>
        <div className="flex gap-3 max-sm:flex-col max-sm:w-full max-sm:items-center max-sm:px-4">
          <a href="#pricing" className="bg-[#171717] text-[#f9f5f2] rounded-[30px] px-8 py-[14px] flex items-center justify-center text-[16px] leading-normal tracking-[-0.32px] font-[family-name:var(--font-heading)] font-medium hover:bg-[#333] transition-colors whitespace-nowrap">
            Get The Full Team — $97
          </a>
          <a href="#what-you-get" className="bg-[#faf9f6] border border-[#c8bfb3] text-[#303030] rounded-[30px] px-8 py-[14px] flex items-center justify-center text-[16px] leading-normal tracking-[-0.32px] font-[family-name:var(--font-heading)] font-medium hover:bg-[#f0ede6] transition-colors whitespace-nowrap">
            See What&apos;s Included
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="bg-[#f9f5f2] border-t-[0.6px] border-[rgba(115,114,108,0.2)] relative overflow-hidden">
      {/* Left warm gradient blob */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 700,
          height: 500,
          left: -223,
          top: 30,
          opacity: 0.5,
          background: "radial-gradient(50% 50% at 50% 50%, #EAD5C6 0%, #F5E6CF 100%)",
          filter: "blur(100px)",
          transform: "rotate(97.62deg)",
        }}
      />
      {/* Right warm gradient blob */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 450,
          height: 300,
          right: -100,
          top: 180,
          opacity: 0.7,
          background: "radial-gradient(50% 50% at 50% 50%, #EAD5C6 0%, #F5E6CF 100%)",
          filter: "blur(100px)",
          transform: "rotate(84.91deg)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-[120px] max-lg:px-8 max-sm:px-4 py-[60px] relative z-[1]">
        <div className="flex justify-between items-start max-md:flex-col max-md:gap-8">
          <div>
            <div className="mb-4">
              <Image src="/assets/storefront-skills-logo.svg" alt="Storefront Skills" width={175} height={24} />
            </div>
            <p className="text-[#30302e] text-[36px] max-sm:text-[28px] leading-[1.2] tracking-[-1.44px] max-w-[530px]">
              Built with love by DTC operators who got tired of generic AI.
            </p>
          </div>
          <div className="flex flex-col items-end max-md:items-start gap-4">
            <div className="flex gap-0.5 flex-wrap">
              {["What You Get", "See It Work", "How to Start", "Pricing", "FAQ"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="px-2.5 py-2.5 text-[#73726c] text-[16px] max-sm:text-[14px] tracking-[-0.32px] hover:opacity-70 transition-opacity">{item}</a>
              ))}
            </div>
            <div className="flex gap-0.5">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a key={item} href="#" className="px-2.5 py-2.5 text-[#73726c] text-[16px] tracking-[-0.32px] hover:opacity-70 transition-opacity">{item}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="h-px bg-[rgba(115,114,108,0.2)] mt-[40px] mb-[20px]" />
        <p className="text-[#9c9a92] text-[14px] leading-[1.2] tracking-[-0.28px] text-right max-md:text-left">© 2026 Storefront Skills. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

/* ───────── Main Page ───────── */
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <BrandGuideComparison />
      <TeamSpecialists />
      <WhatYouGet />
      <ThreeSteps />
      <Pricing />
      <Credibility />
      {/* <Testimonials /> */}
      <Mission />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
