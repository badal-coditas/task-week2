import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import CardComponent from './card.component';

export default {
  title: 'Example/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
});

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  card: {
    id: 3,
    email: 'badal@gmail.com',
    companyName: 'abc',
    quantity: 900,
    price: 1500,
    cardClass: 'Gold',
    imagePath: '../../../assets/third.png',
  },
};
