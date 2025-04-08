import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from 'lucide-react';

interface AvatarUploadProps {
  currentAvatar?: string;
  onAvatarChange: (file: File) => void;
}

export function AvatarUpload({ currentAvatar, onAvatarChange }: AvatarUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(currentAvatar);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreviewUrl(base64String); 
        onAvatarChange(file); 
      };
  
      reader.readAsDataURL(file); 
    }
  };  

  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="w-32 h-32">
        <AvatarImage src={previewUrl} alt="Profile picture" />
        <AvatarFallback>
          {currentAvatar ? '' : <Camera className="w-8 h-8" />}
        </AvatarFallback>
      </Avatar>
      <Button
        variant="outline"
        size="sm"
        className="relative overflow-hidden"
      >
        Change Photo
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </Button>
    </div>
  );
}
