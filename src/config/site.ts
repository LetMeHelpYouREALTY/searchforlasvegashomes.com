/** Single source of truth for NAP and brand — keep in sync with GBP and JSON-LD. */

export const SITE_NAME = "Search for Las Vegas Homes";
export const SITE_NAME_DOMAIN = "SearchForLasVegasHomes.com";
export const SITE_URL = "https://www.searchforlasvegashomes.com";
export const SITE_HOST = "searchforlasvegashomes.com";

export const AGENT_NAME = "Dr. Jan Duffy";
export const AGENT_TITLE = "REALTOR®";
export const AGENT_LICENSE = "S.0197614.LLC";
export const BROKERAGE = "Berkshire Hathaway HomeServices Nevada Properties";
export const AGENT_BYLINE = "Dr. Jan Duffy, REALTOR® · In real estate since 1983";
export const AGENT_LICENSE_LINE =
  "Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC";

/** Client-facing CTA phone (GBP-aligned). Do not swap without approval. */
export const PHONE_DISPLAY = "(702) 222-1964";
export const PHONE_E164 = "+17022221964";
export const PHONE_HREF = "tel:+17022221964";

export const EMAIL = "drjan@searchforlasvegashomes.com";
export const EMAIL_HREF = "mailto:drjan@searchforlasvegashomes.com";

export const STREET_ADDRESS = "1980 Festival Plaza Drive, Suite 300";
export const ADDRESS_LOCALITY = "Las Vegas";
export const ADDRESS_REGION = "NV";
export const POSTAL_CODE = "89135";
export const ADDRESS_COUNTRY = "US";
export const ADDRESS_LINE = `${STREET_ADDRESS}, ${ADDRESS_LOCALITY}, ${ADDRESS_REGION} ${POSTAL_CODE}`;
export const ADDRESS_NEIGHBORHOOD = "Downtown Summerlin";

export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;
export const GBP_REVIEWS_URL =
  "https://www.google.com/search?q=Dr.+Jan+Duffy+Berkshire+Hathaway+Las+Vegas+reviews";

export const BUSINESS_HOURS = [
  { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
  { days: "Saturday – Sunday", hours: "By appointment" },
] as const;

export const OPENING_HOURS_SPEC = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
] as const;

export const REALSCOUT_AGENT_ENCODED_ID = "QWdlbnQtMjI1MDUw";
export const REALSCOUT_SCRIPT_URL =
  "https://em.realscout.com/widgets/realscout-web-components.umd.js";
export const REALSCOUT_HOME_SEARCH_URL =
  "https://drjanduffy.realscout.com/homesearch";

export const SERVICE_AREAS = [
  "Las Vegas",
  "Summerlin",
  "Henderson",
  "Spring Valley",
  "Northwest Las Vegas",
  "Green Valley",
  "The Lakes",
  "Southern Highlands",
] as const;
