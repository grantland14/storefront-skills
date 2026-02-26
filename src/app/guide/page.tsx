"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

/* ════════════════════════════════════════════════════════════
   DATA CONSTANTS
   ════════════════════════════════════════════════════════════ */

const TOC_ITEMS = [
  { id: "what-are-skills", label: "What Are Skills?" },
  { id: "why-these-skills", label: "Why They Exist" },
  { id: "how-to-install", label: "How to Install" },
  { id: "brand-guide", label: "Brand Guide" },
  { id: "the-14-skills", label: "The 14 Skills" },
  { id: "work-together", label: "How They Connect" },
  { id: "workflows", label: "Workflows" },
  { id: "tips", label: "Tips" },
  { id: "data-tools", label: "Data Tools" },
  { id: "faq", label: "FAQ" },
  { id: "lessons-learned", label: "Lessons Learned" },
  { id: "build-your-own", label: "Build Your Own" },
];

const SKILLS = [
  {
    name: "eCommerce Brand Guide",
    folder: "ecommerce-brand-guide",
    bestFor: "Setting up your brand context once so every other skill works better",
    sections: [
      "The Brand — founding story, mission, personality, differentiation",
      "Customer Personas — 2-3 detailed personas with demographics, psychographics, and real language",
      "Product Catalog — every product with price, margin, positioning",
      "Brand Voice — how you speak, words you use, words you never use",
      "Messaging & Positioning — positioning statement, key messages, tagline",
      "Competitive Landscape — 3-5 direct competitors and how you differ",
      "Key Dates & Calendar — launches, sales events, seasonal moments",
      "Proof Points — reviews, press, certifications, awards, endorsements",
    ],
    prompts: [],
  },
  {
    name: "eCommerce Email Marketing",
    folder: "ecommerce-email",
    bestFor: "Building and optimizing a revenue-driving email program from automated flows to campaign strategy",
    sections: [
      "Automated flows — welcome, cart abandonment, browse abandonment, post-purchase, win-back, VIP, birthday, sunset",
      "Campaign strategy — seasonal calendars, BFCM planning, product launches, flash sales",
      "Segmentation — RFM, engagement tiers, purchase behavior, product affinity",
      "Revenue optimization — send time, A/B testing, dynamic content, cross-sell/upsell",
      "Email program audits — flows, campaigns, segmentation, deliverability, list health",
      "Platform guidance — Klaviyo-first, with Omnisend and Mailchimp support",
    ],
    prompts: [
      "Audit my Klaviyo setup — I'm doing $80K/month, AOV $65, no post-purchase flow yet",
      "Write a 5-email welcome series for a premium coffee subscription brand",
      "My email revenue is 15% of total — help me get it to 30%",
      "Plan my BFCM email calendar for November",
    ],
  },
  {
    name: "eCommerce Copywriting",
    folder: "ecommerce-copywriting",
    bestFor: "Writing conversion-focused copy for every page on your store",
    sections: [
      "Product page copy — descriptions that answer the 5 buyer questions",
      "Collection page copy — category descriptions that reduce choice paralysis",
      "Homepage copy — hero sections, value props, social proof, CTAs",
      "Landing page copy — PAS, AIDA, Before/After/Bridge frameworks",
      "Brand story and about page — founder stories that build emotional connection",
      "Ad copy — headlines, primary text, and descriptions for Meta, Google, TikTok",
    ],
    prompts: [
      "Write a product description for our best-selling vitamin C serum",
      "Rewrite our homepage hero. Current: 'Welcome to our store.' It's terrible",
      "Write collection page copy for our 'Best for Sensitive Skin' collection",
      "Create an about page — we're two sisters who started making candles during COVID",
    ],
  },
  {
    name: "eCommerce Paid Ads",
    folder: "ecommerce-paid-ads",
    bestFor: "Building and optimizing ad campaigns on Meta, Google, and TikTok that profitably acquire customers",
    sections: [
      "Meta Ads — Advantage+ Shopping, audience strategy, creative testing, scaling rules",
      "Google Ads — Shopping, Performance Max, branded/non-branded search, feed optimization",
      "TikTok Ads — creative-first strategy, Spark Ads, TikTok Shop integration",
      "Full-funnel campaign architecture — prospecting, engagement, retargeting",
      "Ad creative strategy — hooks, UGC briefs, product photography, testing frameworks",
      "Measurement — ROAS by platform, MER, attribution, incrementality testing",
      "Scaling playbook — when and how to increase spend without killing performance",
    ],
    prompts: [
      "Build a Meta Ads campaign structure for my $60 AOV skincare brand, $5K/month budget",
      "My ROAS dropped from 3.5x to 2.1x this week — diagnose and fix",
      "Create 5 ad hooks for a Facebook carousel promoting our bestselling moisturizer",
      "Write a UGC creator brief for TikTok — we sell premium protein bars",
    ],
  },
  {
    name: "eCommerce Social Content",
    folder: "ecommerce-social-content",
    bestFor: "Planning and creating social media content that builds brand and drives store traffic",
    sections: [
      "Six content pillars — product, educational, social proof, brand story, community, promotional",
      "Platform-specific strategies — Instagram, TikTok, Pinterest, Facebook",
      "Content calendars — weekly and monthly planning templates",
      "UGC and creator strategy — outreach, deals, briefs, relationships",
      "Social copy formulas — storytelling, educational, promotional, engagement captions",
      "Content ideas by scenario — launches, slow weeks, sales, great reviews",
    ],
    prompts: [
      "Create a 4-week content calendar for my DTC coffee brand on Instagram and TikTok",
      "Write 10 Instagram caption options for our new product launch",
      "Build a UGC creator brief — we sell $45 candles and want TikTok content",
      "Plan our social strategy for the holiday season",
    ],
  },
  {
    name: "eCommerce Product Launch Planner",
    folder: "ecommerce-launch",
    bestFor: "Planning and executing product launches that maximize first-week revenue",
    sections: [
      "Six launch types — new product, collection, variant extension, limited edition, seasonal, rebrand",
      "4-Phase Launch Framework — Seed (4-6 weeks), Build (2-3 weeks), Launch (launch week), Sustain (weeks 1-4)",
      "8-email launch sequence — teaser to last chance, with timing and targeting",
      "Launch paid ads strategy — budget allocation across the 4 phases",
      "Launch tactics — waitlist, drop model, soft launch, pre-order",
      "Launch calendar timing — best months, best days, months to avoid",
    ],
    prompts: [
      "Plan a product launch for our new face oil — we have 4 weeks and a 25K email list",
      "Write the 8-email launch sequence for our new flavor",
      "Create a launch day timeline — I'm launching next Tuesday",
      "Build a waitlist strategy for our limited edition holiday collection",
    ],
  },
  {
    name: "eCommerce PDP Optimization",
    folder: "ecommerce-pdp",
    bestFor: "Analyzing and improving product pages to increase add-to-cart rates",
    sections: [
      "5 buyer questions framework — what is this, is it for me, does it work, can I trust this, is it worth it",
      "Above-the-fold audit — title, rating, pricing, variants, CTA, shipping, trust badges",
      "Product image strategy — optimal 7-10 image sequence for conversion",
      "Below-the-fold content — description, ingredients, how-to, comparison, FAQ, reviews, UGC",
      "Cross-sell and upsell strategy — post-add-to-cart, frequently bought together, bundles",
      "Category-specific optimization — beauty, fashion, food, supplements",
    ],
    prompts: [
      "Audit my product page — here's the URL. What's hurting conversion?",
      "What should my image gallery look like for a $120 face serum?",
      "Design the below-the-fold content for our hero product page",
      "What cross-sell strategy should I use on PDPs to increase AOV?",
    ],
  },
  {
    name: "eCommerce Popup Optimization",
    folder: "ecommerce-popup",
    bestFor: "Designing popups that grow your email list and drive revenue without annoying visitors",
    sections: [
      "Welcome popups — email/SMS capture, offer types, display timing",
      "Exit-intent popups — last-chance urgency copy",
      "Promotional popups — flash sales, limited-time bundles",
      "Cart upsell popups — post-add-to-cart AOV boosters",
      "Multi-popup strategy — coordinating without overwhelming visitors",
      "Copy formulas — headlines, body, CTA text that converts",
    ],
    prompts: [
      "Design a welcome popup for my skincare brand — I want email + SMS capture",
      "Write exit-intent popup copy for a $65 AOV supplement brand",
      "My popup converts at 2% — audit it and suggest improvements",
      "Create a cart upsell popup that increases AOV without feeling pushy",
    ],
  },
  {
    name: "eCommerce Buyer Psychology",
    folder: "ecommerce-buyer-psychology",
    bestFor: "Applying behavioral science to every touchpoint to increase conversions ethically",
    sections: [
      "30 psychological principles — anchoring, loss aversion, social proof, scarcity, decoy effect, endowment, reciprocity, authority, and 22 more",
      "Psychology by touchpoint — how to layer principles on PDPs, emails, and ads",
      "Ethical guidelines — the \"would they feel helped or tricked?\" test",
      "Psychology audits — identify what's applied, what's missing, what would have highest impact",
    ],
    prompts: [
      "Audit my product page using buyer psychology — what principles am I missing?",
      "Rewrite my cart abandonment email using loss aversion and the Zeigarnik effect",
      "How should I use the decoy effect in my bundle pricing?",
      "Make my product descriptions more persuasive using framing and cognitive ease",
    ],
  },
  {
    name: "eCommerce Product Pricing Strategy",
    folder: "ecommerce-pricing",
    bestFor: "Setting prices, designing discount strategies, building bundles, and running price tests",
    sections: [
      "Three pricing inputs — cost-based (floor), market-based (range), value-based (ceiling)",
      "Pricing psychology — charm pricing, round numbers, anchoring, Rule of 100",
      "Discount strategy — spectrum from least to most brand-diluting",
      "Bundle architecture — routine, starter, stock-up, gift bundles with pricing",
      "Subscription pricing — discount benchmarks, tiered commitments, build-your-box",
      "Price testing — A/B test methods, measure revenue per visitor not just conversion",
      "Price increase strategy — signs you're underpriced, communication, rollout tactics",
    ],
    prompts: [
      "Help me price a new product — COGS is $14, competitors charge $45-$65, premium brand",
      "Design a bundle pricing strategy for our 3 core products",
      "Plan my BFCM discount strategy — don't want to devalue the brand",
      "I need to raise prices 20% — plan the rollout and communication",
    ],
  },
  {
    name: "eCommerce CFO",
    folder: "ecommerce-cfo",
    bestFor: "Understanding your financial health, optimizing margins, and making sound financial decisions",
    sections: [
      "P&L analysis — revenue, COGS, gross margin, operating expenses, contribution margin, EBITDA",
      "Unit economics — contribution margin per order, CAC, LTV, LTV:CAC ratio, payback period",
      "COGS reduction — renegotiating, MOQs, material substitution, packaging optimization",
      "Cash flow management — cash conversion cycle, payment terms, inventory planning",
      "Marketing spend efficiency — budgets rooted in unit economics, not arbitrary ROAS targets",
      "Scenario planning — model growth, cost increases, hiring decisions",
      "Fundraising preparation — clean P&L, cohort analysis, investor metrics",
    ],
    prompts: [
      "Here's my P&L — where am I losing money and what should I fix first?",
      "Calculate my unit economics: AOV $65, COGS $18, CAC $35",
      "Should I raise prices by 15%? Model the impact",
      "I spend $20K/month on ads — is that sustainable for my margin structure?",
    ],
  },
  {
    name: "eCommerce VC Evaluation",
    folder: "ecommerce-vc",
    bestFor: "Understanding whether your brand is fundable, what it might be worth, and how to prepare for investors",
    sections: [
      "How VCs evaluate — growth, unit economics, moats, team, market size",
      "Fundability assessment — structured score across five areas",
      "Valuation benchmarks — revenue multiples by stage, growth rate, category",
      "Pitch deck guidance — slide-by-slide for DTC investor pitches",
      "Due diligence preparation — financial and operational documents investors request",
      "Alternative funding — revenue-based financing, SBA loans, Shopify Capital, bootstrapping math",
    ],
    prompts: [
      "Evaluate my brand like a VC — $2M/year, 70% gross margin, 30% growth",
      "What's a realistic valuation for a DTC skincare brand doing $5M?",
      "Help me build a pitch deck for my Series A",
      "Should I raise VC money or use revenue-based financing?",
    ],
  },
  {
    name: "eCommerce Marketing Analyst",
    folder: "ecommerce-analytics",
    bestFor: "Understanding which marketing channels actually drive revenue and making data-informed budget decisions",
    sections: [
      "Three-tier metrics — daily vital signs, weekly channel reviews, monthly strategic analysis",
      "Attribution — MER as truth metric, platform ROAS as directional, post-purchase surveys, UTMs, incrementality",
      "Platform analytics — Shopify, GA4, Klaviyo, Meta Ads Manager, Google Ads",
      "Budget allocation framework — split budget based on performance data, rebalance monthly",
      "Analytics audit checklist — tracking setup, data quality, reporting, attribution",
    ],
    prompts: [
      "Audit my analytics setup — I use Shopify, GA4, Klaviyo, and Meta. What am I missing?",
      "Help me allocate my $25K/month marketing budget based on channel performance",
      "My MER dropped from 4.5x to 3.2x — help me figure out why",
      "Set up a UTM tracking system for all my marketing channels",
    ],
  },
  {
    name: "eCommerce Competitor Intelligence",
    folder: "ecommerce-competitor-intel",
    bestFor: "Understanding what your competitors are doing, why, and what you should do about it",
    sections: [
      "Ad creative analysis — Meta Ad Library, volume, formats, messaging themes, top performers",
      "Website and PDP analysis — homepage, navigation, product pages, UX strengths and weaknesses",
      "Pricing and offer analysis — product pricing comparison, bundles, shipping, returns",
      "Email flow teardown — welcome series, abandonment, campaigns, frequency",
      "Social media presence — platforms, posting, engagement, UGC, influencers",
      "Product strategy — catalog, hero products, launch cadence, gaps and advantages",
      "Brand positioning — mission, personality, differentiation, positioning map",
    ],
    prompts: [
      "Analyze my top 3 competitors' Meta ads — here are their brand names",
      "Do a full competitive audit of [Brand Name] — website, pricing, positioning",
      "My competitor just launched a product like mine — what should I do?",
      "Map the competitive positioning in the premium skincare space",
    ],
  },
];

