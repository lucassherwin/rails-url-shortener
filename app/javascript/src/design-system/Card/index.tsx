import React from "react";
import {
  Card as UICard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "default";
  action?: {
    label: string;
    onClick: () => void;
  };
}

const Card = ({
  title,
  description,
  content,
  footer,
  action,
  size = "default",
}: CardProps) => {
  return (
    <UICard size={size}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {action && (
          <CardAction>
            <Button onClick={action.onClick}>{action.label}</Button>
          </CardAction>
        )}
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && (
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      )}
    </UICard>
  );
};

export default Card;
