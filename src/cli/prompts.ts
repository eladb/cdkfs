import { ProjectType } from "../inventory";

export interface ProjectTypePromptOptions {
  name: string;
  types: ProjectType[];
}

export function ProjectTypePrompt(options: ProjectTypePromptOptions) {
  return {
    type: "select",
    choices: options.types.map((t) => ({
      name: t.pjid,
      hint: t.typename,
    })),
    name: "pjid",
    message: "Select the project type to use",
  };
}
