import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d021f" }}>
      {/* Hero Section */}
      <HeroSection />


      {/* Features Section */}
     
<section id="features" className="py-20 bg-[#0d021f]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-[#e5dbff] mb-12">
      Everything you need to manage your finances
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuresData.map((feature, index) => (
        <Card
          key={index}
          className="p-6 bg-[#1a1126] text-[#e5dbff] rounded-xl shadow-lg 
                     transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <CardContent className="space-y-4 pt-4">
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
            <p className="text-center text-[#cbb2ff]">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* How It Works Section */}
      <section className="py-20" style={{ backgroundColor: "#0d021f" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#0d021f" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#e5dbff" }}>
          Take Charge of Your Financial Future Today!
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: "#e5dbff" }}>
          Join thousands who are taking control of their finances intelligently with WealthX.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
