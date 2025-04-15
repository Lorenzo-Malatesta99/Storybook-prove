import React from "react";
import Card from "./card.jsx";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  content: "This is a card component.",
};