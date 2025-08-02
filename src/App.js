import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Hammer } from "lucide-react";

export default function GlassInstallationCompany() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-12">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Crystal Clear Glass</h1>
        <p className="text-lg text-gray-600">Precision Glass Installation for Homes & Businesses</p>
      </header>

      {/* Services Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-xl">
          <CardContent className="p-6 space-y-4">
            <Hammer className="text-blue-500 w-8 h-8" />
            <h2 className="text-xl font-semibold">Residential Glass</h2>
            <p>Window replacements, shower enclosures, mirrors, and custom solutions for your home.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="p-6 space-y-4">
            <Hammer className="text-blue-500 w-8 h-8" />
            <h2 className="text-xl font-semibold">Commercial Installations</h2>
            <p>Storefront glass, office partitions, security glass, and more tailored to your business needs.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="p-6 space-y-4">
            <Hammer className="text-blue-500 w-8 h-8" />
            <h2 className="text-xl font-semibold">Emergency Repairs</h2>
            <p>24/7 emergency glass repair and replacement with fast response time and professional care.</p>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
        <p className="text-gray-700">
          With over 15 years of experience, Crystal Clear Glass provides top-quality installation,
          outstanding customer service, and unbeatable prices. We’re fully licensed, insured, and
          dedicated to making your glass project crystal clear.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 p-6 rounded-2xl shadow-md text-center space-y-4">
        <h2 className="text-2xl font-bold">Get a Free Estimate</h2>
        <p>Reach out to our team to discuss your glass installation needs today.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
            <Phone className="w-4 h-4" /> Call Us: (555) 123-4567
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
            <Mail className="w-4 h-4" /> Email: contact@crystalglass.com
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm pt-10">
        &copy; 2025 Crystal Clear Glass. All rights reserved.
      </footer>
    </div>
  );
}

