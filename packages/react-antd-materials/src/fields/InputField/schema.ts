import { INodeSchema } from "@rxdrag/schema";
import { createSchema, SchemaOptions } from "@rxdrag/react-antd-shell";

const options: SchemaOptions = {
  propsSchemas: [
    {
      componentName: "FormItem",
      props: {
        label: "$label",
      },
      children: [
        {
          componentName: "Input",
          "x-field": {
            name: "label",
            withBind: true,
          },
        }
      ]
    },
  ],
  slotsSchemas: [
    {
      componentName: "FormItem",
      props: {
        label: "$input",
      },
      children: [
        {
          componentName: "SlotSwitch",
          props: {
            name: "input"
          }
        }
      ]
    },
  ]
}

export const fieldSchema: INodeSchema = createSchema(options)