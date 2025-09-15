'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Chat } from './chat';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-orange hover:bg-orange-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-pulse"
          >
            <Image
              src="/img/robot.png"
              alt="Chat Robot"
              width={40}
              height={40}
              className="w-10 h-10 mix-blend-multiply"
            />
          </button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="absolute bottom-0 right-0 mb-4 mr-4">
            <div className="relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-2 -right-2 bg-gray-500 hover:bg-gray-600 text-white p-1 rounded-full transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <Chat />
            </div>
          </div>
        )}
      </div>
    </>
  );
}