const WORKFLOWS = [
  {
    title: "I just launched my DTC brand and need to set everything up",
    steps: [
      { skill: "Brand Guide", desc: "Build your brand context document" },
      { skill: "Pricing", desc: "Validate your pricing using the three-input framework" },
      { skill: "PDP", desc: "Optimize your product pages for conversion" },
      { skill: "Copywriting", desc: "Write homepage, collection, and about page copy" },
      { skill: "Email", desc: "Set up core automated flows (welcome, cart abandonment, post-purchase)" },
      { skill: "Popup", desc: "Create a welcome popup to capture emails" },
      { skill: "Social Content", desc: "Plan your first month of social content" },
      { skill: "Paid Ads", desc: "Build your initial ad campaigns" },
    ],
  },
  {
    title: "I'm launching a new product next month",
    steps: [
      { skill: "Launch", desc: "Create the 4-phase launch plan" },
      { skill: "Pricing", desc: "Set the price and design launch bundles" },
      { skill: "Email", desc: "Write the 8-email launch sequence" },
      { skill: "Copywriting", desc: "Write the product page copy" },
      { skill: "PDP", desc: "Optimize the product page for conversion" },
      { skill: "Social Content", desc: "Plan the social calendar for launch week" },
      { skill: "Paid Ads", desc: "Build launch ad campaigns" },
      { skill: "Popup", desc: "Create waitlist capture popup" },
      { skill: "Analytics", desc: "Set up tracking and define success metrics" },
    ],
  },
  {
    title: "My conversion rate is low and I can't figure out why",
    steps: [
      { skill: "Analytics", desc: "Audit your data to find where customers drop off" },
      { skill: "PDP", desc: "Audit your product pages (the most common bottleneck)" },
      { skill: "Buyer Psychology", desc: "Identify which psychological principles are missing" },
      { skill: "Popup", desc: "Evaluate your popup strategy" },
      { skill: "Pricing", desc: "Check if pricing is the barrier" },
    ],
  },
  {
    title: "I need to prepare for fundraising",
    steps: [
      { skill: "CFO", desc: "Get your P&L and unit economics clean" },
      { skill: "Analytics", desc: "Build clear channel performance data" },
      { skill: "VC", desc: "Evaluate your fundability and determine realistic valuation" },
      { skill: "Competitor Intel", desc: "Map your competitive landscape for the investor deck" },
      { skill: "Brand Guide", desc: "Ensure your positioning and differentiation story is tight" },
    ],
  },
  {
    title: "Black Friday is coming and I need a plan",
    steps: [
      { skill: "Pricing", desc: "Design your BFCM discount strategy" },
      { skill: "Email", desc: "Plan the BFCM email campaign calendar" },
      { skill: "Paid Ads", desc: "Build BFCM ad campaigns with seasonal creative" },
      { skill: "Popup", desc: "Create promotional popups for BFCM offers" },
      { skill: "Social Content", desc: "Plan BFCM social content calendar" },
      { skill: "Analytics", desc: "Set up tracking to measure BFCM performance vs. goals" },
    ],
  },
  {
    title: "I want to understand my competitive landscape",
    steps: [
      { skill: "Competitor Intel", desc: "Run a full competitive audit across all 7 areas" },
      { skill: "Pricing", desc: "Build a competitive pricing comparison table" },
      { skill: "Brand Guide", desc: "Update competitive landscape section with findings" },
      { skill: "Buyer Psychology", desc: "Identify principles your competitors use that you don't" },
    ],
  },
];

