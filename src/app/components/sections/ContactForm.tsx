"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Image from "next/image";

type ContactFormProps = {
  variant?: "home" | "about";
};

export default function ContactForm({ variant = "home" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: "",
    });
  };

  const form = (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label htmlFor="name" className="block text-white mb-1 sm:mb-2 text-xs sm:text-sm">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-1 sm:mb-2 text-xs sm:text-sm">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-white mb-1 sm:mb-2 text-xs sm:text-sm">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="text-sm"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-white mb-1 sm:mb-2 text-xs sm:text-sm">
              Company
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className="text-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="budget" className="block text-white mb-1 sm:mb-2 text-xs sm:text-sm">
              Budget Range
            </label>
            <Input
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Your estimated budget"
              className="text-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-white mb-1 sm:mb-2 text-xs sm:text-sm">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              required
              className="text-sm min-h-[100px]"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-accent-pink to-accent-blue hover:opacity-90 transition-opacity text-sm sm:text-base py-2 sm:py-3"
        >
          Submit
        </Button>
      </form>
    </motion.div>
  );

  return (
    <section
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-deep-purple/50"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {variant === "home" && (
          <>
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
                Let&apos;s Build Something Extraordinary Together
              </h2>
              <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
                Ready to transform your business with cutting-edge metaverse and
                AI solutions? Get in touch with our team.
              </p>
            </motion.div>
            <div className="max-w-3xl mx-auto">{form}</div>
          </>
        )}

        {variant === "about" && (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-stretch">
            {/* Left: Paragraph and Form */}
            <div className="md:col-span-2 space-y-4 sm:space-y-6 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact us for more</h2>
              <p className="text-white/70 text-sm sm:text-base">
                Have questions about who we are or what we do? Drop us a
                line—we&apos;d love to connect with you!
              </p>
              <motion.p
                className="text-white/80 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Optional intro paragraph if needed */}
              </motion.p>
              {form}
            </div>

            {/* Right: Text + Image */}
            <div className="md:col-span-1 flex flex-col justify-between space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
              </motion.div>

              <div className="flex-1">
                <Image
                  src="/contact1.jpg"
                  alt="Team"
                  width={400}
                  height={800}
                  className="w-full h-full object-cover rounded-xl shadow-lg bg-center"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
