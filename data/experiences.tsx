'use client'
import * as stack from "./icons"

export const experiences: ExperiencesTypes = {
  PROJECT_MANAGER: {
    type: "CORPORATE_EXP",
    title: "EXP_PM_TITLE",
    yearFrom: 2022,
    yearTo: 2023,
    description: "EXP_PM",
    iconsTitle: "STACK_ROLE",
    stackIcons: [
      stack.iconNode,
      stack.iconReact,
      stack.iconLucid,
      stack.iconFigma,
      stack.iconPivotal,
    ]
  },
  QA_DESIGNER: {
    type: "CORPORATE_EXP",
    title: "EXP_DESIGNER_TITLE",
    yearFrom: 2022,
    yearTo: 2023,
    description: "EXP_DESIGN",
    iconsTitle: "STACK_ROLE",
    stackIcons: [
      stack.iconCypress,
      stack.iconJest,
      stack.iconNode,
      stack.iconReact,
      stack.iconFigma,
    ]
  },
  ENSAIOS3D: {
    type: "SELF_EXP",
    title: "EXP_ENSAIOS_TITLE",
    yearFrom: 2009,
    yearTo: 2020,
    description: "EXP_ENSAIOS",
    iconsTitle: "STACK_ROLE",
    stackIcons: [
      stack.icon3Dmax,
      stack.iconVray,
      stack.iconPS,
      stack.iconAE,
      stack.iconThreeJS,
      stack.iconJS,
    ]
  },
  DIGITAL_LIGHT: {
    type: "CORPORATE_EXP",
    title: "EXP_DIGITAL_TITLE",
    yearFrom: 2008,
    yearTo: 2009,
    description: "EXP_DIGITAL",
    iconsTitle: "STACK_ROLE",
    stackIcons: [
      stack.icon3Dmax,
      stack.iconVray,
      stack.iconPS,
    ]
  },
  PUC_CC: {
    type: "GRADUATION",
    title: "GRAD_CC",
    description: "PUC",
  },
  PUC_ARQ: {
    type: "GRADUATION",
    title: "GRAD_ARQ",
    description: "PUC",
  }
}