const TIPS = [
  {
    title: "Build the Brand Guide first",
    body: "Everything else works 10x better when Claude already knows your brand. Invest 30 minutes upfront and save hours on every future conversation.",
  },
  {
    title: "Be specific in your prompts",
    body: "\"Help with email\" produces generic output. \"Audit my welcome series — I have 3 emails, 15% conversion to first purchase, $65 AOV, Klaviyo\" produces expert-level output.",
  },
  {
    title: "Give Claude your actual data",
    body: "These skills are built to work with real numbers. Share your actual AOV, conversion rate, ROAS, P&L, and review data. The more real data you provide, the more specific and useful the output.",
  },
  {
    title: "Use skills in combination",
    body: "A psychology-informed product page (PDP + Buyer Psychology), with pricing anchored to financial data (Pricing + CFO), promoted through a structured launch plan (Launch + Email + Ads), and measured accurately (Analytics) — that's the compound effect.",
  },
  {
    title: "Update your Brand Guide as you grow",
    body: "Your brand evolves — new products, new customers, new positioning. Keep the brand guide current. Run an update every quarter or after any major change.",
  },
  {
    title: "Use the slash commands for specific skills",
    body: "If Claude doesn't automatically pick up the right skill, use the slash command directly: /ecommerce-email, /ecommerce-pricing, /ecommerce-launch, etc.",
  },
  {
    title: "Ask for audits, not just creation",
    body: "These skills are as valuable for auditing what you already have as they are for creating new things. \"Audit my email program\" or \"Audit my PDP\" often produces the highest-impact insights.",
  },
  {
    title: "Follow up with \"why\" and \"what specifically\"",
    body: "If Claude gives a recommendation, ask \"why?\" and \"what specifically should I change?\" The skills are deep enough to explain reasoning and provide exact implementation steps.",
  },
];

const CLI_PLATFORMS = [
  {
    name: "Shopify",
    icon: "/assets/shopify.svg",
    iconW: 30,
    iconH: 34,
    desc: "Store data, orders, products, inventory",
    test: "node tools/clis/shopify.js shop",
    envVars: `export SHOPIFY_STORE="your-store-name"\nexport SHOPIFY_ACCESS_TOKEN="shpat_xxxxx"`,
    prompts: [
      "Pull my order data from last month and break down revenue by product",
      "What are my top 10 best-selling products this quarter?",
      "Check my inventory levels — am I running low on anything?",
    ],
  },
  {
    name: "Klaviyo",
    icon: "/assets/klaviyo.svg",
    iconW: 44,
    iconH: 13,
    desc: "Email flows, campaigns, segments, metrics",
    test: "node tools/clis/klaviyo.js flows list",
    envVars: `export KLAVIYO_API_KEY="pk_xxxxx"`,
    prompts: [
      "Pull my Klaviyo flow performance and audit my email program",
      "What's my email revenue this month? Break it down by flow vs. campaign",
      "Show me my segment sizes — which ones should I be targeting more?",
    ],
  },
  {
    name: "Meta Ads",
    icon: "/assets/meta.svg",
    iconW: 28,
    iconH: 19,
    desc: "Facebook and Instagram ad campaigns",
    test: "node tools/clis/meta-ads.js accounts list",
    envVars: `export META_ACCESS_TOKEN="xxxxx"\nexport META_AD_ACCOUNT_ID="123456789"`,
    prompts: [
      "Analyze my Meta Ads performance for the last 30 days — what's working?",
      "My ROAS dropped this week. Pull the campaign data and help me diagnose why",
      "Compare my active campaigns — which should I scale and which should I pause?",
    ],
  },
  {
    name: "Google Ads",
    icon: "/assets/google-ads.svg",
    iconW: 28,
    iconH: 27,
    desc: "Search, Shopping, and Performance Max campaigns",
    test: "node tools/clis/google-ads.js account info",
    envVars: `export GOOGLE_ADS_TOKEN="ya29.xxxxx"\nexport GOOGLE_ADS_DEVELOPER_TOKEN="xxxxx"\nexport GOOGLE_ADS_CUSTOMER_ID="123-456-7890"`,
    prompts: [
      "Pull my Google Shopping performance — which products are profitable?",
      "Show me my search terms report — am I wasting money on irrelevant queries?",
      "How are my PMax campaigns performing vs. standard Shopping?",
    ],
  },
  {
    name: "GA4",
    icon: null,
    iconW: 0,
    iconH: 0,
    desc: "Website traffic, conversions, ecommerce analytics",
    test: "node tools/clis/ga4.js traffic",
    envVars: `export GA4_ACCESS_TOKEN="ya29.xxxxx"\nexport GA4_PROPERTY_ID="123456789"`,
    prompts: [
      "Pull my GA4 data — which traffic sources have the best conversion rate?",
      "Show me my top landing pages and their bounce rates",
      "Break down my ecommerce data by source — where is revenue actually coming from?",
    ],
  },
  {
    name: "Google Search Console",
    icon: null,
    iconW: 0,
    iconH: 0,
    desc: "SEO and search performance",
    test: "node tools/clis/gsc.js queries",
    envVars: `export GSC_ACCESS_TOKEN="ya29.xxxxx"\nexport GSC_SITE_URL="https://yourstore.com"`,
    prompts: [
      "What search queries are driving the most traffic to my store?",
      "Which of my product pages rank on page 1 vs. page 2?",
      "Show me my search impressions trend over the last 90 days",
    ],
  },
  {
    name: "TikTok Ads",
    icon: "/assets/tiktok.svg",
    iconW: 24,
    iconH: 24,
    desc: "TikTok ad campaigns and performance",
    test: "node tools/clis/tiktok-ads.js advertisers info",
    envVars: `export TIKTOK_ACCESS_TOKEN="xxxxx"\nexport TIKTOK_ADVERTISER_ID="123456789"`,
    prompts: [
      "How are my TikTok campaigns performing compared to Meta?",
      "Pull my TikTok ad performance for the last 30 days",
      "Which TikTok ad groups have the best cost per purchase?",
    ],
  },
];

