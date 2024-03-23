import PageWrapper from "../../../../components/PageWrapper";
import { useTranslations } from "next-intl";

const categories = {
  pipe: {
    title: "Pipes - Profile Group",
    products: [
      { title: "Water and Gas Pipes" },
      { title: "Natural Gas and Oil Line Pipes" },
      { title: "Industrial Pipes" },
      { title: "Scaffold Pipes" },
      { title: "Boiler Pipes" },
      { title: "Casing, Drilling, and Tool Pipes" },
      { title: "Galvanized Pipes" },
      { title: "Threaded Pipes" },
      { title: "Heat Treated and Hot Finished Pipes" },
      { title: "Anticorrosive Painted Pipes" },
      { title: "Polyethylene and Polypropylene Coated Pipes" },
      { title: "Rolled Profile and Angle Group" },
      { title: "Box Profiles" },
      { title: "Special Section Profiles" },
      { title: "Heat Treated and Hot Finished Box Profiles" },
      { title: "Galvanized Box Profiles" },
      { title: "Anticorrosive Painted Box Profiles" },
    ],
  },
  sheet: {
    title: "Sheet Group",
    products: [
      {
        title: "S235JR - S235J2 - S235J2+N - S235JRC - S235J2C Quality Sheets",
      },
      {
        title: "S275JR - S275J2 - S275JRC - S275J0 - S275J2(+N) Quality Sheets",
      },
      {
        title: "S355J0 - S355J2C - S355J2W - S355 - S355J2(+N) Quality Sheets",
      },
      { title: "DKP Sheet" },
      { title: "Trapezoidal Sheet" },
      { title: "Galvanized Sheet" },
      { title: "Embossed Sheet" },
      { title: "Pressed Sheet" },
      { title: "Expanded Metal" },
      { title: "Blade Scraping and Round Iron" },
      { title: "Rolled Profile and Angle Group" },
    ],
  },
  valve: {
    title: "Fire and Valve Group",
    products: [
      { title: "Valve Group" },
      { title: "Check Valve Group" },
      { title: "Fire Group" },
      { title: "Flange Group" },
    ],
  },
  prefabric: {
    title: "Prefabricated Buildings",
    products: [{ title: "Prefabricated Office Buildings" }],
  },
  construction: {
    title: "Building Materials Group",
    products: [
      { title: "Abrasive Group" },
      { title: "Welding Machines and Equipment" },
      { title: "Hardware" },
      { title: "Hydraulic and Pneumatic Materials" },
      { title: "Hand Tools" },
      { title: "Industrial Adhesive and Epoxy Group" },
      { title: "Cutting Tools" },
      { title: "Construction Group" },
      { title: "Screws and Anchors" },
      { title: "Plumbing Group" },
      { title: "Bearing and Belt Group" },
      { title: "Electric Hand Tools" },
      { title: "Fire Foams" },
      { title: "Plaster Meshes" },
      { title: "Suspended Ceiling Systems" },
    ],
  },
};
export default function Page({ params }) {
  const t = useTranslations("Index");

  return (
    <PageWrapper>
      <div className="min-h-[500px] justify-center text-white">
        <h1 className="text-2xl uppercase md:text-3xl lg:text-5xl text-center my-4 font-bold mb-8">
          {t(categories[params.slug].title)}
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center text-center">
          {categories[params.slug].products.map((product, index) => (
            <div
              key={index}
              className="flex uppercase bg-gray-800 font-allura p-4 rounded-md text-center hover:bg-gray-700 transition-all justify-center items-center"
            >
              {t(product.title)}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
