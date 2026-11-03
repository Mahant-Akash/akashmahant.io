import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const tools = [
  { id: "excel",        description: "Microsoft Excel",         image: "/microsoft-excel.svg" },
  { id: "powerpoint",   description: "Microsoft PowerPoint",    image: "/microsoft-powerpoint.svg" },
  { id: "powerbi",      description: "Microsoft Power BI",      image: "/Microsoft_Power_BI.svg" },
  { id: "powerautomate",description: "Microsoft Power Automate",image: "/Microsoft_Power_Automate.svg" },
  { id: "python",       description: "Python",                  image: "/python.svg" },
  { id: "github",       description: "GitHub",                  image: "/github.svg" },
  { id: "vscode",       description: "VS Code",                 image: "/vs-code.svg" },
  { id: "tableau",      description: "Tableau",                 image: "/tableau.svg" },
  { id: "sap",          description: "SAP",                     image: "/sap.svg" },
  { id: "oracle",       description: "Oracle",                  image: "/oracle.svg" },
  { id: "bc",           description: "Microsoft Business Central", image: "/Dynamics_365_Business_Central.svg" },
  { id: "claude",       description: "Claude Code",             image: "/claudecode.svg" },
  { id: "codex",        description: "Codex",                   image: "/codex.svg" },
  { id: "infor",        description: "Infor Lawson",            image: "/Infor_lawson.svg" },
];

export default function ToolsCarousel() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div id="tools" className="relative border-t border-border pb-14 pt-10">
      <div className="mx-auto mb-8 max-w-container-sm px-6 text-center">
        <p className="text-eyebrow text-muted-soft">
          Tools I use daily
        </p>
        <p className="text-body-md mx-auto mt-3 max-w-[520px] text-muted">
          The tools behind my day-to-day work — from month-end close to
          automated reporting.
        </p>
      </div>

      <div className="relative">
        <div className="mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true, speed: 20 }}
            plugins={
              prefersReducedMotion
                ? []
                : [
                    AutoScroll({
                      playOnInit: true,
                      stopOnInteraction: false,
                      stopDelay: 400,
                    }),
                  ]
            }
          >
            <CarouselContent className="-ml-2">
              {tools.map((tool) => (
                <CarouselItem
                  key={tool.id}
                  className="basis-1/3 pl-2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="flex items-center justify-center gap-2.5 px-2 py-6 opacity-75 transition-opacity duration-300 hover:opacity-100">
                    <img
                      src={tool.image}
                      alt={tool.description}
                      className="h-7 shrink-0 object-contain"
                    />
                    <span className="text-caption font-medium text-muted whitespace-nowrap">
                      {tool.description}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-canvas to-transparent" />
      </div>
    </div>
  );
}
