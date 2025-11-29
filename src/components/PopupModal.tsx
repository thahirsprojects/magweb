import { useEffect, useState } from 'react';
import { X, MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';

interface PopupModalProps {
  onNavigate: (page: string) => void;
}

export default function PopupModal({ onNavigate }: PopupModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
    handleClose();
  };

  const handleConsultationClick = () => {
    onNavigate('Contact');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 md:p-10 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:rotate-90 transform"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-[#2D5BFF]/10 p-4 rounded-2xl">
              <Calendar className="w-12 h-12 text-[#2D5BFF]" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Ready to Transform Your Team?
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Book a free consultation with our experts or connect with us instantly on WhatsApp. 
            Let's discuss how MAGRR can elevate your team's soft skills.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={handleConsultationClick}
              className="flex-1 bg-[#2D5BFF] hover:bg-[#1E40CC] text-white px-6 py-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(45,91,255,0.6)] transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              className="flex-1 bg-[#25D366] hover:bg-[#1EBE56] text-white px-6 py-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Dismiss text */}
          <p className="text-sm text-gray-400 pt-2">
            Click outside to dismiss
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
