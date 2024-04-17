"use client";
import React, { useEffect, useState } from "react";
import PropertyCard, {
  PropertyCardProps,
} from "@/components/card/propertyCard";
import { User } from "lucide-react";
import propertyData from "../propertyData";
import {
  Button,
  useDisclosure,
  Drawer,
  Input,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Nav";
import { useStore } from "../page";
import { motion } from "framer-motion";
import Image from "next/image";
const GridContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 gap-5 px-10 md:px-28 max-w-[1470px]">
        {children}
      </div>
    </div>
  );
};

const Property = () => {
  const { isTransparent, setIsTransparent } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // console.log("filterData", { filter });
  const initialLoad = 20;
  const loadMoreCount = 5;
  const [visibleCount, setVisibleCount] = useState(initialLoad);

  const loadMore = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + loadMoreCount);
  };
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.getElementById("hero-section")!.offsetHeight!;
      const navbar = document.querySelector(".navbar");
      if (navbar === null) return;
      if (window.scrollY > heroSectionHeight) {
        setIsTransparent(false);
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-[#ffffff]");
        navbar.classList.add("text-white");
      } else {
        setIsTransparent(true);
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-[#ffffff]");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen} mt={20}>
          Open
        </Button> */}
      <Navbar isTransparent={isTransparent} />

      <motion.div>
        <div
          id="hero-section"
          className="relative hero h-[55vh] w-full text-[#ffff]"
        >
          <Image
            alt="YOYO"
            src="/t.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover h-full transition-opacity duration-500 ease-in-out "
          />
          <div
            className="hero-overlay bg-blend-lighten bg-[
            #000
          
            
          ] opacity-70 "
          ></div>
          <div className="hero-content text-5xl text-center">Property</div>
        </div>
      </motion.div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Navbar isTransparent={isTransparent} />
      <GridContainer>
        <>
          {propertyData.slice(0, visibleCount).map((config, key) => (
            <PropertyCard key={key} {...config} />
          ))}
        </>
      </GridContainer>
      <div className="flex justify-center py-5">
        <Button
          onClick={loadMore}
          className="text-white bg-gray-800"
          variant="solid"
          size="lg"
        >
          Load More
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Property;
