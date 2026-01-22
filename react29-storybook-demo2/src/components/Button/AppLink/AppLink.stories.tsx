import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { AppLink } from "./AppLink";

const meta: Meta<typeof AppLink> = {
  title: "Components/AppLink",
  component: AppLink,
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Default: Story = {
  args: {
    href: "https://reactjs.org",
    label: "Learn React",
  },
};

export const OpenSameTab: Story = {
  args: {
    href: "https://reactjs.org",
    label: "Learn React (Same Tab)",
    target: "_self",
  },
};

export const CustomText: Story = {
  args: {
    href: "https://react.dev",
    label: "Go to React Docs",
  },
};
