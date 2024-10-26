import { action } from '@storybook/addon-actions';
import { withActions } from '@storybook/addon-actions/decorator';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

const meta: Meta<ButtonComponent> = {
  title: 'StorybookComponent1',
  component: ButtonComponent,

  // argTypes: {
  //   buttonClicked: { action: 'buttonClicked' }, // This will log the action in Storybook
  // },
  
  decorators: [
    applicationConfig({
      providers: [NG_EVENT_PLUGINS]
    })
  ],
};


export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
    // //  This allows the action to be displayed in the panel
    // args: {
    // buttonClicked: action('onAction'), // Logs the action when triggered
    // } 
};
