import type { Meta, StoryObj } from '@storybook/react';

import Button from "../components/Button";

const meta = {
    component: Button,
    title: "Example/Button2",
    // tags: ['autodocs'],
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    },
} satisfies Meta<typeof Button>

export default meta;

export const Primary: StoryObj = {
    name: "Primary state"
}

export const Secondary: StoryObj = {
    name: "Secondary State"
}