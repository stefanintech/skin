export default { title: "Skin/Button/Primary" };

export const textOnly = () =>
    '<button class="btn btn--primary">Button</button>';

export const iconAndText = () => `
<button type="button" class="btn btn--primary">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button type="button" class="btn btn--primary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const partiallyDisabled = () => `
<button type="button" class="btn btn--primary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const busy = () => `
<button class="btn btn--primary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;
