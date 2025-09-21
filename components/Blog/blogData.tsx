import { Blog } from "@/types/blog";

//Blog Images
import blogImg3 from "../../public/images/blog/RAG/RAG.webp";
import blogImg1 from "../../public/images/blog/revolutionizing-healthcare/160.webp";
import blogImg2 from "../../public/images/blog/smart-building-monitoring/160.webp";
import blogImg4 from "../../public/images/blog/saudi-nca-ecc-compliance/banner.webp";

// Author Images
import blogAuthorImg2 from "../../public/images/blog/author-02.webp";
import blogAuthorImg3 from "../../public/images/blog/author-03.webp";
import blogAuthorImg1 from "../../public/images/blog/revolutionizing-healthcare/author.webp";
import blogAuthorImg4 from "../../public/images/blog/saudi-nca-ecc-compliance/author.webp";

const blogData: Blog[] = [
  {
    title: "Saudi NCA ECC Compliance: Essential Cybersecurity Framework for Organizations",
    path: "/blogs/saudi-nca-ecc-compliance",
    paragraph:
      "Comprehensive guide to Saudi Arabia's National Cybersecurity Authority Essential Cybersecurity Compliance (ECC) framework, requirements, and implementation strategies for organizations operating in the Kingdom.",
    image: blogImg4,
    author: {
      name: "Sarah Al-Rashid",
      image: blogAuthorImg4,
      designation: "Cybersecurity Consultant",
    },
    tags: ["Cybersecurity"],
    publishDate: "15/09/2024",
  },
  {
    title: "Enhancing Business Efficiency with Retrieval-Augmented Generation",
    path: "/blogs/retrieval-augmented-generation",
    paragraph:
      "In the realm of artificial intelligence, one innovative technology making waves in the business world is Retrieval-Augmented Generation (RAG). This cutting-edge approach bridges the gap between general question-answering",
    image: blogImg3,
    author: {
      name: "Alex Smith",
      image: blogAuthorImg3,
      designation: "Content Writer",
    },
    tags: ["IOT"],
    publishDate: "13/05/2024",
  },
  {
    title: "Smart Building Monitoring System, The Future of Smart Buildings",
    path: "/blogs/smart-building-monitoring",
    paragraph:
      "In the realm of technological progress, smart buildings stand out as beacons of innovation, promising enhanced efficiency and sustainability.",
    image: blogImg2,
    author: {
      name: "Musharof Chy",
      image: blogAuthorImg2,
      designation: "Content Writer",
    },
    tags: ["IOT"],
    publishDate: "15/02/2024",
  },
  {
    title: "Revolutionizing Healthcare: The Imperative of Smart Hospitals",
    path: "/blogs/revolutionizing-healthcare",
    paragraph:
      "In the dynamic realm of healthcare, the need for smart hospitals is unequivocal. At Technosive, we understand that optimized healthcare systems are not only vital",
    image: blogImg1,
    author: {
      name: "Samual Joshi",
      image: blogAuthorImg1,
      designation: "Software Developer",
    },
    tags: ["Healthcare"],
    publishDate: "10/01/2024",
  },
].map((item, index) => ({ id: index + 1, ...item }));

export default blogData;
