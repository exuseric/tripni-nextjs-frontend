"use client";
import React from "react";
import { Card, CardProps } from "./Card";
import { ImageWidget } from "@/common/ui/ImageWidget";
import { SmoothBlur } from "@/common/components/SmoothBlur";

// --- Normal Card ---
export interface NormalCardProps extends Omit<CardProps, "title"> {
  image?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}

export const NormalCard = ({ image, title, subtitle, description, actions, ...props }: NormalCardProps) => {
  return (
    <Card {...props}>
      {image && (
        <Card.Media>
          <ImageWidget src={image} width={800} height={600} className="w-full aspect-4/3 group-hover/card:scale-105 transition-transform duration-500" />
        </Card.Media>
      )}
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
      </Card.Header>
      <Card.Content>{description}</Card.Content>
      {actions && <Card.Actions>{actions}</Card.Actions>}
    </Card>
  );
};

// --- Horizontal Card ---
export interface HorizontalCardProps extends Omit<CardProps, "title"> {
  image?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
}

export const HorizontalCard = ({ image, title, subtitle, description, ...props }: HorizontalCardProps) => {
  return (
    <Card {...props} className="flex-row items-stretch h-32 md:h-40">
      {image && (
        <Card.Media className="w-24 md:w-40 h-full shrink-0">
          <ImageWidget src={image} width={400} height={400} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
        </Card.Media>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <Card.Header className="p-3 md:p-4 pb-1 md:pb-1">
          <Card.Title className="text-base md:text-lg truncate">{title}</Card.Title>
          {subtitle && <Card.Subtitle className="text-xs truncate">{subtitle}</Card.Subtitle>}
        </Card.Header>
        <Card.Content className="p-3 md:p-4 pt-1 md:pt-1 text-xs md:text-sm line-clamp-2 md:line-clamp-3 overflow-hidden">
          {description}
        </Card.Content>
      </div>
    </Card>
  );
};

// --- Tall Card (Material 3 Style with optional Blur) ---
export interface TallCardProps extends Omit<CardProps, "title"> {
  image: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  withBlur?: boolean;
}

export const TallCard = ({ image, title, subtitle, description, actions, withBlur = true, ...props }: TallCardProps) => {
  return (
    <Card {...props} className="h-[30rem] min-w-[330px]">
      <Card.Media className="absolute inset-0 h-full w-full">
        <ImageWidget src={image} width={1600} height={1600} className="w-full h-full group-hover/card:scale-110 transition-transform duration-1000 ease-emphasized" />
      </Card.Media>

      {withBlur ? (
        <SmoothBlur height="60%" intensity={20} direction="bottom" className="inset-x-0 bottom-0">
          <div className="translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 pb-4">
            <Card.Header className="pb-0" color="inverse">
              <Card.Title>{title}</Card.Title>
              {/* {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>} */}
              <Card.Subtitle color="inverse" className="opacity-80">{description}</Card.Subtitle>
            </Card.Header>

            <Card.Content className="pb-0!">
            </Card.Content>
            {actions && <Card.Actions color="inverse">{actions}</Card.Actions>}
          </div>
        </SmoothBlur>
      ) : (
        <div className="mt-auto relative z-10 bg-surface-container-high">
          <Card.Header>
            <Card.Title>{title}</Card.Title>
            {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
          </Card.Header>

          <Card.Content>
            {description}
          </Card.Content>
          {actions && <Card.Actions>{actions}</Card.Actions>}
        </div>
      )}
    </Card>
  );
};
