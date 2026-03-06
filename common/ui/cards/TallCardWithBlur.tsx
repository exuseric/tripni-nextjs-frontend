import { SmoothBlur } from '@/common/components/SmoothBlur';
import { ImageWidget } from '@/common/ui/ImageWidget';
import { ReactNode } from 'react';


export function TallCardWithBlur({ children, background }: { children: ReactNode, background: string }) {
    return (
        <div className="card h-[30rem] min-w-[330px] rounded-card-md bg-surface-container grid relative overflow-hidden">
            <ImageWidget src={background} width={1600} height={1600} className="inset-0 w-full h-full" />
            <SmoothBlur height="60%" intensity={20} direction='bottom' className='inset-x-0 bottom-0'>
                {children}
            </SmoothBlur>
        </div>
    );
};