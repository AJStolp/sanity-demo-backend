import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import StudioNavBar from './components/studio-navbar'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Meloish',
  basePath: '/studio',

  studio: {
    components: {
      // layout: MyLayout,
      // logo: MyLogo,
      navbar: StudioNavBar,
      // toolMenu: MyToolMenu,
    },
  },

  projectId: 'qosix616',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
