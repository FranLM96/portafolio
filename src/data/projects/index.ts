import { Project } from '../../types/project';
import { brandingProject } from './branding';
import { marcasDesarrolladasProject } from './marcas-desarrolladas';
import { disenoWebProject } from './diseno-web';
import { marketingPublicidadProject } from './marketing-publicidad';
import { fotografiaVideoProject } from './fotografia-video';
import { modeladoRenderizado3dProject } from './modelado-renderizado-3d';

export const projects: Project[] = [
  brandingProject,
  marcasDesarrolladasProject,
  disenoWebProject,
  marketingPublicidadProject,
  fotografiaVideoProject,
  modeladoRenderizado3dProject,
];

export default projects;