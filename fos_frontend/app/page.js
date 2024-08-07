import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Offers from "@/components/offers";
import Restaurents from "@/components/restaurents";
import About from "@/components/about";
import Bookings from "@/components/bookings";
import Testimonials from "@/components/testimonials";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <Restaurents />
      <About />
      <Bookings />
      <Testimonials />
     
    </>

  );
}
