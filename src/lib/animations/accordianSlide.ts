export type AccordianSlideAnimationParameters = {
    isOpen: boolean,
    duration?: number,
}

export function accordianSlide(node: HTMLElement, { isOpen, duration = 500 }: AccordianSlideAnimationParameters) {
    // Initialise
    const initialHeight: number = node.offsetHeight;
    node.style.height = isOpen ? 'auto' : '0';
    node.style.overflow = 'hidden';

    const animation: Animation = node.animate([
        {
            height: 0,
        }, {
            height: `${initialHeight}px`
        }
    ], {
        duration: duration,
        fill: 'both',
        direction: isOpen ? 'reverse' : 'normal'
    });

    animation.pause();

    animation.onfinish = ({ currentTime }) => {
        if (!currentTime) {
            animation.reverse();
            animation.pause();
        }

        node.dispatchEvent(new CustomEvent('animationEnd'));
    } 

    return {
        update: () => {
            animation.currentTime ? animation.reverse() : animation.play();
        }
    }
}