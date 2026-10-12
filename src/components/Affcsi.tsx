import React, { useState, useEffect } from 'react';

// Lucide Icons
import {
  Calendar,
  Phone,
  ArrowRight,
  Clock,
  Settings,
  Monitor,
  Users,
  X,
  CheckCircle2,
  Trash2,
  Plus,
  Minus,
  RotateCcw,
  Coffee,
  Utensils,
  Receipt,
  User,
  ShoppingBag,
  Sparkles,
  ChevronRight,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

export default function App() {
  // Demo Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', restaurantType: 'Restaurant' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // POS Software Interactive State
  const [activeTab, setActiveTab] = useState('BOISSONS');
  const [receiptItems, setReceiptItems] = useState([
    { id: 1, name: '1 COCA COLA', price: 15.00, qty: 1 },
    { id: 2, name: '1 EAU MINERALE 1/2', price: 10.00, qty: 1 },
    { id: 3, name: '1 EMINCE BOEUF', price: 110.00, qty: 1, note: '** BIEN CUIT **' },
    { id: 4, name: '1 LEGUME SAUTE', price: 0.00, qty: 1 },
    { id: 5, name: '1 PIZZA SICILIENNE', price: 50.00, qty: 1, note: 'sans champignon' },
  ]);
  const [keypadInput, setKeypadInput] = useState('');
  const [tableNumber, setTableNumber] = useState('TABLE 2 COUV. 2');

  // Compute Total
  const subtotal = receiptItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  // Handle adding product from POS grid
  const handleAddProduct = (productName, price) => {
    setReceiptItems(prev => {
      const existing = prev.find(item => item.name.includes(productName.toUpperCase()));
      if (existing) {
        return prev.map(item => 
          item.id === existing.id 
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, {
        id: Date.now(),
        name: `1 ${productName.toUpperCase()}`,
        price: price,
        qty: 1
      }];
    });
  };

  // Clear Receipt
  const handleClearReceipt = () => {
    setReceiptItems([]);
  };

  // Numpad click handler
  const handleKeypad = (val) => {
    if (val === 'C') {
      setKeypadInput('');
    } else {
      setKeypadInput(prev => prev + val);
    }
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">
      
      {/* Background Decorative Gradient Waves & Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Blue Curved Wave Top-Left */}
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-gradient-to-br from-sky-200/70 via-blue-100/50 to-transparent rounded-full blur-3xl" />
        
        {/* Soft Orange Glow Top-Right */}
        <div className="absolute -top-24 -right-24 w-[550px] h-[550px] bg-gradient-to-bl from-orange-300/40 via-amber-200/20 to-transparent rounded-full blur-2xl" />

        {/* Diagonal Soft Blue Backdrop */}
        <div className="absolute top-1/2 -right-40 w-[800px] h-[800px] bg-blue-50/80 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">

        {}
        <header className="flex items-center justify-between py-2 mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            {/* Custom Slanted Dual Chevron Logo */}
            <div className="flex gap-1.5 items-center">
              <div className="w-4 h-9 bg-gradient-to-b from-blue-600 to-blue-700 transform -skew-x-[18deg] rounded-sm shadow-sm" />
              <div className="w-4 h-9 bg-gradient-to-b from-sky-400 to-blue-500 transform -skew-x-[18deg] rounded-sm shadow-sm" />
            </div>

            {/* Logo Text & Subtitle */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-black tracking-wide text-slate-900 leading-none">
                ORALI <span className="text-blue-600">SYSTEMS</span>
              </h1>
              <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-500 uppercase mt-1">
                SOLUTIONS COMMERCE & RESTAURANT
              </span>
            </div>
          </div>

          {/* Quick Contact Header Pill */}
          <a 
            href="tel:+212500000000" 
            className="hidden sm:flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200/80 hover:border-blue-400 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>Support: +212 522 00 00 00</span>
          </a>
        </header>

        {}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* LEFT COLUMN: Headlines, Badge, CTAs */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Orange Dot Badge */}
            <div className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-100/80 px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                SOLUTION CHR
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Découvrez<br />
              notre solution<br />
              <span className="text-blue-600 relative inline-block">
                en action
                <span className="text-orange-500 inline-block font-black">.</span>
              </span>
            </h1>

            {/* Paragraph Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
              Demandez une démonstration personnalisée et découvrez comment notre solution peut simplifier la gestion de votre restaurant.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary Blue CTA */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-between gap-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 py-4 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white/20 rounded-full">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">Demander une démo</span>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Outline CTA */}
              <a
                href="#contact"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-between gap-4 bg-white border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-semibold px-6 py-4 rounded-full transition-all shadow-sm cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm md:text-base">Nous contacter</span>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 border-t border-slate-200/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Installation rapide</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Support 7j/7</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Sans engagement</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive POS Screen Mockup (3D Perspected & Fully Functional) */}
          <div className="lg:col-span-7 relative">
            
            {/* Soft Ambient Shadow behind screen */}
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl filter blur-2xl transform rotate-1 scale-95" />

            {/* Interactive Screen Device Wrapper with slight 3D perspective angle */}
            <div className="relative bg-slate-800 rounded-xl p-2.5 sm:p-3.5 shadow-2xl border-4 border-slate-700/80 transition-all duration-300 transform lg:perspective-1000 lg:rotate-y-[-4deg] lg:rotate-x-[2deg] hover:rotate-y-0 hover:rotate-x-0">
              
              {/* POS Terminal Screen Shell */}
              <div className="bg-slate-100 text-slate-900 rounded-lg overflow-hidden border border-slate-300 text-xs shadow-inner select-none">
                
                {/* 1. POS Top Bar */}
                <div className="bg-slate-200 border-b border-slate-300 px-3 py-1.5 flex items-center justify-between text-[11px] font-bold text-slate-700">
                  <div className="flex items-center gap-4">
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-300 font-mono tracking-wider">
                      000021
                    </span>
                    <span className="uppercase text-slate-800 font-extrabold">{tableNumber}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 tracking-wide font-mono">HICHAM</span>
                    <span className="bg-slate-300 text-slate-800 px-2 py-0.5 rounded text-[10px]">TARIF 1</span>
                    <span className="bg-slate-300 text-slate-800 px-2 py-0.5 rounded text-[10px]">AVEC TICK.</span>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-black px-2 py-0.5 rounded flex items-center justify-center transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. Middle Main Operational Area */}
                <div className="grid grid-cols-12 gap-1 p-1 bg-slate-300 min-h-[260px]">
                  
                  {/* NUMPAD (Left Column - 3 cols) */}
                  <div className="col-span-3 bg-slate-200 p-1 rounded border border-slate-300 flex flex-col justify-between gap-1">
                    <div className="bg-black text-green-400 font-mono text-right px-2 py-1 rounded text-sm min-h-[26px] flex items-center justify-end overflow-hidden">
                      {keypadInput || '0'}
                    </div>

                    <div className="grid grid-cols-3 gap-1">
                      {['7','8','9','4','5','6','1','2','3','0','00','.'].map((num) => (
                        <button
                          key={num}
                          onClick={() => handleKeypad(num)}
                          className="bg-black text-white hover:bg-slate-800 font-bold py-1.5 rounded text-xs active:bg-blue-600 transition-colors shadow-sm"
                        >
                          {num}
                        </button>
                      ))}
                      <button 
                        onClick={() => handleKeypad('C')}
                        className="bg-red-700 text-white font-bold py-1.5 rounded text-xs hover:bg-red-800"
                      >
                        C
                      </button>
                      <button 
                        onClick={() => handleKeypad('-')}
                        className="bg-black text-white font-bold py-1.5 rounded text-xs"
                      >
                        -
                      </button>
                      <button 
                        onClick={() => setKeypadInput('')}
                        className="bg-black text-white font-bold py-1.5 rounded text-xs"
                      >
                        ↵
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-1 pt-0.5">
                      <button className="bg-slate-100 hover:bg-white text-slate-800 font-bold py-1 rounded border text-[10px]">
                        +++
                      </button>
                      <button className="bg-slate-100 hover:bg-white text-slate-800 font-bold py-1 rounded border text-[10px]">
                        ---
                      </button>
                    </div>

                    <button 
                      onClick={handleClearReceipt}
                      className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-1 rounded text-[10px] tracking-wider uppercase"
                    >
                      RETOUR
                    </button>
                  </div>

                  {/* LIVE RECEIPT TICKET (Middle Column - 6 cols) */}
                  <div className="col-span-6 bg-slate-100 rounded border border-slate-300 p-2 flex flex-col justify-between font-mono text-[11px] shadow-inner">
                    
                    {/* Ticket Header */}
                    <div>
                      <div className="text-center font-bold text-slate-600 text-[10px] border-b pb-1 mb-1 border-slate-300">
                        07 SEP 2026 12:30
                      </div>

                      {/* Items List */}
                      <div className="space-y-1 max-h-[160px] overflow-y-auto pr-1 text-slate-800">
                        {receiptItems.length === 0 ? (
                          <div className="text-center text-slate-400 py-8 font-sans text-xs italic">
                            Aucun article sélectionné.<br />Cliquez sur les boissons en bas pour commander.
                          </div>
                        ) : (
                          receiptItems.map((item) => (
                            <div key={item.id} className="leading-tight">
                              <div className="flex justify-between items-baseline font-semibold">
                                <span className="truncate pr-1">{item.qty > 1 ? `${item.qty}x ` : ''}{item.name}</span>
                                <span>{(item.price * item.qty).toFixed(2)}</span>
                              </div>
                              {item.note && (
                                <div className="text-[9px] text-slate-500 pl-2 italic">
                                  {item.note}
                                </div>
                              )}
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Printer & Total Area */}
                    <div className="border-t border-slate-300 pt-1.5 mt-2">
                      <div className="flex items-center justify-between text-xs font-black text-slate-900 bg-slate-200 px-2 py-1 rounded">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Receipt className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-bold">S/TOTAL</span>
                        </div>
                        <span className="text-sm text-blue-700 font-mono">{subtotal.toFixed(2)} DH</span>
                      </div>
                    </div>

                  </div>

                  {/* ACTION BUTTONS (Right Column - 3 cols) */}
                  <div className="col-span-3 flex flex-col gap-1 text-[10px] font-bold">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded leading-tight text-center shadow">
                      TABLES OCCUPEES
                    </button>
                    
                    <button className="bg-red-600 hover:bg-red-700 text-white p-1.5 rounded text-center">
                      COMMANDE
                    </button>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded text-center">
                      NOTE
                    </button>

                    {/* Food Quick Serv Tile */}
                    <div className="bg-amber-300 p-1 rounded flex flex-col items-center justify-center text-slate-900 text-[9px] border border-amber-400">
                      <div className="w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center overflow-hidden mb-0.5 border border-amber-400">
                        <Utensils className="w-4 h-4 text-amber-700" />
                      </div>
                      <span className="font-extrabold">REST SERV</span>
                    </div>

                    {/* Coffee Bar Serv Tile */}
                    <div className="bg-sky-300 p-1 rounded flex flex-col items-center justify-center text-slate-900 text-[9px] border border-sky-400">
                      <div className="w-7 h-7 bg-sky-100 rounded-full flex items-center justify-center overflow-hidden mb-0.5 border border-sky-400">
                        <Coffee className="w-4 h-4 text-sky-800" />
                      </div>
                      <span className="font-extrabold">BAR SERV</span>
                    </div>

                    <button className="bg-emerald-800 hover:bg-emerald-900 text-white p-1.5 rounded text-center text-[9px]">
                      MESSAGE CUISINE
                    </button>

                    <button 
                      onClick={() => setReceiptItems(receiptItems.slice(0, -1))}
                      className="bg-red-500 hover:bg-red-600 text-white p-1 rounded text-center text-[9px]"
                    >
                      ANNUL LIGNE
                    </button>
                  </div>

                </div>

                {/* 3. Category & Mode Navigation Bar */}
                <div className="bg-sky-500 text-white font-bold grid grid-cols-6 gap-0.5 p-0.5 text-[10px] text-center">
                  <button className="bg-sky-600 p-1 flex items-center justify-center gap-1">
                    <Utensils className="w-3 h-3" />
                    <span>TABLE</span>
                  </button>
                  <button className="bg-sky-600 p-1 flex items-center justify-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>COUV.</span>
                  </button>
                  <button className="bg-sky-600 p-1 flex items-center justify-center gap-1">
                    <User className="w-3 h-3" />
                    <span>HICHAM</span>
                  </button>
                  <button className="bg-sky-600 p-1">COMPTE</button>
                  <button className="bg-sky-600 p-1">TARIF 1</button>
                  <button className="bg-sky-600 p-1">AVEC TICK.</button>
                </div>

                {/* 4. Product Grid (Bottom Section with Interactive Drink Badges) */}
                <div className="bg-slate-300 p-1.5 grid grid-cols-6 gap-1">
                  
                  {/* Coca Cola */}
                  <button 
                    onClick={() => handleAddProduct('COCA COLA', 15.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-6 h-8 bg-red-600 rounded-sm flex items-center justify-center text-[8px] font-black text-white shadow-sm mt-0.5">
                      COCA
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">COCA COLA <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">15</span></span>
                  </button>

                  {/* Fanta */}
                  <button 
                    onClick={() => handleAddProduct('FANTA', 15.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-6 h-8 bg-orange-500 rounded-sm flex items-center justify-center text-[8px] font-black text-white shadow-sm mt-0.5">
                      FANTA
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">FANTA <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">15</span></span>
                  </button>

                  {/* Sprite */}
                  <button 
                    onClick={() => handleAddProduct('SPRITE', 15.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-6 h-8 bg-green-600 rounded-sm flex items-center justify-center text-[8px] font-black text-white shadow-sm mt-0.5">
                      SPRITE
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">SPRITE <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">15</span></span>
                  </button>

                  {/* Schweppes */}
                  <button 
                    onClick={() => handleAddProduct('SCHWEPPES', 15.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-6 h-8 bg-amber-400 rounded-sm flex items-center justify-center text-[8px] font-black text-slate-900 shadow-sm mt-0.5">
                      SCHW
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">SCHWEPPES <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">15</span></span>
                  </button>

                  {/* Oulmes */}
                  <button 
                    onClick={() => handleAddProduct('OULMES 1/2', 12.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-4 h-8 bg-sky-100 border border-sky-300 rounded-full flex items-center justify-center text-[7px] font-bold text-sky-800 shadow-sm mt-0.5">
                      OULM
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">OULMES <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">12</span></span>
                  </button>

                  {/* Eau Minerale */}
                  <button 
                    onClick={() => handleAddProduct('EAU MINERALE 1/2', 10.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-4 h-8 bg-blue-100 border border-blue-300 rounded-full flex items-center justify-center text-[7px] font-bold text-blue-800 shadow-sm mt-0.5">
                      EAU
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">EAU MIN. <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">10</span></span>
                  </button>

                  {/* Coca Light */}
                  <button 
                    onClick={() => handleAddProduct('COCA LIGHT', 15.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-6 h-8 bg-slate-800 rounded-sm flex items-center justify-center text-[7px] font-black text-white shadow-sm mt-0.5">
                      LIGHT
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">COCA LIGHT <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">15</span></span>
                  </button>

                  {/* Poms */}
                  <button 
                    onClick={() => handleAddProduct('POMS', 15.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-6 h-8 bg-emerald-600 rounded-sm flex items-center justify-center text-[8px] font-black text-white shadow-sm mt-0.5">
                      POMS
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">POMS <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">15</span></span>
                  </button>

                  {/* Hawai */}
                  <button 
                    onClick={() => handleAddProduct('HAWAI', 15.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-6 h-8 bg-yellow-400 rounded-sm flex items-center justify-center text-[8px] font-black text-slate-900 shadow-sm mt-0.5">
                      HAWAI
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">HAWAI <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">15</span></span>
                  </button>

                  {/* Soda Canette */}
                  <button 
                    onClick={() => handleAddProduct('SODA CANETTE', 15.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-5 h-8 bg-slate-900 rounded-sm flex items-center justify-center text-[7px] font-black text-amber-400 shadow-sm mt-0.5">
                      SODA
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">SODA CAN. <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">15</span></span>
                  </button>

                  {/* Oulmes 3 */}
                  <button 
                    onClick={() => handleAddProduct('OULMES 1L', 20.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-4 h-8 bg-sky-200 border border-sky-400 rounded-full flex items-center justify-center text-[7px] font-bold text-sky-900 shadow-sm mt-0.5">
                      1L
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">OULMES 1L <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">20</span></span>
                  </button>

                  {/* Red Bull */}
                  <button 
                    onClick={() => handleAddProduct('RED BULL', 35.00)}
                    className="bg-sky-400 hover:bg-sky-500 text-white p-1 rounded flex flex-col items-center justify-between h-16 border border-sky-500 active:scale-95 transition-transform"
                  >
                    <div className="w-5 h-8 bg-blue-900 border border-yellow-400 rounded-sm flex items-center justify-center text-[7px] font-black text-red-500 shadow-sm mt-0.5">
                      BULL
                    </div>
                    <span className="text-[9px] font-black leading-tight text-center truncate w-full">RED BULL <span className="bg-emerald-500 text-white px-0.5 rounded text-[8px]">35</span></span>
                  </button>

                </div>

              </div>

              {/* Interactive Help Hint overlay on POS */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-900/90 text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-lg border border-slate-700 flex items-center gap-1.5 backdrop-blur-sm pointer-events-none">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span>Simulation interactive : Cliquez sur les boissons pour tester la caisse !</span>
              </div>

            </div>

          </div>

        </main>

        {}
        <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-8">
          
          {/* Card 1: Clock */}
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
              Une présentation adaptée à votre activité
            </p>
          </div>

          {/* Card 2: Settings / Gear */}
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Settings className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
              Des conseils personnalisés selon vos besoins
            </p>
          </div>

          {/* Card 3: Screen / Monitor */}
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Monitor className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
              Une démonstration de notre logiciel en direct
            </p>
          </div>

          {/* Card 4: Users / Experts */}
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
              Un accompagnement par nos experts
            </p>
          </div>

        </footer>

      </div>

      {}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative border border-slate-100">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Demande envoyée !</h3>
                <p className="text-sm text-slate-600">
                  Merci ! Un conseiller Orali Systems vous contactera très rapidement pour votre démonstration personnalisée.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Démonstration Gratuite</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Planifier votre démo
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Remplissez ce formulaire et découvrez la solution adaptée à votre établissement.
                </p>

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Karim Benjelloun"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: 06 00 00 00 00"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Type d'établissement</label>
                    <select
                      value={formData.restaurantType}
                      onChange={(e) => setFormData({ ...formData, restaurantType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all bg-white"
                    >
                      <option value="Restaurant">Restaurant Gastronomique / Traditionnel</option>
                      <option value="Fast Food">Fast-Food / Snacking</option>
                      <option value="Café">Café / Lounge</option>
                      <option value="Boulangerie">Boulangerie / Pâtisserie</option>
                      <option value="Autre">Autre Commerce</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md shadow-blue-500/20 text-sm flex items-center justify-center gap-2"
                  >
                    <span>Valider ma demande</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}