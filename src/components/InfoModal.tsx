import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const InfoModal = ({ isOpen, onClose, title, content }: InfoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="glass-modal relative max-w-lg w-full animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-cyber-gradient">{title}</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-white/10 p-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="text-muted-foreground leading-relaxed">
          {content}
        </div>
        
        <div className="mt-8 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-gradient-cyber border-0 hover:scale-105 transition-transform"
          >
            Понятно
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;