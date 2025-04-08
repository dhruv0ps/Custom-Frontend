import  React from "react";
import Logo from "../../src/assets/logo.png"


import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Lock, LogIn, UserPlus } from "lucide-react";
import { cn } from "../../lib/utils"

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonRoute: string;
  secondaryButtonText?: string;
  secondaryButtonRoute?: string;
}

const AuthDialog: React.FC<AuthDialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  primaryButtonText,
  primaryButtonRoute,
  secondaryButtonText,
  secondaryButtonRoute,
}) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    }
  }, [open]);

  const handleNavigate = (route: string) => {
    onOpenChange(false);
    setTimeout(() => {
      navigate(route);
    }, 100);
  };

  return (
    <div className="">
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md w-[90%] max-w-sm mx-auto rounded-lg border shadow-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-md">
            <Lock className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Logo || "/placeholder.svg"}
              alt="logo"
              className="h-10 w-auto"
              style={{
                objectFit: "contain",
                minWidth: "100px",
                maxWidth: "150px",
              }}
              onError={(e) => {
                console.error("Logo failed to load:", e);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>

          <DialogHeader className="pt-2 flex flex-col items-center">
            <DialogTitle className="text-xl font-bold text-center">
              {title}
            </DialogTitle>
            <DialogDescription className="text-center max-w-sm mx-auto pt-2">
              {description}
            </DialogDescription>
          </DialogHeader>

          <div
            className={cn(
              "space-y-4 py-4 transition-opacity duration-300",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-muted rounded-full"></div>
            </div>

            {/* <div className="px-2">
            <div className="bg-muted/50 p-4 rounded-lg text-sm text-center">
              Sign in to access exclusive member benefits and personalized
              features
            </div>
          </div> */}
          </div>

          <DialogFooter className="flex sm:flex-row gap-3 sm:justify-center">
            {secondaryButtonText && secondaryButtonRoute && (
              <Button
                variant="outline"
                size="lg"
                className="flex-1 sm:flex-initial gap-2 font-medium sm:p-5 p-3"
                onClick={() => handleNavigate(secondaryButtonRoute)}
              >
                <UserPlus className="h-4 w-4" />
                {secondaryButtonText}
              </Button>
            )}
            <Button
              size="lg"
              className="flex-1 sm:flex-initial gap-2 font-medium sm:p-5 p-3"
              onClick={() => handleNavigate(primaryButtonRoute)}
            >
              <LogIn className="h-4 w-4" />
              {primaryButtonText}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthDialog;
