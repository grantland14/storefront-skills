import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide — Storefront Skills",
  description:
    "The complete guide to installing and using your Storefront Skills — 14 AI team members trained for eCommerce.",
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
