import type { FaqItem } from "@/lib/seo/jsonLd";
import { AGENT_NAME, PHONE_DISPLAY } from "@/config/site";

export type ToolPageConfig = {
  path: string;
  title: string;
  description: string;
  breadcrumbName: string;
  serviceName: string;
  faqs: FaqItem[];
};

export const TOOL_PAGES: Record<string, ToolPageConfig> = {
  "market-reports": {
    path: "/market-reports",
    title: "Las Vegas Market Analysis Reports | Dr. Jan Duffy",
    description: `Monthly Las Vegas real estate market reports from ${AGENT_NAME}. Pricing trends, inventory notes, and buyer guidance. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "Market Reports",
    serviceName: "Las Vegas Real Estate Market Reports",
    faqs: [
      {
        q: "What is in a Las Vegas market report from Dr. Jan Duffy?",
        a: "Median price direction, inventory pace, and neighborhood notes buyers use before writing offers.",
      },
      {
        q: "How often are market reports updated?",
        a: "Reports refresh on a weekly to monthly cadence as GLVAR data and closed sales settle.",
      },
      {
        q: "Can I get a report for my target zip code?",
        a: `Yes. Call ${PHONE_DISPLAY} with your zip codes and price band for a custom pull.`,
      },
    ],
  },
  "neighborhood-analysis": {
    path: "/neighborhood-analysis",
    title: "Las Vegas Neighborhood Analysis | Dr. Jan Duffy",
    description: `Compare Las Vegas neighborhoods with ${AGENT_NAME}: commute patterns, HOA norms, inventory, and pricing context. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "Neighborhood Analysis",
    serviceName: "Las Vegas Neighborhood Analysis",
    faqs: [
      {
        q: "Which Las Vegas neighborhoods does this analysis cover?",
        a: "Summerlin, Henderson, Spring Valley, Southern Highlands, The Lakes, Green Valley, and nearby Clark County areas.",
      },
      {
        q: "How should buyers use neighborhood analysis?",
        a: "Match commute, lot preference, and budget first, then open live MLS search for that map area.",
      },
      {
        q: "Can Dr. Jan Duffy tour multiple neighborhoods in one day?",
        a: `Yes. Call ${PHONE_DISPLAY} to build a tour route by price and drive time.`,
      },
    ],
  },
  "investment-calculator": {
    path: "/investment-calculator",
    title: "Las Vegas Real Estate Investment Calculator | Dr. Jan Duffy",
    description: `Model purchase price, carrying costs, and return scenarios for Las Vegas properties with ${AGENT_NAME}. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "Investment Calculator",
    serviceName: "Las Vegas Real Estate Investment Analysis",
    faqs: [
      {
        q: "What inputs matter most for a Las Vegas investment estimate?",
        a: "Purchase price, HOA dues, taxes, insurance, vacancy, and expected rent or appreciation—not headline averages alone.",
      },
      {
        q: "Does the calculator replace a lender pre-approval?",
        a: "No. It frames scenarios; financing terms come from your lender and underwriting.",
      },
      {
        q: "Who helps interpret the results for a specific address?",
        a: `${AGENT_NAME} at ${PHONE_DISPLAY} can walk comps and carrying costs for a candidate property.`,
      },
    ],
  },
  "price-trends": {
    path: "/price-trends",
    title: "Las Vegas Home Price Trends | Dr. Jan Duffy",
    description: `Track Las Vegas home price trends by area with ${AGENT_NAME}. Use trends to set offer strategy, not as a substitute for comps. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "Price Trends",
    serviceName: "Las Vegas Home Price Trend Analysis",
    faqs: [
      {
        q: "Are Las Vegas price trends the same citywide?",
        a: "No. Summerlin, Henderson, and inner-valley pockets can move at different paces—always pull local comps.",
      },
      {
        q: "How should buyers use price trend data?",
        a: "As context for offer strength and timing, then verify with solds on the specific street and property type.",
      },
      {
        q: "Where do I get current comps for a home I want?",
        a: `Call ${PHONE_DISPLAY} with the address for a comparative market review.`,
      },
    ],
  },
  "market-forecast": {
    path: "/market-forecast",
    title: "Las Vegas Real Estate Market Forecast | Dr. Jan Duffy",
    description: `Forward-looking Las Vegas housing notes from ${AGENT_NAME} based on inventory, rates, and closed sales—not guarantees. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "Market Forecast",
    serviceName: "Las Vegas Real Estate Market Forecast",
    faqs: [
      {
        q: "Is a market forecast a promise of future prices?",
        a: "No. Forecasts summarize current inventory and rate conditions; individual homes still trade on comps and condition.",
      },
      {
        q: "What should buyers watch in a Las Vegas forecast?",
        a: "Active inventory, days on market, and mortgage-rate direction relative to their budget.",
      },
      {
        q: "How do I apply a forecast to my home search?",
        a: `Call ${PHONE_DISPLAY} to translate the outlook into a price band and tour plan.`,
      },
    ],
  },
  "home-value-analyzer": {
    path: "/home-value-analyzer",
    title: "Las Vegas Home Value Analyzer | Dr. Jan Duffy",
    description: `Estimate Las Vegas home value ranges with ${AGENT_NAME} using comps, condition, and local inventory—not automated guesses alone. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "Home Value Analyzer",
    serviceName: "Las Vegas Home Valuation",
    faqs: [
      {
        q: "Is an online home value the same as an appraisal?",
        a: "No. Online ranges are starting points. Appraisals and listing prices need sold comps and property condition.",
      },
      {
        q: "What improves valuation accuracy in Las Vegas?",
        a: "Recent nearby solds, upgrades, pool/solar, HOA dues, and lot specifics for that subdivision.",
      },
      {
        q: "Can Dr. Jan Duffy review my address?",
        a: `Yes. Call ${PHONE_DISPLAY} with the property address for a market-based range.`,
      },
    ],
  },
  "california-comparison": {
    path: "/california-comparison",
    title: "California vs Nevada Home Cost Comparison | Dr. Jan Duffy",
    description: `Compare California and Las Vegas housing costs, taxes, and buying steps with ${AGENT_NAME} for relocating buyers. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "California Comparison",
    serviceName: "California to Las Vegas Relocation Real Estate Guidance",
    faqs: [
      {
        q: "Why do California buyers compare Las Vegas housing costs?",
        a: "Purchase price, property tax structure, and HOA norms often differ from coastal California markets.",
      },
      {
        q: "What should relocating buyers prepare before touring?",
        a: "Lender pre-approval, target neighborhoods, and a clear must-have list for climate and commute.",
      },
      {
        q: "Who helps California buyers purchase in Las Vegas?",
        a: `${AGENT_NAME} at ${PHONE_DISPLAY} coordinates search, offers, and closing logistics.`,
      },
    ],
  },
  "school-ratings-map": {
    path: "/school-ratings-map",
    title: "Las Vegas School Attendance Zones Map | Dr. Jan Duffy",
    description: `Review Las Vegas school attendance zones and published ratings while shopping homes with ${AGENT_NAME}. Verify boundaries before you offer. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "School Ratings Map",
    serviceName: "Las Vegas School Zone Home Search Guidance",
    faqs: [
      {
        q: "Are school ratings guaranteed for a specific address?",
        a: "No. Confirm current attendance boundaries with the school district before writing an offer.",
      },
      {
        q: "How should buyers use school maps in a home search?",
        a: "As one filter alongside commute, price, and property condition—not as the sole decision factor.",
      },
      {
        q: "Can you pull listings inside a chosen attendance zone?",
        a: `Yes. Call ${PHONE_DISPLAY} with the school name or zone and your price range.`,
      },
    ],
  },
  "appreciation-tracker": {
    path: "/appreciation-tracker",
    title: "Las Vegas Home Appreciation Tracker | Dr. Jan Duffy",
    description: `Review historical Las Vegas appreciation patterns by area with ${AGENT_NAME}. Past gains do not guarantee future results. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "Appreciation Tracker",
    serviceName: "Las Vegas Home Appreciation Analysis",
    faqs: [
      {
        q: "Does past appreciation predict future Las Vegas prices?",
        a: "No. Use history as context, then price any purchase off current comps and carrying costs.",
      },
      {
        q: "Which factors shape local appreciation?",
        a: "Supply, rates, employment, and neighborhood-level inventory—not a single metro average.",
      },
      {
        q: "How do I apply appreciation data to an offer?",
        a: `Call ${PHONE_DISPLAY} to review solds and days on market for the specific property.`,
      },
    ],
  },
  "weekly-market-insights": {
    path: "/blog/weekly-market-insights",
    title: "Weekly Las Vegas Market Insights | Dr. Jan Duffy",
    description: `Weekly Las Vegas real estate notes from ${AGENT_NAME}: inventory, pricing, and buyer tactics. Call ${PHONE_DISPLAY}.`,
    breadcrumbName: "Weekly Market Insights",
    serviceName: "Weekly Las Vegas Real Estate Insights",
    faqs: [
      {
        q: "What topics appear in weekly market insights?",
        a: "Inventory shifts, pricing pace, and practical buyer or seller moves for the Las Vegas Valley.",
      },
      {
        q: "Are weekly insights the same as a formal CMA?",
        a: "No. Insights are market commentary; a CMA is property-specific and uses nearby solds.",
      },
      {
        q: "How do I get insights applied to my search?",
        a: `Call ${PHONE_DISPLAY} to turn the weekly read into a live listing shortlist.`,
      },
    ],
  },
};
