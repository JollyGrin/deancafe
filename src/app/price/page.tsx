"use client";
import Link from "next/link";
import {
  CalendarClock,
  MessageCircle,
  PaintBucket,
  CreditCard,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function Price() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl space-y-12">
        <div className="flex items-center justify-center relative">
          <Link href="/">
            <button className="absolute left-0 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-center text-gray-800">
            How much?
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Read Only Website */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Read Only</h2>
            <div className="text-3xl font-bold mb-6 text-blue-600">€800</div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Perfect for showcasing your business to the world
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Your content stays the same until you want changes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Great for menus, business hours, and contact information
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Like a digital business card that is always available
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Perfect for small businesses and restaurants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Changes made by contacting us</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Users Write Website */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Users Write
            </h2>
            <div className="text-3xl font-bold mb-6 text-blue-600">
              Contact us
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                For websites where you and your users actively participate
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Your customers can create accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Users can leave reviews and comments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>You can update content yourself anytime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Online booking and reservation system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Custom features based on your needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Ready to start?
          </h2>
          <p className="text-gray-600 mb-6">
            Let&apos;s discuss your project in a quick call
          </p>
          <button
            onClick={() => window.open("#", "_blank")} // Calendly link will go here
            className="bg-blue-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors mx-auto"
          >
            Schedule a 15 min call
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Journey Section */}
        <div className="grid sm:grid-cols-2 gap-8 relative">
          {/* Metro Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 sm:left-1/2" />

          {/* Left Column */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                <CalendarClock className="w-8 h-8 text-white" />
              </div>
              <div className="flex-grow bg-white rounded-xl shadow-md p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Schedule call and discuss concept
                </h3>
                <p className="text-gray-600 text-sm">
                  Quick 15-minute chat to understand your vision
                </p>
                <span className="text-blue-600 text-sm mt-1 block">Free</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                <PaintBucket className="w-8 h-8 text-white" />
              </div>
              <div className="flex-grow bg-white rounded-xl shadow-md p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Design iterations
                </h3>
                <p className="text-gray-600 text-sm">
                  Collaborate via chat to perfect your design
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 sm:mt-16">
            {/* Step 2 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-grow bg-white rounded-xl shadow-md p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Exchange contacts & receive memo
                </h3>
                <p className="text-gray-600 text-sm">
                  Get a detailed summary and package recommendation
                </p>
                <span className="text-blue-600 text-sm mt-1 block">Free</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div className="flex-grow bg-white rounded-xl shadow-md p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Invoice & delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  Receive your code or start your support package
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
