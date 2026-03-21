import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'lc4i7t46',
    dataset: 'production',
  },
  deployment: {
    appId: 'kt7s9r5cj8qv80pv8h90ctid',
    autoUpdates: true,
  },
})
