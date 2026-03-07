"use client";
import React from "react";
import { ImageWidget } from "../ImageWidget";
import { CardProps, Card } from "./Card";

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
