import kitchen from "@/assets/kitchen.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import living from "@/assets/living.jpg";
import bedroom from "@/assets/bedroom.jpg";
import utility from "@/assets/utility.jpg";
import completeHome from "@/assets/complete-home.jpg";

export type Offering = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string[];
  image: string;
  gallery: string[];
  features: { title: string; text: string }[];
  includes: string[];
};

export const offerings: Offering[] = [
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    tagline: "The quiet heart of the home",
    summary: "Handleless cabinetry, honed stone and intelligent storage, tailored to how you cook.",
    description: [
      "Our kitchens are composed like architecture: clean planes, considered proportions and materials that age gracefully. Every module is measured to your space and your rituals — from the morning espresso to long evening dinners.",
      "We pair European hardware with natural stone, matte lacquers and oak veneers, then hide the complexity behind seamless fronts so the room stays calm.",
    ],
    image: kitchen,
    gallery: [kitchen, completeHome],
    features: [
      { title: "Bespoke layouts", text: "Island, parallel, L- or U-shaped plans drawn around your workflow." },
      { title: "Soft-close hardware", text: "Premium hinges, runners and lift systems rated for decades of use." },
      { title: "Stone surfaces", text: "Quartz, marble and sintered stone worktops with mitred edges." },
      { title: "Hidden storage", text: "Tall pantries, corner carousels and appliance garages." },
    ],
    includes: ["3D visualisation", "Material & finish curation", "Appliance integration", "Installation & handover"],
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    tagline: "Order, made beautiful",
    summary: "Walk-in and fitted wardrobes in oak, glass and leather with soft integrated light.",
    description: [
      "A wardrobe should feel like a private boutique. We design fitted and walk-in systems that give every garment its place, with proportions planned around what you own and how you dress.",
      "Smoked glass, warm LED profiles and tactile finishes turn daily routine into a small, quiet pleasure.",
    ],
    image: wardrobe,
    gallery: [wardrobe, bedroom],
    features: [
      { title: "Walk-in & fitted", text: "Floor-to-ceiling systems for any room size or ceiling height." },
      { title: "Integrated lighting", text: "Sensor-activated LED profiles that follow the doors." },
      { title: "Fine finishes", text: "Oak veneer, lacquer, fluted glass and leather-lined drawers." },
      { title: "Smart interiors", text: "Pull-down rails, valet hooks, jewellery trays and shoe racks." },
    ],
    includes: ["Wardrobe audit", "Interior layout planning", "Finish samples", "Installation"],
  },
  {
    slug: "living-rooms",
    title: "Living Rooms",
    tagline: "Spaces for slow living",
    summary: "Layered textures, sculptural furniture and calm light for gathering and rest.",
    description: [
      "We shape living rooms around conversation, light and the views you love. Furniture is chosen for comfort first, then edited until every piece earns its place.",
      "Limewash walls, wool rugs and natural timber create a room that feels warm in winter and airy in summer.",
    ],
    image: living,
    gallery: [living, completeHome],
    features: [
      { title: "Spatial planning", text: "Furniture layouts that balance flow, focus and conversation." },
      { title: "Custom joinery", text: "Media walls, shelving and window seats built to measure." },
      { title: "Lighting design", text: "Layered ambient, task and accent lighting with dimming scenes." },
      { title: "Art & styling", text: "Curated objects, textiles and artwork to finish the room." },
    ],
    includes: ["Mood board", "Furniture sourcing", "Joinery drawings", "Final styling"],
  },
  {
    slug: "bedrooms",
    title: "Bedrooms",
    tagline: "A sanctuary for rest",
    summary: "Soft palettes, natural linens and tailored storage for deep, restful calm.",
    description: [
      "The bedroom is the most personal room in the home. We design it to slow the pulse: muted tones, tactile fabrics and light you can soften with a touch.",
      "Upholstered headboards, bespoke side tables and hidden storage keep the room serene and uncluttered.",
    ],
    image: bedroom,
    gallery: [bedroom, wardrobe],
    features: [
      { title: "Bespoke beds", text: "Platform and upholstered beds with integrated headboard lighting." },
      { title: "Acoustic comfort", text: "Fabric panels, heavy drapery and rugs for a quieter room." },
      { title: "Natural materials", text: "Linen, wool, oak and plaster chosen for calm and longevity." },
      { title: "Blackout solutions", text: "Motorised curtains and sheers for perfect light control." },
    ],
    includes: ["Colour & material palette", "Bed & furniture design", "Soft furnishing", "Installation"],
  },
  {
    slug: "utility",
    title: "Utility",
    tagline: "Practical, never plain",
    summary: "Laundry and utility rooms designed with the same care as the rest of your home.",
    description: [
      "Utility spaces work the hardest, so we design them to make daily chores effortless. Appliances are stacked or integrated, with generous counters and storage for everything from linens to cleaning tools.",
      "Durable surfaces and easy-clean finishes keep the space beautiful for years.",
    ],
    image: utility,
    gallery: [utility, kitchen],
    features: [
      { title: "Integrated appliances", text: "Washer, dryer and sink built neatly into cabinetry." },
      { title: "Durable surfaces", text: "Water-resistant worktops and moisture-proof carcasses." },
      { title: "Clever storage", text: "Broom cupboards, pull-out baskets and drying rails." },
      { title: "Good ventilation", text: "Planned airflow and lighting for a fresh, bright room." },
    ],
    includes: ["Space planning", "Appliance coordination", "Plumbing guidance", "Installation"],
  },
  {
    slug: "complete-home-interiors",
    title: "Complete Home Interiors",
    tagline: "One vision, every room",
    summary: "End-to-end design and delivery for the entire home, from first sketch to final cushion.",
    description: [
      "For clients who want a single, coherent vision, we design and deliver the whole home. One team manages concept, drawings, procurement, craftsmen and styling, so every room speaks the same quiet language.",
      "You receive a dedicated design lead, a clear timeline and a home ready to live in on handover day.",
    ],
    image: completeHome,
    gallery: [completeHome, living],
    features: [
      { title: "Single point of contact", text: "A dedicated design lead from concept to handover." },
      { title: "Full project management", text: "Scheduling, site supervision and quality checks." },
      { title: "Cohesive design language", text: "Materials and details that flow from room to room." },
      { title: "Turnkey delivery", text: "Furniture, lighting, décor and styling — ready to move in." },
    ],
    includes: ["Concept & 3D design", "Civil & electrical planning", "Procurement", "Turnkey handover"],
  },
];

export function getOffering(slug: string) {
  return offerings.find((o) => o.slug === slug);
}
