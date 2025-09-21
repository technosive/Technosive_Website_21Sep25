import { Brand } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="py-24 md:py-20 lg:py-28" id="partnerships">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle 
              title="Our Partnerships" 
              paragraph="Trusted cybersecurity vendors and technology partners" 
              mb="2rem" 
              center 
            />
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-sm bg-gray-400 px-6 py-6 dark:bg-gray-dark sm:px-8 md:px-[40px] md:py-[30px] xl:p-[40px] 2xl:px-[60px] 2xl:py-[50px]"
              data-wow-delay=".1s"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <>
      <div className="mx-2 flex w-full max-w-[140px] items-center justify-center py-[12px] sm:mx-3 lg:max-w-[120px] xl:mx-4 xl:max-w-[160px] 2xl:mx-5 2xl:max-w-[160px]">
        <Link
          href={href}
          rel="nofollow noreferrer"
          className="relative h-8 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
          title={name}
        >
          <Image src={image} alt={name} fill unoptimized />
        </Link>
      </div>
    </>
  );
};
