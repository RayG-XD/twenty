import { ElementType } from 'react';
import { StoryObj } from '@storybook/react';

import type {
  CatalogDimension,
  CatalogOptions,
} from './decorators/CatalogDecorator';

export type CatalogStory<
  StoryType extends StoryObj<ComponentType>,
  ComponentType extends ElementType,
> = {
  args?: StoryType['args'];
  argTypes?: StoryType['argTypes'];
  play?: StoryType['play'];
  render?: StoryType['render'];
  parameters: StoryType['parameters'] & {
    catalog: {
      dimensions: CatalogDimension<ComponentType>[];
      options?: CatalogOptions;
    };
  };
  decorators: StoryType['decorators'];
};
