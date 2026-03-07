"use client";
import React from "react";
import { ImageWidget } from "../ImageWidget";
import { CardProps, Card } from "./Card";


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
                <Card.Title level="h3">{title}</Card.Title>
                {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
            </Card.Header>
            <Card.Content>{description}</Card.Content>
            {actions && <Card.Actions>{actions}</Card.Actions>}
        </Card>
    );
};