const GUIDE_FAQS = [
  {
    q: "Do I need all 14 skills?",
    a: "No. Install the Brand Guide plus whichever skills match your current priorities. You can always add more later. That said, the Brand Guide, Email, Copywriting, and PDP are the four highest-impact skills for most DTC founders.",
  },
  {
    q: "Will these skills work with Claude on the web (claude.ai)?",
    a: "The skills are designed for Claude Code and Claude Cowork, but the SKILL.md files can be uploaded as context in Claude web conversations too. You just lose the automatic skill detection and the Brand Guide auto-reading.",
  },
  {
    q: "Do skills slow down Claude?",
    a: "Not noticeably. Skills are markdown files — they add context to Claude's knowledge but don't affect response speed.",
  },
  {
    q: "Can I customize the skills?",
    a: "Absolutely. The SKILL.md files are plain markdown. Edit them to add your own frameworks, benchmarks, templates, or industry-specific knowledge.",
  },
  {
    q: "Can I use these skills for a non-DTC eCommerce business?",
    a: "These skills are optimized for DTC brands selling through their own online store. If you sell on Amazon, wholesale, or through marketplaces, many principles still apply but some advice will be DTC-specific. Email, Copywriting, Buyer Psychology, and Pricing are the most universally applicable.",
  },
  {
    q: "What if two skills give conflicting advice?",
    a: "The skills are designed to be complementary. If you get conflicting recommendations, lean on your experience and intuition. These skills aren't designed to outsource decision making, the idea is to help you up productivity while saving time, get more creative, and come up with more ideas on how to scale.",
  },
];

/* ════════════════════════════════════════════════════════════
   HELPER COMPONENTS
   ════════════════════════════════════════════════════════════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#666] text-[17px] tracking-[0.68px] font-[family-name:var(--font-heading)] font-semibold uppercase mb-4">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[36px] max-sm:text-[28px] leading-[1.2] tracking-[-1.44px] mb-6">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[#666] text-[17px] leading-[1.6] tracking-[-0.34px] space-y-5">
      {children}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f8f2e9] border-l-[6px] border-[#d97757] pl-6 pr-6 py-5 rounded-r-lg my-8">
      <div className="text-[#303030] text-[17px] leading-[1.6] tracking-[-0.34px]">
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ label, children }: { label?: string; children: string }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [children]);

  return (
    <div className="relative bg-[#1e1e1e] rounded-lg overflow-hidden my-6">
      {label && (
        <div className="px-5 pt-3 pb-0 text-[#888] text-[12px] font-[family-name:var(--font-mono)] uppercase tracking-wider">
          {label}
        </div>
      )}
      <pre className="p-5 pt-3 overflow-x-auto">
        <code className="text-[#e0e0e0] text-[14px] leading-[1.7] font-[family-name:var(--font-mono)]">
          {children}
        </code>
      </pre>
      <button
        onClick={copy}
        className="absolute top-3 right-3 text-[#888] hover:text-white text-[12px] font-[family-name:var(--font-mono)] transition-colors bg-[#333] rounded px-2 py-1 cursor-pointer"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

function PromptExample({ children }: { children: string }) {
  return (
    <div className="bg-[#f8f2e9] rounded-lg px-4 py-3 font-[family-name:var(--font-mono)] text-[14px] text-[#303030] leading-[1.5] italic">
      &ldquo;{children}&rdquo;
    </div>
  );
}

function SkillBadge({ children }: { children: string }) {
  return (
    <span className="inline-block bg-[#f8f2e9] text-[#d97757] text-[12px] font-[family-name:var(--font-mono)] font-medium rounded-full px-2.5 py-0.5 whitespace-nowrap">
      {children}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════
   NAVIGATION
   ════════════════════════════════════════════════════════════ */

function GuideNav() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[86px] z-50 bg-[#f9f5f2]/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto h-full relative px-[120px] max-lg:px-8 max-sm:px-4">
        <a href="/" className="absolute left-[120px] max-lg:left-8 max-sm:left-4 top-1/2 -translate-y-1/2">
          <Image src="/assets/storefront-skills-logo.svg" alt="Storefront Skills" width={175} height={24} className="max-sm:w-[140px] max-sm:h-auto" />
        </a>
      </div>
    </nav>
  );
}

/* ════════════════════════════════════════════════════════════
   TABLE OF CONTENTS
   ════════════════════════════════════════════════════════════ */

