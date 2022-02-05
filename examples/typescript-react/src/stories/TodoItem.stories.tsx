import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TodoItem } from "../todoItem";

export default {
	title: "TODOMVC/Todo Item",
	component: TodoItem,
	args: {
		editing: false,
		todo: {
			completed: false,
			id: "123",
			title: "My todo",
		},
	},
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => (
	<TodoItem {...args} />
);

export const Active = Template.bind({});
Active.args = {};
