import { Directive, ElementRef, inject, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
    selector: '[scrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
    private element = inject(ElementRef);
    private observer: IntersectionObserver | null = null;

    @Input() scrollRevealDelay = '0s';
    @Input() scrollRevealDuration = '0.8s';
    @Input() scrollRevealDistance = '50px';
    @Input() scrollRevealDirection = 'bottom'; // 'bottom', 'top', 'left', 'right'

    ngOnInit() {
        this.setupStyles();
        this.setupObserver();
    }

    private setupStyles() {
        const el = this.element.nativeElement;
        el.style.opacity = '0';
        el.style.transition = `all ${this.scrollRevealDuration} cubic-bezier(0.5, 0, 0, 1) ${this.scrollRevealDelay}`;

        let transform = '';
        switch (this.scrollRevealDirection) {
            case 'bottom': transform = `translateY(${this.scrollRevealDistance})`; break;
            case 'top': transform = `translateY(-${this.scrollRevealDistance})`; break;
            case 'left': transform = `translateX(-${this.scrollRevealDistance})`; break;
            case 'right': transform = `translateX(${this.scrollRevealDistance})`; break;
        }
        el.style.transform = transform;
        el.style.willChange = 'opacity, transform';
    }

    private setupObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% of the element is visible
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = this.element.nativeElement;
                if (entry.isIntersecting) {
                    el.style.opacity = '1';
                    el.style.transform = 'translate(0, 0)';
                } else {
                    // Reset styles to their initial state so the animation can repeat
                    el.style.opacity = '0';

                    let transform = '';
                    switch (this.scrollRevealDirection) {
                        case 'bottom': transform = `translateY(${this.scrollRevealDistance})`; break;
                        case 'top': transform = `translateY(-${this.scrollRevealDistance})`; break;
                        case 'left': transform = `translateX(-${this.scrollRevealDistance})`; break;
                        case 'right': transform = `translateX(${this.scrollRevealDistance})`; break;
                    }
                    el.style.transform = transform;
                }
            });
        }, options);

        this.observer.observe(this.element.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
