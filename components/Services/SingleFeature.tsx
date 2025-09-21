import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, path } = feature;
  return (
    <Link
      href={path}
      className="group w-full transition-all hover:cursor-pointer"
    >
      <div className="wow fadeInUp h-full bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 dark:border-slate-700 hover:border-primary/20" data-wow-delay=".15s">
        <div className="mb-8 flex h-[80px] w-[80px] items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white transition-all group-hover:text-primary group-hover:underline">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {paragraph}
        </p>
        <div className="mt-6 flex items-center text-primary font-medium group-hover:underline">
          Learn more
          <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default SingleFeature;