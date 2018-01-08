import Vue, { ComponentOptions, PropOptions } from 'vue'

import {
  RuntimeComponentOptions
} from './types/VueRuntime'

import getPropsInfoList from './getPropsInfoList'
import parseStoryComponent from './parseStoryComponent'

// Since addon's component is compiled by vueify,
// tsc cannot resolve module at compile-time.
const InfoView = require('./components/InfoView')

/**
 * Shows Vue component's information.
 *
 * @example
 * storiesOf('My Vue component')
 *   .addDecorator(VueInfoAddon)
 *   .add('default', () => ({
 *     components: { MyAwesomeComponent },
 *     template: '<my-awesome-component :value="0"/>'
 *   }))
 */
const VueInfoAddon = (storyFn: () => RuntimeComponentOptions) => {
  const story = storyFn()

  const componentInfo = parseStoryComponent(story)

  const propsList = getPropsInfoList(componentInfo.component, story)

  return {
    render(h) {
      return h(InfoView, {
        props: {
          name: componentInfo.name,
          template: story.template,
          propsList,
          story: story
        },
        scopedSlots: {
          default: () => [h(story)]
        }
      })
    }
  } as ComponentOptions<Vue>
}

export default VueInfoAddon
