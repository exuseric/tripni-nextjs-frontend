import { ReactNode, useMemo, CSSProperties } from 'react';

type BlurDirection = 'top' | 'bottom' | 'left' | 'right';

type BlurProps = {
    children?: ReactNode;
    height?: string;
    width?: string;
    direction?: BlurDirection;
    className?: string;
    /** Max blur intensity in px at the opaque end */
    intensity?: number;
    /** Number of layered blur steps — more = smoother */
    layers?: number;
    /** Fallback background color when backdrop-filter is unsupported */
    fallbackColor?: string;
    style?: CSSProperties;
}

const POSITION_CLASSES: Record<BlurDirection, string> = {
    bottom: 'bottom-0 left-0 w-full',
    top: 'top-0 left-0 w-full',
    left: 'left-0 top-0 h-full',
    right: 'right-0 top-0 h-full',
};

const GRADIENT_AXIS: Record<BlurDirection, string> = {
    bottom: 'to bottom',
    top: 'to top',
    left: 'to left',
    right: 'to right',
};

export const SmoothBlur = ({
    children,
    height = '60%',
    width,
    direction = 'bottom',
    className = '',
    intensity = 12,
    layers = 8,
    fallbackColor = 'rgba(255,255,255,0.72)',
    style,
}: BlurProps) => {
    const axis = GRADIENT_AXIS[direction];
    const positionClass = POSITION_CLASSES[direction];

    // Determine the dimension prop based on direction
    const sizeStyle: CSSProperties = useMemo(() => {
        if (width) return { width };
        if (direction === 'left' || direction === 'right') return { width: height };
        return { height };
    }, [direction, height, width]);

    // Build layered blur divs: each covers a progressively smaller slice
    // of the gradient range, with a proportionally stronger blur.
    const blurLayers = useMemo(() => {
        return Array.from({ length: layers }, (_, i) => {
            const t = (i + 1) / layers; // 0 → 1, where 1 = fully opaque end
            const blur = t * intensity;

            // Each layer is only "active" in its slice of the gradient.
            // We shift the gradient window per layer so combined they smooth.
            const start = Math.max(0, (i / layers) * 100).toFixed(1);
            const end = Math.min(100, ((i + 2) / layers) * 100).toFixed(1);
            const mask = `linear-gradient(${axis}, transparent ${start}%, black ${end}%)`;

            return (
                <div
                    key={i}
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backdropFilter: `blur(${blur.toFixed(1)}px)`,
                        WebkitBackdropFilter: `blur(${blur.toFixed(1)}px)`,
                        maskImage: mask,
                        WebkitMaskImage: mask,
                        // Fallback: browsers that ignore backdrop-filter will show nothing;
                        // the wrapping @supports block handles that case via CSS.
                    }}
                />
            );
        });
    }, [layers, intensity, axis]);

    return (
        <div
            className={`absolute ${positionClass} overflow-hidden ${className}`}
            style={{ ...sizeStyle, ...style }}
        >
            {/* 
              * Fallback layer: visible only when backdrop-filter is unsupported.
              * Uses a gradient from transparent → fallbackColor to approximate
              * the blur fade without filter support.
              */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none supports-backdrop-filter:hidden bg-surface-container-high"
            />

            {/* Multi-layer blur stack — hidden when backdrop-filter unsupported */}
            <div
                aria-hidden="true"
                className="absolute inset-0 hidden supports-backdrop-filter:block"
            >
                {blurLayers}
            </div>

            {children && (
                <div className="relative z-10 h-full flex flex-col justify-end">
                    {children}
                </div>
            )}
        </div>
    );
};