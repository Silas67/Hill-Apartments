import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sidebarPosts } from "@/components/constants";
import img1 from "@/components/assets/Images/img23.jpg";

const Blog = () => {
  return (
    <div className="w-full px-6 py-12 px-[70px] max-sm:px-[30px]">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full items-start flex flex-col"
      >
        <p className="text-sm text-gray-500 mb-2">Blog</p>
        <h1 className="text-4xl  mb-6 font-sans">Recent Articles And News</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center items-center scale-[0.9] ">
        {/* Main Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.1,
          }}
          className=" space-y-4 lg:w-[90%]"
        >
          <div className="w-full h-64 relative">
            <Image
              src={img1} // Replace with real image
              alt="Main"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <h2 className="text-xl font-semibold">A Subtitle</h2>
          <p className="text-gray-600 text-sm line-clamp-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consequat justo non orci fermentum, nec efficitur orci hendrerit.
          </p>
          <p className="text-gray-600 text-sm line-clamp-4">
            More text here to simulate a paragraph about the blog content.
          </p>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="flex justify-center gap-[10px] all:pt-4 md:flex-col"
        >
          {sidebarPosts.map((post) => (
            <div
              key={post.id}
              className="flex gap-4 items-center justify-around all:flex-col md:flex-row"
            >
              <div className="w-full h-full relative rounded overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-sm">{post.title}</p>
                <p className="text-gray-600 text-sm line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consequat justo non orci fermentum, nec efficitur orci
                  hendrerit.
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
