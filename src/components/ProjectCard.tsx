
import { cn } from "@/lib/utils";
import { useState, memo, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  additionalImages?: string[];
  className?: string;
  children?: React.ReactNode;
}

interface Comment {
  text: string;
  timestamp: Date;
}

// Memoized Image component for better performance
const LazyImage = memo(({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={className}
  />
));
LazyImage.displayName = 'LazyImage';

export const ProjectCard = ({ title, description, image, additionalImages, className, children }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleClick = useCallback(() => {
    if (additionalImages?.length) {
      setIsOpen(true);
    }
  }, [additionalImages]);

  const handleLike = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => prev + 1);
  }, []);

  const handleAddComment = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (newComment.trim()) {
      setComments(prev => [...prev, { text: newComment, timestamp: new Date() }]);
      setNewComment("");
    }
  }, [newComment]);

  const toggleComments = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowComments(!showComments);
  }, []);

  const allImages = additionalImages ? [image, ...additionalImages] : [image];

  return (
    <>
      <div 
        className={cn("group relative w-96 h-96 overflow-hidden cursor-pointer rounded-lg", className)}
        onClick={handleClick}
      >
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <h3 className="text-white font-playfair text-2xl mb-3">{title}</h3>
          <p className="text-white/80 font-inter text-base line-clamp-3">{description}</p>
          {additionalImages && (
            <p className="text-white/60 mt-2 text-sm">Click to view more images</p>
          )}
          <div className="flex items-center gap-4 mt-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-pink-400 transition-colors p-2 h-auto"
              onClick={handleLike}
            >
              <Heart className="w-5 h-5 mr-2" />
              {likes}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-blue-400 transition-colors p-2 h-auto"
              onClick={toggleComments}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {comments.length}
            </Button>
          </div>
          {showComments && (
            <div className="mt-3 space-y-2" onClick={e => e.stopPropagation()}>
              <div className="flex gap-2">
                <Input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="bg-white/10 text-white placeholder:text-white/50 text-sm h-9"
                />
                <Button onClick={handleAddComment} size="sm" className="h-9">Post</Button>
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
        {children}
      </div>

      {additionalImages && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0">
            <Carousel className="w-full relative">
              <CarouselContent>
                {allImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center p-1">
                      <LazyImage
                        src={img}
                        alt={`${title} - Image ${index + 1}`}
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-4">
                <div className="pointer-events-auto">
                  <CarouselPrevious className="relative left-0 top-0 translate-y-0 opacity-70 hover:opacity-100" />
                </div>
                <div className="pointer-events-auto">
                  <CarouselNext className="relative right-0 top-0 translate-y-0 opacity-70 hover:opacity-100" />
                </div>
              </div>
            </Carousel>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
