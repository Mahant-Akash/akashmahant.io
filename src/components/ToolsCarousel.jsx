import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const tools = [
  { id: "excel",        description: "Microsoft Excel",         image: "/personal-portfolio/microsoft-excel.svg" },
  { id: "powerpoint",   description: "Microsoft PowerPoint",    image: "/personal-portfolio/microsoft-powerpoint.svg" },
  { id: "powerbi",      description: "Microsoft Power BI",      image: "/personal-portfolio/Microsoft_Power_BI.svg" },
  { id: "powerautomate",description: "Microsoft Power Automate",image: "/personal-portfolio/Microsoft_Power_Automate.svg" },
  { id: "python",       description: "Python",                  image: "/personal-portfolio/python.svg" },
  { id: "github",       description: "GitHub",                  image: "/personal-portfolio/github.svg" },
  { id: "tableau",      description: "Tableau",                 image: "/personal-portfolio/tableau.svg" },
  { id: "sap",          description: "SAP",                     image: "/personal-portfolio/sap.svg" },
  { id: "oracle",       description: "Oracle",                  image: "/personal-portfolio/oracle.svg" },
  { id: "bc",           description: "Microsoft Business Central", image: "/personal-portfolio/Dynamics_365_Business_Central.svg" },
  { id: "claude",       description: "Claude Code",             image: "/personal-portfolio/claudecode.svg" },
  { id: "codex",        description: "Codex",                   image: "/personal-portfolio/codex.svg" },
  { id: "infor",        description: "Infor Lawson",            image: "/personal-portfolio/Infor_lawson.svg" },
];

export default function ToolsCarousel() {
  return (
    <section
      id="tools"
      className="py-section bg-bg px-8"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="mx-auto max-w-[960px] text-center">
        <h2
          className="mb-16 text-display-md text-text"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          Tools I Use to Build and Automate
        </h2>
      </div>

      <div className="relative">
        <div className="mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true, speed: 20 }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                stopDelay: 400,
              }),
            ]}
          >
            <CarouselContent className="-ml-2">
              {tools.map((tool) => (
                <CarouselItem
                  key={tool.id}
                  className="basis-1/3 pl-2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="flex shrink-0 flex-col items-center justify-center gap-3 py-8 px-2">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={tool.image}
                          alt={tool.description}
                          className="h-7 shrink-0 object-contain"
                        />
                        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                          {tool.description}
                        </span>
                      </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-bg to-transparent" />
      </div>
    </section>
  );
}
