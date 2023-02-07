import { listenVariableIcon, setVariableIcon } from "react-shells/ant5/icons/reactions"
import { createUuid } from "react-shells/ant5/SettingsForm/components/ReactionsInput/ReactionsEditor/utils"
import { IReactionMaterial, ReactionType } from "runner/reaction"
import { ListenVariable } from "./ListenVariableReaction"
import { variableSchema } from "./schema"
import { SetVariable } from "./SetVariableReaction"

export const setVariableMaterial: IReactionMaterial = {
  name: "setVariable",
  icon: setVariableIcon,
  label: "$setVariable",
  reactionType: ReactionType.ControllerDefaultReaction,
  meta: {
    inPorts: [
      {
        id: createUuid(),
        name: "input",
        label: "",//"$startUp",
      },
    ],
  },
  schema: variableSchema,
  subTitle: (config?: any) => {
    return config?.variable
  },
  reaction: SetVariable,
}

export const listenVariableMaterial: IReactionMaterial = {
  name: "listenVariable",
  icon: listenVariableIcon,
  label: "$listenVariable",
  reactionType: ReactionType.ControllerDefaultReaction,
  meta: {
    outPorts: [
      {
        id: createUuid(),
        name: "output",
        label: "",//"$startUp",
      },
    ],
  },
  schema: variableSchema,
  subTitle: (config?: any) => {
    return config?.variable
  },
  reaction: ListenVariable,
}