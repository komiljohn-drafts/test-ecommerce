import Image from "next/image";
import Link from "next/link";
import React from "react";

import FooterInput from "./FooterInput";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 pb-[124px]">
      <div className="container px-4 mx-auto flex justify-between">
        <div className="flex flex-col">
          <Link href="/" className="mb-6 text-2xl leading-6 font-semibold">
            Exclusive
          </Link>
          <h4 className="text-xl font-medium mb-6">Subscribe</h4>
          <p className="mb-4">Get 10% off your first order</p>
          <FooterInput />
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-medium mb-6">Support</h4>
          <div className="flex flex-col gap-4">
            <p className="max-w-[175px]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-medium mb-6">Account</h4>
          <div className="flex flex-col gap-4">
            <Link href="/">My Account</Link>
            <Link href="/">Login / Register</Link>
            <Link href="/">Cart</Link>
            <Link href="/">Wishlist</Link>
            <Link href="/">Shop</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-medium mb-6">Quick Link</h4>
          <div className="flex flex-col gap-4">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms Of Use</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Shop</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-medium mb-6">Download App</h4>
          <p className="text-xs leading-[18px] mb-2.5 text-bgSecondary">Save $3 with App New User Only</p>
          <div className="flex gap-[11px] items-center mb-6">
            <Image src={"/images/qr-code.png"} width={80} height={80} alt="app qr code" />
            <div className="flex flex-col gap-2">
              <Image src={"/images/google-play.png"} width={104} height={30} alt="google play" />
              <Image src={"/images/app-store.png"} width={104} height={30} alt="app store" />
            </div>
          </div>
          <div className="flex gap-6">
            <Image src={"/icons/facebook.svg"} width={24} height={24} alt="facebook" />
            <Image src={"/icons/twitter.svg"} width={24} height={24} alt="twitter" />
            <Image src={"/icons/instagram.svg"} width={24} height={24} alt="instagram" />
            <Image src={"/icons/linked-in.svg"} width={24} height={24} alt="linked in" />
          </div>
        </div>
      </div>
    </footer>
  );
}
