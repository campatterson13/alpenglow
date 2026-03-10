export type ServiceSlug =
  | "community-sessions"
  | "private-group-sessions"
  | "mobile-sauna-experiences"
  | "events-partnerships";

export type Service = {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  cardSubhead: string;
  cardDescription: string;
  cardCtaLabel: string;
  intro: string;
  bestFor: string[];
  experience: string[];
  logistics: string[];
  closingTitle: string;
  closingDescription: string;
  finalCtaLabel: string;
  finalCtaHref: "/book" | "/contact";
  metadataDescription: string;
};

export const services: Service[] = [
  {
    slug: "community-sessions",
    eyebrow: "Community Ritual",
    title: "Community Sauna & Cold Plunge Sessions",
    cardSubhead: "Shared reset",
    cardDescription:
      "Step into a guided communal contrast session built for steady heat, invigorating cold, and easy connection.",
    cardCtaLabel: "Explore Community Sessions",
    intro:
      "Community sessions are Alpenglow's open-format reset: wood-fired heat, cold plunge recovery, and a welcoming rhythm that lets you settle in without coordinating a private booking.",
    bestFor: [
      "Solo guests who want a structured way to start or end the week.",
      "Friends looking for a lower-commitment group experience.",
      "Anyone curious about contrast therapy in a supportive setting.",
    ],
    experience: [
      "Each session is designed to move between warming rounds, cold immersion, and enough unhurried space to let your body recalibrate.",
      "The tone stays social but grounded, with room for conversation, quiet recovery, and a slower pace than a standard workout or spa visit.",
    ],
    logistics: [
      "Offered as scheduled public sessions with shared access to the sauna and plunge setup.",
      "Best suited for guests who want the experience without planning the details themselves.",
      "Booking interest routes through the existing booking page while launch scheduling is finalized.",
    ],
    closingTitle: "Join the communal reset",
    closingDescription:
      "If you're looking for a lower-friction way into the Alpenglow experience, community sessions are the easiest place to begin.",
    finalCtaLabel: "Book Community Sessions",
    finalCtaHref: "/book",
    metadataDescription:
      "Explore Alpenglow's community sauna and cold plunge sessions for a shared Colorado contrast-therapy reset.",
  },
  {
    slug: "private-group-sessions",
    eyebrow: "Private Gatherings",
    title: "Private Group Sauna Sessions",
    cardSubhead: "Gather with intention",
    cardDescription:
      "Reserve the experience for your own group and turn a sauna session into a celebration, retreat, or recovery ritual.",
    cardCtaLabel: "Plan a Private Group",
    intro:
      "Private group sessions give your circle dedicated time with Alpenglow's sauna and cold plunge experience, shaped around conversation, recovery, and shared presence.",
    bestFor: [
      "Birthday gatherings, bachelor or bachelorette weekends, and small celebrations.",
      "Teams, friend groups, or retreat hosts who want a private wellness activity.",
      "Guests who want more privacy and control over the pace of the session.",
    ],
    experience: [
      "Private sessions keep the same contrast-therapy backbone while giving your group room to set the tone, whether that's calm and restorative or more social and lively.",
      "The format works well for groups that want memorable time together without a packed itinerary or a high-pressure activity.",
    ],
    logistics: [
      "Built for group reservations with timing arranged around your party.",
      "Ideal when you want the experience centered on your own guests instead of a shared public session.",
      "The booking page remains the next step for gathering availability and launch details.",
    ],
    closingTitle: "Make the session your own",
    closingDescription:
      "For groups that want privacy, intention, and a more customized rhythm, private sessions offer the clearest fit.",
    finalCtaLabel: "Book a Private Group Session",
    finalCtaHref: "/book",
    metadataDescription:
      "Learn about Alpenglow's private group sauna sessions for celebrations, retreats, and intimate Colorado gatherings.",
  },
  {
    slug: "mobile-sauna-experiences",
    eyebrow: "On-Site Experiences",
    title: "Mobile Sauna Experiences",
    cardSubhead: "Bring the contrast experience to your setting",
    cardDescription:
      "Bring Alpenglow to your property, retreat, or gathering with a mobile setup designed for longer stays and on-site hospitality.",
    cardCtaLabel: "See Mobile Experiences",
    intro:
      "Mobile sauna experiences bring Alpenglow's wood-fired contrast ritual to your location, making it easier to host a restorative moment without asking guests to travel elsewhere.",
    bestFor: [
      "Retreat hosts who want a signature wellness element on site.",
      "Private properties and multi-day gatherings with space for a mobile setup.",
      "Groups looking for a more immersive sauna experience over a longer window.",
    ],
    experience: [
      "This format is designed for guests who want the atmosphere and benefits of contrast therapy woven directly into their own event or environment.",
      "It creates a stronger sense of retreat because the sauna experience becomes part of the setting rather than a separate stop on the schedule.",
    ],
    logistics: [
      "Delivered experiences depend on location, access, scheduling, and partnership fit.",
      "Planning starts with a direct conversation so Alpenglow can confirm setup needs and the shape of the event.",
      "Contact is the right next step for discussing site details, timing, and availability.",
    ],
    closingTitle: "Host Alpenglow on your own ground",
    closingDescription:
      "If you want the sauna experience integrated into your location, a direct inquiry is the best way to shape the details.",
    finalCtaLabel: "Inquire About a Mobile Experience",
    finalCtaHref: "/contact",
    metadataDescription:
      "Discover Alpenglow's mobile sauna experiences for retreats, private properties, and on-site contrast therapy in Colorado.",
  },
  {
    slug: "events-partnerships",
    eyebrow: "Collaborations",
    title: "Events & Partnerships",
    cardSubhead: "Programming for gatherings and collaborators",
    cardDescription:
      "Work with Alpenglow on branded events, community activations, and local partnerships that center the sauna experience.",
    cardCtaLabel: "Partner With Alpenglow",
    intro:
      "Alpenglow partners with local businesses, event organizers, and community-minded brands to create sauna experiences that feel thoughtful, distinctive, and rooted in place.",
    bestFor: [
      "Breweries, hospitality groups, and venues looking for experiential programming.",
      "Brands and organizers planning wellness-forward activations or seasonal events.",
      "Partners who want a memorable offering that encourages people to linger and connect.",
    ],
    experience: [
      "Partnerships are shaped around audience, venue, and event goals, with the sauna experience acting as both an anchor and a conversation starter.",
      "The strongest collaborations feel additive to the host's identity instead of bolted on, which is why planning starts with the broader event context.",
    ],
    logistics: [
      "Scope depends on audience size, venue conditions, timeline, and the kind of programming you want to create.",
      "Early outreach is helpful for shared planning, operational fit, and aligning the guest experience with the host environment.",
      "The contact page is the right entry point for partnership conversations and event inquiries.",
    ],
    closingTitle: "Build a memorable collaboration",
    closingDescription:
      "If you have a venue, audience, or idea that could benefit from an Alpenglow activation, start the conversation directly.",
    finalCtaLabel: "Start a Partnership Conversation",
    finalCtaHref: "/contact",
    metadataDescription:
      "See how Alpenglow supports Colorado events and partnerships with branded sauna experiences and community activations.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
