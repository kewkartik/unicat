"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Community & Data!
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "IIT Delhi",
    designation: "Delhi, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710623671/colleges/images_f4whmy.jpg",
    badge: "Top college",
    href: "/"
  },
  {
    name: "Delhi Technological University",
    designation: "Delhi, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710623899/colleges/download_i2bgiv.jpg",
    badge: "Top college",
    href: "/"
  },
  {
    name: "Pune Institute of Computer Technology",
    designation: "Pune, India",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Good college",
  },
  {
    name: "Amity University Noida",
    designation: "Noida, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710624109/colleges/download_ttbomu.jpg",
    badge: "College",
  },
  {
    name: "K. J. Somaiya College of Engineering",
    designation: "Mumbai, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710624206/colleges/infrastructure1_dmvvys.jpg",
    badge: "Good college",
  },
  {
    name: "National Insitute of Technology, Sikkim",
    designation: "Sikkim, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710624337/colleges/download_u9cdwp.jpg",
    badge: "Top College",
  },
  {
    name: "MIT WPU",
    designation: "Pune, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710624388/colleges/download_o17jm3.jpg",
    badge: "College",
  },
  {
    name: "Netaji Subhas University of Technology",
    designation: "Delhi, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710624445/colleges/download_zaprfq.jpg",
  },
  {
    name: "Indian Institute of Technology, Guwahati",
    designation: "Guwahati, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710624590/colleges/download_ntrmmf.jpg",
    badge: "Something",
  },
  {
    name: "Symbiosis Institute of Technology",
    designation: "Pune, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710624807/colleges/download_fsc2ly.jpg",
  },
  {
    name: "IIT Delhi",
    designation: "Delhi, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710623671/colleges/images_f4whmy.jpg",
    badge: "Top college",
    href: "/"
  },
  {
    name: "Delhi Technological University",
    designation: "Delhi, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710623899/colleges/download_i2bgiv.jpg",
    badge: "Top college",
    href: "/"
  },
  {
    name: "Pune Institute of Computer Technology",
    designation: "Pune, India",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Good college",
  },
  {
    name: "Amity University Noida",
    designation: "Noida, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710624109/colleges/download_ttbomu.jpg",
    badge: "College",
  },
  {
    name: "K. J. Somaiya College of Engineering",
    designation: "Mumbai, India",
    image: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710624206/colleges/infrastructure1_dmvvys.jpg",
    badge: "Good college",
  },
];
