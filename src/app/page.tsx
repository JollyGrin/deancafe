"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Undo,
  FileText,
  X,
  Euro,
  Wallet,
  Github,
  FileCode,
  ArrowRight,
  Menu,
} from "lucide-react";
import Link from "next/link";

interface Message {
  type: "client" | "designer";
  text: string;
  preview?: string;
  attachment?: {
    name: string;
    icon: "file" | "invoice";
  };
}

export default function Home() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const targetText = "Let's get in touch";
  const typingSpeed = 50; // milliseconds per character

  const invoiceDate = new Date().toLocaleDateString("en-NL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const websitePrice = 800;
  const domainPrice = 14.95;
  const vatRate = 0.21;
  const subtotal = websitePrice + domainPrice;
  const vatAmount = subtotal * vatRate;
  const total = subtotal + vatAmount;

  const conversation = [
    { type: "client" as const, text: "I need a website for my cafe" },
    {
      type: "designer" as const,
      text: "I've put together an initial design that captures the essence of your cafe. The layout emphasizes your brand while keeping the focus on the customer experience.",
      preview:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2847&q=80",
    },
    { type: "client" as const, text: "Make it pop more" },
    {
      type: "designer" as const,
      text: "I've enhanced the visual impact with some dynamic elements and stronger contrast. The new design really brings your content to the forefront.",
      preview:
        "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    },
    { type: "client" as const, text: "Can we make it feel more cozy?" },
    {
      type: "designer" as const,
      text: "I've reworked the design with a warmer color palette and added some intimate cafe scenes. This should create that welcoming atmosphere you're looking for.",
      preview:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2857&q=80",
    },
    {
      type: "client" as const,
      text: "I like this design a lot. Okay I'm attaching the content i need to be displayed",
      attachment: { name: "content.txt", icon: "file" },
    },
    {
      type: "designer" as const,
      text: "Great choice! I've integrated your content into the design. You can review the latest version here: preview.dean.cafe/8f3d9a2e-6b7c-4f5d-b8e1-9f8d2f3c4b5a",
    },
    {
      type: "client" as const,
      text: "this is perfect! Can you launch this with the domain name mysupercool.cafe? I just checked and doesn't seem like anyone is using it",
    },
    {
      type: "designer" as const,
      text: "I see it's available for $14.95, if you approve I'll purchase this and add to your invoice. I can then transfer the domain over to you once setup.",
    },
    {
      type: "client" as const,
      text: "let's do it!",
    },
    {
      type: "designer" as const,
      text: "Great! it's now deployed to mysupercool.cafe!",
      attachment: { name: "invoice.pdf", icon: "invoice" },
    },
  ] as const;

  const [messages, setMessages] = useState<Message[]>([conversation[0]]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const isRead = localStorage.getItem("isread") === "true";
    if (isRead || currentIndex >= conversation.length) {
      setCurrentIndex(conversation.length);
      setMessages([...conversation]);
      return;
    }

    const interval = setInterval(() => {
      if (currentIndex < conversation.length) {
        setMessages((prev) => [...prev, conversation[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        localStorage.setItem("isread", "true");
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputClick = () => {
    if (!isTyping && inputText !== targetText) {
      setIsTyping(true);
      setInputText("");
      let currentIndex = 0;

      const typeNextChar = () => {
        if (currentIndex < targetText.length) {
          setInputText(targetText.slice(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeNextChar, typingSpeed);
        } else {
          setIsTyping(false);
        }
      };

      typeNextChar();
    }
  };

  return (
    <>
      {/* Header - Hidden on mobile */}
      <div className="hidden sm:flex fixed top-0 left-0 right-0 justify-between items-center p-4 text-gray-800">
        <div className="font-semibold">dean.cafe</div>
        <div className="flex gap-3">
          <a
            href="https://github.com/dean-cafe"
            className="hover:text-gray-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            <FileCode className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden fixed top-0 right-0 p-4 z-50">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-gray-800 hover:text-gray-600 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="sm:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-40 animate-fade-in">
          <div className="p-4 space-y-4">
            <a
              href="/price"
              className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              About
            </a>
            <a
              href="#book-call"
              className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              Book Call
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4 sm:pt-16 sm:pb-16">
        <div className="w-full sm:max-w-md bg-white sm:rounded-3xl sm:shadow-xl overflow-hidden h-screen sm:h-auto">
          {/* Chat Header */}
          <div className="bg-gray-800 text-white p-4">
            <h1 className="text-lg font-semibold text-center">
              Talking to Dean
            </h1>
          </div>

          {/* Chat Messages */}
          <div
            ref={chatContainerRef}
            className="p-4 space-y-4 bg-[#F0F2F5] h-[calc(100vh-8rem)] sm:h-[500px] overflow-y-auto "
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex relative ${message.type === "client" ? "justify-end" : "justify-start"}`}
              >
                <button
                  className={`absolute right-4 top-[30%] bg-gray-200 rounded-full p-2 hover:bg-gray-300 ${conversation.length - 1 === index ? "block" : "hidden"}`}
                  onClick={() => {
                    localStorage.removeItem("isread");
                    setMessages(...[[conversation[0]]]);
                    setCurrentIndex(1);
                  }}
                >
                  <Undo />
                </button>
                <div className={`space-y-2 max-w-[80%] animate-fade-in`}>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.type === "client"
                        ? "bg-blue-500 text-white rounded-tr-sm"
                        : "bg-white text-gray-800 rounded-tl-sm"
                    }`}
                  >
                    <p>{message.text}</p>
                    {message.attachment && (
                      <div
                        onClick={() =>
                          message.attachment?.name === "invoice.pdf" &&
                          setShowInvoice(true)
                        }
                        className="mt-2 flex items-center gap-2 p-2 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                      >
                        <FileText className="w-4 h-4 text-white" />
                        <span className="text-sm text-white">
                          {message.attachment.name}
                        </span>
                      </div>
                    )}
                  </div>
                  {message.preview && (
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={message.preview}
                        alt="Website preview"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t bg-white">
            <div
              onClick={handleInputClick}
              className="bg-gray-100 rounded-full px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <span
                className={`${inputText ? "text-gray-800" : "text-gray-400"}`}
              >
                {inputText || "Message..."}
              </span>
              {inputText === targetText && (
                <Link href="/price">
                  <ArrowRight className="w-5 h-5 text-blue-500 animate-fade-in cursor-pointer" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Hidden on mobile */}
      <div className="hidden sm:block fixed bottom-0 left-0 right-0 p-4 text-gray-600 text-sm">
        <div>Registered in Amsterdam, Netherlands 🇳🇱 · KvK: 87654321</div>
      </div>

      {/* Invoice Modal */}
      {showInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Invoice</h2>
                  <p className="text-gray-600">{invoiceDate}</p>
                  <p className="text-gray-600">Invoice #: INV-2024-001</p>
                </div>
                <button
                  onClick={() => setShowInvoice(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Company Details */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">From</h3>
                  <p className="text-gray-600">dean.cafe</p>
                  <p className="text-gray-600">Amsterdam, Netherlands</p>
                  <p className="text-gray-600">VAT: NL123456789B01</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Bill To</h3>
                  <p className="text-gray-600">mysupercool.cafe</p>
                </div>
              </div>

              {/* Invoice Items */}
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                        Description
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">
                        Website Design & Development
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-800 text-right">
                        €{websitePrice.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">
                        Domain Registration (mysupercool.cafe)
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-800 text-right">
                        €{domainPrice.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-600">
                        Subtotal
                      </td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-600 text-right">
                        €{subtotal.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-600">
                        VAT (21%)
                      </td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-600 text-right">
                        €{vatAmount.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 text-base font-bold text-gray-800">
                        Total
                      </td>
                      <td className="px-4 py-3 text-base font-bold text-gray-800 text-right">
                        €{total.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Payment Methods</h3>

                {/* SEPA Transfer */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Euro className="w-5 h-5 text-gray-600" />
                    <h4 className="font-semibold text-gray-800">
                      SEPA Bank Transfer
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p className="text-gray-600">IBAN:</p>
                    <p className="text-gray-800">NL91 ABNA 0417 1643 00</p>
                    <p className="text-gray-600">BIC:</p>
                    <p className="text-gray-800">ABNANL2A</p>
                    <p className="text-gray-600">Reference:</p>
                    <p className="text-gray-800">INV-2024-001</p>
                  </div>
                </div>

                {/* Crypto */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet className="w-5 h-5 text-gray-600" />
                    <h4 className="font-semibold text-gray-800">
                      Crypto (USDC)
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">Ethereum (ERC20):</p>
                      <p className="text-gray-800 break-all">
                        0x742d35Cc6634C0532925a3b844Bc454e4438f44e
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Solana:</p>
                      <p className="text-gray-800 break-all">
                        5KKsT3UbKdHZBQzpNGJxJFqzMBHJzwHfdpYRyEsqjX6d
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="text-sm text-gray-600">
                <p>
                  Payment is due within 14 days. Please include the invoice
                  number in your payment reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
