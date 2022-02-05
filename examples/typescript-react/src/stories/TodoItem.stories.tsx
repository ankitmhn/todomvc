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
	decorators: [
		(Story) => (
			<section className="todoapp">
				<div>
					<section className="main">
						<ul className="todo-list">
							<Story />
						</ul>
					</section>
				</div>
			</section>
		),
	],
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => (
	<TodoItem {...args} />
);

export const Active = Template.bind({});
Active.args = {};

export const Completed = Template.bind({});
Completed.args = {
	editing: false,
	todo: {
		completed: true,
		id: "123",
		title: "My completed todo",
	},
};

export const WithTags = Template.bind({});
WithTags.args = {
	editing: false,
	todo: {
		completed: false,
		id: "123",
		title: "Todo title @tag1 @tag2",
	},
};

export const CompletedWithTags = Template.bind({});
CompletedWithTags.args = {
	editing: false,
	todo: {
		completed: true,
		id: "123",
		title: "Todo title @tag1 @tag2",
	},
};
