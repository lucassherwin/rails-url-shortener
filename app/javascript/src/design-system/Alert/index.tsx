import React from "react";
import {
  Alert as UIAlert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

interface AlertProps {
  title?: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  type?: "info" | "success" | "error";
  className?: string;
}

const VARIANT_MAP: Record<
  NonNullable<AlertProps["type"]>,
  "default" | "destructive"
> = {
  info: "default",
  success: "default",
  error: "destructive",
};

const Alert = ({ title, description, action, type = "info", className }: AlertProps) => {
  return (
    <UIAlert variant={VARIANT_MAP[type]} className={className}>
      <InfoIcon />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{description}</AlertDescription>
      {action && (
        <AlertAction>
          <Button variant="outline" onClick={action.onClick}>
            {action.label}
          </Button>
        </AlertAction>
      )}
    </UIAlert>
  );
};

export default Alert;