function TableOfContents({
  activeSection,
  onClose,
}: {
  activeSection: string;
  onClose?: () => void;
}) {
  return (
    <div className="space-y-1">
      <p className="text-[#666] text-[12px] tracking-[0.48px] font-[family-name:var(--font-heading)] font-semibold uppercase mb-3 px-3">
        On this page
      </p>
      {TOC_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={onClose}
          className={`block px-3 py-2 text-[14px] tracking-[-0.28px] rounded-md transition-colors ${
            activeSection === item.id
              ? "text-[#d97757] bg-[#f8f2e9] font-medium border-l-[3px] border-[#d97757]"
              : "text-[#666] hover:text-[#303030] hover:bg-[#f0ede6]"
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   FAQ ITEM (reuse homepage accordion pattern)
   ════════════════════════════════════════════════════════════ */

function FAQItem({
  q,
  a,
  isOpen,
  toggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className={`rounded-lg overflow-hidden transition-colors ${
        isOpen
          ? "border-l-4 border-l-[#d97757] border border-[#c8bfb3] bg-[#faf9f6]"
          : "border border-[rgba(200,191,179,0.5)]"
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center gap-4 p-6 text-left cursor-pointer"
      >
        <span
          className={`text-[17px] leading-[1.3] tracking-[-0.34px] ${
            isOpen ? "text-[#d97757] font-medium" : "text-[#303030]"
          }`}
        >
          {q}
        </span>
        <Image
          src="/assets/chevron-down.svg"
          alt=""
          width={16}
          height={16}
          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? 500 : 0 }}
      >
        <p className="px-6 pb-6 text-[#666] text-[15px] leading-[1.6] tracking-[-0.3px]">
          {a}
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE SECTIONS
   ════════════════════════════════════════════════════════════ */

function GuideHero() {
  return (
    <section className="pt-[138px] pb-[40px] text-center">
      <div className="max-w-[820px] mx-auto px-6">
        <SectionLabel>Your Guide</SectionLabel>
        <h1 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[45px] max-sm:text-[28px] leading-[1.2] tracking-[-1.8px] mb-6">
          The Complete Guide to eCommerce Skills for Claude
        </h1>
        <p className="text-[#666] text-[22px] max-sm:text-[17px] leading-[1.4] tracking-[-0.44px]">
          Everything you need to install, configure, and get the most out of your 14-person AI team.
        </p>
      </div>
    </section>
  );
}

/* ─── What Are Skills? ─── */
function WhatAreSkills() {
  return (
    <section id="what-are-skills" className="scroll-mt-[120px]">
      <SectionLabel>Introduction</SectionLabel>
      <SectionHeading>What Are Claude Code Skills?</SectionHeading>
      <Prose>
        <p>
          Claude Code is an AI coding assistant that runs in your terminal. Out of the box, Claude is a generalist — it knows a little about everything but isn&apos;t an expert in anything specific. Skills change that.
        </p>
        <p>
          A skill is a markdown file that gives Claude specialized knowledge, frameworks, and workflows for a specific task. When you add a skill to your project, Claude reads it at the start of every conversation and uses that knowledge to give you expert-level advice instead of generic answers.
        </p>
        <Callout>
          <strong>Think of it this way:</strong> without skills, asking Claude about your email marketing is like asking a smart friend who&apos;s read a few blog posts. With the eCommerce Email skill installed, it&apos;s like hiring a Klaviyo consultant who&apos;s managed email programs for dozens of DTC brands.
        </Callout>
        <p>Skills don&apos;t change what Claude can do technically. They change what Claude <em>knows</em> and how it <em>thinks</em> about your problems. A skill might include:</p>
        <ul className="list-none space-y-2 pl-0">
          {[
            "Industry-specific frameworks and mental models",
            "Step-by-step workflows for complex tasks",
            "Benchmarks and targets for your specific business type",
            "Templates and output formats",
            "Context-gathering questions that a real expert would ask",
            "Common mistakes to avoid",
          ].map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <Image src="/assets/check.svg" alt="" width={16} height={16} className="shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Prose>
    </section>
  );
}

/* ─── Why These Skills Exist ─── */
function WhyTheseSkills() {
  return (
    <section id="why-these-skills" className="scroll-mt-[120px] mt-[80px]">
      <SectionHeading>Why These Skills Exist</SectionHeading>
      <Prose>
        <p>
          Most eCommerce founders wear every hat. You&apos;re the CEO, the marketing team, the finance department, the copywriter, the ad buyer, and the customer service rep. You can&apos;t afford to hire a specialist for every function, but you also can&apos;t afford to make amateur-level decisions in any of them.
        </p>
        <p>These skills close that gap. They give you access to specialist-level thinking in 14 areas of eCommerce operations — without hiring 14 people.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 not-prose">
          {[
            {
              title: "The blank-page problem",
              body: "You open Claude and type \"help me with my email marketing.\" Claude asks \"what kind of emails?\" and you're already stuck. With the Email skill, Claude knows to ask about your flows, your segments, your AOV — and gives you a strategic recommendation.",
            },
            {
              title: "The context problem",
              body: "Every time you start a new conversation, you lose all context. You have to re-explain your brand, your products, your customers. The Brand Guide skill solves this permanently — build it once, and every other skill reads it automatically.",
            },
            {
              title: "The depth problem",
              body: "Generic AI advice sounds good but doesn't hold up under scrutiny. \"You should segment your email list\" is true but useless. The Email skill tells you exactly which segments to build, what to send each one, and what benchmarks to target.",
            },
            {
              title: "The integration problem",
              body: "Your pricing affects your ad strategy. Your ads affect your email program. Your email affects your LTV. Your LTV determines ad spend. These skills are designed to work together, with the Brand Guide as the shared foundation.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-[#faf9f6] border border-[#c8bfb3] rounded-lg p-6">
              <h4 className="text-[#303030] text-[17px] font-medium tracking-[-0.34px] mb-3">{card.title}</h4>
              <p className="text-[#666] text-[15px] leading-[1.6] tracking-[-0.3px]">{card.body}</p>
            </div>
          ))}
        </div>
      </Prose>
    </section>
  );
}

/* ─── How to Install ─── */
function HowToInstall() {
  return (
    <section id="how-to-install" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>Setup</SectionLabel>
      <SectionHeading>How to Install</SectionHeading>
      <Prose>
        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Option 1: Install all skills at once</h3>
        <CodeBlock label="Terminal">{`git clone https://github.com/grantland14/Claude-Skills-for-eCommerce.git\nmkdir -p ~/.claude/skills\ncp -rn Claude-Skills-for-eCommerce/skills/ecommerce-* ~/.claude/skills/`}</CodeBlock>
        <p>This copies all 14 skills into your Claude Code skills directory. Claude will automatically detect and use them in relevant conversations.</p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Option 2: Manually add them to Claude</h3>
        <p>Open up the Claude desktop app. Go to Cowork, click Customize, select &apos;+&apos; labeled &apos;Add plugin&apos; and upload the Zip file shared with you when you purchase Storefront Skills.</p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">After installation</h3>
        <p>
          Start a new Claude Code or Cowork conversation. Claude will now recognize when you&apos;re asking about eCommerce tasks and apply the relevant skill automatically. You don&apos;t need to tell Claude which skill to use — it figures that out from your prompt.
        </p>
        <Callout>
          If you want to invoke a specific skill directly, you can use the slash command (e.g., <code className="font-[family-name:var(--font-mono)] text-[#d97757]">/ecommerce-email</code> or <code className="font-[family-name:var(--font-mono)] text-[#d97757]">/ecommerce-pricing</code>).
        </Callout>
      </Prose>
    </section>
  );
}

/* ─── Brand Guide ─── */
function BrandGuideSection() {
  return (
    <section id="brand-guide" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>Foundation</SectionLabel>
      <SectionHeading>Getting Started: The Brand Guide</SectionHeading>
      <Prose>
        <Callout>
          <strong>Before using any other skill, start here.</strong> The Brand Guide is the foundation that makes everything else more powerful.
        </Callout>
        <p>
          The Brand Guide skill walks you through creating a <code className="font-[family-name:var(--font-mono)] bg-[#f0eee5] px-1.5 py-0.5 rounded text-[15px]">.claude/brand-guide.md</code> file — a structured document that captures everything about your brand in one place. Once this file exists, every other skill reads it before asking you questions.
        </p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">How to build your Brand Guide</h3>
        <p>Start a new Claude conversation and say something like:</p>
        <div className="space-y-3 mt-4">
          <PromptExample>Build a brand guide for my DTC skincare company</PromptExample>
          <PromptExample>Help me create a brand guide — I sell premium dog food online</PromptExample>
          <PromptExample>Create a brand guide from my website: [URL]</PromptExample>
        </div>
        <p className="mt-5">The process takes 15-30 minutes the first time. After that, you can update individual sections as your brand evolves.</p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Why it matters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 not-prose">
          <div className="bg-[#f7f7f7] border border-[#dedede] rounded-lg p-6">
            <p className="text-[#999] text-[12px] font-[family-name:var(--font-heading)] font-semibold uppercase tracking-wider mb-3">Without the guide</p>
            <p className="text-[#666] text-[15px] leading-[1.6]">
              <strong className="text-[#303030]">You:</strong> &ldquo;Write a cart abandonment email&rdquo;<br />
              <strong className="text-[#303030]">Claude:</strong> &ldquo;What do you sell? What&apos;s your brand voice? What&apos;s your AOV? What platform are you on?&rdquo;
            </p>
          </div>
          <div className="bg-[#faf9f6] border border-[#c8bfb3] rounded-lg p-6">
            <p className="text-[#d97757] text-[12px] font-[family-name:var(--font-heading)] font-semibold uppercase tracking-wider mb-3">With the guide</p>
            <p className="text-[#666] text-[15px] leading-[1.6]">
              <strong className="text-[#303030]">You:</strong> &ldquo;Write a cart abandonment email&rdquo;<br />
              <strong className="text-[#303030]">Claude:</strong> &ldquo;Based on your brand guide, here&apos;s a 3-email cart abandonment sequence for your $65 AOV skincare brand, written in your conversational-but-expert tone...&rdquo;
            </p>
          </div>
        </div>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Updating your Brand Guide</h3>
        <p>You don&apos;t need to rebuild the guide from scratch. Ask Claude to update specific sections:</p>
        <div className="space-y-3 mt-4">
          <PromptExample>Update my brand guide — we just launched 3 new products: [details]</PromptExample>
          <PromptExample>Add Competitor X to my brand guide&apos;s competitive landscape</PromptExample>
          <PromptExample>Update the proof points — we just got featured in Vogue and hit 5,000 reviews</PromptExample>
        </div>
      </Prose>
    </section>
  );
}

/* ─── The 14 Skills ─── */
function SkillsSection() {
  return (
    <section id="the-14-skills" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>Your Team</SectionLabel>
      <SectionHeading>The 14 Skills — In Detail</SectionHeading>
      <Prose>
        <p className="mb-8">Each skill turns Claude into a different specialist. Here&apos;s what every member of your team knows and how to put them to work.</p>
      </Prose>

      <div className="space-y-6">
        {SKILLS.map((skill, idx) => (
          <div key={skill.folder} className="bg-[#faf9f6] border border-[#c8bfb3] rounded-lg p-8 max-sm:p-5">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <span className="shrink-0 w-[36px] h-[36px] rounded-full bg-[#f8f2e9] flex items-center justify-center text-[#d97757] text-[16px] font-[family-name:var(--font-serif)] italic font-medium">
                {idx + 1}
              </span>
              <div>
                <h3 className="text-[#303030] text-[22px] max-sm:text-[19px] tracking-[-0.44px] font-medium leading-[1.2]">
                  {skill.name}
                </h3>
                <span className="inline-block mt-1 bg-[#1e1e1e] text-[#e0e0e0] text-[12px] font-[family-name:var(--font-mono)] rounded px-2 py-0.5">
                  {skill.folder}
                </span>
              </div>
            </div>

            {/* Best for */}
            <p className="text-[#d97757] text-[15px] font-medium leading-[1.4] tracking-[-0.3px] mb-5">
              {skill.bestFor}
            </p>

            {/* What it covers */}
            <div className="space-y-2.5 mb-6">
              {skill.sections.map((s) => (
                <div key={s} className="flex gap-3 items-start">
                  <Image src="/assets/check.svg" alt="" width={16} height={16} className="shrink-0 mt-0.5" />
                  <p className="text-[#666] text-[15px] leading-[1.5] tracking-[-0.3px]">{s}</p>
                </div>
              ))}
            </div>

            {/* Example prompts */}
            {skill.prompts.length > 0 && (
              <div>
                <p className="text-[#303030] text-[14px] font-[family-name:var(--font-heading)] font-semibold uppercase tracking-wider mb-3">
                  Example prompts
                </p>
                <div className="space-y-2">
                  {skill.prompts.map((p) => (
                    <PromptExample key={p}>{p}</PromptExample>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── How Skills Work Together ─── */
function WorkTogetherSection() {
  return (
    <section id="work-together" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>The Big Picture</SectionLabel>
      <SectionHeading>How the Skills Work Together</SectionHeading>
      <Prose>
        <p>These skills aren&apos;t isolated tools — they&apos;re designed to compound. Each skill references concepts from other skills, and the Brand Guide ties everything together.</p>
      </Prose>

      {/* Diagram */}
      <div className="bg-[#1e1e1e] rounded-lg p-6 my-8 overflow-x-auto">
        <pre className="text-[#e0e0e0] text-[13px] max-sm:text-[11px] leading-[1.6] font-[family-name:var(--font-mono)] text-center">
{`                      Brand Guide
                          |
    ┌──────────┬──────────┬──────────┬──────────┬──────────┐
    |          |          |          |          |          |
  Email    Copywriting  Ads      Social    Launch      PDP
    |          |          |          |          |          |
    └──────────┴──────────┴────┬─────┴──────────┴──────────┘
                               |
                    Buyer Psychology
               (enhances all of the above)
                               |
               ┌───────────────┼───────────────┐
               |               |               |
            Pricing          CFO          Analytics
               |               |               |
               └───────┬───────┘               |
                       |                       |
                 VC Evaluation          Competitor Intel`}
        </pre>
      </div>

      <Prose>
        <p>The Brand Guide feeds context to every skill. Buyer Psychology enhances every customer-facing skill. The financial skills (CFO, Pricing) inform the marketing skills. And Analytics measures the impact of everything.</p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Cross-Skill Connections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 not-prose">
          {[
            "Pricing + CFO → Set prices based on real margin data",
            "Pricing + Buyer Psychology → Use anchoring and the decoy effect",
            "Pricing + Competitor Intel → Position pricing against competitors",
            "Email + Launch → Powers the 8-email launch sequence",
            "Email + Buyer Psychology → Loss aversion and reciprocity in emails",
            "PDP + Buyer Psychology → Layer 5-10 principles on product pages",
            "PDP + Copywriting → Answer the 5 buyer questions",
            "Paid Ads + Analytics → Measure performance, allocate budget on data",
            "Paid Ads + Competitor Intel → Analyze competitor ads first",
            "CFO + VC → Prepare financial data for investors",
            "Launch + Social Content → Plan social around product launches",
            "Launch + Popup → Capture waitlist signups with launch popups",
          ].map((c) => (
            <div key={c} className="flex gap-3 items-start py-2">
              <span className="text-[#d97757] mt-0.5 shrink-0">→</span>
              <p className="text-[#666] text-[15px] leading-[1.4] tracking-[-0.3px]">{c}</p>
            </div>
          ))}
        </div>
      </Prose>
    </section>
  );
}

/* ─── Workflows ─── */
function WorkflowsSection() {
  return (
    <section id="workflows" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>Playbooks</SectionLabel>
      <SectionHeading>Workflows for Common Scenarios</SectionHeading>
      <Prose>
        <p className="mb-8">Not sure where to start? Pick the scenario closest to your situation and follow the workflow.</p>
      </Prose>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {WORKFLOWS.map((wf) => (
          <div key={wf.title} className="bg-[#faf9f6] border border-[#c8bfb3] rounded-lg p-6">
            <h4 className="text-[#303030] text-[17px] font-medium tracking-[-0.34px] mb-5 leading-[1.3]">
              &ldquo;{wf.title}&rdquo;
            </h4>
            <div className="space-y-3">
              {wf.steps.map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 w-[24px] h-[24px] rounded-full bg-[#f8f2e9] flex items-center justify-center text-[#d97757] text-[12px] font-[family-name:var(--font-mono)] font-medium">
                    {i + 1}
                  </span>
                  <div>
                    <SkillBadge>{step.skill}</SkillBadge>
                    <p className="text-[#666] text-[14px] leading-[1.5] tracking-[-0.28px] mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Tips ─── */
function TipsSection() {
  return (
    <section id="tips" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>Get More Out Of Your Team</SectionLabel>
      <SectionHeading>Tips for Getting the Most Out of Your Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {TIPS.map((tip, i) => (
          <div key={tip.title} className="bg-[#faf9f6] border border-[#c8bfb3] rounded-lg p-6 flex gap-4">
            <span className="shrink-0 text-[#d97757] text-[32px] font-[family-name:var(--font-serif)] italic leading-none mt-0.5">
              {i + 1}
            </span>
            <div>
              <h4 className="text-[#303030] text-[17px] font-medium tracking-[-0.34px] mb-2 leading-[1.3]">
                {tip.title}
              </h4>
              <p className="text-[#666] text-[15px] leading-[1.6] tracking-[-0.3px]">{tip.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CLI / Data Tools ─── */
function DataToolsSection() {
  return (
    <section id="data-tools" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>Live Data</SectionLabel>
      <SectionHeading>Connecting Your Data with CLI Tools</SectionHeading>
      <Prose>
        <p>Skills give Claude the expertise. CLI tools give Claude the data. Together, you get an analyst who knows eCommerce strategy AND has access to your live numbers.</p>
        <Callout>
          The <code className="font-[family-name:var(--font-mono)] text-[#d97757]">tools/clis/</code> directory contains 7 standalone Node.js scripts that give Claude direct API access to your marketing stack. No <code className="font-[family-name:var(--font-mono)]">npm install</code> required — just Node 18+ and your API keys.
        </Callout>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">How it works</h3>
        <div className="space-y-3 not-prose mb-8">
          {[
            "You set API keys as environment variables in your shell profile",
            "Claude runs the CLI tools during conversations to pull live data",
            "Claude combines the data with the relevant skill's frameworks to give you analysis rooted in your actual numbers",
          ].map((step, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="shrink-0 w-[24px] h-[24px] rounded-full bg-[#f8f2e9] flex items-center justify-center text-[#d97757] text-[12px] font-[family-name:var(--font-mono)] font-medium">
                {i + 1}
              </span>
              <p className="text-[#666] text-[15px] leading-[1.5] tracking-[-0.3px]">{step}</p>
            </div>
          ))}
        </div>
      </Prose>

      {/* Platform cards */}
      <div className="space-y-8 mt-8">
        {CLI_PLATFORMS.map((platform) => (
          <div key={platform.name} className="border-t border-[#c8bfb3] pt-8">
            <div className="flex items-center gap-3 mb-4">
              {platform.icon ? (
                <div className="w-[40px] h-[40px] bg-[#faf9f6] border border-[#c8bfb3] rounded-[5px] flex items-center justify-center shrink-0">
                  <Image src={platform.icon} alt="" width={platform.iconW} height={platform.iconH} />
                </div>
              ) : (
                <div className="w-[40px] h-[40px] bg-[#faf9f6] border border-[#c8bfb3] rounded-[5px] flex items-center justify-center shrink-0">
                  <span className="text-[#d97757] text-[14px] font-[family-name:var(--font-mono)] font-medium">
                    {platform.name.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <h4 className="text-[#303030] text-[20px] tracking-[-0.4px] font-medium">{platform.name}</h4>
                <p className="text-[#666] text-[14px] tracking-[-0.28px]">{platform.desc}</p>
              </div>
            </div>

            <CodeBlock label="Environment Variables">{platform.envVars}</CodeBlock>
            <CodeBlock label="Test Command">{platform.test}</CodeBlock>

            <div className="mt-4">
              <p className="text-[#303030] text-[13px] font-[family-name:var(--font-heading)] font-semibold uppercase tracking-wider mb-2">
                Example prompts
              </p>
              <div className="space-y-2">
                {platform.prompts.map((p) => (
                  <PromptExample key={p}>{p}</PromptExample>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security notes */}
      <Callout>
        <strong>Security:</strong> All API keys live in environment variables — never hardcoded, never committed to repos. Use <code className="font-[family-name:var(--font-mono)]">--dry-run</code> on any CLI command to preview the API request without sending it. All CLIs are read-heavy by design — write operations require explicit flags.
      </Callout>
    </section>
  );
}

/* ─── FAQ ─── */
function GuideFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>Common Questions</SectionLabel>
      <SectionHeading>FAQ</SectionHeading>

      <div className="space-y-3">
        {GUIDE_FAQS.map((faq, i) => (
          <FAQItem
            key={faq.q}
            q={faq.q}
            a={faq.a}
            isOpen={openIdx === i}
            toggle={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── Lessons Learned ─── */
function LessonsLearned() {
  return (
    <section id="lessons-learned" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>Behind the Scenes</SectionLabel>
      <SectionHeading>What We Learned Building These Skills</SectionHeading>
      <Prose>
        <p>We built 14 skills and iterated on them extensively. Here&apos;s what we learned about making AI skills that actually produce expert-level output.</p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Lean skill files, reference files for depth</h3>
        <p>
          The main SKILL.md should stay between 250-400 lines. It contains the role description, context-gathering questions, core frameworks, and output formats. Detailed data — full email sequences, platform playbooks, benchmark tables — goes into separate <code className="font-[family-name:var(--font-mono)] bg-[#f0eee5] px-1.5 py-0.5 rounded text-[15px]">references/*.md</code> files.
        </p>
        <p>When skills are too long, Claude produces massive responses because it feels obligated to touch on everything it read. Splitting into a lean skill + reference files solved this.</p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">The brand guide as dependency injection</h3>
        <p>
          Instead of every skill asking the same 20 foundational questions, one skill (the Brand Guide) creates a shared context file that all others read automatically. This was the single most impactful architectural decision.
        </p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Behavioral instructions shape output quality</h3>
        <Callout>
          Adding a sentence like &ldquo;Respond in focused stages. Start by asking the context questions, then give targeted advice. Don&apos;t produce a full plan unless explicitly asked&rdquo; dramatically changes how Claude responds. Skills aren&apos;t just knowledge repositories — they&apos;re behavioral instructions.
        </Callout>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Context-gathering questions are the highest-leverage content</h3>
        <p>
          The numbered question lists at the start of each skill are what make responses specific rather than generic. If you&apos;re building a skill and can only write one section well, write the context-gathering questions. Everything else follows from having the right context.
        </p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Specificity beats comprehensiveness</h3>
        <p>
          A skill with 10 deeply-applied principles beats one with 30 principles that get surface-level treatment. Cut anything that doesn&apos;t directly improve the output. If you&apos;re not sure whether to include something, leave it out.
        </p>
      </Prose>
    </section>
  );
}

/* ─── Build Your Own ─── */
function BuildYourOwn() {
  return (
    <section id="build-your-own" className="scroll-mt-[120px] mt-[80px]">
      <SectionLabel>Go Further</SectionLabel>
      <SectionHeading>Building Your Own Claude Code Skills</SectionHeading>
      <Prose>
        <p>Want to build skills for your own domain? Here&apos;s the anatomy of a skill:</p>

        <CodeBlock label="Skill Structure">{`---
name: your-skill-name
description: A clear description of what this skill does
---

# Skill Title

[Role description — who Claude becomes when using this skill]

## Context Section
[Questions to gather before giving advice]

## Core Frameworks
[The mental models, frameworks, and structured knowledge]

## Output Formats
[Templates for deliverables — keep these minimal]

## Questions to Ask
[Fallback questions if context is missing]`}</CodeBlock>

        <p>
          The YAML frontmatter (<code className="font-[family-name:var(--font-mono)] bg-[#f0eee5] px-1.5 py-0.5 rounded text-[15px]">name</code> and <code className="font-[family-name:var(--font-mono)] bg-[#f0eee5] px-1.5 py-0.5 rounded text-[15px]">description</code>) is required — Claude Code uses it to detect and select skills. Everything else is markdown.
        </p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Start with the role description</h3>
        <p>
          The opening paragraph is the most important part. It defines Claude&apos;s persona, expertise, and approach. Be specific:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 not-prose">
          <div className="bg-[#faf9f6] border border-[#c8bfb3] rounded-lg p-5">
            <p className="text-[#d97757] text-[12px] font-[family-name:var(--font-heading)] font-semibold uppercase tracking-wider mb-3">Good</p>
            <p className="text-[#666] text-[14px] leading-[1.6] font-[family-name:var(--font-mono)]">&ldquo;You are a fractional CFO who specializes in eCommerce and DTC businesses. You think in contribution margins, cash conversion cycles, and unit economics.&rdquo;</p>
          </div>
          <div className="bg-[#f7f7f7] border border-[#dedede] rounded-lg p-5">
            <p className="text-[#999] text-[12px] font-[family-name:var(--font-heading)] font-semibold uppercase tracking-wider mb-3">Generic</p>
            <p className="text-[#999] text-[14px] leading-[1.6] font-[family-name:var(--font-mono)]">&ldquo;You help with finances and business analysis.&rdquo;</p>
          </div>
        </div>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Write the questions first</h3>
        <p>
          Before writing frameworks, write the context-gathering questions. Think about what a real expert would ask in their first meeting with a client. A pricing consultant doesn&apos;t start with pricing theory — they ask what you sell, what your margins are, who your competitors are.
        </p>

        <h3 className="text-[#303030] text-[22px] tracking-[-0.44px] font-medium mt-8 mb-4">Test and iterate</h3>
        <p>Use the skill 5-10 times with different prompts and watch for these signals:</p>
        <ul className="list-none space-y-2 pl-0 mt-4">
          {[
            "Generic responses → Add more context-gathering questions",
            "Overly long responses → Move detail to reference files",
            "Missing advice → Add the missing framework or principle",
            "Wrong tone → Adjust the role description and behavioral instructions",
          ].map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="text-[#d97757] mt-0.5 shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Prose>
    </section>
  );
}

/* ─── Footer ─── */
function GuideFooter() {
  return (
    <footer className="mt-[80px] border-t border-[rgba(115,114,108,0.2)]">
      <div className="max-w-[820px] mx-auto px-6 py-[40px]">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4">
          <a href="/">
            <Image src="/assets/storefront-skills-logo.svg" alt="Storefront Skills" width={150} height={20} />
          </a>
          <p className="text-[#9c9a92] text-[14px] leading-[1.2] tracking-[-0.28px]">
            &copy; 2026 Storefront Skills. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE COMPOSITION
   ════════════════════════════════════════════════════════════ */

const GUIDE_PASSWORD = "Storefront2026!";
const STORAGE_KEY = "guide-unlocked";

function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "true") setUnlocked(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === GUIDE_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (checking) return null;

  if (unlocked) return <>{children}</>;

  return (
    <main className="min-h-screen bg-[#f9f5f2] flex items-center justify-center px-6">
      <div className="max-w-[420px] w-full text-center">
        <a href="/" className="inline-block mb-10">
          <Image src="/assets/storefront-skills-logo.svg" alt="Storefront Skills" width={175} height={24} />
        </a>
        <h1 className="font-[family-name:var(--font-serif)] italic text-[#303030] text-[32px] leading-[1.2] tracking-[-1.28px] mb-3">
          Welcome to the Guide
        </h1>
        <p className="text-[#666] text-[17px] leading-[1.4] tracking-[-0.34px] mb-8">
          Enter your password to access the guide.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            className={`w-full px-5 py-4 rounded-lg border text-[16px] tracking-[-0.32px] bg-[#faf9f6] outline-none transition-colors placeholder:text-[#b8b4ae] ${
              error
                ? "border-[#d97757] focus:border-[#d97757]"
                : "border-[#c8bfb3] focus:border-[#303030]"
            }`}
            autoFocus
          />
          {error && (
            <p className="text-[#d97757] text-[14px] tracking-[-0.28px]">
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#171717] text-[#f9f5f2] rounded-[30px] py-[14px] font-[family-name:var(--font-heading)] font-medium text-[16px] tracking-[-0.32px] hover:bg-[#333] transition-colors cursor-pointer"
          >
            Access Guide
          </button>
        </form>
      </div>
    </main>
  );
}

function GuideContent() {
  const [activeSection, setActiveSection] = useState("what-are-skills");
  const [tocOpen, setTocOpen] = useState(false);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#f9f5f2] overflow-x-hidden">
      <GuideNav />
      <GuideHero />

      <div className="max-w-[1440px] mx-auto px-[120px] max-lg:px-8 max-sm:px-4 pb-[80px]">
        <div className="flex gap-[60px] max-lg:gap-0">
          {/* Sidebar — desktop only */}
          <aside className="w-[220px] shrink-0 max-lg:hidden">
            <div className="sticky top-[110px]">
              <TableOfContents activeSection={activeSection} />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-[820px]">
            <WhatAreSkills />
            <WhyTheseSkills />
            <HowToInstall />
            <BrandGuideSection />
            <SkillsSection />
            <WorkTogetherSection />
            <WorkflowsSection />
            <TipsSection />
            <DataToolsSection />
            <GuideFAQ />
            <LessonsLearned />
            <BuildYourOwn />
          </div>
        </div>
      </div>

      {/* Mobile TOC button */}
      <button
        onClick={() => setTocOpen(true)}
        className="fixed bottom-6 right-6 z-40 lg:hidden w-[48px] h-[48px] bg-[#171717] text-[#f9f5f2] rounded-full shadow-lg flex items-center justify-center hover:bg-[#333] transition-colors cursor-pointer"
        aria-label="Table of contents"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Mobile TOC overlay */}
      {tocOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setTocOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-[#faf9f6] rounded-t-2xl p-6 pb-10 max-h-[70vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <p className="text-[#303030] text-[17px] font-medium tracking-[-0.34px]">On this page</p>
              <button
                onClick={() => setTocOpen(false)}
                className="text-[#666] hover:text-[#303030] transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <TableOfContents activeSection={activeSection} onClose={() => setTocOpen(false)} />
          </div>
        </div>
      )}

      <GuideFooter />
    </main>
  );
}

export default function GuidePage() {
  return (
    <PasswordGate>
      <GuideContent />
    </PasswordGate>
  );
}
