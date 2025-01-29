import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  additionalImages?: string[];
  className?: string;
}

interface Comment {
  text: string;
  timestamp: Date;
}

export const ProjectCard = ({ title, description, image, additionalImages, className }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleClick = () => {
    if (additionalImages?.length) {
      setIsOpen(true);
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => prev + 1);
  };

  const handleAddComment = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (newComment.trim()) {
      setComments(prev => [...prev, { text: newComment, timestamp: new Date() }]);
      setNewComment("");
    }
  };

  const toggleComments = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowComments(!showComments);
  };

  const allImages = additionalImages ? [image, ...additionalImages] : [image];

  return (
    <>
      <div 
        className={cn("group relative aspect-square overflow-hidden cursor-pointer", className)}
        onClick={handleClick}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <h3 className="text-white font-playfair text-2xl mb-2">{title}</h3>
          <p className="text-white/80 font-inter">{description}</p>
          {additionalImages && (
            <p className="text-white/60 mt-2 text-sm">Click to view more images</p>
          )}
          <div className="flex items-center gap-4 mt-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-pink-400 transition-colors"
              onClick={handleLike}
            >
              <Heart className="w-5 h-5 mr-2" />
              {likes}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-blue-400 transition-colors"
              onClick={toggleComments}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {comments.length}
            </Button>
          </div>
          {showComments && (
            <div className="mt-4 space-y-2" onClick={e => e.stopPropagation()}>
              <div className="flex gap-2">
                <Input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="bg-white/10 text-white placeholder:text-white/50"
                />
                <Button onClick={handleAddComment} size="sm">Post</Button>
              </div>
              <div className="max-h-32 overflow-y-auto space-y-2">
                {comments.map((comment, index) => (
                  <div key={index} className="text-white/90 text-sm">
                    <p>{comment.text}</p>
                    <span className="text-xs text-white/60">
                      {comment.timestamp.toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {additionalImages && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-6">
              {allImages.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};