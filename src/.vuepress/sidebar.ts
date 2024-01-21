import { sidebar } from "vuepress-theme-hope";
import { notes } from './routes/notes.mts'
import { tools } from './routes/tools.mts'
import { resources } from './routes/resources.mjs'
import { contact } from './routes/contact.mts'

export default sidebar({
  '/resources/': resources,
});
