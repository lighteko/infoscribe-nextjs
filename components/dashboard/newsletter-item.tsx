import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Newsletter {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  categories: string[];
}

interface NewsletterItemProps {
  newsletter: Newsletter;
}

export function NewsletterItem({ newsletter }: NewsletterItemProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold">{newsletter.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {newsletter.content}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-sm text-muted-foreground">
            {newsletter.timestamp}
          </span>
          <Button variant="link" size="sm">
            Read full newsletter
          </Button>
        </div>
      </div>
    </Card>
  );
}
