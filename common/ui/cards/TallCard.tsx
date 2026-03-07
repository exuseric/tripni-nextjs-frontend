"use client";
import React from "react";
import { Card, CardProps } from "./Card";
import { ImageWidget } from "@/common/ui/ImageWidget";
import { SmoothBlur } from "@/common/components/SmoothBlur";

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
            {actions && !props.href && <Card.Actions color="inverse">{actions}</Card.Actions>}
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
          {actions && !props.href && <Card.Actions>{actions}</Card.Actions>}
        </div>
      )}
    </Card>
  );
};
